import { taskController } from "./taskController";
import { allController } from "./allController";
import { projectDisplay } from "./projectDisplay";

const projectController = (function(){
    let projects = [];

    function createProject(title, tasks){
        const newProject = {title, tasks};
        newProject.projectid = projects.length;
        newProject.id = allController.getAllLength();
        newProject.percentage = 0;

        allController.add(newProject)
        projects.push(newProject);
        return newProject
    }

    function remove(project){

    }

    function removeTask(projectToRem, taskToRem){
        const project = projects.find( i => i.projectid === projectToRem.projectid);

        const taskToRemove = project.tasks.find(i => i.taskid === taskToRem.taskid);

        project.tasks.splice(project.tasks.findIndex(taskToRemove),1)
    }

    function getProjects(){
        return projects;
    }

    return{
        createProject,
        removeTask,
        getProjects
    }
})()

export {projectController}