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
        $projectCardContainer.classList.add('card');
        $projectCardContainer.classList.add('project');

        $projectCardContainer.innerHTML = `<h2>${project.title}</h2>
                <div class="projectTaskContainer">

                </div>
                </div>

                <h3>${project.percentage}%</h3>`

        $cardContainer.appendChild($projectCardContainer)
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

let sampleProject = _projectController__WEBPACK_IMPORTED_MODULE_3__.projectController.createProject('Sample Project')
_projectDisplay__WEBPACK_IMPORTED_MODULE_2__.projectDisplay.createProjectCard(sampleProject)
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0VBQXlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7VUMvTUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ040QztBQUNLO0FBQ0E7QUFDTTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxRUFBMkI7QUFDL0IsQ0FBQztBQUNEO0FBQ0Esb0JBQW9CLCtFQUErQjtBQUNuRCw2RUFBZ0MsZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hbGxDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdERpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2tDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrRGlzcGxheS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFza0NvbnRyb2xsZXIgfSBmcm9tIFwiLi90YXNrQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3QgYWxsQ29udHJvbGxlciA9IChmdW5jdGlvbigpe1xyXG4gICAgY29uc3QgYWxsQXJyYXkgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRBbGxMZW5ndGgoKXtcclxuICAgICAgICByZXR1cm4gYWxsQXJyYXkubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZChpdGVtKXtcclxuICAgICAgICBhbGxBcnJheS5wdXNoKGl0ZW0pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlKGlkKXtcclxuICAgICAgICBhbGxBcnJheS5zcGxpY2UoaWQsMSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBnZXRBbGxMZW5ndGgsXHJcbiAgICAgICAgICAgIGFkZCxcclxuICAgICAgICAgICAgcmVtb3ZlfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHthbGxDb250cm9sbGVyfSIsImltcG9ydCB7IHRhc2tDb250cm9sbGVyIH0gZnJvbSBcIi4vdGFza0NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgYWxsQ29udHJvbGxlciB9IGZyb20gXCIuL2FsbENvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHByb2plY3RDb250cm9sbGVyID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgcHJvamVjdHMgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCB0YXNrcyl7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHt0aXRsZSwgdGFza3N9O1xyXG4gICAgICAgIG5ld1Byb2plY3QucHJvamVjdGlkID0gcHJvamVjdHMubGVuZ3RoO1xyXG4gICAgICAgIG5ld1Byb2plY3QuaWQgPSBhbGxDb250cm9sbGVyLmdldEFsbExlbmd0aCgpO1xyXG4gICAgICAgIG5ld1Byb2plY3QucGVyY2VudGFnZSA9IDA7XHJcblxyXG4gICAgICAgIGFsbENvbnRyb2xsZXIuYWRkKG5ld1Byb2plY3QpXHJcbiAgICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICAgICAgICByZXR1cm4gbmV3UHJvamVjdFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZShwcm9qZWN0KXtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlVGFzayhwcm9qZWN0VG9SZW0sIHRhc2tUb1JlbSl7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoIGkgPT4gaS5wcm9qZWN0aWQgPT09IHByb2plY3RUb1JlbS5wcm9qZWN0aWQpO1xyXG5cclxuICAgICAgICBjb25zdCB0YXNrVG9SZW1vdmUgPSBwcm9qZWN0LnRhc2tzLmZpbmQoaSA9PiBpLnRhc2tpZCA9PT0gdGFza1RvUmVtLnRhc2tpZCk7XHJcblxyXG4gICAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKHByb2plY3QudGFza3MuZmluZEluZGV4KHRhc2tUb1JlbW92ZSksMSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcclxuICAgICAgICByZW1vdmVUYXNrXHJcbiAgICB9XHJcbn0pKClcclxuXHJcbmV4cG9ydCB7cHJvamVjdENvbnRyb2xsZXJ9IiwiaW1wb3J0IHsgYWxsQ29udHJvbGxlciB9IGZyb20gXCIuL2FsbENvbnRyb2xsZXJcIjtcclxuXHJcbmNvbnN0IHByb2plY3REaXNwbGF5ID0gKGZ1bmN0aW9uKCl7XHJcbiAgICBjb25zdCAkY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjYXJkQ29udGFpbmVyJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdENhcmQocHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgJHByb2plY3RDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAkcHJvamVjdENhcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xyXG4gICAgICAgICRwcm9qZWN0Q2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XHJcblxyXG4gICAgICAgICRwcm9qZWN0Q2FyZENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGgyPiR7cHJvamVjdC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3RUYXNrQ29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8aDM+JHtwcm9qZWN0LnBlcmNlbnRhZ2V9JTwvaDM+YFxyXG5cclxuICAgICAgICAkY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCgkcHJvamVjdENhcmRDb250YWluZXIpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGNyZWF0ZVByb2plY3RDYXJkXHJcbiAgICB9XHJcbn0pKClcclxuXHJcbmV4cG9ydCB7IHByb2plY3REaXNwbGF5IH0iLCJpbXBvcnQgeyB0YXNrRGlzcGxheSB9IGZyb20gXCIuL3Rhc2tEaXNwbGF5XCI7XHJcbmltcG9ydCB7IGFsbENvbnRyb2xsZXIgfSBmcm9tIFwiLi9hbGxDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCB0YXNrQ29udHJvbGxlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgdGFza3MgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRUYXNrcygpIHtcclxuICAgICAgICByZXR1cm4gdGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKSB7XHJcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSB7dGl0bGUsZGVzY3JpcHRpb24scHJpb3JpdHksZGF0ZSwgY29tcGxldGU6IGZhbHNlLH07XHJcbiAgICAgICAgbmV3VGFzay50YXNraWQgPSB0YXNrcy5sZW5ndGhcclxuICAgICAgICBuZXdUYXNrLmlkID0gYWxsQ29udHJvbGxlci5nZXRBbGxMZW5ndGgoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1Rhc2suaWQpXHJcbiAgICAgICAgdGFza3MucHVzaChuZXdUYXNrKVxyXG4gICAgICAgIGFsbENvbnRyb2xsZXIuYWRkKG5ld1Rhc2spXHJcbiAgICAgICAgdGFza0Rpc3BsYXkucmVuZGVyVGFza3MoKVxyXG4gICAgICAgIHJldHVybiBuZXdUYXNrXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2soaWQpe1xyXG4gICAgICAgIHRhc2tzLnNwbGljZShpZCwgMSk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRhc2tzKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZVRhc2ssXHJcbiAgICAgICAgZ2V0VGFza3MsXHJcbiAgICAgICAgcmVtb3ZlVGFza1xyXG4gICAgfVxyXG59KSgpO1xyXG4gXHJcbmV4cG9ydCB7IHRhc2tDb250cm9sbGVyIH0iLCJpbXBvcnQgeyBhbGxDb250cm9sbGVyIH0gZnJvbSBcIi4vYWxsQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyB0YXNrQ29udHJvbGxlciB9IGZyb20gXCIuL3Rhc2tDb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCB0YXNrRGlzcGxheSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCAkY2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjYXJkQ29udGFpbmVyJyk7XHJcbiAgICBjb25zdCAkY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFza0NhcmQodGFzayl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NyZWF0aW5nY2FyZCcpO1xyXG4gICAgXHJcbiAgICAgICAgY29uc3QgJGNhcmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAkY2FyZERpdi5zZXRBdHRyaWJ1dGUoJ3Rhc2tpZCcsIHRhc2sudGFza2lkKVxyXG4gICAgICAgICRjYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcclxuICAgICAgICAkY2FyZERpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICAgICAgbGV0IGNpcmNsZUNvbG91ciA9IFwiXCI7XHJcblxyXG4gICAgICAgIGlmKHRhc2sucHJpb3JpdHkgPT09ICdoaWdoJyl7XHJcbiAgICAgICAgICAgIGNpcmNsZUNvbG91ciA9ICcjZmY2ZTZlJztcclxuICAgICAgICB9IGVsc2UgaWYodGFzay5wcmlvcml0eSA9PT0gJ21lZGl1bScpe1xyXG4gICAgICAgICAgICBjaXJjbGVDb2xvdXIgPSAnI2ZmYjQ2ZSc7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRhc2sucHJpb3JpdHkgPT09ICdsb3cnKXtcclxuICAgICAgICAgICAgY2lyY2xlQ29sb3VyID0gJyNmZGZmOGQnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGFzay5jb21wbGV0ZSl7XHJcbiAgICAgICAgICAgICRjYXJkRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkY2FyZERpdi5pbm5lckhUTUwgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8aDIgaWQ9XCJ0aXRsZVwiPiR7dGFzay50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29sb3VyQ2lyY2xlXCIgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6JHtjaXJjbGVDb2xvdXJ9Oyc+Jm5ic3A7PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgaWQ9XCJkZXNjXCI+JHt0YXNrLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8cCBpZD1cImRhdGVcIj4ke3Rhc2suZGF0ZX08L3A+XHJcbiAgICBgXHJcblxyXG4gICAgICAgICRjYXJkRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUJvdHRvbUNvbnRyb2xzKCkpXHJcbiAgICAgICAgJGNhcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoJGNhcmREaXYpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJvdHRvbUNvbnRyb2xzKCl7XHJcbiAgICAgICAgY29uc3QgJGJvdHRvbUNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgJGJvdHRvbUNvbnRyb2xzLmNsYXNzTGlzdC5hZGQoJ2JvdHRvbUNvbnRyb2xzJyk7XHJcblxyXG4gICAgICAgICRib3R0b21Db250cm9scy5hcHBlbmRDaGlsZChjcmVhdGVDaGVja0JveCgpKTtcclxuICAgICAgICAkYm90dG9tQ29udHJvbHMuYXBwZW5kQ2hpbGQoY3JlYXRlUmVtb3ZlQnV0dG9uKCkpO1xyXG4gICAgICAgICRib3R0b21Db250cm9scy5hcHBlbmRDaGlsZChjcmVhdGVBZGRUb1Byb2plY3RCdXR0b24oKSk7XHJcblxyXG4gICAgICAgIHJldHVybiAkYm90dG9tQ29udHJvbHNcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVSZW1vdmVCdXR0b24oKXtcclxuICAgICAgICBjb25zdCAkcmVtb3ZlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgICAgICAkcmVtb3ZlQnV0dG9uLnNyYyA9ICcuL2ltYWdlcy90cmFzaC0yLnN2Zyc7XHJcbiAgICAgICAgJHJlbW92ZUJ1dHRvbi5pZCA9ICd0cmFzaCc7XHJcblxyXG4gICAgICAgICRyZW1vdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICByZW1vdmVUYXNrKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS50YXNraWQpO1xyXG4gICAgICAgICAgICByZW1vdmVGcm9tQWxsKGUudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5pZClcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gJHJlbW92ZUJ1dHRvbjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVDaGVja0JveCgpe1xyXG4gICAgICAgIGNvbnN0ICRjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgJGNoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG5cclxuICAgICAgICAkY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+e1xyXG4gICAgICAgICAgICBjb25zdCAkdGFzayA9ICRjaGVja0JveC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9ICR0YXNrLmlkXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrcyA9IHRhc2tDb250cm9sbGVyLmdldFRhc2tzKClcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tUb1VwZGF0ZSA9IHRhc2tzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBwYXJzZUludCh0YXNrSWQpKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRhc2tUb1VwZGF0ZS5jb21wbGV0ZSA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgdGFza1RvVXBkYXRlLmNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICR0YXNrLmNsYXNzTGlzdC50b2dnbGUoJ2NvbXBsZXRlJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0YXNrVG9VcGRhdGUuY29tcGxldGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRhc2tUb1VwZGF0ZS5jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgJHRhc2suY2xhc3NMaXN0LnRvZ2dsZSgnY29tcGxldGUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiAkY2hlY2tCb3g7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlQWRkVG9Qcm9qZWN0QnV0dG9uKCl7XHJcbiAgICAgICAgY29uc3QgJGJ1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgICRidXQudGV4dENvbnRlbnQgPSAnQWRkIHRvIHByb2plY3QnXHJcblxyXG4gICAgICAgIHJldHVybiAkYnV0O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFzayl7XHJcbiAgICAgICAgdGFza0NvbnRyb2xsZXIucmVtb3ZlVGFzayh0YXNrKVxyXG4gICAgICAgIHJlbmRlclRhc2tzKClcclxuICAgIH0gXHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlRnJvbUFsbCh0YXNrKXtcclxuICAgICAgICBhbGxDb250cm9sbGVyLnJlbW92ZSh0YXNrKVxyXG4gICAgICAgIHJlbmRlclRhc2tzKClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXJUYXNrcygpe1xyXG4gICAgICAgICRjYXJkQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIHRhc2tDb250cm9sbGVyLmdldFRhc2tzKCkuZm9yRWFjaCh0YXNrID0+IHtcclxuICAgICAgICAgICAgY3JlYXRlVGFza0NhcmQodGFzaylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tQb3B1cCgpe1xyXG4gICAgICAgIGlmKCFkb2N1bWVudC5ib2R5LmNvbnRhaW5zKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVUYXNrUG9wdXAnKSkpe1xyXG4gICAgICAgICAgICBjb25zdCAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3JlYXRlVGFza1BvcHVwJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgICAgICAgICAkaDIudGV4dENvbnRlbnQ9J0NyZWF0ZSBhIFRhc2snO1xyXG4gICAgICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLmFwcGVuZENoaWxkKCRoMik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuXHJcbiAgICAgICAgICAgICRmb3JtLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwiZm9ybUlucHV0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1JbnB1dENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtSW5wdXRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPkR1ZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgbmFtZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtSW5wdXRDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRpb0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJoaWdoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicHJpb3JpdHlcIiB2YWx1ZT1cIm1lZGl1bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInByaW9yaXR5XCIgdmFsdWU9XCJsb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsUmFkaW9Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImhpZ2hcIj5IaWdoPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm1lZGl1bVwiPk1lZGl1bTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsb3dcIj5Mb3c8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+YFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0ICRidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAgICAgJGJ1dHRvbi5pZCA9ICdidXR0b24nXHJcbiAgICAgICAgICAgICRidXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFRhc2snO1xyXG5cclxuICAgICAgICAgICAgJGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVUYXNrRnJvbUlucHV0KClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGxldCAkcmVtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgICAgICRyZW1CdXR0b24uaWQgPSAncmVtQnV0dG9uJ1xyXG4gICAgICAgICAgICAkcmVtQnV0dG9uLnRleHRDb250ZW50ID0gJ0V4aXQnO1xyXG5cclxuICAgICAgICAgICAgJHJlbUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUNyZWF0ZVBvcHVwKClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgICRmb3JtLmFwcGVuZENoaWxkKCRidXR0b24pO1xyXG4gICAgICAgICAgICAkZm9ybS5hcHBlbmRDaGlsZCgkcmVtQnV0dG9uKTtcclxuXHJcbiAgICAgICAgICAgICRjcmVhdGVUYXNrUG9wdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoJGZvcm0pXHJcblxyXG4gICAgICAgICAgICAkY29udGVudERpdi5hcHBlbmRDaGlsZCgkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZUNyZWF0ZVBvcHVwKCl7XHJcbiAgICAgICAgY29uc3QgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jcmVhdGVUYXNrUG9wdXAnKTtcclxuXHJcbiAgICAgICAgJGNyZWF0ZVRhc2tQb3B1cENvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcclxuICAgICAgICAkY3JlYXRlVGFza1BvcHVwQ29udGFpbmVyLnJlbW92ZSgpXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFza0Zyb21JbnB1dCgpIHtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ0aXRsZVwiXScpO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImRlc2NyaXB0aW9uXCJdJykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJkYXRlXCJdJykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLnZhbHVlO1xyXG5cclxuICAgICAgICB0YXNrQ29udHJvbGxlci5jcmVhdGVUYXNrKHRpdGxlLnZhbHVlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUpO1xyXG5cclxuICAgICAgICBjbG9zZUNyZWF0ZVBvcHVwKClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGNyZWF0ZVRhc2tDYXJkLFxyXG4gICAgICAgIGNyZWF0ZVRhc2tQb3B1cCxcclxuICAgICAgICByZW5kZXJUYXNrcyxcclxuICAgIH1cclxufSkoKVxyXG5cclxuXHJcbmV4cG9ydCB7dGFza0Rpc3BsYXl9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0YXNrRGlzcGxheSB9IGZyb20gXCIuL3Rhc2tEaXNwbGF5XCI7XHJcbmltcG9ydCB7IHRhc2tDb250cm9sbGVyIH0gZnJvbSAnLi90YXNrQ29udHJvbGxlcidcclxuaW1wb3J0IHsgcHJvamVjdERpc3BsYXkgfSBmcm9tICcuL3Byb2plY3REaXNwbGF5J1xyXG5pbXBvcnQgeyBwcm9qZWN0Q29udHJvbGxlciB9IGZyb20gJy4vcHJvamVjdENvbnRyb2xsZXInXHJcblxyXG5jb25zb2xlLmxvZygnc3RhcnQnKVxyXG5cclxuY29uc3QgJGNyZWF0ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaSNjcmVhdGVUYXNrJyk7XHJcbiRjcmVhdGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgdGFza0Rpc3BsYXkuY3JlYXRlVGFza1BvcHVwKClcclxufSk7XHJcblxyXG5sZXQgc2FtcGxlUHJvamVjdCA9IHByb2plY3RDb250cm9sbGVyLmNyZWF0ZVByb2plY3QoJ1NhbXBsZSBQcm9qZWN0JylcclxucHJvamVjdERpc3BsYXkuY3JlYXRlUHJvamVjdENhcmQoc2FtcGxlUHJvamVjdCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=