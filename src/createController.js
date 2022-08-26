import {toDoController} from './toDoController.js'
import {projectController} from './projectController.js'
import {subTaskController} from './subTaskController.js'

const createController = (function(){
    let items = [];

    function createToDo(title, description, priority, date){
        let newToDo = {title, description, priority, date, complete: false, type: 'toDo'}
        newToDo.itemId = items.length;
        newToDo.toDoId = toDoController.getLength()

        toDoController.create(newToDo)
    }

    function createProject(title, tasks){
        let newProject = {title, tasks};
        newProject.itemId = items.length;
        newProject.projectId = projectController.getLength();

        projectController.create(newProject);
    }

    function createSubTask(){

    }
})();

export { createController }