import { createController } from "../createController";

const inputController = (function(){
    function parseCreateItem(){
        const type = document.querySelector('input[name="type"]');
        const title = document.querySelector('input[name="title"]');
        const description = document.querySelector('input[name="description"]').value;
        const date = document.querySelector('input[name="date"]').value;
        const priority = document.querySelector('input[name="priority"]:checked').value;

        if(type === 'project'){
            createController.createProject(title)
        } else if(type === 'toDo'){
            createController.createToDo(title, description, priority, date)
        }
    }
})();