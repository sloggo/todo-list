import { createItemUI } from './ui-items/createItemUI'

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

    return{
        createItemPopup,
        closeCreateItemPopup
    }
})()

export {displayController}
