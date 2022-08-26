/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/allController.js":
/*!******************************!*\
  !*** ./src/allController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allController": () => (/* binding */ allController)
/* harmony export */ });
/* harmony import */ var _taskController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskController */ "./src/taskController.js");


const allController = (function(){
    const allArray = [];

    function getAllLength(){
        return allArray.length;
    }

    function add(item){
        allArray.push(item)
    }

    function remove(id){
        allArray.splice(id,1)
    }

    return {
            getAllLength,
            add,
            remove}
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
/* harmony import */ var _taskController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskController */ "./src/taskController.js");
/* harmony import */ var _allController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allController */ "./src/allController.js");



const projectController = (function(){
    let projects = [];

    function createProject(title, tasks){
        const newProject = {title, tasks};
        newProject.projectid = projects.length;
        newProject.id = _allController__WEBPACK_IMPORTED_MODULE_1__.allController.getAllLength();
        newProject.percentage = 0;

        _allController__WEBPACK_IMPORTED_MODULE_1__.allController.add(newProject)
        projects.push(newProject);
        return newProject
    }

    function remove(project){

    }

    function removeTask(projectToRem, taskToRem){
        const project = projects.find( i => i.projectid === projectToRem.projectid);

        const taskToRemove = project.tasks.find(i => i.taskid === taskToRem.taskid);

        project.tasks.splice(project.tasks.findIndex(taskToRemove),1)
    }

    return{
        createProject,
        removeTask
    }
})()



/***/ }),

/***/ "./src/projectDisplay.js":
/*!*******************************!*\
  !*** ./src/projectDisplay.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectDisplay": () => (/* binding */ projectDisplay)
/* harmony export */ });
/* harmony import */ var _allController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allController */ "./src/allController.js");


const projectDisplay = (function(){
    const $cardContainer = document.querySelector('div#cardContainer');

    function createProjectCard(project){
        const $projectCardContainer = document.createElement('div')
        $projectCardContainer.setAttribute('projectid', project.projectid)
        $projectCardContainer.id = project.id
        $projectCardContainer.classList.add('card');
        $projectCardContainer.classList.add('project');

        $projectCardContainer.innerHTML = `<h2>${project.title}</h2>
                <div class="projectTaskContainer" id='${project.projectid}'>

                </div>
                </div>`

        $cardContainer.appendChild($projectCardContainer)

        if(project.projectid === 0){

        }
        const $projectTaskContainer = document.querySelector(`div.projectTaskContainer[id='${project.id}']`);

        let completeTasks = 0;

        project.tasks.forEach(task => {
            const $projectTask = document.createElement('div');
            $projectTask.classList.add('projectTask');

            if(task.complete){
                completeTasks++
            }

            $projectTask.innerHTML = `
            <div class="taskText">
                            <div class="topTask">
                                <p class="title">${task.title}</p>
                                <p class="date">${task.date}</p>
                            </div>
                            <div class="bottomTask">
                                <p>${task.description}</p>
                            </div>
                        </div>
                        <img src="./images/trash-2.svg" id="trash">

                        <input type="checkbox">
            `

            $projectTaskContainer.appendChild($projectTask)
        });

        project.percentage = (completeTasks / project.tasks.length) *100

        $projectCardContainer.innerHTML += `<h3>${project.percentage}%</h3>`
    }

    return{
        createProjectCard
    }
})()



/***/ }),

/***/ "./src/taskController.js":
/*!*******************************!*\
  !*** ./src/taskController.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskController": () => (/* binding */ taskController)
/* harmony export */ });
/* harmony import */ var _taskDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDisplay */ "./src/taskDisplay.js");
/* harmony import */ var _allController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allController */ "./src/allController.js");



const taskController = (function () {
    let tasks = [];

    function getTasks() {
        return tasks;
    }

    function createTask(title, description, priority, date) {
        let newTask = {title,description,priority,date, complete: false,};
        newTask.taskid = tasks.length
        newTask.id = _allController__WEBPACK_IMPORTED_MODULE_1__.allController.getAllLength()
        console.log(newTask.id)
        tasks.push(newTask)
        _allController__WEBPACK_IMPORTED_MODULE_1__.allController.add(newTask)
        _taskDisplay__WEBPACK_IMPORTED_MODULE_0__.taskDisplay.renderTasks()
        return newTask
    }


    function removeTask(id){
        tasks.splice(id, 1);

        console.log(tasks)
    }
    
    return {
        createTask,
        getTasks,
        removeTask
    }
})();
 


