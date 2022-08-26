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
        saveItems();
        saveProjects();
        saveToDos();
        saveSubTasks();
    }

    function loadAll(){
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
        console.log(items)
        _createController__WEBPACK_IMPORTED_MODULE_0__.createController.loadItems(items)
    }

    function saveProjects(){
        const projects = _projectController__WEBPACK_IMPORTED_MODULE_1__.projectController.getProjects()
        window.localStorage.setItem('projects', JSON.stringify(projects))
    }

    function loadProjects(){
        const projects = JSON.parse(window.localStorage.getItem('projects'));
        console.log(projects)
        _projectController__WEBPACK_IMPORTED_MODULE_1__.projectController.loadProjects(projects)
    }

    function saveToDos(){
        const toDos = _toDoController__WEBPACK_IMPORTED_MODULE_2__.toDoController.getToDos()
        window.localStorage.setItem('todos', JSON.stringify(toDos))
    }

    function loadToDos(){
        const toDos = JSON.parse(window.localStorage.getItem('todos'));
        console.log(toDos)
        _toDoController__WEBPACK_IMPORTED_MODULE_2__.toDoController.loadToDos(toDos)
    }

    function saveSubTasks(){
        const subTasks = _subTaskController__WEBPACK_IMPORTED_MODULE_3__.subTaskController.getSubTasks()
        window.localStorage.setItem('subtasks', JSON.stringify(subTasks))
    }

    function loadSubTasks(){
        const subTasks = JSON.parse(window.localStorage.getItem('subtasks'));
        console.log(subTasks)
        _subTaskController__WEBPACK_IMPORTED_MODULE_3__.subTaskController.loadSubTasks(subTasks)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmMvY3JlYXRlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0b3JhZ2VDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdWJUYXNrQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9Eb0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpL2Rpc3BsYXlDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy91aS9pbnB1dENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpL3VpLWl0ZW1zL2NyZWF0ZUl0ZW1VSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkvdWktaXRlbXMvY3JlYXRlUHJvamVjdENhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3VpL3VpLWl0ZW1zL2NyZWF0ZVN1YlRhc2tVSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdWkvdWktaXRlbXMvY3JlYXRlVG9Eb0NhcmQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dG9Eb0NvbnRyb2xsZXJ9IGZyb20gJy4vdG9Eb0NvbnRyb2xsZXIuanMnXHJcbmltcG9ydCB7cHJvamVjdENvbnRyb2xsZXJ9IGZyb20gJy4vcHJvamVjdENvbnRyb2xsZXIuanMnXHJcbmltcG9ydCB7c3ViVGFza0NvbnRyb2xsZXJ9IGZyb20gJy4vc3ViVGFza0NvbnRyb2xsZXIuanMnXHJcbmltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSAnLi91aS9kaXNwbGF5Q29udHJvbGxlci5qcyc7XHJcbmltcG9ydCB7IHN0b3JhZ2VDb250cm9sbGVyIH0gZnJvbSAnLi9zdG9yYWdlQ29udHJvbGxlci5qcyc7XHJcblxyXG5jb25zdCBjcmVhdGVDb250cm9sbGVyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgaXRlbXMgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUb0RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUpe1xyXG4gICAgICAgIGxldCBuZXdUb0RvID0ge3R5cGU6ICd0b0RvJywgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSwgY29tcGxldGU6IGZhbHNlfVxyXG5cclxuICAgICAgICBuZXdUb0RvLml0ZW1JZCA9IGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICBpdGVtcy5wdXNoKG5ld1RvRG8pO1xyXG5cclxuICAgICAgICBuZXdUb0RvLnRvRG9JZCA9IHRvRG9Db250cm9sbGVyLmdldExlbmd0aCgpXHJcblxyXG4gICAgICAgIHRvRG9Db250cm9sbGVyLmNyZWF0ZShuZXdUb0RvKVxyXG4gICAgICAgIHJldHVybiBuZXdUb0RvXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSl7XHJcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSB7dHlwZTogJ3Byb2plY3QnLCB0aXRsZSwgc3ViVGFza3M6IFtdLCBjb21wbGV0ZTogZmFsc2UsIGNvbXBsZXRlVGFza3M6IDAsIHBlcmNlbnRhZ2U6IDB9XHJcblxyXG4gICAgICAgIG5ld1Byb2plY3QuaXRlbUlkID0gaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgIGl0ZW1zLnB1c2gobmV3UHJvamVjdCk7XHJcblxyXG4gICAgICAgIG5ld1Byb2plY3QucHJvamVjdElkID0gcHJvamVjdENvbnRyb2xsZXIuZ2V0TGVuZ3RoKCk7XHJcblxyXG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLmNyZWF0ZShuZXdQcm9qZWN0KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbXMpXHJcbiAgICAgICAgcmV0dXJuIG5ld1Byb2plY3RcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVTdWJUYXNrKHByb2plY3QsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUpe1xyXG4gICAgICAgIGNvbnN0IHBhcmVudElkID0gcHJvamVjdC5pdGVtSWQ7XHJcbiAgICAgICAgbGV0IG5ld1N1YlRhc2sgPSB7dHlwZTogJ3N1YlRhc2snLCBwYXJlbnRJZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSwgY29tcGxldGU6IGZhbHNlfTtcclxuICAgICAgICBuZXdTdWJUYXNrLml0ZW1JZCA9IGl0ZW1zLmxlbmd0aFxyXG4gICAgICAgIGl0ZW1zLnB1c2gobmV3U3ViVGFzayk7XHJcblxyXG4gICAgICAgIG5ld1N1YlRhc2suc3ViVGFza0lkID0gc3ViVGFza0NvbnRyb2xsZXIuZ2V0TGVuZ3RoKClcclxuXHJcbiAgICAgICAgc3ViVGFza0NvbnRyb2xsZXIuY3JlYXRlKG5ld1N1YlRhc2spO1xyXG4gICAgICAgIHJldHVybiBuZXdTdWJUYXNrXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmluZEl0ZW0oaWQpe1xyXG4gICAgICAgIGNvbnN0IGZvdW5kSXRlbSA9IGl0ZW1zLmZpbmQoaSA9PiBpLml0ZW1JZCA9PSBpZCk7XHJcbiAgICAgICAgcmV0dXJuIGZvdW5kSXRlbVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvZ0l0ZW1zKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbXMpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3ViVGFzayhzdWJUYXNrKXtcclxuICAgICAgICBpdGVtcy5zcGxpY2UoaXRlbXMuaW5kZXhPZihpdGVtcy5maW5kKCBpID0+IGkuaXRlbUlkID09PXN1YlRhc2suaXRlbUlkKSksIDEpXHJcbiAgICAgICAgc3ViVGFza0NvbnRyb2xsZXIucmVtb3ZlKHN1YlRhc2spXHJcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyRGFzaCgpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChwcm9qZWN0KXtcclxuICAgICAgICBwcm9qZWN0LnN1YlRhc2tzLmZvckVhY2godGFzayA9PntcclxuICAgICAgICAgICAgcmVtb3ZlU3ViVGFzayh0YXNrKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpdGVtcy5zcGxpY2UoaXRlbXMuaW5kZXhPZihpdGVtcy5maW5kKCBpID0+IGkuaXRlbUlkID09PXByb2plY3QuaXRlbUlkKSksIDEpXHJcblxyXG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLnJlbW92ZShwcm9qZWN0KVxyXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckRhc2goKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVRvRG8odG9Ebyl7XHJcbiAgICAgICAgaXRlbXMuc3BsaWNlKGl0ZW1zLmluZGV4T2YoaXRlbXMuZmluZCggaSA9PiBpLml0ZW1JZCA9PT10b0RvLml0ZW1JZCkpLCAxKVxyXG4gICAgICAgIHRvRG9Db250cm9sbGVyLnJlbW92ZSh0b0RvKVxyXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckRhc2goKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEl0ZW1zKCl7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRJdGVtcyhuZXdJdGVtcyl7XHJcbiAgICAgICAgaXRlbXMgPSBuZXdJdGVtc1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBmaW5kSXRlbSxcclxuICAgICAgICBsb2dJdGVtcyxcclxuICAgICAgICBjcmVhdGVUb0RvLFxyXG4gICAgICAgIGNyZWF0ZVByb2plY3QsXHJcbiAgICAgICAgY3JlYXRlU3ViVGFzayxcclxuICAgICAgICByZW1vdmVTdWJUYXNrLFxyXG4gICAgICAgIGdldEl0ZW1zLFxyXG4gICAgICAgIHJlbW92ZVByb2plY3QsXHJcbiAgICAgICAgcmVtb3ZlVG9EbyxcclxuICAgICAgICBsb2FkSXRlbXNcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSIsImltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jcmVhdGVDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCBwcm9qZWN0Q29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcclxuICAgIGxldCBwcm9qZWN0cyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldExlbmd0aCgpe1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0cy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHByb2plY3Qpe1xyXG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmUocHJvamVjdCl7XHJcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKHByb2plY3RzLmluZGV4T2YoY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbShwcm9qZWN0KSksIDEpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdHMoKXtcclxuICAgICAgICByZXR1cm4gcHJvamVjdHM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZFByb2plY3RzKG5ld0l0ZW1zKXtcclxuICAgICAgICBwcm9qZWN0cyA9IG5ld0l0ZW1zXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGdldExlbmd0aCxcclxuICAgICAgICBjcmVhdGUsXHJcbiAgICAgICAgcmVtb3ZlLFxyXG4gICAgICAgIGdldFByb2plY3RzLFxyXG4gICAgICAgIGxvYWRQcm9qZWN0c1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHtwcm9qZWN0Q29udHJvbGxlcn07IiwiaW1wb3J0IHtjcmVhdGVDb250cm9sbGVyfSBmcm9tIFwiLi9jcmVhdGVDb250cm9sbGVyXCJcclxuaW1wb3J0IHsgcHJvamVjdENvbnRyb2xsZXIgfSBmcm9tIFwiLi9wcm9qZWN0Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyB0b0RvQ29udHJvbGxlciB9IGZyb20gXCIuL3RvRG9Db250cm9sbGVyXCI7XHJcbmltcG9ydCB7IHN1YlRhc2tDb250cm9sbGVyIH0gZnJvbSBcIi4vc3ViVGFza0NvbnRyb2xsZXJcIjtcclxuXHJcblxyXG5jb25zdCBzdG9yYWdlQ29udHJvbGxlciA9IChmdW5jdGlvbigpe1xyXG4gICAgZnVuY3Rpb24gc2F2ZUFsbCgpe1xyXG4gICAgICAgIHNhdmVJdGVtcygpO1xyXG4gICAgICAgIHNhdmVQcm9qZWN0cygpO1xyXG4gICAgICAgIHNhdmVUb0RvcygpO1xyXG4gICAgICAgIHNhdmVTdWJUYXNrcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRBbGwoKXtcclxuICAgICAgICBsb2FkSXRlbXMoKTtcclxuICAgICAgICAgICAgbG9hZFByb2plY3RzKCk7XHJcbiAgICAgICAgICAgIGxvYWRTdWJUYXNrcygpO1xyXG4gICAgICAgICAgICBsb2FkVG9Eb3MoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gc2F2ZUl0ZW1zKCl7XHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBjcmVhdGVDb250cm9sbGVyLmdldEl0ZW1zKClcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2l0ZW1zJywgSlNPTi5zdHJpbmdpZnkoaXRlbXMpKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRJdGVtcygpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2l0ZW1zJykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW1zKVxyXG4gICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIubG9hZEl0ZW1zKGl0ZW1zKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVQcm9qZWN0cygpe1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdENvbnRyb2xsZXIuZ2V0UHJvamVjdHMoKVxyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZFByb2plY3RzKCl7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdHMnKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXHJcbiAgICAgICAgcHJvamVjdENvbnRyb2xsZXIubG9hZFByb2plY3RzKHByb2plY3RzKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVUb0Rvcygpe1xyXG4gICAgICAgIGNvbnN0IHRvRG9zID0gdG9Eb0NvbnRyb2xsZXIuZ2V0VG9Eb3MoKVxyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b0RvcykpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZFRvRG9zKCl7XHJcbiAgICAgICAgY29uc3QgdG9Eb3MgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codG9Eb3MpXHJcbiAgICAgICAgdG9Eb0NvbnRyb2xsZXIubG9hZFRvRG9zKHRvRG9zKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVTdWJUYXNrcygpe1xyXG4gICAgICAgIGNvbnN0IHN1YlRhc2tzID0gc3ViVGFza0NvbnRyb2xsZXIuZ2V0U3ViVGFza3MoKVxyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3VidGFza3MnLCBKU09OLnN0cmluZ2lmeShzdWJUYXNrcykpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZFN1YlRhc2tzKCl7XHJcbiAgICAgICAgY29uc3Qgc3ViVGFza3MgPSBKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3VidGFza3MnKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3ViVGFza3MpXHJcbiAgICAgICAgc3ViVGFza0NvbnRyb2xsZXIubG9hZFN1YlRhc2tzKHN1YlRhc2tzKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBzYXZlQWxsLFxyXG4gICAgICAgIGxvYWRBbGxcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7c3RvcmFnZUNvbnRyb2xsZXJ9IiwiaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tIFwiLi91aS9kaXNwbGF5Q29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0gZnJvbSBcIi4vY3JlYXRlQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3Qgc3ViVGFza0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgc3ViVGFza3MgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRMZW5ndGgoKXtcclxuICAgICAgICByZXR1cm4gc3ViVGFza3MubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShzdWJUYXNrKXtcclxuICAgICAgICBjb25zdCBwcm9qZWN0VG9BZGRUbyA9IGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oc3ViVGFzay5wYXJlbnRJZCk7XHJcbiAgICAgICAgc3ViVGFza3MucHVzaChzdWJUYXNrKTtcclxuXHJcbiAgICAgICAgcHJvamVjdFRvQWRkVG8uc3ViVGFza3MucHVzaChzdWJUYXNrKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZShzdWJUYXNrKXtcclxuICAgICAgICBzdWJUYXNrcy5zcGxpY2Uoc3ViVGFza3MuaW5kZXhPZihzdWJUYXNrcy5maW5kKGkgPT4gaS5pdGVtSWQgPT09IHN1YlRhc2suaXRlbUlkKSksIDEpXHJcbiAgICAgICAgY29uc3QgcGFyZW50UHJvamVjdCA9IGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oc3ViVGFzay5wYXJlbnRJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGFyZW50UHJvamVjdClcclxuICAgICAgICBjb25zdCBpbmRleE9mVGFzayA9IHBhcmVudFByb2plY3Quc3ViVGFza3MuaW5kZXhPZihwYXJlbnRQcm9qZWN0LnN1YlRhc2tzLmZpbmQoaSA9PiBpLmlkID09PSBzdWJUYXNrLmlkKSk7XHJcblxyXG4gICAgICAgIHBhcmVudFByb2plY3Quc3ViVGFza3Muc3BsaWNlKHBhcmVudFByb2plY3Quc3ViVGFza3MuaW5kZXhPZihwYXJlbnRQcm9qZWN0LnN1YlRhc2tzLmZpbmQoaSA9PiBpLml0ZW1JZCA9PT0gc3ViVGFzay5pdGVtSWQpKSwxKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3ViVGFza3MoKXtcclxuICAgICAgICByZXR1cm4gc3ViVGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZFN1YlRhc2tzKG5ld0l0ZW1zKXtcclxuICAgICAgICBzdWJUYXNrcyA9IG5ld0l0ZW1zXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBnZXRMZW5ndGgsXHJcbiAgICAgICAgY3JlYXRlLFxyXG4gICAgICAgIHJlbW92ZSxcclxuICAgICAgICBnZXRTdWJUYXNrcyxcclxuICAgICAgICBsb2FkU3ViVGFza3NcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7c3ViVGFza0NvbnRyb2xsZXJ9OyIsImltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9jcmVhdGVDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCB0b0RvQ29udHJvbGxlciA9IChmdW5jdGlvbigpIHtcclxuICAgIGxldCB0b0RvcyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldExlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdG9Eb3MubGVuZ3RoXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlKHRvRG8pe1xyXG4gICAgICAgIHRvRG9zLnB1c2godG9EbylcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmUodG9Ebyl7XHJcbiAgICAgICAgdG9Eb3Muc3BsaWNlKHRvRG9zLmluZGV4T2YoY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbSh0b0RvKSksIDEpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VG9Eb3MoKXtcclxuICAgICAgICByZXR1cm4gdG9Eb3M7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZFRvRG9zKG5ld0l0ZW1zKXtcclxuICAgICAgICB0b0RvcyA9IG5ld0l0ZW1zXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGNyZWF0ZSxcclxuICAgICAgICBnZXRMZW5ndGgsXHJcbiAgICAgICAgcmVtb3ZlLFxyXG4gICAgICAgIGdldFRvRG9zLFxyXG4gICAgICAgIGxvYWRUb0Rvc1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHt0b0RvQ29udHJvbGxlcn07IiwiaW1wb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IGZyb20gJy4uL2NyZWF0ZUNvbnRyb2xsZXInO1xyXG4gXHJcbmltcG9ydCB7IGNyZWF0ZUl0ZW1VSSB9IGZyb20gJy4vdWktaXRlbXMvY3JlYXRlSXRlbVVJJ1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0Q2FyZCB9IGZyb20gJy4vdWktaXRlbXMvY3JlYXRlUHJvamVjdENhcmQnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdWJUYXNrVUkgfSBmcm9tICcuL3VpLWl0ZW1zL2NyZWF0ZVN1YlRhc2tVSSc7XHJcbmltcG9ydCB7IGNyZWF0ZVRvRG9DYXJkIH0gZnJvbSAnLi91aS1pdGVtcy9jcmVhdGVUb0RvQ2FyZCc7XHJcbmltcG9ydCB7IHN0b3JhZ2VDb250cm9sbGVyIH0gZnJvbSAnLi4vc3RvcmFnZUNvbnRyb2xsZXInO1xyXG5cclxuY29uc3QgZGlzcGxheUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGNvbnN0ICRjb250ZW50RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcclxuICAgIGNvbnN0ICRjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NhcmRDb250YWluZXInKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVJdGVtUG9wdXAoKXtcclxuICAgICAgICBjb25zdCAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcmVhdGVUYXNrUG9wdXAnKTtcclxuXHJcbiAgICAgICAgbGV0ICRoZWFkZXIgPSBjcmVhdGVJdGVtVUkuY3JlYXRlSGVhZGVyKCk7XHJcbiAgICAgICAgbGV0ICRmb3JtQm9keSA9IGNyZWF0ZUl0ZW1VSS5jcmVhdGVGb3JtQm9keSgpO1xyXG4gICAgICAgIGxldCAkY3JlYXRlID0gY3JlYXRlSXRlbVVJLmNyZWF0ZUNyZWF0ZUJ1dHRvbigpO1xyXG4gICAgICAgIGxldCAkZXhpdCA9IGNyZWF0ZUl0ZW1VSS5jcmVhdGVFeGl0QnV0dG9uKCk7XHJcblxyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoJGhlYWRlcilcclxuICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKCRmb3JtQm9keSlcclxuICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKCRjcmVhdGUpXHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZCgkZXhpdClcclxuXHJcbiAgICAgICAgJGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lcilcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZUNyZWF0ZUl0ZW1Qb3B1cCgpe1xyXG4gICAgICAgIGNvbnN0ICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY3JlYXRlVGFza1BvcHVwJyk7XHJcblxyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5yZW1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QocHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgJGNvbnRhaW5lciA9IGNyZWF0ZVByb2plY3RDYXJkLmNyZWF0ZUNvbnRhaW5lcihwcm9qZWN0KTtcclxuICAgICAgICAkY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCgkY29udGFpbmVyKTtcclxuICAgICAgICBjb25zdCAkc3ViVGFza3MgPSBjcmVhdGVQcm9qZWN0Q2FyZC5jcmVhdGVTdWJUYXNrcyhwcm9qZWN0KTtcclxuICAgICAgICAkY29udGFpbmVyLmFwcGVuZENoaWxkKCRzdWJUYXNrcyk7XHJcbiAgICAgICAgY29uc3QgJGJvdHRvbUNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgJGJvdHRvbUNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbUluZm8nKVxyXG4gICAgICAgICRib3R0b21Db250cm9scy5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0Q2FyZC5jcmVhdGVBZGRCdXR0b24ocHJvamVjdCkpXHJcbiAgICAgICAgJGJvdHRvbUNvbnRyb2xzLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RDYXJkLmNyZWF0ZVBlcmNlbnRhZ2UocHJvamVjdCkpXHJcbiAgICAgICAgJGJvdHRvbUNvbnRyb2xzLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RDYXJkLmNyZWF0ZVJlbW92ZUJ1dHRvbihwcm9qZWN0KSlcclxuXHJcbiAgICAgICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkYm90dG9tQ29udHJvbHMpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVG9Ebyh0b0RvKXtcclxuICAgICAgICBjb25zdCAkY29udGFpbmVyID0gY3JlYXRlVG9Eb0NhcmQuY3JlYXRlQ29udGFpbmVyKHRvRG8pO1xyXG4gICAgICAgICRjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKCRjb250YWluZXIpO1xyXG5cclxuICAgICAgICBjb25zdCAkYm90dG9tQ29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAkYm90dG9tQ29udHJvbHMuY2xhc3NMaXN0LmFkZCgnYm90dG9tQ29udHJvbHMnKTtcclxuICAgICAgICBjb25zdCAkcmVtb3ZlQnV0dG9uID0gY3JlYXRlVG9Eb0NhcmQuY3JlYXRlUmVtb3ZlQnV0dG9uKHRvRG8pO1xyXG4gICAgICAgIGNvbnN0ICRjaGVja0JveCA9IGNyZWF0ZVRvRG9DYXJkLmNyZWF0ZUNoZWNrQm94KHRvRG8pO1xyXG4gICAgICAgICRib3R0b21Db250cm9scy5hcHBlbmRDaGlsZCgkY2hlY2tCb3gpO1xyXG4gICAgICAgICRib3R0b21Db250cm9scy5hcHBlbmRDaGlsZCgkcmVtb3ZlQnV0dG9uKTtcclxuXHJcbiAgICAgICAgJGNvbnRhaW5lci5hcHBlbmRDaGlsZCgkYm90dG9tQ29udHJvbHMpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyRGFzaCgpe1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gY3JlYXRlQ29udHJvbGxlci5nZXRJdGVtcygpO1xyXG4gICAgICAgIGNsZWFuRGFzaCgpXHJcblxyXG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PntcclxuICAgICAgICAgICAgaWYoaXRlbS50eXBlID09ICdwcm9qZWN0Jyl7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVQcm9qZWN0KGl0ZW0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoaXRlbS50eXBlID09ICd0b0RvJyl7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVUb0RvKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgc3RvcmFnZUNvbnRyb2xsZXIuc2F2ZUFsbCgpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYW5EYXNoKCl7XHJcbiAgICAgICAgJGNhcmRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlU3ViVGFza1BvcHVwKHByb2plY3Qpe1xyXG4gICAgICAgIGNvbnN0ICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZVRhc2tQb3B1cCcpO1xyXG5cclxuICAgICAgICBsZXQgJGhlYWRlciA9IGNyZWF0ZVN1YlRhc2tVSS5jcmVhdGVIZWFkZXIoKTtcclxuICAgICAgICBsZXQgJGZvcm1Cb2R5ID0gY3JlYXRlU3ViVGFza1VJLmNyZWF0ZUZvcm1Cb2R5KCk7XHJcbiAgICAgICAgbGV0ICRjcmVhdGUgPSBjcmVhdGVTdWJUYXNrVUkuY3JlYXRlQ3JlYXRlQnV0dG9uKHByb2plY3QpO1xyXG4gICAgICAgIGxldCAkZXhpdCA9IGNyZWF0ZVN1YlRhc2tVSS5jcmVhdGVFeGl0QnV0dG9uKCk7XHJcblxyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoJGhlYWRlcilcclxuICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKCRmb3JtQm9keSlcclxuICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKCRjcmVhdGUpXHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZCgkZXhpdClcclxuXHJcbiAgICAgICAgJGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lcilcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGNyZWF0ZUl0ZW1Qb3B1cCxcclxuICAgICAgICBjbG9zZUNyZWF0ZUl0ZW1Qb3B1cCxcclxuICAgICAgICBjcmVhdGVQcm9qZWN0LFxyXG4gICAgICAgIHJlbmRlckRhc2gsXHJcbiAgICAgICAgY3JlYXRlU3ViVGFza1BvcHVwXHJcbiAgICB9XHJcbn0pKClcclxuXHJcbmV4cG9ydCB7ZGlzcGxheUNvbnRyb2xsZXJ9XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vY3JlYXRlQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBkaXNwbGF5Q29udHJvbGxlciB9IGZyb20gXCIuL2Rpc3BsYXlDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCBpbnB1dENvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGZ1bmN0aW9uIHBhcnNlQ3JlYXRlSXRlbSgpe1xyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidHlwZVwiXTpjaGVja2VkJykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGl0bGVcIl0nKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJkZXNjcmlwdGlvblwiXScpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZGF0ZVwiXScpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZTtcclxuXHJcbiAgICAgICAgaWYodHlwZSA9PT0gJ3Byb2plY3QnKXtcclxuICAgICAgICAgICAgY3JlYXRlQ29udHJvbGxlci5jcmVhdGVQcm9qZWN0KHRpdGxlKVxyXG4gICAgICAgIH0gZWxzZSBpZih0eXBlID09PSAndG9Ebycpe1xyXG4gICAgICAgICAgICBjcmVhdGVDb250cm9sbGVyLmNyZWF0ZVRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSlcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIucmVuZGVyRGFzaCgpO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBjcmVhdGVDb250cm9sbGVyLmxvZ0l0ZW1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcGFyc2VDcmVhdGVTdWJUYXNrKHByb2plY3Qpe1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInRpdGxlXCJdJykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZGVzY3JpcHRpb25cIl0nKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImRhdGVcIl0nKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJwcmlvcml0eVwiXTpjaGVja2VkJykudmFsdWU7XHJcblxyXG4gICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlU3ViVGFzayhwcm9qZWN0LCB0aXRsZSxkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUpXHJcblxyXG4gICAgICAgIGRpc3BsYXlDb250cm9sbGVyLnJlbmRlckRhc2goKTtcclxuXHJcbiAgICAgICAgY3JlYXRlQ29udHJvbGxlci5sb2dJdGVtcygpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHBhcnNlQ3JlYXRlSXRlbSxcclxuICAgICAgICBwYXJzZUNyZWF0ZVN1YlRhc2tcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IGlucHV0Q29udHJvbGxlciB9IiwiaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgaW5wdXRDb250cm9sbGVyIH0gZnJvbSBcIi4uL2lucHV0Q29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgY3JlYXRlSXRlbVVJID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcclxuICAgICAgICBjb25zdCAkaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgICRoMi50ZXh0Q29udGVudD0nQ3JlYXRlIGFuIEl0ZW0nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAkaDJcclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRm9ybUJvZHkoKXtcclxuICAgICAgICBjb25zdCAkZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuXHJcbiAgICAgICAgJGZvcm0uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5UeXBlPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpb0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0eXBlXCIgdmFsdWU9XCJ0b0RvXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInR5cGVcIiB2YWx1ZT1cInByb2plY3RcIj4gIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsUmFkaW9Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0b0RvXCI+VG9EbzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJvamVjdFwiPlByb2plY3Q8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1JbnB1dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1JbnB1dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1JbnB1dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIj5EdWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1JbnB1dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJoaWdoXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJtZWRpdW1cIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImxvd1wiPiAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFJhZGlvQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaGlnaFwiPkhpZ2g8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1lZGl1bVwiPk1lZGl1bTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibG93XCI+TG93PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YFxyXG5cclxuICAgICAgICByZXR1cm4gJGZvcm1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVDcmVhdGVCdXR0b24oKXtcclxuICAgICAgICBsZXQgJGNyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICRjcmVhdGVCdXR0b24uaWQgPSAnYnV0dG9uJ1xyXG4gICAgICAgICRjcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlIEl0ZW0nO1xyXG5cclxuICAgICAgICAkY3JlYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaW5wdXRDb250cm9sbGVyLnBhcnNlQ3JlYXRlSXRlbSgpO1xyXG4gICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5jbG9zZUNyZWF0ZUl0ZW1Qb3B1cCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAkY3JlYXRlQnV0dG9uXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRXhpdEJ1dHRvbigpe1xyXG4gICAgICAgIGxldCAkY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAkY2xvc2VCdXR0b24uaWQgPSAncmVtQnV0dG9uJ1xyXG4gICAgICAgICRjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdFeGl0JztcclxuXHJcbiAgICAgICAgJGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgZGlzcGxheUNvbnRyb2xsZXIuY2xvc2VDcmVhdGVJdGVtUG9wdXAoKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gJGNsb3NlQnV0dG9uXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGNyZWF0ZUZvcm1Cb2R5LFxyXG4gICAgICAgIGNyZWF0ZUhlYWRlcixcclxuICAgICAgICBjcmVhdGVDcmVhdGVCdXR0b24sXHJcbiAgICAgICAgY3JlYXRlRXhpdEJ1dHRvblxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHtjcmVhdGVJdGVtVUl9IiwiaW1wb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IGZyb20gXCIuLi8uLi9jcmVhdGVDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IGRpc3BsYXlDb250cm9sbGVyIH0gZnJvbSBcIi4uL2Rpc3BsYXlDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCBjcmVhdGVQcm9qZWN0Q2FyZCA9IChmdW5jdGlvbigpe1xyXG4gICAgZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVyKHByb2plY3Qpe1xyXG4gICAgICAgIGNvbnN0ICRwcm9qZWN0Q2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgJHByb2plY3RDYXJkQ29udGFpbmVyLmlkID0gcHJvamVjdC5pdGVtSWRcclxuICAgICAgICAkcHJvamVjdENhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgICAgICRwcm9qZWN0Q2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XHJcblxyXG4gICAgICAgICRwcm9qZWN0Q2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGgyPiR7cHJvamVjdC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RUYXNrQ29udGFpbmVyXCIgaWQ9JyR7cHJvamVjdC5pdGVtSWR9Jz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuXHJcbiAgICAgICAgcmV0dXJuICRwcm9qZWN0Q2FyZENvbnRhaW5lclxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN1YlRhc2tzKHByb2plY3Qpe1xyXG4gICAgICAgIGNvbnN0ICRwcm9qZWN0VGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGRpdi5wcm9qZWN0VGFza0NvbnRhaW5lcltpZD0nJHtwcm9qZWN0Lml0ZW1JZH0nXWApO1xyXG5cclxuICAgICAgICBwcm9qZWN0LnN1YlRhc2tzLmZvckVhY2goc3ViVGFzayA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRwcm9qZWN0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAkcHJvamVjdFRhc2suY2xhc3NMaXN0LmFkZCgncHJvamVjdFRhc2snKTtcclxuICAgICAgICAgICAgJHByb2plY3RUYXNrLmlkID0gc3ViVGFzay5pdGVtSWQ7XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICRwcm9qZWN0VGFzay5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcFRhc2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlXCI+JHtzdWJUYXNrLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRhdGVcIj4ke3N1YlRhc2suZGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21UYXNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtzdWJUYXNrLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy90cmFzaC0yLnN2Z1wiIGNsYXNzPVwidHJhc2hcIiBpZD0nJHtzdWJUYXNrLml0ZW1JZH0nPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPScke3N1YlRhc2suaXRlbUlkfSc+XHJcbiAgICAgICAgICAgIGBcclxuXHJcbiAgICAgICAgICAgICRwcm9qZWN0VGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCgkcHJvamVjdFRhc2spXHJcbiAgICAgICAgICAgIGNvbnN0ICRjaGVja0JveCA9ICRwcm9qZWN0VGFzay5xdWVyeVNlbGVjdG9yKGBpbnB1dGApO1xyXG5cclxuICAgICAgICAgICAgaWYoc3ViVGFzay5jb21wbGV0ZSl7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNvbXBsZXRlVGFza3MrK1xyXG4gICAgICAgICAgICAgICAgJGNoZWNrQm94LmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkdHJhc2hCdXR0b24gPSAkcHJvamVjdFRhc2sucXVlcnlTZWxlY3RvcihgaW1nYCk7XHJcblxyXG4gICAgICAgICAgICAkdHJhc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhc2tJZCA9IGUudGFyZ2V0LmlkXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92aW5nJylcclxuICAgICAgICAgICAgICAgIGxldCB0YXNrVG9SZW0gPSBjcmVhdGVDb250cm9sbGVyLmZpbmRJdGVtKHRhc2tJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGFza1RvUmVtKVxyXG4gICAgICAgICAgICAgICAgY3JlYXRlQ29udHJvbGxlci5yZW1vdmVTdWJUYXNrKHRhc2tUb1JlbSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICRjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT57XHJcbiAgICAgICAgICAgICAgICBsZXQgc3ViVGFza0lkID0gZS50YXJnZXQuaWRcclxuICAgICAgICAgICAgICAgIGxldCBzdWJUYXNrID0gY3JlYXRlQ29udHJvbGxlci5maW5kSXRlbShzdWJUYXNrSWQpXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdFBhcmVudCA9IGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHN1YlRhc2suY29tcGxldGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YlRhc2suY29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZihlLnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnY29tcGxldGUnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdFBhcmVudC5jb21wbGV0ZVRhc2tzLS1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RQYXJlbnQucGVyY2VudGFnZSA9IChwcm9qZWN0UGFyZW50LmNvbXBsZXRlVGFza3MgLyBwcm9qZWN0UGFyZW50LnN1YlRhc2tzLmxlbmd0aCkgKjEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCAkcGVyY2VudGFnZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2gzJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHBlcmNlbnRhZ2UudGV4dENvbnRlbnQgPSBwcm9qZWN0UGFyZW50LnBlcmNlbnRhZ2UgKyAnJSdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoIXN1YlRhc2suY29tcGxldGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YlRhc2suY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RQYXJlbnQuY29tcGxldGVUYXNrcysrXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RQYXJlbnQucGVyY2VudGFnZSA9IChwcm9qZWN0UGFyZW50LmNvbXBsZXRlVGFza3MgLyBwcm9qZWN0UGFyZW50LnN1YlRhc2tzLmxlbmd0aCkgKjEwMFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkcGVyY2VudGFnZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2gzJylcclxuICAgICAgICAgICAgICAgICAgICAkcGVyY2VudGFnZS50ZXh0Q29udGVudCA9IHByb2plY3RQYXJlbnQucGVyY2VudGFnZSArICclJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VwZGF0aW5nJylcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdWJUYXNrKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgcmV0dXJuICRwcm9qZWN0VGFza0NvbnRhaW5lclxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBlcmNlbnRhZ2UocHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgJHBlcmNlbnRhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHByb2plY3Quc3ViVGFza3MubGVuZ3RoKXtcclxuICAgICAgICAgICAgcHJvamVjdC5wZXJjZW50YWdlID0gKHByb2plY3QuY29tcGxldGVUYXNrcyAvIHByb2plY3Quc3ViVGFza3MubGVuZ3RoKSAqMTAwXHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBwcm9qZWN0LnBlcmNlbnRhZ2UgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAkcGVyY2VudGFnZS50ZXh0Q29udGVudCA9IHByb2plY3QucGVyY2VudGFnZSArICclJ1xyXG5cclxuICAgICAgICByZXR1cm4gJHBlcmNlbnRhZ2VcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVBZGRCdXR0b24ocHJvamVjdCl7XHJcbiAgICAgICAgbGV0ICRidXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAkYnV0LnNyYz0nLi9pbWFnZXMvcGx1cy1jaXJjbGUuc3ZnJztcclxuICAgICAgICAkYnV0LmNsYXNzTGlzdC5hZGQoJ2FkZFRhc2tCdXR0b24nKVxyXG5cclxuICAgICAgICAkYnV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZGNsaWNrJylcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNyZWF0ZVN1YlRhc2tQb3B1cChwcm9qZWN0KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAkYnV0XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUmVtb3ZlQnV0dG9uKHByb2plY3Qpe1xyXG4gICAgICAgIGxldCAkcmJ1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICRyYnV0LnNyYz0nLi9pbWFnZXMvdHJhc2gtMi5zdmcnO1xyXG4gICAgICAgICRyYnV0LmNsYXNzTGlzdC5hZGQoJ3JlbW92ZVByb2plY3RCdXR0b24nKVxyXG5cclxuICAgICAgICAkcmJ1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcclxuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oZS50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLmlkKTtcclxuXHJcbiAgICAgICAgICAgIGNyZWF0ZUNvbnRyb2xsZXIucmVtb3ZlUHJvamVjdChwcm9qZWN0KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAkcmJ1dFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBjcmVhdGVDb250YWluZXIsXHJcbiAgICAgICAgY3JlYXRlU3ViVGFza3MsXHJcbiAgICAgICAgY3JlYXRlUGVyY2VudGFnZSxcclxuICAgICAgICBjcmVhdGVBZGRCdXR0b24sXHJcbiAgICAgICAgY3JlYXRlUmVtb3ZlQnV0dG9uXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQcm9qZWN0Q2FyZCB9IiwiaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZGlzcGxheUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgaW5wdXRDb250cm9sbGVyIH0gZnJvbSBcIi4uL2lucHV0Q29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgY3JlYXRlU3ViVGFza1VJID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKXtcclxuICAgICAgICBjb25zdCAkaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgICRoMi50ZXh0Q29udGVudD0nQ3JlYXRlIGEgc3VidGFzayc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuICRoMlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVGb3JtQm9keSgpe1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5cclxuICAgICAgICAkZm9ybS5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1JbnB1dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1JbnB1dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb248L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1JbnB1dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIj5EdWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1JbnB1dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZGlvQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJoaWdoXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJtZWRpdW1cIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cImxvd1wiPiAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFJhZGlvQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiaGlnaFwiPkhpZ2g8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1lZGl1bVwiPk1lZGl1bTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibG93XCI+TG93PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YFxyXG5cclxuICAgICAgICByZXR1cm4gJGZvcm1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVDcmVhdGVCdXR0b24ocHJvamVjdCl7XHJcbiAgICAgICAgbGV0ICRjcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAkY3JlYXRlQnV0dG9uLmlkID0gJ2J1dHRvbidcclxuICAgICAgICAkY3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBzdWJ0YXNrJztcclxuXHJcbiAgICAgICAgJGNyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlucHV0Q29udHJvbGxlci5wYXJzZUNyZWF0ZVN1YlRhc2socHJvamVjdCk7XHJcbiAgICAgICAgICAgIGRpc3BsYXlDb250cm9sbGVyLmNsb3NlQ3JlYXRlSXRlbVBvcHVwKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICRjcmVhdGVCdXR0b25cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVFeGl0QnV0dG9uKCl7XHJcbiAgICAgICAgbGV0ICRjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICRjbG9zZUJ1dHRvbi5pZCA9ICdyZW1CdXR0b24nXHJcbiAgICAgICAgJGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ0V4aXQnO1xyXG5cclxuICAgICAgICAkY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5Q29udHJvbGxlci5jbG9zZUNyZWF0ZUl0ZW1Qb3B1cCgpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAkY2xvc2VCdXR0b25cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgY3JlYXRlRm9ybUJvZHksXHJcbiAgICAgICAgY3JlYXRlSGVhZGVyLFxyXG4gICAgICAgIGNyZWF0ZUNyZWF0ZUJ1dHRvbixcclxuICAgICAgICBjcmVhdGVFeGl0QnV0dG9uXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQge2NyZWF0ZVN1YlRhc2tVSX0iLCJpbXBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0gZnJvbSBcIi4uLy4uL2NyZWF0ZUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZVRvRG9DYXJkID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVDb250YWluZXIodG9Ebyl7XHJcbiAgICAgICAgY29uc3QgJGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAkY2FyZERpdi5pZCA9IHRvRG8uaXRlbUlkO1xyXG4gICAgICAgICRjYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgICAgICAkY2FyZERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcblxyXG4gICAgICAgIGxldCBjaXJjbGVDb2xvdXIgPSBcIlwiO1xyXG5cclxuICAgICAgICBpZih0b0RvLnByaW9yaXR5ID09PSAnaGlnaCcpe1xyXG4gICAgICAgICAgICBjaXJjbGVDb2xvdXIgPSAnI2ZmNmU2ZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRvRG8ucHJpb3JpdHkgPT09ICdtZWRpdW0nKXtcclxuICAgICAgICAgICAgY2lyY2xlQ29sb3VyID0gJyNmZmI0NmUnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0b0RvLnByaW9yaXR5ID09PSAnbG93Jyl7XHJcbiAgICAgICAgICAgIGNpcmNsZUNvbG91ciA9ICcjZmRmZjhkJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRvRG8uY29tcGxldGUpe1xyXG4gICAgICAgICAgICAkY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJGNhcmREaXYuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgyIGlkPVwidGl0bGVcIj4ke3RvRG8udGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbG91ckNpcmNsZVwiIHN0eWxlPSdiYWNrZ3JvdW5kLWNvbG9yOiR7Y2lyY2xlQ29sb3VyfTsnPiZuYnNwOzwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIGlkPVwiZGVzY1wiPiR7dG9Eby5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPHAgaWQ9XCJkYXRlXCI+JHt0b0RvLmRhdGV9PC9wPmBcclxuXHJcblxyXG4gICAgICAgIHJldHVybiAkY2FyZERpdlxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVJlbW92ZUJ1dHRvbih0b0RvKXtcclxuICAgICAgICBjb25zdCAkcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICAkcmVtb3ZlQnV0dG9uLnNyYyA9ICcuL2ltYWdlcy90cmFzaC0yLnN2Zyc7XHJcbiAgICAgICAgJHJlbW92ZUJ1dHRvbi5pZCA9ICd0cmFzaCc7XHJcblxyXG4gICAgICAgICRyZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjcmVhdGVDb250cm9sbGVyLnJlbW92ZVRvRG8odG9EbylcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gJHJlbW92ZUJ1dHRvblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNoZWNrQm94KCl7XHJcbiAgICAgICAgY29uc3QgJGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAkY2hlY2tCb3gudHlwZSA9ICdjaGVja2JveCc7XHJcblxyXG4gICAgICAgICRjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT57XHJcbiAgICAgICAgICAgIGNvbnN0ICR0b0RvID0gJGNoZWNrQm94LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgY29uc3QgdG9Eb0lkID0gJHRvRG8uaWRcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tUb1VwZGF0ZSA9IGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0odG9Eb0lkKVxyXG5cclxuICAgICAgICAgICAgaWYodGFza1RvVXBkYXRlLmNvbXBsZXRlID09PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICB0YXNrVG9VcGRhdGUuY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgJHRvRG8uY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGUnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHRhc2tUb1VwZGF0ZS5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGFza1RvVXBkYXRlLmNvbXBsZXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAkdG9Eby5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICRjaGVja0JveDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgY3JlYXRlQ29udGFpbmVyLFxyXG4gICAgICAgIGNyZWF0ZVJlbW92ZUJ1dHRvbixcclxuICAgICAgICBjcmVhdGVDaGVja0JveFxyXG4gICAgfVxyXG5cclxufSkoKVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlVG9Eb0NhcmQgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IGZyb20gXCIuL2NyZWF0ZUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgZGlzcGxheUNvbnRyb2xsZXIgfSBmcm9tIFwiLi91aS9kaXNwbGF5Q29udHJvbGxlclwiXHJcbmltcG9ydCB7IHN0b3JhZ2VDb250cm9sbGVyIH0gZnJvbSBcIi4vc3RvcmFnZUNvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0ICRjcmVhdGVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGkjY3JlYXRlVGFzaycpXHJcblxyXG5jb25zdCBzYW1wbGVQcm9qMSA9IGNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlUHJvamVjdCgnS2l0Y2hlbiBDbGVhbnVwJyk7XHJcbmNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlU3ViVGFzayhzYW1wbGVQcm9qMSwgJ0NsZWFuIHRoZSBkaXNoZXMnLCAnSW4gdGhlIHNpbmsgZnJvbSBsYXN0IG5pZ2h0JywgJ2hpZ2gnLCAnMjgtMDgtMjAyMicpXHJcbmNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlU3ViVGFzayhzYW1wbGVQcm9qMSwgJ01vcCB0aGUgZmxvb3InLCAnTW9wIGlzIGluIHRoZSB1dGlsaXR5IHJvb20nLCAnbWVkaXVtJywgJzMwLTA4LTIwMjInKVxyXG5cclxuY3JlYXRlQ29udHJvbGxlci5jcmVhdGVUb0RvKCdGZWVkIHRoZSBkb2cnLCAnRHJ5IGZvb2QgaW4gdGhlIHBhbnRyeScsICdsb3cnLCAnMDEtMDktMjAyMicpXHJcbmNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlVG9EbygnQ29sbGVjdCB0aGUga2lkcycsICdTY2hvb2wgZmluaXNoZXMgYXQgMTQ6MDAnLCAnaGlnaCcsICcwMi0wOS0yMDIyJylcclxuXHJcbmNvbnN0IHNhbXBsZVByb2oyID0gY3JlYXRlQ29udHJvbGxlci5jcmVhdGVQcm9qZWN0KCdTY2hvb2wgUHJvamVjdHMnKTtcclxuY3JlYXRlQ29udHJvbGxlci5jcmVhdGVTdWJUYXNrKHNhbXBsZVByb2oyLCAnR2VvZ3JhcGh5IFJlc2VhcmNoIFN0dWR5JywgJ09uIHZvbGNhbm9lcyBhbmQgZWNvbm9taWMgaW1wYWN0cycsICdoaWdoJywgJzI4LTA4LTIwMjInKVxyXG5jcmVhdGVDb250cm9sbGVyLmNyZWF0ZVN1YlRhc2soc2FtcGxlUHJvajIsICdTY2llbmNlIExhYiBSZXBvcnQnLCAnRWZmZWN0cyBvZiBzYWx0IGluIGRyaW5raW5nIHdhdGVyJywgJ2xvdycsICczMC0wOC0yMDIyJylcclxuXHJcbmNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlVG9EbygnRmluaXNoIFRvLWRvIGFwcCcsICdBbG1vc3QgZG9uZSEnLCAnbWVkaXVtJywgJzExLTA5LTIwMjInKVxyXG5cclxuc3RvcmFnZUNvbnRyb2xsZXIubG9hZEFsbCgpXHJcblxyXG5kaXNwbGF5Q29udHJvbGxlci5yZW5kZXJEYXNoKClcclxuXHJcbiRjcmVhdGVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIGRpc3BsYXlDb250cm9sbGVyLmNyZWF0ZUl0ZW1Qb3B1cCgpXHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9