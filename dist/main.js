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
/* harmony import */ var _storageController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storageController.js */ "./src/storageController.js");






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

    function loadItems(newItems){
        items = newItems
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
        removeToDo,
        loadItems
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

    function getProjects(){
        return projects;
    }

    function loadProjects(newItems){
        projects = newItems
    }

    return{
        getLength,
        create,
        remove,
        getProjects,
        loadProjects
    }
})();



/***/ }),

/***/ "./src/storageController.js":
/*!**********************************!*\
  !*** ./src/storageController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storageController": () => (/* binding */ storageController)
/* harmony export */ });
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createController */ "./src/createController.js");
/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectController */ "./src/projectController.js");
/* harmony import */ var _toDoController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDoController */ "./src/toDoController.js");
/* harmony import */ var _subTaskController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subTaskController */ "./src/subTaskController.js");






const storageController = (function(){
    function saveAll(){
        window.localStorage.clear()
        saveItems();
        saveProjects();
        saveToDos();
        saveSubTasks();
    }

    function loadAll(){
        if(window.localStorage.getItem("items")=='undefined')
        loadItems();
        loadProjects();
        loadSubTasks();
        loadToDos();
    }

    function saveItems(){
        const items = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.getItems()
        window.localStorage.setItem('items', JSON.stringify(items))
    }

    function loadItems(){
        const items = JSON.parse(window.localStorage.getItem('items'));
        _createController__WEBPACK_IMPORTED_MODULE_0__.createController.loadItems(items)
    }

    function saveProjects(){
        const items = _projectController__WEBPACK_IMPORTED_MODULE_1__.projectController.getProjects()
        window.localStorage.setItem('projects', JSON.stringify(items))
    }

    function loadProjects(){
        const items = JSON.parse(window.localStorage.getItem('projects'));
        _projectController__WEBPACK_IMPORTED_MODULE_1__.projectController.loadProjects(items)
    }

    function saveToDos(){
        const items = _toDoController__WEBPACK_IMPORTED_MODULE_2__.toDoController.getToDos()
        window.localStorage.setItem('todos', JSON.stringify(items))
    }

    function loadToDos(){
        const items = JSON.parse(window.localStorage.getItem('todos'));
        _toDoController__WEBPACK_IMPORTED_MODULE_2__.toDoController.loadToDos(items)
    }

    function saveSubTasks(){
        const items = _subTaskController__WEBPACK_IMPORTED_MODULE_3__.subTaskController.getSubTasks()
        window.localStorage.setItem('subtasks', JSON.stringify(items))
    }

    function loadSubTasks(){
        const items = JSON.parse(window.localStorage.getItem('subtasks'));
        _subTaskController__WEBPACK_IMPORTED_MODULE_3__.subTaskController.loadSubTasks(items)
    }

    return{
        saveAll,
        loadAll
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

    function getSubTasks(){
        return subTasks;
    }

    function loadSubTasks(newItems){
        subTasks = newItems
    }


    return{
        getLength,
        create,
        remove,
        getSubTasks,
        loadSubTasks
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

    function getToDos(){
        return toDos;
    }

    function loadToDos(newItems){
        toDos = newItems
    }

    return{
        create,
        getLength,
        remove,
        getToDos,
        loadToDos
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
/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../storageController */ "./src/storageController.js");

 






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

        _storageController__WEBPACK_IMPORTED_MODULE_5__.storageController.saveAll()
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
/* harmony import */ var _storageController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storageController */ "./src/storageController.js");




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

_storageController__WEBPACK_IMPORTED_MODULE_2__.storageController.loadAll()
_ui_displayController__WEBPACK_IMPORTED_MODULE_1__.displayController.renderDash()

$createItem.addEventListener('click', ()=>{
    _ui_displayController__WEBPACK_IMPORTED_MODULE_1__.displayController.createItemPopup()
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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anMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdG9yYWdlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3ViVGFza0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvRG9Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS9kaXNwbGF5Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkvaW5wdXRDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS91aS1pdGVtcy9jcmVhdGVJdGVtVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpL3VpLWl0ZW1zL2NyZWF0ZVByb2plY3RDYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS91aS1pdGVtcy9jcmVhdGVTdWJUYXNrVUkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpL3VpLWl0ZW1zL2NyZWF0ZVRvRG9DYXJkLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3RvRG9Db250cm9sbGVyfSBmcm9tICcuL3RvRG9Db250cm9sbGVyLmpzJ1xyXG5pbXBvcnQge3Byb2plY3RDb250cm9sbGVyfSBmcm9tICcuL3Byb2plY3RDb250cm9sbGVyLmpzJ1xyXG5pbXBvcnQge3N1YlRhc2tDb250cm9sbGVyfSBmcm9tICcuL3N1YlRhc2tDb250cm9sbGVyLmpzJ1xyXG5pbXBvcnQgeyBkaXNwbGF5Q29udHJvbGxlciB9IGZyb20gJy4vdWkvZGlzcGxheUNvbnRyb2xsZXIuanMnO1xyXG5pbXBvcnQgeyBzdG9yYWdlQ29udHJvbGxlciB9IGZyb20gJy4vc3RvcmFnZUNvbnRyb2xsZXIuanMnO1xyXG5cclxuY29uc3QgY3JlYXRlQ29udHJvbGxlciA9IChmdW5jdGlvbigpe1xyXG4gICAgbGV0IGl0ZW1zID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9Ebyh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKXtcclxuICAgICAgICBsZXQgbmV3VG9EbyA9IHt0eXBlOiAndG9EbycsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUsIGNvbXBsZXRlOiBmYWxzZX1cclxuXHJcbiAgICAgICAgbmV3VG9Eby5pdGVtSWQgPSBpdGVtcy5sZW5ndGg7XHJcbiAgICAgICAgaXRlbXMucHVzaChuZXdUb0RvKTtcclxuXHJcbiAgICAgICAgbmV3VG9Eby50b0RvSWQgPSB0b0RvQ29udHJvbGxlci5nZXRMZW5ndGgoKVxyXG5cclxuICAgICAgICB0b0RvQ29udHJvbGxlci5jcmVhdGUobmV3VG9EbylcclxuICAgICAgICByZXR1cm4gbmV3VG9Eb1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUpe1xyXG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0ge3R5cGU6ICdwcm9qZWN0JywgdGl0bGUsIHN1YlRhc2tzOiBbXSwgY29tcGxldGU6IGZhbHNlLCBjb21wbGV0ZVRhc2tzOiAwLCBwZXJjZW50YWdlOiAwfVxyXG5cclxuICAgICAgICBuZXdQcm9qZWN0Lml0ZW1JZCA9IGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICBpdGVtcy5wdXNoKG5ld1Byb2plY3QpO1xyXG5cclxuICAgICAgICBuZXdQcm9qZWN0LnByb2plY3RJZCA9IHByb2plY3RDb250cm9sbGVyLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5jcmVhdGUobmV3UHJvamVjdCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1zKVxyXG4gICAgICAgIHJldHVybiBuZXdQcm9qZWN0XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlU3ViVGFzayhwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKXtcclxuICAgICAgICBjb25zdCBwYXJlbnRJZCA9IHByb2plY3QuaXRlbUlkO1xyXG4gICAgICAgIGxldCBuZXdTdWJUYXNrID0ge3R5cGU6ICdzdWJUYXNrJywgcGFyZW50SWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUsIGNvbXBsZXRlOiBmYWxzZX07XHJcbiAgICAgICAgbmV3U3ViVGFzay5pdGVtSWQgPSBpdGVtcy5sZW5ndGhcclxuICAgICAgICBpdGVtcy5wdXNoKG5ld1N1YlRhc2spO1xyXG5cclxuICAgICAgICBuZXdTdWJUYXNrLnN1YlRhc2tJZCA9IHN1YlRhc2tDb250cm9sbGVyLmdldExlbmd0aCgpXHJcblxyXG4gICAgICAgIHN1YlRhc2tDb250cm9sbGVyLmNyZWF0ZShuZXdTdWJUYXNrKTtcclxuICAgICAgICByZXR1cm4gbmV3U3ViVGFza1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbmRJdGVtKGlkKXtcclxuICAgICAgICBjb25zdCBmb3VuZEl0ZW0gPSBpdGVtcy5maW5kKGkgPT4gaS5pdGVtSWQgPT0gaWQpO1xyXG4gICAgICAgIHJldHVybiBmb3VuZEl0ZW1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2dJdGVtcygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1zKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVN1YlRhc2soc3ViVGFzayl7XHJcbiAgICAgICAgaXRlbXMuc3BsaWNlKGl0ZW1zLmluZGV4T2YoaXRlbXMuZmluZCggaSA9PiBpLml0ZW1JZCA9PT1zdWJUYXNrLml0ZW1JZCkpLCAxKVxyXG4gICAgICAgIHN1YlRhc2tDb250cm9sbGVyLnJlbW92ZShzdWJUYXNrKVxyXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckRhc2goKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QocHJvamVjdCl7XHJcbiAgICAgICAgcHJvamVjdC5zdWJUYXNrcy5mb3JFYWNoKHRhc2sgPT57XHJcbiAgICAgICAgICAgIHJlbW92ZVN1YlRhc2sodGFzayk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaXRlbXMuc3BsaWNlKGl0ZW1zLmluZGV4T2YoaXRlbXMuZmluZCggaSA9PiBpLml0ZW1JZCA9PT1wcm9qZWN0Lml0ZW1JZCkpLCAxKVxyXG5cclxuICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5yZW1vdmUocHJvamVjdClcclxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJEYXNoKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVUb0RvKHRvRG8pe1xyXG4gICAgICAgIGl0ZW1zLnNwbGljZShpdGVtcy5pbmRleE9mKGl0ZW1zLmZpbmQoIGkgPT4gaS5pdGVtSWQgPT09dG9Eby5pdGVtSWQpKSwgMSlcclxuICAgICAgICB0b0RvQ29udHJvbGxlci5yZW1vdmUodG9EbylcclxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJEYXNoKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRJdGVtcygpe1xyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkSXRlbXMobmV3SXRlbXMpe1xyXG4gICAgICAgIGl0ZW1zID0gbmV3SXRlbXNcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgZmluZEl0ZW0sXHJcbiAgICAgICAgbG9nSXRlbXMsXHJcbiAgICAgICAgY3JlYXRlVG9EbyxcclxuICAgICAgICBjcmVhdGVQcm9qZWN0LFxyXG4gICAgICAgIGNyZWF0ZVN1YlRhc2ssXHJcbiAgICAgICAgcmVtb3ZlU3ViVGFzayxcclxuICAgICAgICBnZXRJdGVtcyxcclxuICAgICAgICByZW1vdmVQcm9qZWN0LFxyXG4gICAgICAgIHJlbW92ZVRvRG8sXHJcbiAgICAgICAgbG9hZEl0ZW1zXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0iLCJpbXBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0gZnJvbSBcIi4vY3JlYXRlQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgcHJvamVjdENvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRMZW5ndGgoKXtcclxuICAgICAgICByZXR1cm4gcHJvamVjdHMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShwcm9qZWN0KXtcclxuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlKHByb2plY3Qpe1xyXG4gICAgICAgIHByb2plY3RzLnNwbGljZShwcm9qZWN0cy5pbmRleE9mKGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0ocHJvamVjdCkpLCAxKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RzKCl7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRQcm9qZWN0cyhuZXdJdGVtcyl7XHJcbiAgICAgICAgcHJvamVjdHMgPSBuZXdJdGVtc1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBnZXRMZW5ndGgsXHJcbiAgICAgICAgY3JlYXRlLFxyXG4gICAgICAgIHJlbW92ZSxcclxuICAgICAgICBnZXRQcm9qZWN0cyxcclxuICAgICAgICBsb2FkUHJvamVjdHNcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7cHJvamVjdENvbnRyb2xsZXJ9OyIsImltcG9ydCB7Y3JlYXRlQ29udHJvbGxlcn0gZnJvbSBcIi4vY3JlYXRlQ29udHJvbGxlclwiXHJcbmltcG9ydCB7IHByb2plY3RDb250cm9sbGVyIH0gZnJvbSBcIi4vcHJvamVjdENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgdG9Eb0NvbnRyb2xsZXIgfSBmcm9tIFwiLi90b0RvQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBzdWJUYXNrQ29udHJvbGxlciB9IGZyb20gXCIuL3N1YlRhc2tDb250cm9sbGVyXCI7XHJcblxyXG5cclxuY29uc3Qgc3RvcmFnZUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGZ1bmN0aW9uIHNhdmVBbGwoKXtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICAgICAgICBzYXZlSXRlbXMoKTtcclxuICAgICAgICBzYXZlUHJvamVjdHMoKTtcclxuICAgICAgICBzYXZlVG9Eb3MoKTtcclxuICAgICAgICBzYXZlU3ViVGFza3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkQWxsKCl7XHJcbiAgICAgICAgaWYod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXRlbXNcIik9PSd1bmRlZmluZWQnKVxyXG4gICAgICAgIGxvYWRJdGVtcygpO1xyXG4gICAgICAgIGxvYWRQcm9qZWN0cygpO1xyXG4gICAgICAgIGxvYWRTdWJUYXNrcygpO1xyXG4gICAgICAgIGxvYWRUb0RvcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVJdGVtcygpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gY3JlYXRlQ29udHJvbGxlci5nZXRJdGVtcygpXHJcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpdGVtcycsIEpTT04uc3RyaW5naWZ5KGl0ZW1zKSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkSXRlbXMoKXtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpdGVtcycpKTtcclxuICAgICAgICBjcmVhdGVDb250cm9sbGVyLmxvYWRJdGVtcyhpdGVtcylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzYXZlUHJvamVjdHMoKXtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHByb2plY3RDb250cm9sbGVyLmdldFByb2plY3RzKClcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRQcm9qZWN0cygpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpO1xyXG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLmxvYWRQcm9qZWN0cyhpdGVtcylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzYXZlVG9Eb3MoKXtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHRvRG9Db250cm9sbGVyLmdldFRvRG9zKClcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRUb0Rvcygpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xyXG4gICAgICAgIHRvRG9Db250cm9sbGVyLmxvYWRUb0RvcyhpdGVtcylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzYXZlU3ViVGFza3MoKXtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IHN1YlRhc2tDb250cm9sbGVyLmdldFN1YlRhc2tzKClcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N1YnRhc2tzJywgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRTdWJUYXNrcygpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N1YnRhc2tzJykpO1xyXG4gICAgICAgIHN1YlRhc2tDb250cm9sbGVyLmxvYWRTdWJUYXNrcyhpdGVtcylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgc2F2ZUFsbCxcclxuICAgICAgICBsb2FkQWxsXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQge3N0b3JhZ2VDb250cm9sbGVyfSIsImltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4vdWkvZGlzcGxheUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IGZyb20gXCIuL2NyZWF0ZUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHN1YlRhc2tDb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHN1YlRhc2tzID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TGVuZ3RoKCl7XHJcbiAgICAgICAgcmV0dXJuIHN1YlRhc2tzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUoc3ViVGFzayl7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdFRvQWRkVG8gPSBjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKHN1YlRhc2sucGFyZW50SWQpO1xyXG4gICAgICAgIHN1YlRhc2tzLnB1c2goc3ViVGFzayk7XHJcblxyXG4gICAgICAgIHByb2plY3RUb0FkZFRvLnN1YlRhc2tzLnB1c2goc3ViVGFzaylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmUoc3ViVGFzayl7XHJcbiAgICAgICAgc3ViVGFza3Muc3BsaWNlKHN1YlRhc2tzLmluZGV4T2Yoc3ViVGFza3MuZmluZChpID0+IGkuaXRlbUlkID09PSBzdWJUYXNrLml0ZW1JZCkpLCAxKVxyXG4gICAgICAgIGNvbnN0IHBhcmVudFByb2plY3QgPSBjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKHN1YlRhc2sucGFyZW50SWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhcmVudFByb2plY3QpXHJcbiAgICAgICAgY29uc3QgaW5kZXhPZlRhc2sgPSBwYXJlbnRQcm9qZWN0LnN1YlRhc2tzLmluZGV4T2YocGFyZW50UHJvamVjdC5zdWJUYXNrcy5maW5kKGkgPT4gaS5pZCA9PT0gc3ViVGFzay5pZCkpO1xyXG5cclxuICAgICAgICBwYXJlbnRQcm9qZWN0LnN1YlRhc2tzLnNwbGljZShwYXJlbnRQcm9qZWN0LnN1YlRhc2tzLmluZGV4T2YocGFyZW50UHJvamVjdC5zdWJUYXNrcy5maW5kKGkgPT4gaS5pdGVtSWQgPT09IHN1YlRhc2suaXRlbUlkKSksMSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN1YlRhc2tzKCl7XHJcbiAgICAgICAgcmV0dXJuIHN1YlRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRTdWJUYXNrcyhuZXdJdGVtcyl7XHJcbiAgICAgICAgc3ViVGFza3MgPSBuZXdJdGVtc1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgZ2V0TGVuZ3RoLFxyXG4gICAgICAgIGNyZWF0ZSxcclxuICAgICAgICByZW1vdmUsXHJcbiAgICAgICAgZ2V0U3ViVGFza3MsXHJcbiAgICAgICAgbG9hZFN1YlRhc2tzXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQge3N1YlRhc2tDb250cm9sbGVyfTsiLCJpbXBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0gZnJvbSBcIi4vY3JlYXRlQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgdG9Eb0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgdG9Eb3MgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRMZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvRG9zLmxlbmd0aFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh0b0RvKXtcclxuICAgICAgICB0b0Rvcy5wdXNoKHRvRG8pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlKHRvRG8pe1xyXG4gICAgICAgIHRvRG9zLnNwbGljZSh0b0Rvcy5pbmRleE9mKGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0odG9EbykpLCAxKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFRvRG9zKCl7XHJcbiAgICAgICAgcmV0dXJuIHRvRG9zO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRUb0RvcyhuZXdJdGVtcyl7XHJcbiAgICAgICAgdG9Eb3MgPSBuZXdJdGVtc1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBjcmVhdGUsXHJcbiAgICAgICAgZ2V0TGVuZ3RoLFxyXG4gICAgICAgIHJlbW92ZSxcclxuICAgICAgICBnZXRUb0RvcyxcclxuICAgICAgICBsb2FkVG9Eb3NcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7dG9Eb0NvbnRyb2xsZXJ9OyIsImltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tICcuLi9jcmVhdGVDb250cm9sbGVyJztcclxuIFxyXG5pbXBvcnQgeyBjcmVhdGVJdGVtVUkgfSBmcm9tICcuL3VpLWl0ZW1zL2NyZWF0ZUl0ZW1VSSdcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdENhcmQgfSBmcm9tICcuL3VpLWl0ZW1zL2NyZWF0ZVByb2plY3RDYXJkJztcclxuaW1wb3J0IHsgY3JlYXRlU3ViVGFza1VJIH0gZnJvbSAnLi91aS1pdGVtcy9jcmVhdGVTdWJUYXNrVUknO1xyXG5pbXBvcnQgeyBjcmVhdGVUb0RvQ2FyZCB9IGZyb20gJy4vdWktaXRlbXMvY3JlYXRlVG9Eb0NhcmQnO1xyXG5pbXBvcnQgeyBzdG9yYWdlQ29udHJvbGxlciB9IGZyb20gJy4uL3N0b3JhZ2VDb250cm9sbGVyJztcclxuXHJcbmNvbnN0IGRpc3BsYXlDb250cm9sbGVyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCAkY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XHJcbiAgICBjb25zdCAkY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjYXJkQ29udGFpbmVyJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlSXRlbVBvcHVwKCl7XHJcbiAgICAgICAgY29uc3QgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3JlYXRlVGFza1BvcHVwJyk7XHJcblxyXG4gICAgICAgIGxldCAkaGVhZGVyID0gY3JlYXRlSXRlbVVJLmNyZWF0ZUhlYWRlcigpO1xyXG4gICAgICAgIGxldCAkZm9ybUJvZHkgPSBjcmVhdGVJdGVtVUkuY3JlYXRlRm9ybUJvZHkoKTtcclxuICAgICAgICBsZXQgJGNyZWF0ZSA9IGNyZWF0ZUl0ZW1VSS5jcmVhdGVDcmVhdGVCdXR0b24oKTtcclxuICAgICAgICBsZXQgJGV4aXQgPSBjcmVhdGVJdGVtVUkuY3JlYXRlRXhpdEJ1dHRvbigpO1xyXG5cclxuICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKCRoZWFkZXIpXHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZCgkZm9ybUJvZHkpXHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZCgkY3JlYXRlKVxyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoJGV4aXQpXHJcblxyXG4gICAgICAgICRjb250ZW50RGl2LmFwcGVuZENoaWxkKCRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VDcmVhdGVJdGVtUG9wdXAoKXtcclxuICAgICAgICBjb25zdCAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2LmNyZWF0ZVRhc2tQb3B1cCcpO1xyXG5cclxuICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIucmVtb3ZlKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3Qpe1xyXG4gICAgICAgIGNvbnN0ICRjb250YWluZXIgPSBjcmVhdGVQcm9qZWN0Q2FyZC5jcmVhdGVDb250YWluZXIocHJvamVjdCk7XHJcbiAgICAgICAgJGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoJGNvbnRhaW5lcik7XHJcbiAgICAgICAgY29uc3QgJHN1YlRhc2tzID0gY3JlYXRlUHJvamVjdENhcmQuY3JlYXRlU3ViVGFza3MocHJvamVjdCk7XHJcbiAgICAgICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkc3ViVGFza3MpO1xyXG4gICAgICAgIGNvbnN0ICRib3R0b21Db250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICRib3R0b21Db250cm9scy5jbGFzc0xpc3QuYWRkKCdib3R0b21JbmZvJylcclxuICAgICAgICAkYm90dG9tQ29udHJvbHMuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdENhcmQuY3JlYXRlQWRkQnV0dG9uKHByb2plY3QpKVxyXG4gICAgICAgICRib3R0b21Db250cm9scy5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0Q2FyZC5jcmVhdGVQZXJjZW50YWdlKHByb2plY3QpKVxyXG4gICAgICAgICRib3R0b21Db250cm9scy5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0Q2FyZC5jcmVhdGVSZW1vdmVCdXR0b24ocHJvamVjdCkpXHJcblxyXG4gICAgICAgICRjb250YWluZXIuYXBwZW5kQ2hpbGQoJGJvdHRvbUNvbnRyb2xzKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvRG8odG9Ebyl7XHJcbiAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9IGNyZWF0ZVRvRG9DYXJkLmNyZWF0ZUNvbnRhaW5lcih0b0RvKTtcclxuICAgICAgICAkY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCgkY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgJGJvdHRvbUNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgJGJvdHRvbUNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbUNvbnRyb2xzJyk7XHJcbiAgICAgICAgY29uc3QgJHJlbW92ZUJ1dHRvbiA9IGNyZWF0ZVRvRG9DYXJkLmNyZWF0ZVJlbW92ZUJ1dHRvbih0b0RvKTtcclxuICAgICAgICBjb25zdCAkY2hlY2tCb3ggPSBjcmVhdGVUb0RvQ2FyZC5jcmVhdGVDaGVja0JveCh0b0RvKTtcclxuICAgICAgICAkYm90dG9tQ29udHJvbHMuYXBwZW5kQ2hpbGQoJGNoZWNrQm94KTtcclxuICAgICAgICAkYm90dG9tQ29udHJvbHMuYXBwZW5kQ2hpbGQoJHJlbW92ZUJ1dHRvbik7XHJcblxyXG4gICAgICAgICRjb250YWluZXIuYXBwZW5kQ2hpbGQoJGJvdHRvbUNvbnRyb2xzKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbmRlckRhc2goKXtcclxuICAgICAgICBjb25zdCBpdGVtcyA9IGNyZWF0ZUNvbnRyb2xsZXIuZ2V0SXRlbXMoKTtcclxuICAgICAgICBjbGVhbkRhc2goKVxyXG5cclxuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT57XHJcbiAgICAgICAgICAgIGlmKGl0ZW0udHlwZSA9PSAncHJvamVjdCcpe1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlUHJvamVjdChpdGVtKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKGl0ZW0udHlwZSA9PSAndG9Ebycpe1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlVG9EbyhpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHN0b3JhZ2VDb250cm9sbGVyLnNhdmVBbGwoKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFuRGFzaCgpe1xyXG4gICAgICAgICRjYXJkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN1YlRhc2tQb3B1cChwcm9qZWN0KXtcclxuICAgICAgICBjb25zdCAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcmVhdGVUYXNrUG9wdXAnKTtcclxuXHJcbiAgICAgICAgbGV0ICRoZWFkZXIgPSBjcmVhdGVTdWJUYXNrVUkuY3JlYXRlSGVhZGVyKCk7XHJcbiAgICAgICAgbGV0ICRmb3JtQm9keSA9IGNyZWF0ZVN1YlRhc2tVSS5jcmVhdGVGb3JtQm9keSgpO1xyXG4gICAgICAgIGxldCAkY3JlYXRlID0gY3JlYXRlU3ViVGFza1VJLmNyZWF0ZUNyZWF0ZUJ1dHRvbihwcm9qZWN0KTtcclxuICAgICAgICBsZXQgJGV4aXQgPSBjcmVhdGVTdWJUYXNrVUkuY3JlYXRlRXhpdEJ1dHRvbigpO1xyXG5cclxuICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKCRoZWFkZXIpXHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZCgkZm9ybUJvZHkpXHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZCgkY3JlYXRlKVxyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoJGV4aXQpXHJcblxyXG4gICAgICAgICRjb250ZW50RGl2LmFwcGVuZENoaWxkKCRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBjcmVhdGVJdGVtUG9wdXAsXHJcbiAgICAgICAgY2xvc2VDcmVhdGVJdGVtUG9wdXAsXHJcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcclxuICAgICAgICByZW5kZXJEYXNoLFxyXG4gICAgICAgIGNyZWF0ZVN1YlRhc2tQb3B1cFxyXG4gICAgfVxyXG59KSgpXHJcblxyXG5leHBvcnQge2Rpc3BsYXlDb250cm9sbGVyfVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0gZnJvbSBcIi4uL2NyZWF0ZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9kaXNwbGF5Q29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgaW5wdXRDb250cm9sbGVyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBmdW5jdGlvbiBwYXJzZUNyZWF0ZUl0ZW0oKXtcclxuICAgICAgICBjb25zdCB0eXBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInR5cGVcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRpdGxlXCJdJykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImRhdGVcIl0nKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7XHJcblxyXG4gICAgICAgIGlmKHR5cGUgPT09ICdwcm9qZWN0Jyl7XHJcbiAgICAgICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlUHJvamVjdCh0aXRsZSlcclxuICAgICAgICB9IGVsc2UgaWYodHlwZSA9PT0gJ3RvRG8nKXtcclxuICAgICAgICAgICAgY3JlYXRlQ29udHJvbGxlci5jcmVhdGVUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUpXHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckRhc2goKTtcclxuXHJcbiAgICAgICAgY3JlYXRlQ29udHJvbGxlci5sb2dJdGVtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHBhcnNlQ3JlYXRlU3ViVGFzayhwcm9qZWN0KXtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ0aXRsZVwiXScpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJkYXRlXCJdJykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG5cclxuICAgICAgICBjcmVhdGVDb250cm9sbGVyLmNyZWF0ZVN1YlRhc2socHJvamVjdCwgdGl0bGUsZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKVxyXG5cclxuICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5yZW5kZXJEYXNoKCk7XHJcblxyXG4gICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIubG9nSXRlbXMoKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBwYXJzZUNyZWF0ZUl0ZW0sXHJcbiAgICAgICAgcGFyc2VDcmVhdGVTdWJUYXNrXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBpbnB1dENvbnRyb2xsZXIgfSIsImltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4uL2Rpc3BsYXlDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IGlucHV0Q29udHJvbGxlciB9IGZyb20gXCIuLi9pbnB1dENvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZUl0ZW1VSSA9IChmdW5jdGlvbigpe1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XHJcbiAgICAgICAgY29uc3QgJGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICAkaDIudGV4dENvbnRlbnQ9J0NyZWF0ZSBhbiBJdGVtJztcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gJGgyXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZvcm1Cb2R5KCl7XHJcbiAgICAgICAgY29uc3QgJGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblxyXG4gICAgICAgICRmb3JtLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1JbnB1dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+VHlwZTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW9Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidHlwZVwiIHZhbHVlPVwidG9Eb1wiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0eXBlXCIgdmFsdWU9XCJwcm9qZWN0XCI+ICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFJhZGlvQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwidG9Eb1wiPlRvRG88L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByb2plY3RcIj5Qcm9qZWN0PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtSW5wdXRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtSW5wdXRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtSW5wdXRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+RHVlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtSW5wdXRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpb0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwiaGlnaFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJsb3dcIj4gICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxSYWRpb0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImhpZ2hcIj5IaWdoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZWRpdW1cIj5NZWRpdW08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvd1wiPkxvdzwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmBcclxuXHJcbiAgICAgICAgcmV0dXJuICRmb3JtXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQ3JlYXRlQnV0dG9uKCl7XHJcbiAgICAgICAgbGV0ICRjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAkY3JlYXRlQnV0dG9uLmlkID0gJ2J1dHRvbidcclxuICAgICAgICAkY3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBJdGVtJztcclxuXHJcbiAgICAgICAgJGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlucHV0Q29udHJvbGxlci5wYXJzZUNyZWF0ZUl0ZW0oKTtcclxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY2xvc2VDcmVhdGVJdGVtUG9wdXAoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gJGNyZWF0ZUJ1dHRvblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUV4aXRCdXR0b24oKXtcclxuICAgICAgICBsZXQgJGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgJGNsb3NlQnV0dG9uLmlkID0gJ3JlbUJ1dHRvbidcclxuICAgICAgICAkY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSAnRXhpdCc7XHJcblxyXG4gICAgICAgICRjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNsb3NlQ3JlYXRlSXRlbVBvcHVwKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICRjbG9zZUJ1dHRvblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBjcmVhdGVGb3JtQm9keSxcclxuICAgICAgICBjcmVhdGVIZWFkZXIsXHJcbiAgICAgICAgY3JlYXRlQ3JlYXRlQnV0dG9uLFxyXG4gICAgICAgIGNyZWF0ZUV4aXRCdXR0b25cclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7Y3JlYXRlSXRlbVVJfSIsImltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vY3JlYXRlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5Q29udHJvbGxlciB9IGZyb20gXCIuLi9kaXNwbGF5Q29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgY3JlYXRlUHJvamVjdENhcmQgPSAoZnVuY3Rpb24oKXtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcihwcm9qZWN0KXtcclxuICAgICAgICBjb25zdCAkcHJvamVjdENhcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICRwcm9qZWN0Q2FyZENvbnRhaW5lci5pZCA9IHByb2plY3QuaXRlbUlkXHJcbiAgICAgICAgJHByb2plY3RDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgICAgICAkcHJvamVjdENhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xyXG5cclxuICAgICAgICAkcHJvamVjdENhcmRDb250YWluZXIuaW5uZXJIVE1MID0gYDxoMj4ke3Byb2plY3QudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0VGFza0NvbnRhaW5lclwiIGlkPScke3Byb2plY3QuaXRlbUlkfSc+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcblxyXG4gICAgICAgIHJldHVybiAkcHJvamVjdENhcmRDb250YWluZXJcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTdWJUYXNrcyhwcm9qZWN0KXtcclxuICAgICAgICBjb25zdCAkcHJvamVjdFRhc2tDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXYucHJvamVjdFRhc2tDb250YWluZXJbaWQ9JyR7cHJvamVjdC5pdGVtSWR9J11gKTtcclxuXHJcbiAgICAgICAgcHJvamVjdC5zdWJUYXNrcy5mb3JFYWNoKHN1YlRhc2sgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkcHJvamVjdFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgJHByb2plY3RUYXNrLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RUYXNrJyk7XHJcbiAgICAgICAgICAgICRwcm9qZWN0VGFzay5pZCA9IHN1YlRhc2suaXRlbUlkO1xyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAkcHJvamVjdFRhc2suaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza1RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BUYXNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiPiR7c3ViVGFzay50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkYXRlXCI+JHtzdWJUYXNrLmRhdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tVGFza1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiR7c3ViVGFzay5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9pbWFnZXMvdHJhc2gtMi5zdmdcIiBjbGFzcz1cInRyYXNoXCIgaWQ9JyR7c3ViVGFzay5pdGVtSWR9Jz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBpZD0nJHtzdWJUYXNrLml0ZW1JZH0nPlxyXG4gICAgICAgICAgICBgXHJcblxyXG4gICAgICAgICAgICAkcHJvamVjdFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoJHByb2plY3RUYXNrKVxyXG4gICAgICAgICAgICBjb25zdCAkY2hlY2tCb3ggPSAkcHJvamVjdFRhc2sucXVlcnlTZWxlY3RvcihgaW5wdXRgKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHN1YlRhc2suY29tcGxldGUpe1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdC5jb21wbGV0ZVRhc2tzKytcclxuICAgICAgICAgICAgICAgICRjaGVja0JveC5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgJHRyYXNoQnV0dG9uID0gJHByb2plY3RUYXNrLnF1ZXJ5U2VsZWN0b3IoYGltZ2ApO1xyXG5cclxuICAgICAgICAgICAgJHRyYXNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0YXNrSWQgPSBlLnRhcmdldC5pZFxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmluZycpXHJcbiAgICAgICAgICAgICAgICBsZXQgdGFza1RvUmVtID0gY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbSh0YXNrSWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tUb1JlbSlcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIucmVtb3ZlU3ViVGFzayh0YXNrVG9SZW0pXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAkY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHN1YlRhc2tJZCA9IGUudGFyZ2V0LmlkXHJcbiAgICAgICAgICAgICAgICBsZXQgc3ViVGFzayA9IGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oc3ViVGFza0lkKVxyXG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3RQYXJlbnQgPSBjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzdWJUYXNrLmNvbXBsZXRlKXtcclxuICAgICAgICAgICAgICAgICAgICBzdWJUYXNrLmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXBsZXRlJykpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQYXJlbnQuY29tcGxldGVUYXNrcy0tXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UGFyZW50LnBlcmNlbnRhZ2UgPSAocHJvamVjdFBhcmVudC5jb21wbGV0ZVRhc2tzIC8gcHJvamVjdFBhcmVudC5zdWJUYXNrcy5sZW5ndGgpICoxMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJHBlcmNlbnRhZ2UgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdoMycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRwZXJjZW50YWdlLnRleHRDb250ZW50ID0gcHJvamVjdFBhcmVudC5wZXJjZW50YWdlICsgJyUnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKCFzdWJUYXNrLmNvbXBsZXRlKXtcclxuICAgICAgICAgICAgICAgICAgICBzdWJUYXNrLmNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJylcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UGFyZW50LmNvbXBsZXRlVGFza3MrK1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0UGFyZW50LnBlcmNlbnRhZ2UgPSAocHJvamVjdFBhcmVudC5jb21wbGV0ZVRhc2tzIC8gcHJvamVjdFBhcmVudC5zdWJUYXNrcy5sZW5ndGgpICoxMDBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHBlcmNlbnRhZ2UgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdoMycpXHJcbiAgICAgICAgICAgICAgICAgICAgJHBlcmNlbnRhZ2UudGV4dENvbnRlbnQgPSBwcm9qZWN0UGFyZW50LnBlcmNlbnRhZ2UgKyAnJSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGluZycpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc3ViVGFzaylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIHJldHVybiAkcHJvamVjdFRhc2tDb250YWluZXJcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVQZXJjZW50YWdlKHByb2plY3Qpe1xyXG4gICAgICAgIGNvbnN0ICRwZXJjZW50YWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihwcm9qZWN0LnN1YlRhc2tzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHByb2plY3QucGVyY2VudGFnZSA9IChwcm9qZWN0LmNvbXBsZXRlVGFza3MgLyBwcm9qZWN0LnN1YlRhc2tzLmxlbmd0aCkgKjEwMFxyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgcHJvamVjdC5wZXJjZW50YWdlID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJHBlcmNlbnRhZ2UudGV4dENvbnRlbnQgPSBwcm9qZWN0LnBlcmNlbnRhZ2UgKyAnJSdcclxuXHJcbiAgICAgICAgcmV0dXJuICRwZXJjZW50YWdlXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQWRkQnV0dG9uKHByb2plY3Qpe1xyXG4gICAgICAgIGxldCAkYnV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgJGJ1dC5zcmM9Jy4vaW1hZ2VzL3BsdXMtY2lyY2xlLnN2Zyc7XHJcbiAgICAgICAgJGJ1dC5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrQnV0dG9uJylcclxuXHJcbiAgICAgICAgJGJ1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGRjbGljaycpXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5jcmVhdGVTdWJUYXNrUG9wdXAocHJvamVjdClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gJGJ1dFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlbW92ZUJ1dHRvbihwcm9qZWN0KXtcclxuICAgICAgICBsZXQgJHJidXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAkcmJ1dC5zcmM9Jy4vaW1hZ2VzL3RyYXNoLTIuc3ZnJztcclxuICAgICAgICAkcmJ1dC5jbGFzc0xpc3QuYWRkKCdyZW1vdmVQcm9qZWN0QnV0dG9uJylcclxuXHJcbiAgICAgICAgJHJidXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZCk7XHJcblxyXG4gICAgICAgICAgICBjcmVhdGVDb250cm9sbGVyLnJlbW92ZVByb2plY3QocHJvamVjdClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gJHJidXRcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgY3JlYXRlQ29udGFpbmVyLFxyXG4gICAgICAgIGNyZWF0ZVN1YlRhc2tzLFxyXG4gICAgICAgIGNyZWF0ZVBlcmNlbnRhZ2UsXHJcbiAgICAgICAgY3JlYXRlQWRkQnV0dG9uLFxyXG4gICAgICAgIGNyZWF0ZVJlbW92ZUJ1dHRvblxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHsgY3JlYXRlUHJvamVjdENhcmQgfSIsImltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4uL2Rpc3BsYXlDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IGlucHV0Q29udHJvbGxlciB9IGZyb20gXCIuLi9pbnB1dENvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZVN1YlRhc2tVSSA9IChmdW5jdGlvbigpe1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XHJcbiAgICAgICAgY29uc3QgJGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICAkaDIudGV4dENvbnRlbnQ9J0NyZWF0ZSBhIHN1YnRhc2snO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAkaDJcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRm9ybUJvZHkoKXtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuXHJcbiAgICAgICAgJGZvcm0uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtSW5wdXRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtSW5wdXRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtSW5wdXRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+RHVlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBuYW1lPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtSW5wdXRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpb0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwiaGlnaFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJsb3dcIj4gICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxSYWRpb0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImhpZ2hcIj5IaWdoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZWRpdW1cIj5NZWRpdW08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxvd1wiPkxvdzwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmBcclxuXHJcbiAgICAgICAgcmV0dXJuICRmb3JtXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQ3JlYXRlQnV0dG9uKHByb2plY3Qpe1xyXG4gICAgICAgIGxldCAkY3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgJGNyZWF0ZUJ1dHRvbi5pZCA9ICdidXR0b24nXHJcbiAgICAgICAgJGNyZWF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDcmVhdGUgc3VidGFzayc7XHJcblxyXG4gICAgICAgICRjcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBpbnB1dENvbnRyb2xsZXIucGFyc2VDcmVhdGVTdWJUYXNrKHByb2plY3QpO1xyXG4gICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5jbG9zZUNyZWF0ZUl0ZW1Qb3B1cCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAkY3JlYXRlQnV0dG9uXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRXhpdEJ1dHRvbigpe1xyXG4gICAgICAgIGxldCAkY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAkY2xvc2VCdXR0b24uaWQgPSAncmVtQnV0dG9uJ1xyXG4gICAgICAgICRjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdFeGl0JztcclxuXHJcbiAgICAgICAgJGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY2xvc2VDcmVhdGVJdGVtUG9wdXAoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gJGNsb3NlQnV0dG9uXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGNyZWF0ZUZvcm1Cb2R5LFxyXG4gICAgICAgIGNyZWF0ZUhlYWRlcixcclxuICAgICAgICBjcmVhdGVDcmVhdGVCdXR0b24sXHJcbiAgICAgICAgY3JlYXRlRXhpdEJ1dHRvblxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHtjcmVhdGVTdWJUYXNrVUl9IiwiaW1wb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IGZyb20gXCIuLi8uLi9jcmVhdGVDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCBjcmVhdGVUb0RvQ2FyZCA9IChmdW5jdGlvbigpe1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVyKHRvRG8pe1xyXG4gICAgICAgIGNvbnN0ICRjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgJGNhcmREaXYuaWQgPSB0b0RvLml0ZW1JZDtcclxuICAgICAgICAkY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICAgICAgJGNhcmREaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG5cclxuICAgICAgICBsZXQgY2lyY2xlQ29sb3VyID0gXCJcIjtcclxuXHJcbiAgICAgICAgaWYodG9Eby5wcmlvcml0eSA9PT0gJ2hpZ2gnKXtcclxuICAgICAgICAgICAgY2lyY2xlQ29sb3VyID0gJyNmZjZlNmUnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0b0RvLnByaW9yaXR5ID09PSAnbWVkaXVtJyl7XHJcbiAgICAgICAgICAgIGNpcmNsZUNvbG91ciA9ICcjZmZiNDZlJztcclxuICAgICAgICB9IGVsc2UgaWYodG9Eby5wcmlvcml0eSA9PT0gJ2xvdycpe1xyXG4gICAgICAgICAgICBjaXJjbGVDb2xvdXIgPSAnI2ZkZmY4ZCc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0b0RvLmNvbXBsZXRlKXtcclxuICAgICAgICAgICAgJGNhcmREaXYuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICRjYXJkRGl2LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxoMiBpZD1cInRpdGxlXCI+JHt0b0RvLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb2xvdXJDaXJjbGVcIiBzdHlsZT0nYmFja2dyb3VuZC1jb2xvcjoke2NpcmNsZUNvbG91cn07Jz4mbmJzcDs8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBpZD1cImRlc2NcIj4ke3RvRG8uZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxwIGlkPVwiZGF0ZVwiPiR7dG9Eby5kYXRlfTwvcD5gXHJcblxyXG5cclxuICAgICAgICByZXR1cm4gJGNhcmREaXZcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVSZW1vdmVCdXR0b24odG9Ebyl7XHJcbiAgICAgICAgY29uc3QgJHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgJHJlbW92ZUJ1dHRvbi5zcmMgPSAnLi9pbWFnZXMvdHJhc2gtMi5zdmcnO1xyXG4gICAgICAgICRyZW1vdmVCdXR0b24uaWQgPSAndHJhc2gnO1xyXG5cclxuICAgICAgICAkcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgY3JlYXRlQ29udHJvbGxlci5yZW1vdmVUb0RvKHRvRG8pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICRyZW1vdmVCdXR0b25cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVDaGVja0JveCgpe1xyXG4gICAgICAgIGNvbnN0ICRjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgJGNoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG5cclxuICAgICAgICAkY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+e1xyXG4gICAgICAgICAgICBjb25zdCAkdG9EbyA9ICRjaGVja0JveC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvRG9JZCA9ICR0b0RvLmlkXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrVG9VcGRhdGUgPSBjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKHRvRG9JZClcclxuXHJcbiAgICAgICAgICAgIGlmKHRhc2tUb1VwZGF0ZS5jb21wbGV0ZSA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgdGFza1RvVXBkYXRlLmNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICR0b0RvLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0YXNrVG9VcGRhdGUuY29tcGxldGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRhc2tUb1VwZGF0ZS5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgJHRvRG8uY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAkY2hlY2tCb3g7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGNyZWF0ZUNvbnRhaW5lcixcclxuICAgICAgICBjcmVhdGVSZW1vdmVCdXR0b24sXHJcbiAgICAgICAgY3JlYXRlQ2hlY2tCb3hcclxuICAgIH1cclxuXHJcbn0pKClcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVRvRG9DYXJkIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jcmVhdGVDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4vdWkvZGlzcGxheUNvbnRyb2xsZXJcIlxyXG5pbXBvcnQgeyBzdG9yYWdlQ29udHJvbGxlciB9IGZyb20gXCIuL3N0b3JhZ2VDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCAkY3JlYXRlSXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpI2NyZWF0ZVRhc2snKVxyXG5cclxuY29uc3Qgc2FtcGxlUHJvajEgPSBjcmVhdGVDb250cm9sbGVyLmNyZWF0ZVByb2plY3QoJ0tpdGNoZW4gQ2xlYW51cCcpO1xyXG5jcmVhdGVDb250cm9sbGVyLmNyZWF0ZVN1YlRhc2soc2FtcGxlUHJvajEsICdDbGVhbiB0aGUgZGlzaGVzJywgJ0luIHRoZSBzaW5rIGZyb20gbGFzdCBuaWdodCcsICdoaWdoJywgJzI4LTA4LTIwMjInKVxyXG5jcmVhdGVDb250cm9sbGVyLmNyZWF0ZVN1YlRhc2soc2FtcGxlUHJvajEsICdNb3AgdGhlIGZsb29yJywgJ01vcCBpcyBpbiB0aGUgdXRpbGl0eSByb29tJywgJ21lZGl1bScsICczMC0wOC0yMDIyJylcclxuXHJcbmNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlVG9EbygnRmVlZCB0aGUgZG9nJywgJ0RyeSBmb29kIGluIHRoZSBwYW50cnknLCAnbG93JywgJzAxLTA5LTIwMjInKVxyXG5jcmVhdGVDb250cm9sbGVyLmNyZWF0ZVRvRG8oJ0NvbGxlY3QgdGhlIGtpZHMnLCAnU2Nob29sIGZpbmlzaGVzIGF0IDE0OjAwJywgJ2hpZ2gnLCAnMDItMDktMjAyMicpXHJcblxyXG5jb25zdCBzYW1wbGVQcm9qMiA9IGNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlUHJvamVjdCgnU2Nob29sIFByb2plY3RzJyk7XHJcbmNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlU3ViVGFzayhzYW1wbGVQcm9qMiwgJ0dlb2dyYXBoeSBSZXNlYXJjaCBTdHVkeScsICdPbiB2b2xjYW5vZXMgYW5kIGVjb25vbWljIGltcGFjdHMnLCAnaGlnaCcsICcyOC0wOC0yMDIyJylcclxuY3JlYXRlQ29udHJvbGxlci5jcmVhdGVTdWJUYXNrKHNhbXBsZVByb2oyLCAnU2NpZW5jZSBMYWIgUmVwb3J0JywgJ0VmZmVjdHMgb2Ygc2FsdCBpbiBkcmlua2luZyB3YXRlcicsICdsb3cnLCAnMzAtMDgtMjAyMicpXHJcblxyXG5jcmVhdGVDb250cm9sbGVyLmNyZWF0ZVRvRG8oJ0ZpbmlzaCBUby1kbyBhcHAnLCAnQWxtb3N0IGRvbmUhJywgJ21lZGl1bScsICcxMS0wOS0yMDIyJylcclxuXHJcbnN0b3JhZ2VDb250cm9sbGVyLmxvYWRBbGwoKVxyXG5kaXNwbGF5Q29udHJvbGxlci5yZW5kZXJEYXNoKClcclxuXHJcbiRjcmVhdGVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGRpc3BsYXlDb250cm9sbGVyLmNyZWF0ZUl0ZW1Qb3B1cCgpXHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9