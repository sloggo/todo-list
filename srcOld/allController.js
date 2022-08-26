import { taskController } from "./taskController";

const allController = (function(){
    const allArray = [];

    function getAllLength(){
        return allArray.length;
    }

    function add(item){
        allArray.push(item)
    }

    function remove(id){
        allArray.splice(id,1)
    }

    return {
            getAllLength,
            add,
            remove}
})();

export {allController}