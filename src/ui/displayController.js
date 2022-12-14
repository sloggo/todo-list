import { createController } from '../createController';
 
import { createItemUI } from './ui-items/createItemUI'
import { createProjectCard } from './ui-items/createProjectCard';
import { createSubTaskUI } from './ui-items/createSubTaskUI';
import { createToDoCard } from './ui-items/createToDoCard';
import { storageController } from '../storageController';
import { sortController } from '../sortController';

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
        project.completeTasks = 0
        project.subTasks.forEach(task => {
            if(task.complete === true){
                project.completeTasks++
            }
        })

        const $container = createProjectCard.createContainer(project);
        $cardContainer.appendChild($container);
        const $subTasks = createProjectCard.createSubTasks(project);
        $container.appendChild($subTasks);
        const $bottomControls = document.createElement('div');
        $bottomControls.classList.add('bottomInfo')
        $bottomControls.appendChild(createProjectCard.createAddButton(project))
        $bottomControls.appendChild(createProjectCard.createPercentage(project))
        $bottomControls.appendChild(createProjectCard.createRemoveButton(project))

        $container.appendChild($bottomControls)
    }

    function createToDo(toDo){
        const $container = createToDoCard.createContainer(toDo);
        $cardContainer.appendChild($container);

        const $bottomControls = document.createElement('div');
        $bottomControls.classList.add('bottomControls');
        const $removeButton = createToDoCard.createRemoveButton(toDo);
        const $checkBox = createToDoCard.createCheckBox(toDo);

        if(createController.findItem(toDo.itemId).complete === true){
            $checkBox.checked = true;
        } else{
            $checkBox.checked = false;
        }

        storageController.saveAll()

        $bottomControls.appendChild($checkBox);
        $bottomControls.appendChild($removeButton);

        $container.appendChild($bottomControls)
    }

    function renderDash(filtered = false){
        const $contentTitle = document.querySelector('div#content h1');
        if (filtered === false){
            if($contentTitle.textContent === 'Dashboard'){
                sortController.defaultDash();
            } else if($contentTitle.textContent === 'Today'){
                sortController.itemsToday();
            } else if($contentTitle.textContent === 'This Week'){
                sortController.itemsThisWeek();
            } else if($contentTitle.textContent === 'Projects'){
                sortController.projects();
            } else if($contentTitle.textContent === 'ToDos'){
                sortController.toDos();
            }
        }

        const itemArray = createController.getCurrentItems()
        cleanDash()

        itemArray.forEach(item =>{
            if(item.type == 'project'){
                createProject(item);
            } else if(item.type == 'toDo'){
                createToDo(item);
            }
        })

        storageController.saveAll();
    }

    function cleanDash(){
        $cardContainer.innerHTML = '';
    }

    function createSubTaskPopup(project){
        const $createTaskPopupContainer = document.createElement('div');
        $createTaskPopupContainer.classList.add('createTaskPopup');

        let $header = createSubTaskUI.createHeader();
        let $formBody = createSubTaskUI.createFormBody();
        let $create = createSubTaskUI.createCreateButton(project);
        let $exit = createSubTaskUI.createExitButton();

        $createTaskPopupContainer.appendChild($header)
        $createTaskPopupContainer.appendChild($formBody)
        $createTaskPopupContainer.appendChild($create)
        $createTaskPopupContainer.appendChild($exit)

        $contentDiv.appendChild($createTaskPopupContainer)
    }


    return{
        createItemPopup,
        closeCreateItemPopup,
        createProject,
        renderDash,
        createSubTaskPopup
    }
})()

export {displayController}
