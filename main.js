/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/createController.js":
/*!*********************************!*\
  !*** ./src/createController.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createController": () => (/* binding */ createController)
/* harmony export */ });
/* harmony import */ var _toDoController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDoController.js */ "./src/toDoController.js");
/* harmony import */ var _projectController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectController.js */ "./src/projectController.js");
/* harmony import */ var _subTaskController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subTaskController.js */ "./src/subTaskController.js");
/* harmony import */ var _ui_displayController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/displayController.js */ "./src/ui/displayController.js");





const createController = (function(){
    let items = [];

    function createToDo(title, description, priority, date){
        let newToDo = {type: 'toDo', title, description, priority, date, complete: false}

        newToDo.itemId = items.length;
        items.push(newToDo);

        newToDo.toDoId = _toDoController_js__WEBPACK_IMPORTED_MODULE_0__.toDoController.getLength()

        _toDoController_js__WEBPACK_IMPORTED_MODULE_0__.toDoController.create(newToDo)
        return newToDo
    }

    function createProject(title){
        let newProject = {type: 'project', title, subTasks: [], complete: false, completeTasks: 0, percentage: 0}

        newProject.itemId = items.length;
        items.push(newProject);

        newProject.projectId = _projectController_js__WEBPACK_IMPORTED_MODULE_1__.projectController.getLength();

        _projectController_js__WEBPACK_IMPORTED_MODULE_1__.projectController.create(newProject);

        console.log(items)
        return newProject
    }

    function createSubTask(project, title, description, priority, date){
        const parentId = project.itemId;
        let newSubTask = {type: 'subTask', parentId, title, description, priority, date, complete: false};
        newSubTask.itemId = items.length
        items.push(newSubTask);

        newSubTask.subTaskId = _subTaskController_js__WEBPACK_IMPORTED_MODULE_2__.subTaskController.getLength()

        _subTaskController_js__WEBPACK_IMPORTED_MODULE_2__.subTaskController.create(newSubTask);
        return newSubTask
    }

    function findItem(id){
        const foundItem = items.find(i => i.itemId == id);
        return foundItem
    }

    function logItems(){
        console.log(items)
    }

    function removeSubTask(subTask){
        items.splice(items.indexOf(items.find( i => i.itemId ===subTask.itemId)), 1)
        _subTaskController_js__WEBPACK_IMPORTED_MODULE_2__.subTaskController.remove(subTask)
        _ui_displayController_js__WEBPACK_IMPORTED_MODULE_3__.displayController.renderDash()
    }

    function removeProject(project){
        project.subTasks.forEach(task =>{
            removeSubTask(task);
        })

        items.splice(items.indexOf(items.find( i => i.itemId ===project.itemId)), 1)

        _projectController_js__WEBPACK_IMPORTED_MODULE_1__.projectController.remove(project)
        _ui_displayController_js__WEBPACK_IMPORTED_MODULE_3__.displayController.renderDash()
    }

    function removeToDo(toDo){
        items.splice(items.indexOf(items.find( i => i.itemId ===toDo.itemId)), 1)
        _toDoController_js__WEBPACK_IMPORTED_MODULE_0__.toDoController.remove(toDo)
        _ui_displayController_js__WEBPACK_IMPORTED_MODULE_3__.displayController.renderDash()
    }

    function getItems(){
        return items;
    }

    return{
        findItem,
        logItems,
        createToDo,
        createProject,
        createSubTask,
        removeSubTask,
        getItems,
        removeProject,
        removeToDo
    }
})();



/***/ }),

/***/ "./src/projectController.js":
/*!**********************************!*\
  !*** ./src/projectController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectController": () => (/* binding */ projectController)
/* harmony export */ });
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createController */ "./src/createController.js");


const projectController = (function() {
    let projects = [];

    function getLength(){
        return projects.length;
    }

    function create(project){
        projects.push(project)
    }

    function remove(project){
        projects.splice(projects.indexOf(_createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(project)), 1)
    }

    return{
        getLength,
        create,
        remove
    }
})();



/***/ }),

/***/ "./src/subTaskController.js":
/*!**********************************!*\
  !*** ./src/subTaskController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "subTaskController": () => (/* binding */ subTaskController)
/* harmony export */ });
/* harmony import */ var _ui_displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/displayController */ "./src/ui/displayController.js");
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createController */ "./src/createController.js");



const subTaskController = (function() {
    let subTasks = [];

    function getLength(){
        return subTasks.length;
    }

    function create(subTask){
        const projectToAddTo = _createController__WEBPACK_IMPORTED_MODULE_1__.createController.findItem(subTask.parentId);
        subTasks.push(subTask);

        projectToAddTo.subTasks.push(subTask)
    }

    function remove(subTask){
        subTasks.splice(subTasks.indexOf(subTasks.find(i => i.itemId === subTask.itemId)), 1)
        const parentProject = _createController__WEBPACK_IMPORTED_MODULE_1__.createController.findItem(subTask.parentId);
        console.log(parentProject)
        const indexOfTask = parentProject.subTasks.indexOf(parentProject.subTasks.find(i => i.id === subTask.id));

        parentProject.subTasks.splice(parentProject.subTasks.indexOf(parentProject.subTasks.find(i => i.itemId === subTask.itemId)),1);

    }


    return{
        getLength,
        create,
        remove
    }
})();



/***/ }),

/***/ "./src/toDoController.js":
/*!*******************************!*\
  !*** ./src/toDoController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoController": () => (/* binding */ toDoController)
/* harmony export */ });
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createController */ "./src/createController.js");


const toDoController = (function() {
    let toDos = [];

    function getLength() {
        return toDos.length
    }

    function create(toDo){
        toDos.push(toDo)
    }

    function remove(toDo){
        toDos.splice(toDos.indexOf(_createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(toDo)), 1)
    }

    return{
        create,
        getLength,
        remove
    }
})();



/***/ }),

/***/ "./src/ui/displayController.js":
/*!*************************************!*\
  !*** ./src/ui/displayController.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayController": () => (/* binding */ displayController)
/* harmony export */ });
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createController */ "./src/createController.js");
/* harmony import */ var _ui_items_createItemUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui-items/createItemUI */ "./src/ui/ui-items/createItemUI.js");
/* harmony import */ var _ui_items_createProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-items/createProjectCard */ "./src/ui/ui-items/createProjectCard.js");
/* harmony import */ var _ui_items_createSubTaskUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-items/createSubTaskUI */ "./src/ui/ui-items/createSubTaskUI.js");
/* harmony import */ var _ui_items_createToDoCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-items/createToDoCard */ "./src/ui/ui-items/createToDoCard.js");

 





