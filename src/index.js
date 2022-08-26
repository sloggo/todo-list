import { createController } from "./createController";
import { displayController } from "./ui/displayController"


const project = createController.createProject('project1')
createController.createSubTask(project, 'title1', 'he',  'd')
createController.createSubTask(project, 'title2', 'e',  'fsd')
createController.createSubTask(project, 'title3', 'f',  'fs')
createController.logItems()

displayController.renderDash()
