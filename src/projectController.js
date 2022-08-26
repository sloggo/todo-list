import { createController } from "./createController";

const projectController = (function() {
    let projects = [];

    function getLength(){
        return projects.length;
    }

    function create(project){
        projects.push(project)
    }

    function remove(project){
        projects.splice(projects.indexOf(createController.findItem(project)), 1)
    }

    return{
        getLength,
        create,
        remove
    }
})();

export {projectController};