const projectController = (function() {
    let projects = [];

    function getLength(){
        return projects.length;
    }

    function create(project){
        projects.push(project)
    }

    return{
        getLength,
        create
    }
})();

export {projectController};