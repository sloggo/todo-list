import {createController} from "./createController"
import { projectController } from "./projectController";
import { toDoController } from "./toDoController";
import { subTaskController } from "./subTaskController";


const storageController = (function(){
    function saveAll(){
        window.localStorage.clear()
        saveItems();
    }

    function loadAll(){
        if (localStorage.hasOwnProperty('items')) {
            loadItems();
            loadProjects();
            loadSubTasks();
            loadToDos();
        } else{
            const sampleProj1 = createController.createProject('Kitchen Cleanup');
            createController.createSubTask(sampleProj1, 'Clean dishes', 'In the sink from last night', 'high', '2022-08-28')
            createController.createSubTask(sampleProj1, 'Mop the floor', 'Mop is in the utility room', 'medium', '2022-08-30')

            createController.createToDo('Feed the dog', 'Dry food in the pantry', 'low', '2022-09-03')
            createController.createToDo('Clean the bathroom', 'Supplies in cupboard', 'high', '2022-09-02')

            const sampleProj2 = createController.createProject('School Projects');
            createController.createSubTask(sampleProj2, 'Geography Research Study', 'On volcanoes and economic impacts', 'high', '2022-08-28')
            createController.createSubTask(sampleProj2, 'Science Lab Report', 'Effects of salt in drinking water', 'low', '2022-08-30')

            createController.createToDo('Finish To-do app', 'Almost done', 'medium', '2022-09-11');
        }
    }

    function saveItems(){
        const items = createController.getItems()
        window.localStorage.setItem('items', JSON.stringify(items))
    }

    function loadItems(){
        const items = JSON.parse(window.localStorage.getItem('items'));
        createController.loadItems(items)
    }

    function loadProjects(){
        const items = JSON.parse(window.localStorage.getItem('items'));
        const projects = items.filter(i => i.type === 'project');
        projectController.loadProjects(projects)
    }

    function loadToDos(){
        const items = JSON.parse(window.localStorage.getItem('items'));
        const toDos = items.filter(i => i.type === 'toDo');
        toDoController.loadToDos(toDos)
    }

    function loadSubTasks(){
        const items = JSON.parse(window.localStorage.getItem('items'));
        const subTasks = items.filter(i => i.type === 'subTask');
        subTaskController.loadSubTasks(subTasks)
    }

    return{
        saveAll,
        loadAll
    }
})();

export {storageController}