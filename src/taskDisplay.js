import { taskController } from "./taskController";

const taskDisplay = (function () {
    const $cardContainer = document.querySelector('div#cardContainer');
    const $contentDiv = document.querySelector('div#content');

    function createTaskCard(task){
        console.log('creatingcard');
    
        const $cardDiv = document.createElement('div');
        $cardDiv.id = task.id
        $cardDiv.classList.add('card');
        $cardDiv.innerHTML += `
        <div class="titleContainer">
            <h2 id="title">${task.title}</h2>
            <div id="colourCircle">&nbsp;</div>
        </div>
        <p id="desc">${task.description}</p>
        <p id="date">${task.date}</p>
    `

        $cardDiv.appendChild(createBottomControls())
        $cardContainer.appendChild($cardDiv)
    }

    function createBottomControls(){
        const $bottomControls = document.createElement('div');
        $bottomControls.classList.add('bottomControls');

        $bottomControls.appendChild(createCheckBox());
        $bottomControls.appendChild(createRemoveButton());
        $bottomControls.appendChild(createAddToProjectButton());

        return $bottomControls
    }

    function createRemoveButton(){
        const $removeButton = document.createElement('img')
        $removeButton.src = './images/trash-2.svg';
        $removeButton.id = 'trash';

        $removeButton.addEventListener('click', (e) => {
            removeTask(e.target.parentNode.parentNode.id);
        })

        return $removeButton;
    }

    function createCheckBox(){
        const $checkBox = document.createElement('input');
        $checkBox.type = 'checkbox';

        return $checkBox;
    }

    function createAddToProjectButton(){
        const $but = document.createElement('button');
        $but.textContent = 'Add to project'

        return $but;
    }

    function removeTask(task){
        taskController.removeTask(task)
        renderTasks()
    } 

    function renderTasks(){
        $cardContainer.innerHTML = '';
        taskController.getTasks().forEach(task => {
            createTaskCard(task)
        })
    }

    function createTaskPopup(){
        const $createTaskPopupContainer = document.createElement('div');
        $createTaskPopupContainer.classList.add('createTaskPopup');

        const $h2 = document.createElement('h2');
        $h2.textContent='Create a Task';
        $createTaskPopupContainer.appendChild($h2);

        const $form = document.createElement('form');

        const $formTitleContainer = document.createElement('div');
        $formTitleContainer.classList.add('formInputContainer');

        const $formTitleLabel = document.createElement('label');
        $formTitleLabel.setAttribute('for', 'title')
        $formTitleLabel.textContent = 'Title'
        $formTitleContainer.appendChild($formTitleLabel)

        const $formTitleInput = document.createElement('input');
        $formTitleInput.type = 'text';
        $formTitleInput.name = 'title';
        $formTitleContainer.appendChild($formTitleInput);

        $form.appendChild($formTitleContainer)

        const $formDescriptionContainer = document.createElement('div');
        $formDescriptionContainer.classList.add('formInputContainer');

        const $formDescriptionLabel = document.createElement('label');
        $formDescriptionLabel.setAttribute('for', 'description')
        $formDescriptionLabel.textContent = 'Description'
        $formDescriptionContainer.appendChild($formDescriptionLabel)

        const $formDescriptionInput = document.createElement('input');
        $formDescriptionInput.type = 'text';
        $formDescriptionInput.name = 'description';
        $formDescriptionContainer.appendChild($formDescriptionInput);

        $form.appendChild($formDescriptionContainer);
        $createTaskPopupContainer.appendChild($form)

        $contentDiv.appendChild($createTaskPopupContainer)
        
    }

    function createTaskUi() {
        createTaskPopup()
    }

    return{
        createTaskCard,
        createTaskPopup
    }
})()


export {taskDisplay}