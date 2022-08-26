import {createController} from "./createController"
import { projectController } from "./projectController";
import { toDoController } from "./toDoController";
import { subTaskController } from "./subTaskController";


const storageController = (function(){
    function saveAll(){
        window.localStorage.clear()
        saveItems();
        saveProjects();
        saveToDos();
        saveSubTasks();
    }

    function loadAll(){
        if(window.localStorage.getItem("items")=='undefined')
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
        createController.loadItems(items)
    }

    function saveProjects(){
        const items = projectController.getProjects()
        window.localStorage.setItem('projects', JSON.stringify(items))
    }

    function loadProjects(){
        const items = JSON.parse(window.localStorage.getItem('projects'));
        projectController.loadProjects(items)
    }

    function saveToDos(){
        const items = toDoController.getToDos()
        window.localStorage.setItem('todos', JSON.stringify(items))
    }

    function loadToDos(){
        const items = JSON.parse(window.localStorage.getItem('todos'));
        toDoController.loadToDos(items)
    }

    function saveSubTasks(){
        const items = subTaskController.getSubTasks()
        window.localStorage.setItem('subtasks', JSON.stringify(items))
    }

    function loadSubTasks(){
        const items = JSON.parse(window.localStorage.getItem('subtasks'));
        subTaskController.loadSubTasks(items)
    }

    return{
        saveAll,
        loadAll
    }
})();

export {storageController}