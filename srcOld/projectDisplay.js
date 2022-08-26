import { allController } from "./allController";
import { projectController } from "./projectController";

const projectDisplay = (function(){
    const $cardContainer = document.querySelector('div#cardContainer');

    function createProjectCard(project){
        const $projectCardContainer = document.createElement('div')
        $projectCardContainer.setAttribute('projectid', project.projectid)
        $projectCardContainer.id = project.id
        $projectCardContainer.classList.add('card');
        $projectCardContainer.classList.add('project');

        $projectCardContainer.innerHTML = `<h2>${project.title}</h2>
                <div class="projectTaskContainer" id='${project.projectid}'>

                </div>
                </div>`

        $cardContainer.appendChild($projectCardContainer)

        if(project.projectid === 0){

        }
        const $projectTaskContainer = document.querySelector(`div.projectTaskContainer[id='${project.id}']`);

        let completeTasks = 0;

        project.tasks.forEach(task => {
            const $projectTask = document.createElement('div');
            $projectTask.classList.add('projectTask');
            $projectTask.id = task.id;

            if(task.complete){
                completeTasks++
            }

            $projectTask.innerHTML = `
            <div class="taskText">
                            <div class="topTask">
                                <p class="title">${task.title}</p>
                                <p class="date">${task.date}</p>
                            </div>
                            <div class="bottomTask">
                                <p>${task.description}</p>
                            </div>
                        </div>
                        <img src="./images/trash-2.svg" id="trash">

                        <input type="checkbox">
            `

            $projectTaskContainer.appendChild($projectTask)
            
            const $trashButton = $projectTask.querySelector(`img`);

            $trashButton.addEventListener('click', (e) => {
                let taskContainer = e.target.parentNode;
                let projectContainer = taskContainer.parentNode.parentNode;

                console.log('removing')

                let projectToRemoveFrom = projectController.getProjects().find(i=> i.id === projectContainer.id);
                let taskToRemove = projectToRemoveFrom.tasks.find(i => i.id === taskContainer.id);

                projectController.removeTask(projectToRemoveFrom, taskToRemove)
            })
        });

        project.percentage = (completeTasks / project.tasks.length) *100

        $projectCardContainer.innerHTML += `<h3>${project.percentage}%</h3>`
    }

    return{
        createProjectCard
    }
})()

export { projectDisplay }