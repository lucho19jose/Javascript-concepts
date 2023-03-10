function createTaskPlanner() {
  let tasks = [];
  function addTask(task){
    task.completed = false;
    tasks.push(task);
  }

  function removeTask(value) {
    let index = null;
    if(typeof value == "number"){
      index = tasks.findIndex(task => task.id === value);
    }else{
      index = tasks.findIndex(task => task.name === value);
    }
    if(index > -1) {
      tasks.splice(index, 1);
    }
    return index;
  }

  function getTasks() {
    return tasks;
  }

  function getPendingTasks() {
    let pedingtasks = [];
    tasks.forEach(task => {
      if(task.completed == false) {
        pedingtasks.push(task);
      }
    });
    return pedingtasks;
  }

  function getCompletedTasks() {
    let completedTasks = [];
    tasks.forEach(task => {
      if(task.completed == true) {
        completedTasks.push(task);
      }
    });
    return completedTasks;
  }

  function markTaskAsCompleted(value) {
    if(typeof value == "number"){
      index = tasks.findIndex(task => task.id === value);
    }else{
      index = tasks.findIndex(task => task.name === value);
    }
    tasks[index].completed = true;
    return tasks[index];
  }

  function getSortedTasksByPriority() {
    let tasksbypriority = [];
    let priorities = [];
    for(let i=0; i<tasks.length; i++) {
      if(!priorities.includes(tasks[i].priority)){
        priorities.push(tasks[i].priority);
      }
    }

    priorities.sort().forEach(priority => {
      tasks.forEach(task => {
        if(task.priority === priority){
          tasksbypriority.push(task)
        }
      })
    });
    
    return tasksbypriority;
  }

  function filterTasksByTag(tag) {
    let taskbytag = [];
    tasks.forEach(task => {
      if(task.tags.includes(tag)){
        taskbytag.push(task);
      }
    });
    return taskbytag;
  }

  function updateTask(taskId, updates) {
    index = tasks.findIndex(task => task.id === taskId);
    tasks[index] = { ...tasks[index], ...updates }
    return tasks[index];
  }
  return {
    addTask,
    removeTask,
    getTasks,
    getPendingTasks,
    getCompletedTasks,
    markTaskAsCompleted,
    getSortedTasksByPriority,
    filterTasksByTag,
    updateTask
  }
}

const planner = createTaskPlanner();

planner.addTask({
    id: 1,
    name: "Comprar leche",
    priority: 1,
    tags: ["shopping", "home"]
});


planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
});

planner.markTaskAsCompleted("Llamar a Juan")
