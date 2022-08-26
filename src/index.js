import { createController } from "./createController";

createController.createToDo('titlee', 'desc', 'high', '40/3/2322')
const project = createController.createProject('project1')
createController.logItems()
createController.createSubTask(project, 'subtask', 'desc', 'date')
createController.logItems()