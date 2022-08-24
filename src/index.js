import { displayController } from "./display";
import { taskController } from './task'

console.log('start')
displayController.createTaskCard(taskController.createTask('name', 'desc', 'priority', 'date'))