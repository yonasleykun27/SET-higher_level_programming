const assert = require('assert');
const TaskQueueLegacy = require('./task_queue_legacy');
const {
  TaskQueue,
  TaskLogger,
  TaskScheduler
} = require('./task_queue_clean');

console.log('=== Running TaskQueue Quality Assurance Test Suite ===\n');

// -------------------------------------------------------------
// Test Suite 1: Demonstrating Legacy Behavior and Potential Pitfalls
// -------------------------------------------------------------
console.log('--- Test Suite 1: Legacy TaskQueue Scope / SRP Traps ---');

const legacyQueue = new TaskQueueLegacy('legacy-worker');

// Scenario 1: Low priority task (notify doesn't trigger console.warn)
legacyQueue.addTask(() => console.log('work'), 5);
assert.strictEqual(legacyQueue.tasks.length, 1);
assert.strictEqual(legacyQueue.isProcessing, true, 'Legacy queue auto-triggered processing inside addTask');
console.log('✓ Legacy addTask mixed queueing with scheduler start.');

// Scenario 2: High priority task triggers notify() which references unbound `name`
try {
  legacyQueue.addTask(() => console.log('urgent work'), 10);
  console.log('✓ Legacy high priority completed (if global name was present).');
} catch (err) {
  console.log('✓ Legacy raised expected scope error on unbound `name`:', err.message);
}

// -------------------------------------------------------------
// Test Suite 2: Refactored TaskQueue Clean Architecture & SRP
// -------------------------------------------------------------
console.log('\n--- Test Suite 2: Refactored TaskQueue Clean Architecture ---');

// 1. Pure TaskQueue operations
const logger = new TaskLogger();
const scheduler = new TaskScheduler();
const cleanQueue = new TaskQueue('worker-cluster-1', logger, scheduler);
assert.strictEqual(cleanQueue.tasks.length, 0);

// Invalid task rejection
cleanQueue.addTask('not a function');
assert.strictEqual(cleanQueue.tasks.length, 0, 'Invalid task should not be enqueued');

// Valid task addition
const dummyTask = () => 'processed';
cleanQueue.addTask(dummyTask, 12);
assert.strictEqual(cleanQueue.tasks.length, 1);
assert.strictEqual(cleanQueue.tasks[0].priority, 12);
assert.strictEqual(typeof cleanQueue.tasks[0].timestamp, 'number');
console.log('✓ Clean TaskQueue purely manages task data structure without side effects.');

// 2. TaskLogger validation
let warned = false;
const originalWarn = console.warn;
console.warn = (msg) => {
  warned = true;
  assert.ok(msg.includes('worker-cluster-1'), 'Logger must correctly include queueName');
  assert.ok(msg.includes('High priority'), 'Logger must report high priority');
};
logger.logHighPriority(12, cleanQueue.queueName);
console.warn = originalWarn;
assert.strictEqual(warned, true, 'TaskLogger successfully triggered');
console.log('✓ TaskLogger cleanly logs notifications without lexical scope traps.');

// 3. TaskScheduler validation
assert.strictEqual(cleanQueue.isProcessing, false);
scheduler.start(cleanQueue);
assert.strictEqual(cleanQueue.isProcessing, true);
console.log('✓ TaskScheduler triggers processing independently from task queueing.');

console.log('\n======================================================');
console.log('ALL VERIFICATION AND CRITIQUE CHECKS PASSED SUCCESSFULLY!');
console.log('======================================================');
