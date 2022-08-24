const taskController = (function () {
    let tasks = [];

    function getTasks() {
        return tasks;
    }

    function createTask(title, description, priority, date) {
        let newTask = {title,description,priority,date};
        newTask.id = tasks.length
        tasks.push(newTask)
        return newTask
    }


    function removeTask(id){
        tasks.splice(id, 1);

        console.log(tasks)
    }
    
    return {
        createTask,
        getTasks,
        removeTask
    }
})();
 
export { taskController }