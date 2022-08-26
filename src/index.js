import { createController } from "./createController";
import { displayController } from "./ui/displayController"

const $createItem = document.querySelector('li#createTask')

createController.createProject('test')
displayController.renderDash()

$createItem.addEventListener('click', ()=>{
    displayController.createItemPopup()
})