const displayController = (function(){
    const $contentDiv = document.querySelector('div#content');
    const $cardContainer = document.querySelector('div#cardContainer');

    function createItemPopup(){
        const $createTaskPopupContainer = document.createElement('div');
        $createTaskPopupContainer.classList.add('createTaskPopup');

        let $header = _ui_items_createItemUI__WEBPACK_IMPORTED_MODULE_1__.createItemUI.createHeader();
        let $formBody = _ui_items_createItemUI__WEBPACK_IMPORTED_MODULE_1__.createItemUI.createFormBody();
        let $create = _ui_items_createItemUI__WEBPACK_IMPORTED_MODULE_1__.createItemUI.createCreateButton();
        let $exit = _ui_items_createItemUI__WEBPACK_IMPORTED_MODULE_1__.createItemUI.createExitButton();

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
        const $container = _ui_items_createProjectCard__WEBPACK_IMPORTED_MODULE_2__.createProjectCard.createContainer(project);
        $cardContainer.appendChild($container);
        const $subTasks = _ui_items_createProjectCard__WEBPACK_IMPORTED_MODULE_2__.createProjectCard.createSubTasks(project);
        $container.appendChild($subTasks);
        const $bottomControls = document.createElement('div');
        $bottomControls.classList.add('bottomInfo')
        $bottomControls.appendChild(_ui_items_createProjectCard__WEBPACK_IMPORTED_MODULE_2__.createProjectCard.createAddButton(project))
        $bottomControls.appendChild(_ui_items_createProjectCard__WEBPACK_IMPORTED_MODULE_2__.createProjectCard.createPercentage(project))
        $bottomControls.appendChild(_ui_items_createProjectCard__WEBPACK_IMPORTED_MODULE_2__.createProjectCard.createRemoveButton(project))

        $container.appendChild($bottomControls)
    }

    function createToDo(toDo){
        const $container = _ui_items_createToDoCard__WEBPACK_IMPORTED_MODULE_4__.createToDoCard.createContainer(toDo);
        $cardContainer.appendChild($container);

        const $bottomControls = document.createElement('div');
        $bottomControls.classList.add('bottomControls');
        const $removeButton = _ui_items_createToDoCard__WEBPACK_IMPORTED_MODULE_4__.createToDoCard.createRemoveButton(toDo);
        const $checkBox = _ui_items_createToDoCard__WEBPACK_IMPORTED_MODULE_4__.createToDoCard.createCheckBox(toDo);
        $bottomControls.appendChild($checkBox);
        $bottomControls.appendChild($removeButton);

        $container.appendChild($bottomControls)
    }

    function renderDash(){
        const items = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.getItems();
        cleanDash()

        items.forEach(item =>{
            if(item.type == 'project'){
                createProject(item);
            } else if(item.type == 'toDo'){
                createToDo(item);
            }
        })
    }

    function cleanDash(){
        $cardContainer.innerHTML = '';
    }

    function createSubTaskPopup(project){
        const $createTaskPopupContainer = document.createElement('div');
        $createTaskPopupContainer.classList.add('createTaskPopup');

        let $header = _ui_items_createSubTaskUI__WEBPACK_IMPORTED_MODULE_3__.createSubTaskUI.createHeader();
        let $formBody = _ui_items_createSubTaskUI__WEBPACK_IMPORTED_MODULE_3__.createSubTaskUI.createFormBody();
        let $create = _ui_items_createSubTaskUI__WEBPACK_IMPORTED_MODULE_3__.createSubTaskUI.createCreateButton(project);
        let $exit = _ui_items_createSubTaskUI__WEBPACK_IMPORTED_MODULE_3__.createSubTaskUI.createExitButton();

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




/***/ }),

/***/ "./src/ui/inputController.js":
/*!***********************************!*\
  !*** ./src/ui/inputController.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "inputController": () => (/* binding */ inputController)
/* harmony export */ });
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createController */ "./src/createController.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController */ "./src/ui/displayController.js");



const inputController = (function(){
    function parseCreateItem(){
        const type = document.querySelector('input[name="type"]:checked').value;
        const title = document.querySelector('input[name="title"]').value;
        const description = document.querySelector('input[name="description"]').value;
        const date = document.querySelector('input[name="date"]').value;
        const priority = document.querySelector('input[name="priority"]:checked').value;

        if(type === 'project'){
            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createProject(title)
        } else if(type === 'toDo'){
            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createToDo(title, description, priority, date)
        } else{
            return
        }

        _displayController__WEBPACK_IMPORTED_MODULE_1__.displayController.renderDash();

        _createController__WEBPACK_IMPORTED_MODULE_0__.createController.logItems();
    }

    function parseCreateSubTask(project){
        const title = document.querySelector('input[name="title"]').value;
        const description = document.querySelector('input[name="description"]').value;
        const date = document.querySelector('input[name="date"]').value;
        const priority = document.querySelector('input[name="priority"]:checked').value;

        _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createSubTask(project, title,description, priority, date)

        _displayController__WEBPACK_IMPORTED_MODULE_1__.displayController.renderDash();

        _createController__WEBPACK_IMPORTED_MODULE_0__.createController.logItems()
    }

    return{
        parseCreateItem,
        parseCreateSubTask
    }
})();



/***/ }),

/***/ "./src/ui/ui-items/createItemUI.js":
/*!*****************************************!*\
  !*** ./src/ui/ui-items/createItemUI.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createItemUI": () => (/* binding */ createItemUI)
/* harmony export */ });
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../displayController */ "./src/ui/displayController.js");
/* harmony import */ var _inputController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inputController */ "./src/ui/inputController.js");



const createItemUI = (function(){
    function createHeader(){
        const $h2 = document.createElement('h2');
        $h2.textContent='Create an Item';
        
        return $h2
    }


    function createFormBody(){
        const $form = document.createElement('form');

        $form.innerHTML = `
            <div class="formInputContainer">
                <label for="priority">Type</label>

            <div class="radioContainer">
                <input type="radio" name="type" value="toDo">
                <input type="radio" name="type" value="project">  
            </div>
            <div class="labelRadioContainer">
                <label for="toDo">ToDo</label>
                <label for="project">Project</label>
            </div>
        </div>
        

        <div class="formInputContainer">
                <label for="title">Title</label>
                <input type="text" name="title">
            </div>

            <div class="formInputContainer">
                <label for="description">Description</label>
                <input type="text" name="description">
            </div>

            <div class="formInputContainer">
                <label for="date">Due</label>
                    <input type="date" name="date">
            </div>

            <div class="formInputContainer">
                <label for="priority">Priority</label>

            <div class="radioContainer">
                <input type="radio" name="priority" value="high">
                <input type="radio" name="priority" value="medium">
                <input type="radio" name="priority" value="low">    
            </div>
            <div class="labelRadioContainer">
                <label for="high">High</label>
                <label for="medium">Medium</label>
                <label for="low">Low</label>
            </div>
        </div>`

        return $form
    }

    function createCreateButton(){
        let $createButton = document.createElement('p')
        $createButton.id = 'button'
        $createButton.textContent = 'Create Item';

        $createButton.addEventListener('click', (e) => {
            _inputController__WEBPACK_IMPORTED_MODULE_1__.inputController.parseCreateItem();
            _displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.closeCreateItemPopup();
        })

        return $createButton
    }

    function createExitButton(){
        let $closeButton = document.createElement('p')
        $closeButton.id = 'remButton'
        $closeButton.textContent = 'Exit';

        $closeButton.addEventListener('click', (e) => {
            _displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.closeCreateItemPopup();
        })

        return $closeButton
    }

    return{
        createFormBody,
        createHeader,
        createCreateButton,
        createExitButton
    }
})();



/***/ }),

/***/ "./src/ui/ui-items/createProjectCard.js":
/*!**********************************************!*\
  !*** ./src/ui/ui-items/createProjectCard.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProjectCard": () => (/* binding */ createProjectCard)
/* harmony export */ });
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createController */ "./src/createController.js");
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../displayController */ "./src/ui/displayController.js");



