import { createController } from "../createController";
import { sortController } from "../sortController";
import { displayController } from "./displayController";

const inputController = (function(){
    const $contentTitle = document.querySelector('div#content h1');

    function parseCreateItem(){
        const type = document.querySelector('input[name="type"]:checked').value;
        const title = document.querySelector('input[name="title"]').value;
        const description = document.querySelector('input[name="description"]').value;
        const date = document.querySelector('input[name="date"]').value;
        const priority = document.querySelector('input[name="priority"]:checked').value;

        if(type === 'project'){
            createController.createProject(title)
        } else if(type === 'toDo'){
            createController.createToDo(title, description, priority, date)
        } else{
            return
        }

        if($contentTitle.textContent === 'Dashboard'){
            sortController.defaultDash();
        } else if($contentTitle.textContent === 'Today'){
            sortController.itemsToday();
        } else if($contentTitle.textContent === 'This Week'){
            sortController.itemsThisWeek();
        }

        displayController.renderDash();

        createController.logItems();
    }

    function parseCreateSubTask(project){
        const title = document.querySelector('input[name="title"]').value;
        const description = document.querySelector('input[name="description"]').value;
        const date = document.querySelector('input[name="date"]').value;
        const priority = document.querySelector('input[name="priority"]:checked').value;

        createController.createSubTask(project, title,description, priority, date)

        displayController.renderDash();

        createController.logItems()
    }

    return{
        parseCreateItem,
        parseCreateSubTask
    }
})();

export { inputController }