/***/ }),

/***/ "./src/taskDisplay.js":
/*!****************************!*\
  !*** ./src/taskDisplay.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskDisplay": () => (/* binding */ taskDisplay)
/* harmony export */ });
/* harmony import */ var _allController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./allController */ "./src/allController.js");
/* harmony import */ var _taskController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskController */ "./src/taskController.js");



const taskDisplay = (function () {
    const $cardContainer = document.querySelector('div#cardContainer');
    const $contentDiv = document.querySelector('div#content');

    function createTaskCard(task){
        console.log('creatingcard');
    
        const $cardDiv = document.createElement('div');
        $cardDiv.setAttribute('taskid', task.taskid)
        $cardDiv.classList.add('card');
        $cardDiv.classList.add('task');
        let circleColour = "";

        if(task.priority === 'high'){
            circleColour = '#ff6e6e';
        } else if(task.priority === 'medium'){
            circleColour = '#ffb46e';
        } else if(task.priority === 'low'){
            circleColour = '#fdff8d';
        }

        if(task.complete){
            $cardDiv.classList.add('complete');
        }

        $cardDiv.innerHTML += `
        <div class="titleContainer">
            <h2 id="title">${task.title}</h2>
            <div id="colourCircle" style='background-color:${circleColour};'>&nbsp;</div>
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
            removeTask(e.target.parentNode.parentNode.taskid);
            removeFromAll(e.target.parentNode.parentNode.id)
        })

        return $removeButton;
    }

    function createCheckBox(){
        const $checkBox = document.createElement('input');
        $checkBox.type = 'checkbox';

        $checkBox.addEventListener('change', (e) =>{
            const $task = $checkBox.parentNode.parentNode;
            const taskId = $task.id

            const tasks = _taskController__WEBPACK_IMPORTED_MODULE_1__.taskController.getTasks()

            const taskToUpdate = tasks.find(item => item.id === parseInt(taskId));

            if(taskToUpdate.complete === false){
                taskToUpdate.complete = true;
                $task.classList.toggle('complete');
            } else if(taskToUpdate.complete === true) {
                taskToUpdate.complete = false;
                $task.classList.toggle('complete');
            }
        })

        return $checkBox;
    }

    function createAddToProjectButton(){
        const $but = document.createElement('button');
        $but.textContent = 'Add to project'

        return $but;
    }

    function removeTask(task){
        _taskController__WEBPACK_IMPORTED_MODULE_1__.taskController.removeTask(task)
        renderTasks()
    } 

    function removeFromAll(task){
        _allController__WEBPACK_IMPORTED_MODULE_0__.allController.remove(task)
        renderTasks()
    }

    function renderTasks(){
        $cardContainer.innerHTML = '';
        _taskController__WEBPACK_IMPORTED_MODULE_1__.taskController.getTasks().forEach(task => {
            createTaskCard(task)
        })
    }

    function createTaskPopup(){
        if(!document.body.contains(document.querySelector('.createTaskPopup'))){
            const $createTaskPopupContainer = document.createElement('div');
            $createTaskPopupContainer.classList.add('createTaskPopup');

            const $h2 = document.createElement('h2');
            $h2.textContent='Create a Task';
            $createTaskPopupContainer.appendChild($h2);

            const $form = document.createElement('form');

            $form.innerHTML = `<div class="formInputContainer">
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
            
            let $button = document.createElement('p')
            $button.id = 'button'
            $button.textContent = 'Create Task';

            $button.addEventListener('click', (e) => {
                createTaskFromInput()
            })

            let $remButton = document.createElement('p')
            $remButton.id = 'remButton'
            $remButton.textContent = 'Exit';

            $remButton.addEventListener('click', (e) => {
                closeCreatePopup()
            })

            $form.appendChild($button);
            $form.appendChild($remButton);

            $createTaskPopupContainer.appendChild($form)

            $contentDiv.appendChild($createTaskPopupContainer)
        }
    }

    function closeCreatePopup(){
        const $createTaskPopupContainer = document.querySelector('div.createTaskPopup');

        $createTaskPopupContainer.replaceChildren();
        $createTaskPopupContainer.remove()
    }

    function createTaskFromInput() {
        const title = document.querySelector('input[name="title"]');
        const description = document.querySelector('input[name="description"]').value;
        const date = document.querySelector('input[name="date"]').value;
        const priority = document.querySelector('input[name="priority"]:checked').value;

        _taskController__WEBPACK_IMPORTED_MODULE_1__.taskController.createTask(title.value, description, priority, date);

        closeCreatePopup()

    }

    return{
        createTaskCard,
        createTaskPopup,
        renderTasks,
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
/* harmony import */ var _taskDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDisplay */ "./src/taskDisplay.js");
/* harmony import */ var _taskController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskController */ "./src/taskController.js");
/* harmony import */ var _projectDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectDisplay */ "./src/projectDisplay.js");
/* harmony import */ var _projectController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectController */ "./src/projectController.js");





