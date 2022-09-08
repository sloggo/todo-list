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
            createController.createSubTask(sampleProj1, 'Clean the dishes', 'In the sink from last night', 'high', '28-08-2022')
            createController.createSubTask(sampleProj1, 'Mop the floor', 'Mop is in the utility room', 'medium', '30-08-2022')

            createController.createToDo('Feed the dog', 'Dry food in the pantry', 'low', '01-09-2022')
            createController.createToDo('Collect the kids', 'School finishes at 14:00', 'high', '02-09-2022')

            const sampleProj2 = createController.createProject('School Projects');
            createController.createSubTask(sampleProj2, 'Geography Research Study', 'On volcanoes and economic impacts', 'high', '28-08-2022')
            createController.createSubTask(sampleProj2, 'Science Lab Report', 'Effects of salt in drinking water', 'low', '30-08-2022')

            createController.createToDo('Finish To-do app', 'Almost done!', 'medium', '11-09-2022')
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