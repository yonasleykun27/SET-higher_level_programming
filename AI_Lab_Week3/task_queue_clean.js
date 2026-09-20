class TaskLogger {
  logQueueStart(queueName) {
    console.log(`Starting queue ${queueName}.`);
  }

  logHighPriority(priority, queueName) {
    if (priority > 9) {
      console.warn(`High priority task added to ${queueName}.`);
    }
  }
}

class TaskScheduler {
  start(queue) {
    queue.isProcessing = true;
  }
}

class TaskQueue {
  constructor(name, logger, scheduler) {
    this.queueName = name;
    this.tasks = [];
    this.isProcessing = false;
    this.logger = logger || new TaskLogger();
    this.scheduler = scheduler || new TaskScheduler();
  }

  addTask(taskFn, priority) {
    if (!taskFn || typeof taskFn !== 'function') {
      return;
    }

    this.tasks.push({
      taskFn,
      priority,
      timestamp: Date.now()
    });
  }
}

module.exports = {
  TaskQueue,
  TaskLogger,
  TaskScheduler
};
