function Queen() {
  var nextTaskIndex = 0;
  var tasksPeriorities = [];
  //Private ------------------------------------------------------------------------------------------------------
  function assignTask(ant) {
    for (let task = 0; task < tasksPeriorities.length; task++) {
      var taskPeriority = tasksPeriorities[task];
    }
  }

  function countTasksType(taskLocation) {
    var num = 0;
    for (let i = 0; i < tasksPeriorities.length; i++) {
      if (tasksPeriorities[i] == taskLocation) {
        num++;
      }
    }
    return num;
  }

  function removeTask(taskLocation) {
    var index = 0;
    for (let i = 0; i < tasksPeriorities.length; i++) {
      if (tasksPeriorities[i] == taskLocation) {
        tasksPeriorities.splice(i, 1);
        return true; //remove Done
      }
    }
    return false; //rmove failed
  }
  //Global ------------------------------------------------------------------------------------------------------
  this.increasePeriority = function(taskLocation) {
    if (countTasksType(taskLocation) < 4) {
      tasksPeriorities.push(taskLocation);
    }
  };
  this.decreasePeriority = function(resource) {
    if (countTasksType(taskLocation) > 0) {
      removeTask(taskLocation);
    }
  };
  this.ImHere = function(Ant) {};
}