const createProjectCard = (function(){
    function createContainer(project){
        const $projectCardContainer = document.createElement('div')
        $projectCardContainer.id = project.itemId
        $projectCardContainer.classList.add('card');
        $projectCardContainer.classList.add('project');

        $projectCardContainer.innerHTML = `<h2>${project.title}</h2>
                <div class="projectTaskContainer" id='${project.itemId}'>

                </div>
                </div>`

        return $projectCardContainer
    }

    function createSubTasks(project){
        const $projectTaskContainer = document.querySelector(`div.projectTaskContainer[id='${project.itemId}']`);

        project.subTasks.forEach(subTask => {
            const $projectTask = document.createElement('div');
            $projectTask.classList.add('projectTask');
            $projectTask.id = subTask.itemId;

            

            $projectTask.innerHTML = `
            <div class="taskText">
                            <div class="topTask">
                                <p class="title">${subTask.title}</p>
                                <p class="date">${subTask.date}</p>
                            </div>
                            <div class="bottomTask">
                                <p>${subTask.description}</p>
                            </div>
                        </div>
                        <img src="./images/trash-2.svg" class="trash" id='${subTask.itemId}'>

                        <input type="checkbox" id='${subTask.itemId}'>
            `

            $projectTaskContainer.appendChild($projectTask)
            const $checkBox = $projectTask.querySelector(`input`);

            if(subTask.complete){
                project.completeTasks++
                $checkBox.checked = true;
                e.target.parentNode.classList.add('complete');
            }

            const $trashButton = $projectTask.querySelector(`img`);

            $trashButton.addEventListener('click', (e) => {
                let taskId = e.target.id

                console.log('removing')
                let taskToRem = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(taskId);

                console.log(taskToRem)
                _createController__WEBPACK_IMPORTED_MODULE_0__.createController.removeSubTask(taskToRem)
            })

            $checkBox.addEventListener('change', (e) =>{
                let subTaskId = e.target.id
                let subTask = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(subTaskId)
                let projectParent = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(e.target.parentNode.parentNode.parentNode.id);

                if(subTask.complete){
                    subTask.complete = false;
                    if(e.target.parentNode.classList.contains('complete')){
                        e.target.parentNode.classList.remove('complete');
                        projectParent.completeTasks--

                        projectParent.percentage = (projectParent.completeTasks / projectParent.subTasks.length) *100
                        const $percentage = e.target.parentNode.parentNode.parentNode.querySelector('h3')
                        $percentage.textContent = projectParent.percentage + '%'
                    }
                } else if(!subTask.complete){
                    subTask.complete = true;
                    e.target.parentNode.classList.add('complete')
                    projectParent.completeTasks++

                    projectParent.percentage = (projectParent.completeTasks / projectParent.subTasks.length) *100

                    const $percentage = e.target.parentNode.parentNode.parentNode.querySelector('h3')
                    $percentage.textContent = projectParent.percentage + '%'
                }
                console.log('updating')

                console.log(subTask)
            })
        })

    return $projectTaskContainer
    }

    function createPercentage(project){
        const $percentage = document.createElement('h3');
        
        if(project.subTasks.length){
            project.percentage = (project.completeTasks / project.subTasks.length) *100
        } else{
            project.percentage = 0;
        }
        $percentage.textContent = project.percentage + '%'

        return $percentage
    }

    function createAddButton(project){
        let $but = document.createElement('img');
        $but.src='./images/plus-circle.svg';
        $but.classList.add('addTaskButton')

        $but.addEventListener('click', (e) => {
            console.log('addclick')
            const project = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(e.target.parentNode.parentNode.id);

            _displayController__WEBPACK_IMPORTED_MODULE_1__.displayController.createSubTaskPopup(project)
        })

        return $but
    }

    function createRemoveButton(project){
        let $rbut = document.createElement('img');
        $rbut.src='./images/trash-2.svg';
        $rbut.classList.add('removeProjectButton')

        $rbut.addEventListener('click', (e) =>{
            const project = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(e.target.parentNode.parentNode.id);

            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.removeProject(project)
        })

        return $rbut
    }

    return{
        createContainer,
        createSubTasks,
        createPercentage,
        createAddButton,
        createRemoveButton
    }
})();



/***/ }),

/***/ "./src/ui/ui-items/createSubTaskUI.js":
/*!********************************************!*\
  !*** ./src/ui/ui-items/createSubTaskUI.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSubTaskUI": () => (/* binding */ createSubTaskUI)
/* harmony export */ });
/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../displayController */ "./src/ui/displayController.js");
/* harmony import */ var _inputController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inputController */ "./src/ui/inputController.js");



const createSubTaskUI = (function(){
    function createHeader(){
        const $h2 = document.createElement('h2');
        $h2.textContent='Create a subtask';
        
        return $h2
    }


    function createFormBody(){
        const $form = document.createElement('form');

        $form.innerHTML = `
        <div class="formInputContainer">
                <label for="title">Title</label>
                <input type="text" name="title">
            </div>

            <div class="formInputContainer">
                <label for="description">Description</label>
                <input type="text" name="description">
            </div>

            <div class="formInputContainer">
                <label for="date">Due</label>
                    <input type="date" name="date">
            </div>

            <div class="formInputContainer">
                <label for="priority">Priority</label>

            <div class="radioContainer">
                <input type="radio" name="priority" value="high">
                <input type="radio" name="priority" value="medium">
                <input type="radio" name="priority" value="low">    
            </div>
            <div class="labelRadioContainer">
                <label for="high">High</label>
                <label for="medium">Medium</label>
                <label for="low">Low</label>
            </div>
        </div>`

        return $form
    }

    function createCreateButton(project){
        let $createButton = document.createElement('p')
        $createButton.id = 'button'
        $createButton.textContent = 'Create subtask';

        $createButton.addEventListener('click', (e) => {
            _inputController__WEBPACK_IMPORTED_MODULE_1__.inputController.parseCreateSubTask(project);
            _displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.closeCreateItemPopup();
        })

        return $createButton
    }

    function createExitButton(){
        let $closeButton = document.createElement('p')
        $closeButton.id = 'remButton'
        $closeButton.textContent = 'Exit';

        $closeButton.addEventListener('click', (e) => {
            _displayController__WEBPACK_IMPORTED_MODULE_0__.displayController.closeCreateItemPopup();
        })

        return $closeButton
    }

    return{
        createFormBody,
        createHeader,
        createCreateButton,
        createExitButton
    }
})();



/***/ }),

/***/ "./src/ui/ui-items/createToDoCard.js":
/*!*******************************************!*\
  !*** ./src/ui/ui-items/createToDoCard.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createToDoCard": () => (/* binding */ createToDoCard)
/* harmony export */ });
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../createController */ "./src/createController.js");


const createToDoCard = (function(){
    function createContainer(toDo){
        const $cardDiv = document.createElement('div');
        $cardDiv.id = toDo.itemId;
        $cardDiv.classList.add('card');
        $cardDiv.classList.add('task');

        let circleColour = "";

        if(toDo.priority === 'high'){
            circleColour = '#ff6e6e';
        } else if(toDo.priority === 'medium'){
            circleColour = '#ffb46e';
        } else if(toDo.priority === 'low'){
            circleColour = '#fdff8d';
        }

        if(toDo.complete){
            $cardDiv.classList.add('complete');
        }

        $cardDiv.innerHTML += `
        <div class="titleContainer">
            <h2 id="title">${toDo.title}</h2>
            <div id="colourCircle" style='background-color:${circleColour};'>&nbsp;</div>
        </div>
        <p id="desc">${toDo.description}</p>
        <p id="date">${toDo.date}</p>`


        return $cardDiv
    }

    function createRemoveButton(toDo){
        const $removeButton = document.createElement('img')
        $removeButton.src = './images/trash-2.svg';
        $removeButton.id = 'trash';

        $removeButton.addEventListener('click', (e) => {
            _createController__WEBPACK_IMPORTED_MODULE_0__.createController.removeToDo(toDo)
        })

        return $removeButton
    }

    function createCheckBox(){
        const $checkBox = document.createElement('input');
        $checkBox.type = 'checkbox';

        $checkBox.addEventListener('change', (e) =>{
            const $toDo = $checkBox.parentNode.parentNode;
            const toDoId = $toDo.id

            const taskToUpdate = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(toDoId)

            if(taskToUpdate.complete === false){
                taskToUpdate.complete = true;
                $toDo.classList.toggle('complete');
            } else if(taskToUpdate.complete === true) {
                taskToUpdate.complete = false;
                $toDo.classList.toggle('complete');
            }
        })

        return $checkBox;
    }

    return{
        createContainer,
        createRemoveButton,
        createCheckBox
    }

})()



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createController */ "./src/createController.js");
/* harmony import */ var _ui_displayController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/displayController */ "./src/ui/displayController.js");



const $createItem = document.querySelector('li#createTask')

const sampleProj1 = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createProject('Kitchen Cleanup');
_createController__WEBPACK_IMPORTED_MODULE_0__.createController.createSubTask(sampleProj1, 'Clean the dishes', 'In the sink from last night', 'high', '28-08-2022')
_createController__WEBPACK_IMPORTED_MODULE_0__.createController.createSubTask(sampleProj1, 'Mop the floor', 'Mop is in the utility room', 'medium', '30-08-2022')

_createController__WEBPACK_IMPORTED_MODULE_0__.createController.createToDo('Feed the dog', 'Dry food in the pantry', 'low', '01-09-2022')
_createController__WEBPACK_IMPORTED_MODULE_0__.createController.createToDo('Collect the kids', 'School finishes at 14:00', 'high', '02-09-2022')

