import {createController} from "./createController"
import { projectController } from "./projectController";
import { toDoController } from "./toDoController";
import { subTaskController } from "./subTaskController";


const storageController = (function(){
    function saveAll(){
        saveItems();
        saveProjects();
        saveToDos();
        saveSubTasks();
    }

    function loadAll(){
        loadItems();
            loadProjects();
            loadSubTasks();
            loadToDos();
    }
    
    function saveItems(){
        const items = createController.getItems()
        window.localStorage.setItem('items', JSON.stringify(items))
    }

    function loadItems(){
        const items = JSON.parse(window.localStorage.getItem('items'));
        console.log(items)
        createController.loadItems(items)
    }

    function saveProjects(){
        const projects = projectController.getProjects()
        window.localStorage.setItem('projects', JSON.stringify(projects))
    }

    function loadProjects(){
        const projects = JSON.parse(window.localStorage.getItem('projects'));
        console.log(projects)
        projectController.loadProjects(projects)
    }

    function saveToDos(){
        const toDos = toDoController.getToDos()
        window.localStorage.setItem('todos', JSON.stringify(toDos))
    }

    function loadToDos(){
        const toDos = JSON.parse(window.localStorage.getItem('todos'));
        console.log(toDos)
        toDoController.loadToDos(toDos)
    }

    function saveSubTasks(){
        const subTasks = subTaskController.getSubTasks()
        window.localStorage.setItem('subtasks', JSON.stringify(subTasks))
    }

    function loadSubTasks(){
        const subTasks = JSON.parse(window.localStorage.getItem('subtasks'));
        console.log(subTasks)
        subTaskController.loadSubTasks(subTasks)
    }

    return{
        saveAll,
        loadAll
    }
})();

export {storageController}