import {toDoController} from './toDoController.js'
import {projectController} from './projectController.js'
import {subTaskController} from './subTaskController.js'
import { displayController } from './ui/displayController.js';

const createController = (function(){
    let items = [];

    function createToDo(title, description, priority, date){
        let newToDo = {type: 'toDo', title, description, priority, date, complete: false}

        newToDo.itemId = items.length;
        items.push(newToDo);

        newToDo.toDoId = toDoController.getLength()

        toDoController.create(newToDo)
        return newToDo
    }

    function createProject(title){
        let newProject = {type: 'project', title, subTasks: [], complete: false, completeTasks: 0, percentage: 0}

        newProject.itemId = items.length;
        items.push(newProject);

        newProject.projectId = projectController.getLength();

        projectController.create(newProject);
        return newProject
    }

    function createSubTask(project, title, description, date){
        const parentId = project.itemId;
        let newSubTask = {type: 'subTask', parentId, title, description, date, complete: false};

        newSubTask.itemId = items.length
        items.push(newSubTask);

        newSubTask.subTaskId = subTaskController.getLength()

        subTaskController.create(newSubTask);
        return newSubTask
    }

    function findItem(id){
        const foundItem = items.find(i => i.itemId == id);
        return foundItem
    }

    function logItems(){
        console.log(items)
    }

    function removeSubTask(subTask){
        items.splice(items.indexOf(items.find( i => i.itemId ===subTask.itemId)), 1)
        subTaskController.remove(subTask)
        displayController.renderDash()
    }

    function getItems(){
        return items;
    }

    return{
        findItem,
        logItems,
        createToDo,
        createProject,
        createSubTask,
        removeSubTask,
        getItems
    }
})();

export { createController }