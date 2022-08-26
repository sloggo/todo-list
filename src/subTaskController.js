import { createController } from "./createController";

const subTaskController = (function() {
    let subTasks = [];

    function getLength(){
        return subTasks.length;
    }

    function create(subTask){
        const projectToAddTo = createController.findItem(subTask.parentId);
        subTasks.push(subTask);

        projectToAddTo.tasks.push(subTask)
    }

    return{
        getLength,
        create
    }
})();

export {subTaskController};