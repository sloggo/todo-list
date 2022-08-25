import { taskDisplay } from "./taskDisplay";
import { taskController } from './taskController'

console.log('start')

const $createTaskButton = document.querySelector('li#createTask');
$createTaskButton.addEventListener('click', () => {
    taskDisplay.createTaskPopup()
});