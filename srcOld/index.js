import { taskDisplay } from "./taskDisplay";
import { taskController } from './taskController'
import { projectDisplay } from './projectDisplay'
import { projectController } from './projectController'

console.log('start')

const $createTaskButton = document.querySelector('li#createTask');
$createTaskButton.addEventListener('click', () => {
    taskDisplay.createTaskPopup()
});

let sampleProject = projectController.createProject('Sample Project', [{title: 'tasktitle', description: 'taskdescription', date: 'taskdate', complete: false, id:0},{title: 'tasktitle', description: 'taskdescription', date: 'taskdate', complete: true, id:1}])
projectDisplay.createProjectCard(sampleProject)
