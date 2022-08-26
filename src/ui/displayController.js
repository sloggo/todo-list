import { createItemUI } from './ui-items/createItemUI'

const displayController = (function(){
    const $contentDiv = document.querySelector('div#content');
    const $cardContainer = document.querySelector('div#cardContainer');

    function createItemPopup(){
        const $createTaskPopupContainer = document.createElement('div');
        $createTaskPopupContainer.classList.add('createTaskPopup');

        let $header = createItemUI.createHeader();
        let $formBody = createItemUI.createFormBody();

        $createTaskPopupContainer.appendChild($header)
        $createTaskPopupContainer.appendChild($formBody)

        $contentDiv.appendChild($createTaskPopupContainer)
    }

    return{
        createItemPopup
    }
})()

export {displayController}
