import { taskController } from "./task";

const displayController = (function () {

    function createTaskCard(task){
        const $cardContainer = document.querySelector('div#cardContainer');
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
        //renderDash()
    } 

    return{
        createTaskCard
    }
})()


export {displayController}