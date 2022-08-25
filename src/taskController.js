import { taskDisplay } from "./taskDisplay";
import { allController } from "./allController";

const taskController = (function () {
    let tasks = [];

    function getTasks() {
        return tasks;
    }

    function createTask(title, description, priority, date) {
        let newTask = {title,description,priority,date, complete: false,};
        newTask.taskid = tasks.length
        newTask.id = allController.getAllLength()
        console.log(newTask.id)
        tasks.push(newTask)
        allController.add(newTask)
        taskDisplay.renderTasks()
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