const sampleProj2 = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.createProject('School Projects');
_createController__WEBPACK_IMPORTED_MODULE_0__.createController.createSubTask(sampleProj2, 'Geography Research Study', 'On volcanoes and economic impacts', 'high', '28-08-2022')
_createController__WEBPACK_IMPORTED_MODULE_0__.createController.createSubTask(sampleProj2, 'Science Lab Report', 'Effects of salt in drinking water', 'low', '30-08-2022')

_createController__WEBPACK_IMPORTED_MODULE_0__.createController.createToDo('Finish To-do app', 'Almost done!', 'medium', '11-09-2022')

_ui_displayController__WEBPACK_IMPORTED_MODULE_1__.displayController.renderDash()

$createItem.addEventListener('click', ()=>{
    _ui_displayController__WEBPACK_IMPORTED_MODULE_1__.displayController.createItemPopup()
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTJCO0FBQzNCO0FBQ0Esb0JBQW9CLDZFQUE4QjtBQUNsRCw2RUFBOEI7QUFDOUIsNkVBQThCO0FBQzlCO0FBQ0EsMEVBQTJCO0FBQzNCO0FBQ0EsK0VBQTRCO0FBQzVCO0FBQ0E7QUFDQSxJQUFJLG9GQUFpQztBQUNyQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N1YlRhc2tDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b0RvQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkvZGlzcGxheUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpL2lucHV0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkvdWktaXRlbXMvY3JlYXRlSXRlbVVJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS91aS1pdGVtcy9jcmVhdGVQcm9qZWN0Q2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkvdWktaXRlbXMvY3JlYXRlU3ViVGFza1VJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS91aS1pdGVtcy9jcmVhdGVUb0RvQ2FyZC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt0b0RvQ29udHJvbGxlcn0gZnJvbSAnLi90b0RvQ29udHJvbGxlci5qcydcclxuaW1wb3J0IHtwcm9qZWN0Q29udHJvbGxlcn0gZnJvbSAnLi9wcm9qZWN0Q29udHJvbGxlci5qcydcclxuaW1wb3J0IHtzdWJUYXNrQ29udHJvbGxlcn0gZnJvbSAnLi9zdWJUYXNrQ29udHJvbGxlci5qcydcclxuaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tICcuL3VpL2Rpc3BsYXlDb250cm9sbGVyLmpzJztcclxuXHJcbmNvbnN0IGNyZWF0ZUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGxldCBpdGVtcyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSl7XHJcbiAgICAgICAgbGV0IG5ld1RvRG8gPSB7dHlwZTogJ3RvRG8nLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlLCBjb21wbGV0ZTogZmFsc2V9XHJcblxyXG4gICAgICAgIG5ld1RvRG8uaXRlbUlkID0gaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgIGl0ZW1zLnB1c2gobmV3VG9Ebyk7XHJcblxyXG4gICAgICAgIG5ld1RvRG8udG9Eb0lkID0gdG9Eb0NvbnRyb2xsZXIuZ2V0TGVuZ3RoKClcclxuXHJcbiAgICAgICAgdG9Eb0NvbnRyb2xsZXIuY3JlYXRlKG5ld1RvRG8pXHJcbiAgICAgICAgcmV0dXJuIG5ld1RvRG9cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlKXtcclxuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IHt0eXBlOiAncHJvamVjdCcsIHRpdGxlLCBzdWJUYXNrczogW10sIGNvbXBsZXRlOiBmYWxzZSwgY29tcGxldGVUYXNrczogMCwgcGVyY2VudGFnZTogMH1cclxuXHJcbiAgICAgICAgbmV3UHJvamVjdC5pdGVtSWQgPSBpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgaXRlbXMucHVzaChuZXdQcm9qZWN0KTtcclxuXHJcbiAgICAgICAgbmV3UHJvamVjdC5wcm9qZWN0SWQgPSBwcm9qZWN0Q29udHJvbGxlci5nZXRMZW5ndGgoKTtcclxuXHJcbiAgICAgICAgcHJvamVjdENvbnRyb2xsZXIuY3JlYXRlKG5ld1Byb2plY3QpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtcylcclxuICAgICAgICByZXR1cm4gbmV3UHJvamVjdFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN1YlRhc2socHJvamVjdCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSl7XHJcbiAgICAgICAgY29uc3QgcGFyZW50SWQgPSBwcm9qZWN0Lml0ZW1JZDtcclxuICAgICAgICBsZXQgbmV3U3ViVGFzayA9IHt0eXBlOiAnc3ViVGFzaycsIHBhcmVudElkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlLCBjb21wbGV0ZTogZmFsc2V9O1xyXG4gICAgICAgIG5ld1N1YlRhc2suaXRlbUlkID0gaXRlbXMubGVuZ3RoXHJcbiAgICAgICAgaXRlbXMucHVzaChuZXdTdWJUYXNrKTtcclxuXHJcbiAgICAgICAgbmV3U3ViVGFzay5zdWJUYXNrSWQgPSBzdWJUYXNrQ29udHJvbGxlci5nZXRMZW5ndGgoKVxyXG5cclxuICAgICAgICBzdWJUYXNrQ29udHJvbGxlci5jcmVhdGUobmV3U3ViVGFzayk7XHJcbiAgICAgICAgcmV0dXJuIG5ld1N1YlRhc2tcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBmaW5kSXRlbShpZCl7XHJcbiAgICAgICAgY29uc3QgZm91bmRJdGVtID0gaXRlbXMuZmluZChpID0+IGkuaXRlbUlkID09IGlkKTtcclxuICAgICAgICByZXR1cm4gZm91bmRJdGVtXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9nSXRlbXMoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtcylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVTdWJUYXNrKHN1YlRhc2spe1xyXG4gICAgICAgIGl0ZW1zLnNwbGljZShpdGVtcy5pbmRleE9mKGl0ZW1zLmZpbmQoIGkgPT4gaS5pdGVtSWQgPT09c3ViVGFzay5pdGVtSWQpKSwgMSlcclxuICAgICAgICBzdWJUYXNrQ29udHJvbGxlci5yZW1vdmUoc3ViVGFzaylcclxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJEYXNoKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KHByb2plY3Qpe1xyXG4gICAgICAgIHByb2plY3Quc3ViVGFza3MuZm9yRWFjaCh0YXNrID0+e1xyXG4gICAgICAgICAgICByZW1vdmVTdWJUYXNrKHRhc2spO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGl0ZW1zLnNwbGljZShpdGVtcy5pbmRleE9mKGl0ZW1zLmZpbmQoIGkgPT4gaS5pdGVtSWQgPT09cHJvamVjdC5pdGVtSWQpKSwgMSlcclxuXHJcbiAgICAgICAgcHJvamVjdENvbnRyb2xsZXIucmVtb3ZlKHByb2plY3QpXHJcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyRGFzaCgpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlVG9Ebyh0b0RvKXtcclxuICAgICAgICBpdGVtcy5zcGxpY2UoaXRlbXMuaW5kZXhPZihpdGVtcy5maW5kKCBpID0+IGkuaXRlbUlkID09PXRvRG8uaXRlbUlkKSksIDEpXHJcbiAgICAgICAgdG9Eb0NvbnRyb2xsZXIucmVtb3ZlKHRvRG8pXHJcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyRGFzaCgpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0SXRlbXMoKXtcclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGZpbmRJdGVtLFxyXG4gICAgICAgIGxvZ0l0ZW1zLFxyXG4gICAgICAgIGNyZWF0ZVRvRG8sXHJcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcclxuICAgICAgICBjcmVhdGVTdWJUYXNrLFxyXG4gICAgICAgIHJlbW92ZVN1YlRhc2ssXHJcbiAgICAgICAgZ2V0SXRlbXMsXHJcbiAgICAgICAgcmVtb3ZlUHJvamVjdCxcclxuICAgICAgICByZW1vdmVUb0RvXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0iLCJpbXBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0gZnJvbSBcIi4vY3JlYXRlQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgcHJvamVjdENvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRMZW5ndGgoKXtcclxuICAgICAgICByZXR1cm4gcHJvamVjdHMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShwcm9qZWN0KXtcclxuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlKHByb2plY3Qpe1xyXG4gICAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0ocHJvamVjdCkpLCAxKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBnZXRMZW5ndGgsXHJcbiAgICAgICAgY3JlYXRlLFxyXG4gICAgICAgIHJlbW92ZVxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHtwcm9qZWN0Q29udHJvbGxlcn07IiwiaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tIFwiLi91aS9kaXNwbGF5Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0gZnJvbSBcIi4vY3JlYXRlQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3Qgc3ViVGFza0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgc3ViVGFza3MgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRMZW5ndGgoKXtcclxuICAgICAgICByZXR1cm4gc3ViVGFza3MubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShzdWJUYXNrKXtcclxuICAgICAgICBjb25zdCBwcm9qZWN0VG9BZGRUbyA9IGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oc3ViVGFzay5wYXJlbnRJZCk7XHJcbiAgICAgICAgc3ViVGFza3MucHVzaChzdWJUYXNrKTtcclxuXHJcbiAgICAgICAgcHJvamVjdFRvQWRkVG8uc3ViVGFza3MucHVzaChzdWJUYXNrKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZShzdWJUYXNrKXtcclxuICAgICAgICBzdWJUYXNrcy5zcGxpY2Uoc3ViVGFza3MuaW5kZXhPZihzdWJUYXNrcy5maW5kKGkgPT4gaS5pdGVtSWQgPT09IHN1YlRhc2suaXRlbUlkKSksIDEpXHJcbiAgICAgICAgY29uc3QgcGFyZW50UHJvamVjdCA9IGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oc3ViVGFzay5wYXJlbnRJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGFyZW50UHJvamVjdClcclxuICAgICAgICBjb25zdCBpbmRleE9mVGFzayA9IHBhcmVudFByb2plY3Quc3ViVGFza3MuaW5kZXhPZihwYXJlbnRQcm9qZWN0LnN1YlRhc2tzLmZpbmQoaSA9PiBpLmlkID09PSBzdWJUYXNrLmlkKSk7XHJcblxyXG4gICAgICAgIHBhcmVudFByb2plY3Quc3ViVGFza3Muc3BsaWNlKHBhcmVudFByb2plY3Quc3ViVGFza3MuaW5kZXhPZihwYXJlbnRQcm9qZWN0LnN1YlRhc2tzLmZpbmQoaSA9PiBpLml0ZW1JZCA9PT0gc3ViVGFzay5pdGVtSWQpKSwxKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBnZXRMZW5ndGgsXHJcbiAgICAgICAgY3JlYXRlLFxyXG4gICAgICAgIHJlbW92ZVxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHtzdWJUYXNrQ29udHJvbGxlcn07IiwiaW1wb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IGZyb20gXCIuL2NyZWF0ZUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHRvRG9Db250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHRvRG9zID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0b0Rvcy5sZW5ndGhcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUodG9Ebyl7XHJcbiAgICAgICAgdG9Eb3MucHVzaCh0b0RvKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZSh0b0RvKXtcclxuICAgICAgICB0b0Rvcy5zcGxpY2UodG9Eb3MuaW5kZXhPZihjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKHRvRG8pKSwgMSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgY3JlYXRlLFxyXG4gICAgICAgIGdldExlbmd0aCxcclxuICAgICAgICByZW1vdmVcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7dG9Eb0NvbnRyb2xsZXJ9OyIsImltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9jcmVhdGVDb250cm9sbGVyJztcclxuIFxyXG5pbXBvcnQgeyBjcmVhdGVJdGVtVUkgfSBmcm9tICcuL3VpLWl0ZW1zL2NyZWF0ZUl0ZW1VSSdcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdENhcmQgfSBmcm9tICcuL3VpLWl0ZW1zL2NyZWF0ZVByb2plY3RDYXJkJztcclxuaW1wb3J0IHsgY3JlYXRlU3ViVGFza1VJIH0gZnJvbSAnLi91aS1pdGVtcy9jcmVhdGVTdWJUYXNrVUknO1xyXG5pbXBvcnQgeyBjcmVhdGVUb0RvQ2FyZCB9IGZyb20gJy4vdWktaXRlbXMvY3JlYXRlVG9Eb0NhcmQnO1xyXG5cclxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0ICRjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcclxuICAgIGNvbnN0ICRjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NhcmRDb250YWluZXInKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVJdGVtUG9wdXAoKXtcclxuICAgICAgICBjb25zdCAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcmVhdGVUYXNrUG9wdXAnKTtcclxuXHJcbiAgICAgICAgbGV0ICRoZWFkZXIgPSBjcmVhdGVJdGVtVUkuY3JlYXRlSGVhZGVyKCk7XHJcbiAgICAgICAgbGV0ICRmb3JtQm9keSA9IGNyZWF0ZUl0ZW1VSS5jcmVhdGVGb3JtQm9keSgpO1xyXG4gICAgICAgIGxldCAkY3JlYXRlID0gY3JlYXRlSXRlbVVJLmNyZWF0ZUNyZWF0ZUJ1dHRvbigpO1xyXG4gICAgICAgIGxldCAkZXhpdCA9IGNyZWF0ZUl0ZW1VSS5jcmVhdGVFeGl0QnV0dG9uKCk7XHJcblxyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoJGhlYWRlcilcclxuICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKCRmb3JtQm9keSlcclxuICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKCRjcmVhdGUpXHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZCgkZXhpdClcclxuXHJcbiAgICAgICAgJGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lcilcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZUNyZWF0ZUl0ZW1Qb3B1cCgpe1xyXG4gICAgICAgIGNvbnN0ICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY3JlYXRlVGFza1BvcHVwJyk7XHJcblxyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5yZW1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9IGNyZWF0ZVByb2plY3RDYXJkLmNyZWF0ZUNvbnRhaW5lcihwcm9qZWN0KTtcclxuICAgICAgICAkY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCgkY29udGFpbmVyKTtcclxuICAgICAgICBjb25zdCAkc3ViVGFza3MgPSBjcmVhdGVQcm9qZWN0Q2FyZC5jcmVhdGVTdWJUYXNrcyhwcm9qZWN0KTtcclxuICAgICAgICAkY29udGFpbmVyLmFwcGVuZENoaWxkKCRzdWJUYXNrcyk7XHJcbiAgICAgICAgY29uc3QgJGJvdHRvbUNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgJGJvdHRvbUNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbUluZm8nKVxyXG4gICAgICAgICRib3R0b21Db250cm9scy5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0Q2FyZC5jcmVhdGVBZGRCdXR0b24ocHJvamVjdCkpXHJcbiAgICAgICAgJGJvdHRvbUNvbnRyb2xzLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RDYXJkLmNyZWF0ZVBlcmNlbnRhZ2UocHJvamVjdCkpXHJcbiAgICAgICAgJGJvdHRvbUNvbnRyb2xzLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RDYXJkLmNyZWF0ZVJlbW92ZUJ1dHRvbihwcm9qZWN0KSlcclxuXHJcbiAgICAgICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkYm90dG9tQ29udHJvbHMpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9Ebyh0b0RvKXtcclxuICAgICAgICBjb25zdCAkY29udGFpbmVyID0gY3JlYXRlVG9Eb0NhcmQuY3JlYXRlQ29udGFpbmVyKHRvRG8pO1xyXG4gICAgICAgICRjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKCRjb250YWluZXIpO1xyXG5cclxuICAgICAgICBjb25zdCAkYm90dG9tQ29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAkYm90dG9tQ29udHJvbHMuY2xhc3NMaXN0LmFkZCgnYm90dG9tQ29udHJvbHMnKTtcclxuICAgICAgICBjb25zdCAkcmVtb3ZlQnV0dG9uID0gY3JlYXRlVG9Eb0NhcmQuY3JlYXRlUmVtb3ZlQnV0dG9uKHRvRG8pO1xyXG4gICAgICAgIGNvbnN0ICRjaGVja0JveCA9IGNyZWF0ZVRvRG9DYXJkLmNyZWF0ZUNoZWNrQm94KHRvRG8pO1xyXG4gICAgICAgICRib3R0b21Db250cm9scy5hcHBlbmRDaGlsZCgkY2hlY2tCb3gpO1xyXG4gICAgICAgICRib3R0b21Db250cm9scy5hcHBlbmRDaGlsZCgkcmVtb3ZlQnV0dG9uKTtcclxuXHJcbiAgICAgICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkYm90dG9tQ29udHJvbHMpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyRGFzaCgpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gY3JlYXRlQ29udHJvbGxlci5nZXRJdGVtcygpO1xyXG4gICAgICAgIGNsZWFuRGFzaCgpXHJcblxyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PntcclxuICAgICAgICAgICAgaWYoaXRlbS50eXBlID09ICdwcm9qZWN0Jyl7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0KGl0ZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoaXRlbS50eXBlID09ICd0b0RvJyl7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVUb0RvKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhbkRhc2goKXtcclxuICAgICAgICAkY2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTdWJUYXNrUG9wdXAocHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3JlYXRlVGFza1BvcHVwJyk7XHJcblxyXG4gICAgICAgIGxldCAkaGVhZGVyID0gY3JlYXRlU3ViVGFza1VJLmNyZWF0ZUhlYWRlcigpO1xyXG4gICAgICAgIGxldCAkZm9ybUJvZHkgPSBjcmVhdGVTdWJUYXNrVUkuY3JlYXRlRm9ybUJvZHkoKTtcclxuICAgICAgICBsZXQgJGNyZWF0ZSA9IGNyZWF0ZVN1YlRhc2tVSS5jcmVhdGVDcmVhdGVCdXR0b24ocHJvamVjdCk7XHJcbiAgICAgICAgbGV0ICRleGl0ID0gY3JlYXRlU3ViVGFza1VJLmNyZWF0ZUV4aXRCdXR0b24oKTtcclxuXHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZCgkaGVhZGVyKVxyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoJGZvcm1Cb2R5KVxyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoJGNyZWF0ZSlcclxuICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKCRleGl0KVxyXG5cclxuICAgICAgICAkY29udGVudERpdi5hcHBlbmRDaGlsZCgkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgY3JlYXRlSXRlbVBvcHVwLFxyXG4gICAgICAgIGNsb3NlQ3JlYXRlSXRlbVBvcHVwLFxyXG4gICAgICAgIGNyZWF0ZVByb2plY3QsXHJcbiAgICAgICAgcmVuZGVyRGFzaCxcclxuICAgICAgICBjcmVhdGVTdWJUYXNrUG9wdXBcclxuICAgIH1cclxufSkoKVxyXG5cclxuZXhwb3J0IHtkaXNwbGF5Q29udHJvbGxlcn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IGZyb20gXCIuLi9jcmVhdGVDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IGlucHV0Q29udHJvbGxlciA9IChmdW5jdGlvbigpe1xyXG4gICAgZnVuY3Rpb24gcGFyc2VDcmVhdGVJdGVtKCl7XHJcbiAgICAgICAgY29uc3QgdHlwZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ0eXBlXCJdOmNoZWNrZWQnKS52YWx1ZTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ0aXRsZVwiXScpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJkYXRlXCJdJykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG5cclxuICAgICAgICBpZih0eXBlID09PSAncHJvamVjdCcpe1xyXG4gICAgICAgICAgICBjcmVhdGVDb250cm9sbGVyLmNyZWF0ZVByb2plY3QodGl0bGUpXHJcbiAgICAgICAgfSBlbHNlIGlmKHR5cGUgPT09ICd0b0RvJyl7XHJcbiAgICAgICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKVxyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJEYXNoKCk7XHJcblxyXG4gICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIubG9nSXRlbXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXJzZUNyZWF0ZVN1YlRhc2socHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGl0bGVcIl0nKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJkZXNjcmlwdGlvblwiXScpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZGF0ZVwiXScpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZTtcclxuXHJcbiAgICAgICAgY3JlYXRlQ29udHJvbGxlci5jcmVhdGVTdWJUYXNrKHByb2plY3QsIHRpdGxlLGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSlcclxuXHJcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyRGFzaCgpO1xyXG5cclxuICAgICAgICBjcmVhdGVDb250cm9sbGVyLmxvZ0l0ZW1zKClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgcGFyc2VDcmVhdGVJdGVtLFxyXG4gICAgICAgIHBhcnNlQ3JlYXRlU3ViVGFza1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgaW5wdXRDb250cm9sbGVyIH0iLCJpbXBvcnQgeyBkaXNwbGF5Q29udHJvbGxlciB9IGZyb20gXCIuLi9kaXNwbGF5Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBpbnB1dENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vaW5wdXRDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCBjcmVhdGVJdGVtVUkgPSAoZnVuY3Rpb24oKXtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xyXG4gICAgICAgIGNvbnN0ICRoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgJGgyLnRleHRDb250ZW50PSdDcmVhdGUgYW4gSXRlbSc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICRoMlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVGb3JtQm9keSgpe1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5cclxuICAgICAgICAkZm9ybS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtSW5wdXRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlR5cGU8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInR5cGVcIiB2YWx1ZT1cInRvRG9cIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidHlwZVwiIHZhbHVlPVwicHJvamVjdFwiPiAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxSYWRpb0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRvRG9cIj5Ub0RvPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm9qZWN0XCI+UHJvamVjdDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPkR1ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW9Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImhpZ2hcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cIm1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibG93XCI+ICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsUmFkaW9Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJoaWdoXCI+SGlnaDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVkaXVtXCI+TWVkaXVtPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsb3dcIj5Mb3c8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gXHJcblxyXG4gICAgICAgIHJldHVybiAkZm9ybVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNyZWF0ZUJ1dHRvbigpe1xyXG4gICAgICAgIGxldCAkY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgJGNyZWF0ZUJ1dHRvbi5pZCA9ICdidXR0b24nXHJcbiAgICAgICAgJGNyZWF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUgSXRlbSc7XHJcblxyXG4gICAgICAgICRjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpbnB1dENvbnRyb2xsZXIucGFyc2VDcmVhdGVJdGVtKCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNsb3NlQ3JlYXRlSXRlbVBvcHVwKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICRjcmVhdGVCdXR0b25cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVFeGl0QnV0dG9uKCl7XHJcbiAgICAgICAgbGV0ICRjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICRjbG9zZUJ1dHRvbi5pZCA9ICdyZW1CdXR0b24nXHJcbiAgICAgICAgJGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0V4aXQnO1xyXG5cclxuICAgICAgICAkY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5jbG9zZUNyZWF0ZUl0ZW1Qb3B1cCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAkY2xvc2VCdXR0b25cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgY3JlYXRlRm9ybUJvZHksXHJcbiAgICAgICAgY3JlYXRlSGVhZGVyLFxyXG4gICAgICAgIGNyZWF0ZUNyZWF0ZUJ1dHRvbixcclxuICAgICAgICBjcmVhdGVFeGl0QnV0dG9uXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQge2NyZWF0ZUl0ZW1VSX0iLCJpbXBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0gZnJvbSBcIi4uLy4uL2NyZWF0ZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZVByb2plY3RDYXJkID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVDb250YWluZXIocHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgJHByb2plY3RDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAkcHJvamVjdENhcmRDb250YWluZXIuaWQgPSBwcm9qZWN0Lml0ZW1JZFxyXG4gICAgICAgICRwcm9qZWN0Q2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICAgICAgJHByb2plY3RDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcclxuXHJcbiAgICAgICAgJHByb2plY3RDYXJkQ29udGFpbmVyLmlubmVySFRNTCA9IGA8aDI+JHtwcm9qZWN0LnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdFRhc2tDb250YWluZXJcIiBpZD0nJHtwcm9qZWN0Lml0ZW1JZH0nPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YFxyXG5cclxuICAgICAgICByZXR1cm4gJHByb2plY3RDYXJkQ29udGFpbmVyXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlU3ViVGFza3MocHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgJHByb2plY3RUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2LnByb2plY3RUYXNrQ29udGFpbmVyW2lkPScke3Byb2plY3QuaXRlbUlkfSddYCk7XHJcblxyXG4gICAgICAgIHByb2plY3Quc3ViVGFza3MuZm9yRWFjaChzdWJUYXNrID0+IHtcclxuICAgICAgICAgICAgY29uc3QgJHByb2plY3RUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICRwcm9qZWN0VGFzay5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGFzaycpO1xyXG4gICAgICAgICAgICAkcHJvamVjdFRhc2suaWQgPSBzdWJUYXNrLml0ZW1JZDtcclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgJHByb2plY3RUYXNrLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wVGFza1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj4ke3N1YlRhc2sudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPiR7c3ViVGFzay5kYXRlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbVRhc2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3N1YlRhc2suZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vaW1hZ2VzL3RyYXNoLTIuc3ZnXCIgY2xhc3M9XCJ0cmFzaFwiIGlkPScke3N1YlRhc2suaXRlbUlkfSc+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9JyR7c3ViVGFzay5pdGVtSWR9Jz5cclxuICAgICAgICAgICAgYFxyXG5cclxuICAgICAgICAgICAgJHByb2plY3RUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKCRwcm9qZWN0VGFzaylcclxuICAgICAgICAgICAgY29uc3QgJGNoZWNrQm94ID0gJHByb2plY3RUYXNrLnF1ZXJ5U2VsZWN0b3IoYGlucHV0YCk7XHJcblxyXG4gICAgICAgICAgICBpZihzdWJUYXNrLmNvbXBsZXRlKXtcclxuICAgICAgICAgICAgICAgIHByb2plY3QuY29tcGxldGVUYXNrcysrXHJcbiAgICAgICAgICAgICAgICAkY2hlY2tCb3guY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICR0cmFzaEJ1dHRvbiA9ICRwcm9qZWN0VGFzay5xdWVyeVNlbGVjdG9yKGBpbWdgKTtcclxuXHJcbiAgICAgICAgICAgICR0cmFzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFza0lkID0gZS50YXJnZXQuaWRcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVtb3ZpbmcnKVxyXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tUb1JlbSA9IGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0odGFza0lkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrVG9SZW0pXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVDb250cm9sbGVyLnJlbW92ZVN1YlRhc2sodGFza1RvUmVtKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgJGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PntcclxuICAgICAgICAgICAgICAgIGxldCBzdWJUYXNrSWQgPSBlLnRhcmdldC5pZFxyXG4gICAgICAgICAgICAgICAgbGV0IHN1YlRhc2sgPSBjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKHN1YlRhc2tJZClcclxuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0UGFyZW50ID0gY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbShlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc3ViVGFzay5jb21wbGV0ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViVGFzay5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21wbGV0ZScpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdjb21wbGV0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UGFyZW50LmNvbXBsZXRlVGFza3MtLVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFBhcmVudC5wZXJjZW50YWdlID0gKHByb2plY3RQYXJlbnQuY29tcGxldGVUYXNrcyAvIHByb2plY3RQYXJlbnQuc3ViVGFza3MubGVuZ3RoKSAqMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwZXJjZW50YWdlID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignaDMnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcGVyY2VudGFnZS50ZXh0Q29udGVudCA9IHByb2plY3RQYXJlbnQucGVyY2VudGFnZSArICclJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZighc3ViVGFzay5jb21wbGV0ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViVGFzay5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFBhcmVudC5jb21wbGV0ZVRhc2tzKytcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFBhcmVudC5wZXJjZW50YWdlID0gKHByb2plY3RQYXJlbnQuY29tcGxldGVUYXNrcyAvIHByb2plY3RQYXJlbnQuc3ViVGFza3MubGVuZ3RoKSAqMTAwXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRwZXJjZW50YWdlID0gZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignaDMnKVxyXG4gICAgICAgICAgICAgICAgICAgICRwZXJjZW50YWdlLnRleHRDb250ZW50ID0gcHJvamVjdFBhcmVudC5wZXJjZW50YWdlICsgJyUnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXBkYXRpbmcnKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN1YlRhc2spXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICByZXR1cm4gJHByb2plY3RUYXNrQ29udGFpbmVyXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUGVyY2VudGFnZShwcm9qZWN0KXtcclxuICAgICAgICBjb25zdCAkcGVyY2VudGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYocHJvamVjdC5zdWJUYXNrcy5sZW5ndGgpe1xyXG4gICAgICAgICAgICBwcm9qZWN0LnBlcmNlbnRhZ2UgPSAocHJvamVjdC5jb21wbGV0ZVRhc2tzIC8gcHJvamVjdC5zdWJUYXNrcy5sZW5ndGgpICoxMDBcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHByb2plY3QucGVyY2VudGFnZSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICRwZXJjZW50YWdlLnRleHRDb250ZW50ID0gcHJvamVjdC5wZXJjZW50YWdlICsgJyUnXHJcblxyXG4gICAgICAgIHJldHVybiAkcGVyY2VudGFnZVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFkZEJ1dHRvbihwcm9qZWN0KXtcclxuICAgICAgICBsZXQgJGJ1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICRidXQuc3JjPScuL2ltYWdlcy9wbHVzLWNpcmNsZS5zdmcnO1xyXG4gICAgICAgICRidXQuY2xhc3NMaXN0LmFkZCgnYWRkVGFza0J1dHRvbicpXHJcblxyXG4gICAgICAgICRidXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkY2xpY2snKVxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbShlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY3JlYXRlU3ViVGFza1BvcHVwKHByb2plY3QpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICRidXRcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVSZW1vdmVCdXR0b24ocHJvamVjdCl7XHJcbiAgICAgICAgbGV0ICRyYnV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgJHJidXQuc3JjPScuL2ltYWdlcy90cmFzaC0yLnN2Zyc7XHJcbiAgICAgICAgJHJidXQuY2xhc3NMaXN0LmFkZCgncmVtb3ZlUHJvamVjdEJ1dHRvbicpXHJcblxyXG4gICAgICAgICRyYnV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+e1xyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbShlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xyXG5cclxuICAgICAgICAgICAgY3JlYXRlQ29udHJvbGxlci5yZW1vdmVQcm9qZWN0KHByb2plY3QpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICRyYnV0XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGNyZWF0ZUNvbnRhaW5lcixcclxuICAgICAgICBjcmVhdGVTdWJUYXNrcyxcclxuICAgICAgICBjcmVhdGVQZXJjZW50YWdlLFxyXG4gICAgICAgIGNyZWF0ZUFkZEJ1dHRvbixcclxuICAgICAgICBjcmVhdGVSZW1vdmVCdXR0b25cclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVByb2plY3RDYXJkIH0iLCJpbXBvcnQgeyBkaXNwbGF5Q29udHJvbGxlciB9IGZyb20gXCIuLi9kaXNwbGF5Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBpbnB1dENvbnRyb2xsZXIgfSBmcm9tIFwiLi4vaW5wdXRDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCBjcmVhdGVTdWJUYXNrVUkgPSAoZnVuY3Rpb24oKXtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xyXG4gICAgICAgIGNvbnN0ICRoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICAgICAgJGgyLnRleHRDb250ZW50PSdDcmVhdGUgYSBzdWJ0YXNrJztcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gJGgyXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvcm1Cb2R5KCl7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblxyXG4gICAgICAgICRmb3JtLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPkR1ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW9Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImhpZ2hcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cIm1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibG93XCI+ICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsUmFkaW9Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJoaWdoXCI+SGlnaDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibWVkaXVtXCI+TWVkaXVtPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsb3dcIj5Mb3c8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5gXHJcblxyXG4gICAgICAgIHJldHVybiAkZm9ybVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNyZWF0ZUJ1dHRvbihwcm9qZWN0KXtcclxuICAgICAgICBsZXQgJGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICRjcmVhdGVCdXR0b24uaWQgPSAnYnV0dG9uJ1xyXG4gICAgICAgICRjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlIHN1YnRhc2snO1xyXG5cclxuICAgICAgICAkY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaW5wdXRDb250cm9sbGVyLnBhcnNlQ3JlYXRlU3ViVGFzayhwcm9qZWN0KTtcclxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY2xvc2VDcmVhdGVJdGVtUG9wdXAoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gJGNyZWF0ZUJ1dHRvblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUV4aXRCdXR0b24oKXtcclxuICAgICAgICBsZXQgJGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgJGNsb3NlQnV0dG9uLmlkID0gJ3JlbUJ1dHRvbidcclxuICAgICAgICAkY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnRXhpdCc7XHJcblxyXG4gICAgICAgICRjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNsb3NlQ3JlYXRlSXRlbVBvcHVwKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICRjbG9zZUJ1dHRvblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBjcmVhdGVGb3JtQm9keSxcclxuICAgICAgICBjcmVhdGVIZWFkZXIsXHJcbiAgICAgICAgY3JlYXRlQ3JlYXRlQnV0dG9uLFxyXG4gICAgICAgIGNyZWF0ZUV4aXRCdXR0b25cclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7Y3JlYXRlU3ViVGFza1VJfSIsImltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vY3JlYXRlQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgY3JlYXRlVG9Eb0NhcmQgPSAoZnVuY3Rpb24oKXtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcih0b0RvKXtcclxuICAgICAgICBjb25zdCAkY2FyZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICRjYXJkRGl2LmlkID0gdG9Eby5pdGVtSWQ7XHJcbiAgICAgICAgJGNhcmREaXYuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgICAgICRjYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuXHJcbiAgICAgICAgbGV0IGNpcmNsZUNvbG91ciA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmKHRvRG8ucHJpb3JpdHkgPT09ICdoaWdoJyl7XHJcbiAgICAgICAgICAgIGNpcmNsZUNvbG91ciA9ICcjZmY2ZTZlJztcclxuICAgICAgICB9IGVsc2UgaWYodG9Eby5wcmlvcml0eSA9PT0gJ21lZGl1bScpe1xyXG4gICAgICAgICAgICBjaXJjbGVDb2xvdXIgPSAnI2ZmYjQ2ZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRvRG8ucHJpb3JpdHkgPT09ICdsb3cnKXtcclxuICAgICAgICAgICAgY2lyY2xlQ29sb3VyID0gJyNmZGZmOGQnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodG9Eby5jb21wbGV0ZSl7XHJcbiAgICAgICAgICAgICRjYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkY2FyZERpdi5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDIgaWQ9XCJ0aXRsZVwiPiR7dG9Eby50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29sb3VyQ2lyY2xlXCIgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6JHtjaXJjbGVDb2xvdXJ9Oyc+Jm5ic3A7PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgaWQ9XCJkZXNjXCI+JHt0b0RvLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8cCBpZD1cImRhdGVcIj4ke3RvRG8uZGF0ZX08L3A+YFxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuICRjYXJkRGl2XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUmVtb3ZlQnV0dG9uKHRvRG8pe1xyXG4gICAgICAgIGNvbnN0ICRyZW1vdmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgICAgICRyZW1vdmVCdXR0b24uc3JjID0gJy4vaW1hZ2VzL3RyYXNoLTIuc3ZnJztcclxuICAgICAgICAkcmVtb3ZlQnV0dG9uLmlkID0gJ3RyYXNoJztcclxuXHJcbiAgICAgICAgJHJlbW92ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIucmVtb3ZlVG9Ebyh0b0RvKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAkcmVtb3ZlQnV0dG9uXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2hlY2tCb3goKXtcclxuICAgICAgICBjb25zdCAkY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICRjaGVja0JveC50eXBlID0gJ2NoZWNrYm94JztcclxuXHJcbiAgICAgICAgJGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PntcclxuICAgICAgICAgICAgY29uc3QgJHRvRG8gPSAkY2hlY2tCb3gucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBjb25zdCB0b0RvSWQgPSAkdG9Eby5pZFxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFza1RvVXBkYXRlID0gY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbSh0b0RvSWQpXHJcblxyXG4gICAgICAgICAgICBpZih0YXNrVG9VcGRhdGUuY29tcGxldGUgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgIHRhc2tUb1VwZGF0ZS5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAkdG9Eby5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZScpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYodGFza1RvVXBkYXRlLmNvbXBsZXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrVG9VcGRhdGUuY29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICR0b0RvLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gJGNoZWNrQm94O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBjcmVhdGVDb250YWluZXIsXHJcbiAgICAgICAgY3JlYXRlUmVtb3ZlQnV0dG9uLFxyXG4gICAgICAgIGNyZWF0ZUNoZWNrQm94XHJcbiAgICB9XHJcblxyXG59KSgpXHJcblxyXG5leHBvcnQgeyBjcmVhdGVUb0RvQ2FyZCB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0gZnJvbSBcIi4vY3JlYXRlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5Q29udHJvbGxlciB9IGZyb20gXCIuL3VpL2Rpc3BsYXlDb250cm9sbGVyXCJcclxuXHJcbmNvbnN0ICRjcmVhdGVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGkjY3JlYXRlVGFzaycpXHJcblxyXG5jb25zdCBzYW1wbGVQcm9qMSA9IGNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlUHJvamVjdCgnS2l0Y2hlbiBDbGVhbnVwJyk7XHJcbmNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlU3ViVGFzayhzYW1wbGVQcm9qMSwgJ0NsZWFuIHRoZSBkaXNoZXMnLCAnSW4gdGhlIHNpbmsgZnJvbSBsYXN0IG5pZ2h0JywgJ2hpZ2gnLCAnMjgtMDgtMjAyMicpXHJcbmNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlU3ViVGFzayhzYW1wbGVQcm9qMSwgJ01vcCB0aGUgZmxvb3InLCAnTW9wIGlzIGluIHRoZSB1dGlsaXR5IHJvb20nLCAnbWVkaXVtJywgJzMwLTA4LTIwMjInKVxyXG5cclxuY3JlYXRlQ29udHJvbGxlci5jcmVhdGVUb0RvKCdGZWVkIHRoZSBkb2cnLCAnRHJ5IGZvb2QgaW4gdGhlIHBhbnRyeScsICdsb3cnLCAnMDEtMDktMjAyMicpXHJcbmNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlVG9EbygnQ29sbGVjdCB0aGUga2lkcycsICdTY2hvb2wgZmluaXNoZXMgYXQgMTQ6MDAnLCAnaGlnaCcsICcwMi0wOS0yMDIyJylcclxuXHJcbmNvbnN0IHNhbXBsZVByb2oyID0gY3JlYXRlQ29udHJvbGxlci5jcmVhdGVQcm9qZWN0KCdTY2hvb2wgUHJvamVjdHMnKTtcclxuY3JlYXRlQ29udHJvbGxlci5jcmVhdGVTdWJUYXNrKHNhbXBsZVByb2oyLCAnR2VvZ3JhcGh5IFJlc2VhcmNoIFN0dWR5JywgJ09uIHZvbGNhbm9lcyBhbmQgZWNvbm9taWMgaW1wYWN0cycsICdoaWdoJywgJzI4LTA4LTIwMjInKVxyXG5jcmVhdGVDb250cm9sbGVyLmNyZWF0ZVN1YlRhc2soc2FtcGxlUHJvajIsICdTY2llbmNlIExhYiBSZXBvcnQnLCAnRWZmZWN0cyBvZiBzYWx0IGluIGRyaW5raW5nIHdhdGVyJywgJ2xvdycsICczMC0wOC0yMDIyJylcclxuXHJcbmNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlVG9EbygnRmluaXNoIFRvLWRvIGFwcCcsICdBbG1vc3QgZG9uZSEnLCAnbWVkaXVtJywgJzExLTA5LTIwMjInKVxyXG5cclxuZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyRGFzaCgpXHJcblxyXG4kY3JlYXRlSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBkaXNwbGF5Q29udHJvbGxlci5jcmVhdGVJdGVtUG9wdXAoKVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==