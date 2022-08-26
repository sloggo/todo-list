import { allController } from "./allController";

const projectDisplay = (function(){
    const $cardContainer = document.querySelector('div#cardContainer');

    function createProjectCard(project){
        const $projectCardContainer = document.createElement('div')
        $projectCardContainer.classList.add('card');
        $projectCardContainer.classList.add('project');

        $projectCardContainer.innerHTML = `<h2>${project.title}</h2>
                <div class="projectTaskContainer">

                </div>
                </div>

                <h3>${project.percentage}%</h3>`

        $cardContainer.appendChild($projectCardContainer)
    }

    return{
        createProjectCard
    }
})()

export { projectDisplay }