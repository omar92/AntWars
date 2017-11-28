function Queen() {
  var nextTaskIndex = 0;
  var tasksPeriorities = [];
  //Private ------------------------------------------------------------------------------------------------------
  function assignTask(ant) {
    var task = null;
    if (tasksPeriorities.length > 0) {
      task = tasksPeriorities[nextTaskIndex];
      nextTaskIndex = ++nextTaskIndex % tasksPeriorities.length;
    }

    ant.path = [];
    if (getLocationType(task) == LOCATION_TYPE.RESOURCE) {
      ant.path.push(LOCATIONS.STORE);
      ant.path.push(task);
      ant.getResources = false;
    } else if (getLocationType(task) == LOCATION_TYPE.BUILDING) {
      ant.path.push(task);
      ant.path.push(LOCATIONS.STORE);
      ant.getResources = true;
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
  this.decreasePeriority = function(taskLocation) {
    if (countTasksType(taskLocation) > 0) {
      removeTask(taskLocation);
    }
  };
  this.ImHere = function(Ant) {
    assignTask(Ant);
  };
}