console.log('start')

const $createTaskButton = document.querySelector('li#createTask');
$createTaskButton.addEventListener('click', () => {
    _taskDisplay__WEBPACK_IMPORTED_MODULE_0__.taskDisplay.createTaskPopup()
});

let sampleProject = _projectController__WEBPACK_IMPORTED_MODULE_3__.projectController.createProject('Sample Project', [{title: 'tasktitle', description: 'taskdescription', date: 'taskdate', complete: false},{title: 'tasktitle', description: 'taskdescription', date: 'taskdate', complete: true}])
_projectDisplay__WEBPACK_IMPORTED_MODULE_2__.projectDisplay.createProjectCard(sampleProject)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFzRixFQUFFLHFGQUFxRjtBQUNyUCw2RUFBZ0MsZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hbGxDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdERpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrRGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFza0NvbnRyb2xsZXIgfSBmcm9tIFwiLi90YXNrQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgYWxsQ29udHJvbGxlciA9IChmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgYWxsQXJyYXkgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxMZW5ndGgoKXtcclxuICAgICAgICByZXR1cm4gYWxsQXJyYXkubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZChpdGVtKXtcclxuICAgICAgICBhbGxBcnJheS5wdXNoKGl0ZW0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlKGlkKXtcclxuICAgICAgICBhbGxBcnJheS5zcGxpY2UoaWQsMSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBnZXRBbGxMZW5ndGgsXHJcbiAgICAgICAgICAgIGFkZCxcclxuICAgICAgICAgICAgcmVtb3ZlfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHthbGxDb250cm9sbGVyfSIsImltcG9ydCB7IHRhc2tDb250cm9sbGVyIH0gZnJvbSBcIi4vdGFza0NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgYWxsQ29udHJvbGxlciB9IGZyb20gXCIuL2FsbENvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHByb2plY3RDb250cm9sbGVyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCB0YXNrcyl7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHt0aXRsZSwgdGFza3N9O1xyXG4gICAgICAgIG5ld1Byb2plY3QucHJvamVjdGlkID0gcHJvamVjdHMubGVuZ3RoO1xyXG4gICAgICAgIG5ld1Byb2plY3QuaWQgPSBhbGxDb250cm9sbGVyLmdldEFsbExlbmd0aCgpO1xyXG4gICAgICAgIG5ld1Byb2plY3QucGVyY2VudGFnZSA9IDA7XHJcblxyXG4gICAgICAgIGFsbENvbnRyb2xsZXIuYWRkKG5ld1Byb2plY3QpXHJcbiAgICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICAgICAgICByZXR1cm4gbmV3UHJvamVjdFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZShwcm9qZWN0KXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlVGFzayhwcm9qZWN0VG9SZW0sIHRhc2tUb1JlbSl7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoIGkgPT4gaS5wcm9qZWN0aWQgPT09IHByb2plY3RUb1JlbS5wcm9qZWN0aWQpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrVG9SZW1vdmUgPSBwcm9qZWN0LnRhc2tzLmZpbmQoaSA9PiBpLnRhc2tpZCA9PT0gdGFza1RvUmVtLnRhc2tpZCk7XHJcblxyXG4gICAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKHByb2plY3QudGFza3MuZmluZEluZGV4KHRhc2tUb1JlbW92ZSksMSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcclxuICAgICAgICByZW1vdmVUYXNrXHJcbiAgICB9XHJcbn0pKClcclxuXHJcbmV4cG9ydCB7cHJvamVjdENvbnRyb2xsZXJ9IiwiaW1wb3J0IHsgYWxsQ29udHJvbGxlciB9IGZyb20gXCIuL2FsbENvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHByb2plY3REaXNwbGF5ID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCAkY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjYXJkQ29udGFpbmVyJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgJHByb2plY3RDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAkcHJvamVjdENhcmRDb250YWluZXIuc2V0QXR0cmlidXRlKCdwcm9qZWN0aWQnLCBwcm9qZWN0LnByb2plY3RpZClcclxuICAgICAgICAkcHJvamVjdENhcmRDb250YWluZXIuaWQgPSBwcm9qZWN0LmlkXHJcbiAgICAgICAgJHByb2plY3RDYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgICAgICAkcHJvamVjdENhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xyXG5cclxuICAgICAgICAkcHJvamVjdENhcmRDb250YWluZXIuaW5uZXJIVE1MID0gYDxoMj4ke3Byb2plY3QudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0VGFza0NvbnRhaW5lclwiIGlkPScke3Byb2plY3QucHJvamVjdGlkfSc+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5gXHJcblxyXG4gICAgICAgICRjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKCRwcm9qZWN0Q2FyZENvbnRhaW5lcilcclxuXHJcbiAgICAgICAgaWYocHJvamVjdC5wcm9qZWN0aWQgPT09IDApe1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgJHByb2plY3RUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2LnByb2plY3RUYXNrQ29udGFpbmVyW2lkPScke3Byb2plY3QuaWR9J11gKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbXBsZXRlVGFza3MgPSAwO1xyXG5cclxuICAgICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRwcm9qZWN0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAkcHJvamVjdFRhc2suY2xhc3NMaXN0LmFkZCgncHJvamVjdFRhc2snKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRhc2suY29tcGxldGUpe1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGVUYXNrcysrXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICRwcm9qZWN0VGFzay5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcFRhc2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlXCI+JHt0YXNrLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRhdGVcIj4ke3Rhc2suZGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21UYXNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHt0YXNrLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltYWdlcy90cmFzaC0yLnN2Z1wiIGlkPVwidHJhc2hcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIj5cclxuICAgICAgICAgICAgYFxyXG5cclxuICAgICAgICAgICAgJHByb2plY3RUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKCRwcm9qZWN0VGFzaylcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcHJvamVjdC5wZXJjZW50YWdlID0gKGNvbXBsZXRlVGFza3MgLyBwcm9qZWN0LnRhc2tzLmxlbmd0aCkgKjEwMFxyXG5cclxuICAgICAgICAkcHJvamVjdENhcmRDb250YWluZXIuaW5uZXJIVE1MICs9IGA8aDM+JHtwcm9qZWN0LnBlcmNlbnRhZ2V9JTwvaDM+YFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBjcmVhdGVQcm9qZWN0Q2FyZFxyXG4gICAgfVxyXG59KSgpXHJcblxyXG5leHBvcnQgeyBwcm9qZWN0RGlzcGxheSB9IiwiaW1wb3J0IHsgdGFza0Rpc3BsYXkgfSBmcm9tIFwiLi90YXNrRGlzcGxheVwiO1xyXG5pbXBvcnQgeyBhbGxDb250cm9sbGVyIH0gZnJvbSBcIi4vYWxsQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgdGFza0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHRhc2tzID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0VGFza3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSkge1xyXG4gICAgICAgIGxldCBuZXdUYXNrID0ge3RpdGxlLGRlc2NyaXB0aW9uLHByaW9yaXR5LGRhdGUsIGNvbXBsZXRlOiBmYWxzZSx9O1xyXG4gICAgICAgIG5ld1Rhc2sudGFza2lkID0gdGFza3MubGVuZ3RoXHJcbiAgICAgICAgbmV3VGFzay5pZCA9IGFsbENvbnRyb2xsZXIuZ2V0QWxsTGVuZ3RoKClcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdUYXNrLmlkKVxyXG4gICAgICAgIHRhc2tzLnB1c2gobmV3VGFzaylcclxuICAgICAgICBhbGxDb250cm9sbGVyLmFkZChuZXdUYXNrKVxyXG4gICAgICAgIHRhc2tEaXNwbGF5LnJlbmRlclRhc2tzKClcclxuICAgICAgICByZXR1cm4gbmV3VGFza1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVUYXNrKGlkKXtcclxuICAgICAgICB0YXNrcy5zcGxpY2UoaWQsIDEpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrcylcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjcmVhdGVUYXNrLFxyXG4gICAgICAgIGdldFRhc2tzLFxyXG4gICAgICAgIHJlbW92ZVRhc2tcclxuICAgIH1cclxufSkoKTtcclxuIFxyXG5leHBvcnQgeyB0YXNrQ29udHJvbGxlciB9IiwiaW1wb3J0IHsgYWxsQ29udHJvbGxlciB9IGZyb20gXCIuL2FsbENvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgdGFza0NvbnRyb2xsZXIgfSBmcm9tIFwiLi90YXNrQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgdGFza0Rpc3BsYXkgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgJGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY2FyZENvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgJGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tDYXJkKHRhc2spe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjcmVhdGluZ2NhcmQnKTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0ICRjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgJGNhcmREaXYuc2V0QXR0cmlidXRlKCd0YXNraWQnLCB0YXNrLnRhc2tpZClcclxuICAgICAgICAkY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XHJcbiAgICAgICAgJGNhcmREaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xyXG4gICAgICAgIGxldCBjaXJjbGVDb2xvdXIgPSBcIlwiO1xyXG5cclxuICAgICAgICBpZih0YXNrLnByaW9yaXR5ID09PSAnaGlnaCcpe1xyXG4gICAgICAgICAgICBjaXJjbGVDb2xvdXIgPSAnI2ZmNmU2ZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRhc2sucHJpb3JpdHkgPT09ICdtZWRpdW0nKXtcclxuICAgICAgICAgICAgY2lyY2xlQ29sb3VyID0gJyNmZmI0NmUnO1xyXG4gICAgICAgIH0gZWxzZSBpZih0YXNrLnByaW9yaXR5ID09PSAnbG93Jyl7XHJcbiAgICAgICAgICAgIGNpcmNsZUNvbG91ciA9ICcjZmRmZjhkJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRhc2suY29tcGxldGUpe1xyXG4gICAgICAgICAgICAkY2FyZERpdi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJGNhcmREaXYuaW5uZXJIVE1MICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVDb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGgyIGlkPVwidGl0bGVcIj4ke3Rhc2sudGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbG91ckNpcmNsZVwiIHN0eWxlPSdiYWNrZ3JvdW5kLWNvbG9yOiR7Y2lyY2xlQ29sb3VyfTsnPiZuYnNwOzwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIGlkPVwiZGVzY1wiPiR7dGFzay5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPHAgaWQ9XCJkYXRlXCI+JHt0YXNrLmRhdGV9PC9wPlxyXG4gICAgYFxyXG5cclxuICAgICAgICAkY2FyZERpdi5hcHBlbmRDaGlsZChjcmVhdGVCb3R0b21Db250cm9scygpKVxyXG4gICAgICAgICRjYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKCRjYXJkRGl2KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVCb3R0b21Db250cm9scygpe1xyXG4gICAgICAgIGNvbnN0ICRib3R0b21Db250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICRib3R0b21Db250cm9scy5jbGFzc0xpc3QuYWRkKCdib3R0b21Db250cm9scycpO1xyXG5cclxuICAgICAgICAkYm90dG9tQ29udHJvbHMuYXBwZW5kQ2hpbGQoY3JlYXRlQ2hlY2tCb3goKSk7XHJcbiAgICAgICAgJGJvdHRvbUNvbnRyb2xzLmFwcGVuZENoaWxkKGNyZWF0ZVJlbW92ZUJ1dHRvbigpKTtcclxuICAgICAgICAkYm90dG9tQ29udHJvbHMuYXBwZW5kQ2hpbGQoY3JlYXRlQWRkVG9Qcm9qZWN0QnV0dG9uKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gJGJvdHRvbUNvbnRyb2xzXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUmVtb3ZlQnV0dG9uKCl7XHJcbiAgICAgICAgY29uc3QgJHJlbW92ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgJHJlbW92ZUJ1dHRvbi5zcmMgPSAnLi9pbWFnZXMvdHJhc2gtMi5zdmcnO1xyXG4gICAgICAgICRyZW1vdmVCdXR0b24uaWQgPSAndHJhc2gnO1xyXG5cclxuICAgICAgICAkcmVtb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgcmVtb3ZlVGFzayhlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUudGFza2lkKTtcclxuICAgICAgICAgICAgcmVtb3ZlRnJvbUFsbChlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgcmV0dXJuICRyZW1vdmVCdXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2hlY2tCb3goKXtcclxuICAgICAgICBjb25zdCAkY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICRjaGVja0JveC50eXBlID0gJ2NoZWNrYm94JztcclxuXHJcbiAgICAgICAgJGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PntcclxuICAgICAgICAgICAgY29uc3QgJHRhc2sgPSAkY2hlY2tCb3gucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICBjb25zdCB0YXNrSWQgPSAkdGFzay5pZFxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFza3MgPSB0YXNrQ29udHJvbGxlci5nZXRUYXNrcygpXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrVG9VcGRhdGUgPSB0YXNrcy5maW5kKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcGFyc2VJbnQodGFza0lkKSk7XHJcblxyXG4gICAgICAgICAgICBpZih0YXNrVG9VcGRhdGUuY29tcGxldGUgPT09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgIHRhc2tUb1VwZGF0ZS5jb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAkdGFzay5jbGFzc0xpc3QudG9nZ2xlKCdjb21wbGV0ZScpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYodGFza1RvVXBkYXRlLmNvbXBsZXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrVG9VcGRhdGUuY29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICR0YXNrLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gJGNoZWNrQm94O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUFkZFRvUHJvamVjdEJ1dHRvbigpe1xyXG4gICAgICAgIGNvbnN0ICRidXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICAkYnV0LnRleHRDb250ZW50ID0gJ0FkZCB0byBwcm9qZWN0J1xyXG5cclxuICAgICAgICByZXR1cm4gJGJ1dDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVUYXNrKHRhc2spe1xyXG4gICAgICAgIHRhc2tDb250cm9sbGVyLnJlbW92ZVRhc2sodGFzaylcclxuICAgICAgICByZW5kZXJUYXNrcygpXHJcbiAgICB9IFxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUZyb21BbGwodGFzayl7XHJcbiAgICAgICAgYWxsQ29udHJvbGxlci5yZW1vdmUodGFzaylcclxuICAgICAgICByZW5kZXJUYXNrcygpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyVGFza3MoKXtcclxuICAgICAgICAkY2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB0YXNrQ29udHJvbGxlci5nZXRUYXNrcygpLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tDYXJkKHRhc2spXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrUG9wdXAoKXtcclxuICAgICAgICBpZighZG9jdW1lbnQuYm9keS5jb250YWlucyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlVGFza1BvcHVwJykpKXtcclxuICAgICAgICAgICAgY29uc3QgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZVRhc2tQb3B1cCcpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgJGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgICAgICAgICAgJGgyLnRleHRDb250ZW50PSdDcmVhdGUgYSBUYXNrJztcclxuICAgICAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5hcHBlbmRDaGlsZCgkaDIpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgJGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblxyXG4gICAgICAgICAgICAkZm9ybS5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cImZvcm1JbnB1dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ0aXRsZVwiPlRpdGxlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtSW5wdXRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIj5EdWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIG5hbWU9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybUlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk8L2xhYmVsPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkaW9Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwiaGlnaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJtZWRpdW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwcmlvcml0eVwiIHZhbHVlPVwibG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFJhZGlvQ29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJoaWdoXCI+SGlnaDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJtZWRpdW1cIj5NZWRpdW08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibG93XCI+TG93PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PmBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCAkYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgICAgICRidXR0b24uaWQgPSAnYnV0dG9uJ1xyXG4gICAgICAgICAgICAkYnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBUYXNrJztcclxuXHJcbiAgICAgICAgICAgICRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlVGFza0Zyb21JbnB1dCgpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBsZXQgJHJlbUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICAgICAkcmVtQnV0dG9uLmlkID0gJ3JlbUJ1dHRvbidcclxuICAgICAgICAgICAgJHJlbUJ1dHRvbi50ZXh0Q29udGVudCA9ICdFeGl0JztcclxuXHJcbiAgICAgICAgICAgICRyZW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VDcmVhdGVQb3B1cCgpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICAkZm9ybS5hcHBlbmRDaGlsZCgkYnV0dG9uKTtcclxuICAgICAgICAgICAgJGZvcm0uYXBwZW5kQ2hpbGQoJHJlbUJ1dHRvbik7XHJcblxyXG4gICAgICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKCRmb3JtKVxyXG5cclxuICAgICAgICAgICAgJGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lcilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VDcmVhdGVQb3B1cCgpe1xyXG4gICAgICAgIGNvbnN0ICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY3JlYXRlVGFza1BvcHVwJyk7XHJcblxyXG4gICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIucmVwbGFjZUNoaWxkcmVuKCk7XHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5yZW1vdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tGcm9tSW5wdXQoKSB7XHJcbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidGl0bGVcIl0nKTtcclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJkZXNjcmlwdGlvblwiXScpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZGF0ZVwiXScpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS52YWx1ZTtcclxuXHJcbiAgICAgICAgdGFza0NvbnRyb2xsZXIuY3JlYXRlVGFzayh0aXRsZS52YWx1ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKTtcclxuXHJcbiAgICAgICAgY2xvc2VDcmVhdGVQb3B1cCgpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBjcmVhdGVUYXNrQ2FyZCxcclxuICAgICAgICBjcmVhdGVUYXNrUG9wdXAsXHJcbiAgICAgICAgcmVuZGVyVGFza3MsXHJcbiAgICB9XHJcbn0pKClcclxuXHJcblxyXG5leHBvcnQge3Rhc2tEaXNwbGF5fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgdGFza0Rpc3BsYXkgfSBmcm9tIFwiLi90YXNrRGlzcGxheVwiO1xyXG5pbXBvcnQgeyB0YXNrQ29udHJvbGxlciB9IGZyb20gJy4vdGFza0NvbnRyb2xsZXInXHJcbmltcG9ydCB7IHByb2plY3REaXNwbGF5IH0gZnJvbSAnLi9wcm9qZWN0RGlzcGxheSdcclxuaW1wb3J0IHsgcHJvamVjdENvbnRyb2xsZXIgfSBmcm9tICcuL3Byb2plY3RDb250cm9sbGVyJ1xyXG5cclxuY29uc29sZS5sb2coJ3N0YXJ0JylcclxuXHJcbmNvbnN0ICRjcmVhdGVUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGkjY3JlYXRlVGFzaycpO1xyXG4kY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRhc2tEaXNwbGF5LmNyZWF0ZVRhc2tQb3B1cCgpXHJcbn0pO1xyXG5cclxubGV0IHNhbXBsZVByb2plY3QgPSBwcm9qZWN0Q29udHJvbGxlci5jcmVhdGVQcm9qZWN0KCdTYW1wbGUgUHJvamVjdCcsIFt7dGl0bGU6ICd0YXNrdGl0bGUnLCBkZXNjcmlwdGlvbjogJ3Rhc2tkZXNjcmlwdGlvbicsIGRhdGU6ICd0YXNrZGF0ZScsIGNvbXBsZXRlOiBmYWxzZX0se3RpdGxlOiAndGFza3RpdGxlJywgZGVzY3JpcHRpb246ICd0YXNrZGVzY3JpcHRpb24nLCBkYXRlOiAndGFza2RhdGUnLCBjb21wbGV0ZTogdHJ1ZX1dKVxyXG5wcm9qZWN0RGlzcGxheS5jcmVhdGVQcm9qZWN0Q2FyZChzYW1wbGVQcm9qZWN0KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==