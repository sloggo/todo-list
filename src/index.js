import { createController } from "./createController";
import { displayController } from "./ui/displayController"
import { storageController } from "./storageController";



const $createItem = document.querySelector('li#createTask')

const sampleProj1 = createController.createProject('Kitchen Cleanup');
createController.createSubTask(sampleProj1, 'Clean the dishes', 'In the sink from last night', 'high', '28-08-2022')
createController.createSubTask(sampleProj1, 'Mop the floor', 'Mop is in the utility room', 'medium', '30-08-2022')

createController.createToDo('Feed the dog', 'Dry food in the pantry', 'low', '01-09-2022')
createController.createToDo('Collect the kids', 'School finishes at 14:00', 'high', '02-09-2022')

const sampleProj2 = createController.createProject('School Projects');
createController.createSubTask(sampleProj2, 'Geography Research Study', 'On volcanoes and economic impacts', 'high', '28-08-2022')
createController.createSubTask(sampleProj2, 'Science Lab Report', 'Effects of salt in drinking water', 'low', '30-08-2022')

createController.createToDo('Finish To-do app', 'Almost done!', 'medium', '11-09-2022')

storageController.loadAll()

displayController.renderDash()


$createItem.addEventListener('click', ()=>{
    displayController.createItemPopup()
})