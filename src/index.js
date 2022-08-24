import { taskDisplay } from "./taskDisplay";
import { taskController } from './taskController'

console.log('start')
taskDisplay.createTaskCard(taskController.createTask('name', 'desc', 'priority', 'date'))

taskDisplay.createTaskPopup()