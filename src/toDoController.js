import { createController } from "./createController";

const toDoController = (function() {
    let toDos = [];

    function getLength() {
        return toDos.length
    }

    function create(toDo){
        toDos.push(toDo)
    }

    function remove(toDo){
        toDos.splice(toDos.indexOf(createController.findItem(toDo)), 1)
    }

    return{
        create,
        getLength,
        remove
    }
})();

export {toDoController};