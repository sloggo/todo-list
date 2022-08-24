const taskController = (function () {
    function createTask(title, description, priority, date) {
        return {title, description, priority, date}
    }
    
    return {
        createTask
    }
})();
 
export { taskController }