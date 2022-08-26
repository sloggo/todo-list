import { createController } from '../createController';
 
import { createItemUI } from './ui-items/createItemUI'
import { createProjectCard } from './ui-items/createProjectCard';

const displayController = (function(){
    const $contentDiv = document.querySelector('div#content');
    const $cardContainer = document.querySelector('div#cardContainer');

    function createItemPopup(){
        const $createTaskPopupContainer = document.createElement('div');
        $createTaskPopupContainer.classList.add('createTaskPopup');

        let $header = createItemUI.createHeader();
        let $formBody = createItemUI.createFormBody();
        let $create = createItemUI.createCreateButton();
        let $exit = createItemUI.createExitButton();

        $createTaskPopupContainer.appendChild($header)
        $createTaskPopupContainer.appendChild($formBody)
        $createTaskPopupContainer.appendChild($create)
        $createTaskPopupContainer.appendChild($exit)

        $contentDiv.appendChild($createTaskPopupContainer)
    }

    function closeCreateItemPopup(){
        const $createTaskPopupContainer = document.querySelector('div.createTaskPopup');

        $createTaskPopupContainer.replaceChildren();
        $createTaskPopupContainer.remove()
    }

    function createProject(project){
        const $container = createProjectCard.createContainer(project);
        $cardContainer.appendChild($container);
        const $subTasks = createProjectCard.createSubTasks(project);
        $container.appendChild($subTasks);
        const $percentage = createProjectCard.createPercentage(project);
        $container.appendChild($percentage);
    }

    function renderDash(){
        const items = createController.getItems();
        cleanDash()

        items.forEach(item =>{
            if(item.type === 'project'){
                createProject(item);
            } 
        })
    }

    function cleanDash(){
        $cardContainer.innerHTML = '';
    }

    return{
        createItemPopup,
        closeCreateItemPopup,
        createProject,
        renderDash
    }
})()

export {displayController}
