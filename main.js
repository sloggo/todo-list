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




const createController = (function(){
    let items = [];

    function createToDo(title, description, priority, date){
        let newToDo = {type: 'toDo', title, description, priority, date, complete: false}

        newToDo.itemId = items.length;
        items.push(newToDo);

        newToDo.toDoId = _toDoController_js__WEBPACK_IMPORTED_MODULE_0__.toDoController.getLength()

        _toDoController_js__WEBPACK_IMPORTED_MODULE_0__.toDoController.create(newToDo)
    }

    function createProject(title, tasks){
        let newProject = {type: 'project', title, tasks, complete: false};

        newProject.itemId = items.length;
        items.push(newProject);

        newProject.projectId = _projectController_js__WEBPACK_IMPORTED_MODULE_1__.projectController.getLength();

        _projectController_js__WEBPACK_IMPORTED_MODULE_1__.projectController.create(newProject);
    }

    function createSubTask(project, title, description, date){
        let newSubTask = {type: 'subTask', parent: project.itemId, title, description, date, complete: false};

        newSubTask.itemId = items.length
        items.push(newSubTask);

        newSubTask.subTaskId = _subTaskController_js__WEBPACK_IMPORTED_MODULE_2__.subTaskController.getLength()

        _subTaskController_js__WEBPACK_IMPORTED_MODULE_2__.subTaskController.create(newSubTask);
    }

    function findItem(id){
        return items.find(i => i.itemId === id);
    }

    function logItems(){
        console.log(items)
    }

    return{
        findItem,
        logItems,
        createToDo,
        createProject,
        createSubTask
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
const projectController = (function() {
    let projects = [];

    function getLength(){
        return projects.length;
    }

    function create(project){
        projects.push(project)
    }

    return{
        getLength,
        create
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
/* harmony import */ var _createController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createController */ "./src/createController.js");


const subTaskController = (function() {
    let subTasks = [];

    function getLength(){
        return subTasks.length;
    }

    function create(subTask){
        const projectToAddTo = _createController__WEBPACK_IMPORTED_MODULE_0__.createController.findItem(subTask.parent);
        subTasks.push(subTask);

        projectToAddTo.tasks.push(subTask)
    }

    return{
        getLength,
        create
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
const toDoController = (function() {
    let toDos = [];

    function getLength() {
        return toDos.length
    }

    function create(toDo){
        toDos.push(toDo)
    }

    return{
        create,
        getLength
    }
})();



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


_createController__WEBPACK_IMPORTED_MODULE_0__.createController.createToDo('titlee', 'desc', 'high', '40/3/2322')
_createController__WEBPACK_IMPORTED_MODULE_0__.createController.logItems()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNNO0FBQ0E7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3RUFBd0I7QUFDakQ7QUFDQSxRQUFRLHFFQUFxQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsOEVBQTJCO0FBQzFEO0FBQ0EsUUFBUSwyRUFBd0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDhFQUEyQjtBQUMxRDtBQUNBLFFBQVEsMkVBQXdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQnNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix3RUFBeUI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7O1VDaEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOc0Q7QUFDdEQ7QUFDQSwwRUFBMkI7QUFDM0Isd0VBQXlCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3JlYXRlQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N1YlRhc2tDb250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b0RvQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt0b0RvQ29udHJvbGxlcn0gZnJvbSAnLi90b0RvQ29udHJvbGxlci5qcydcclxuaW1wb3J0IHtwcm9qZWN0Q29udHJvbGxlcn0gZnJvbSAnLi9wcm9qZWN0Q29udHJvbGxlci5qcydcclxuaW1wb3J0IHtzdWJUYXNrQ29udHJvbGxlcn0gZnJvbSAnLi9zdWJUYXNrQ29udHJvbGxlci5qcydcclxuXHJcbmNvbnN0IGNyZWF0ZUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKXtcclxuICAgIGxldCBpdGVtcyA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRvRG8odGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSl7XHJcbiAgICAgICAgbGV0IG5ld1RvRG8gPSB7dHlwZTogJ3RvRG8nLCB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlLCBjb21wbGV0ZTogZmFsc2V9XHJcblxyXG4gICAgICAgIG5ld1RvRG8uaXRlbUlkID0gaXRlbXMubGVuZ3RoO1xyXG4gICAgICAgIGl0ZW1zLnB1c2gobmV3VG9Ebyk7XHJcblxyXG4gICAgICAgIG5ld1RvRG8udG9Eb0lkID0gdG9Eb0NvbnRyb2xsZXIuZ2V0TGVuZ3RoKClcclxuXHJcbiAgICAgICAgdG9Eb0NvbnRyb2xsZXIuY3JlYXRlKG5ld1RvRG8pXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgdGFza3Mpe1xyXG4gICAgICAgIGxldCBuZXdQcm9qZWN0ID0ge3R5cGU6ICdwcm9qZWN0JywgdGl0bGUsIHRhc2tzLCBjb21wbGV0ZTogZmFsc2V9O1xyXG5cclxuICAgICAgICBuZXdQcm9qZWN0Lml0ZW1JZCA9IGl0ZW1zLmxlbmd0aDtcclxuICAgICAgICBpdGVtcy5wdXNoKG5ld1Byb2plY3QpO1xyXG5cclxuICAgICAgICBuZXdQcm9qZWN0LnByb2plY3RJZCA9IHByb2plY3RDb250cm9sbGVyLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICBwcm9qZWN0Q29udHJvbGxlci5jcmVhdGUobmV3UHJvamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlU3ViVGFzayhwcm9qZWN0LCB0aXRsZSwgZGVzY3JpcHRpb24sIGRhdGUpe1xyXG4gICAgICAgIGxldCBuZXdTdWJUYXNrID0ge3R5cGU6ICdzdWJUYXNrJywgcGFyZW50OiBwcm9qZWN0Lml0ZW1JZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBjb21wbGV0ZTogZmFsc2V9O1xyXG5cclxuICAgICAgICBuZXdTdWJUYXNrLml0ZW1JZCA9IGl0ZW1zLmxlbmd0aFxyXG4gICAgICAgIGl0ZW1zLnB1c2gobmV3U3ViVGFzayk7XHJcblxyXG4gICAgICAgIG5ld1N1YlRhc2suc3ViVGFza0lkID0gc3ViVGFza0NvbnRyb2xsZXIuZ2V0TGVuZ3RoKClcclxuXHJcbiAgICAgICAgc3ViVGFza0NvbnRyb2xsZXIuY3JlYXRlKG5ld1N1YlRhc2spO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGZpbmRJdGVtKGlkKXtcclxuICAgICAgICByZXR1cm4gaXRlbXMuZmluZChpID0+IGkuaXRlbUlkID09PSBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbG9nSXRlbXMoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtcylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgZmluZEl0ZW0sXHJcbiAgICAgICAgbG9nSXRlbXMsXHJcbiAgICAgICAgY3JlYXRlVG9EbyxcclxuICAgICAgICBjcmVhdGVQcm9qZWN0LFxyXG4gICAgICAgIGNyZWF0ZVN1YlRhc2tcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUNvbnRyb2xsZXIgfSIsImNvbnN0IHByb2plY3RDb250cm9sbGVyID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHByb2plY3RzID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0TGVuZ3RoKCl7XHJcbiAgICAgICAgcmV0dXJuIHByb2plY3RzLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGUocHJvamVjdCl7XHJcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybntcclxuICAgICAgICBnZXRMZW5ndGgsXHJcbiAgICAgICAgY3JlYXRlXHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG5leHBvcnQge3Byb2plY3RDb250cm9sbGVyfTsiLCJpbXBvcnQgeyBjcmVhdGVDb250cm9sbGVyIH0gZnJvbSBcIi4vY3JlYXRlQ29udHJvbGxlclwiO1xyXG5cclxuY29uc3Qgc3ViVGFza0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgc3ViVGFza3MgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRMZW5ndGgoKXtcclxuICAgICAgICByZXR1cm4gc3ViVGFza3MubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZShzdWJUYXNrKXtcclxuICAgICAgICBjb25zdCBwcm9qZWN0VG9BZGRUbyA9IGNyZWF0ZUNvbnRyb2xsZXIuZmluZEl0ZW0oc3ViVGFzay5wYXJlbnQpO1xyXG4gICAgICAgIHN1YlRhc2tzLnB1c2goc3ViVGFzayk7XHJcblxyXG4gICAgICAgIHByb2plY3RUb0FkZFRvLnRhc2tzLnB1c2goc3ViVGFzaylcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgZ2V0TGVuZ3RoLFxyXG4gICAgICAgIGNyZWF0ZVxyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuZXhwb3J0IHtzdWJUYXNrQ29udHJvbGxlcn07IiwiY29uc3QgdG9Eb0NvbnRyb2xsZXIgPSAoZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgdG9Eb3MgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRMZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRvRG9zLmxlbmd0aFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNyZWF0ZSh0b0RvKXtcclxuICAgICAgICB0b0Rvcy5wdXNoKHRvRG8pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGNyZWF0ZSxcclxuICAgICAgICBnZXRMZW5ndGhcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmV4cG9ydCB7dG9Eb0NvbnRyb2xsZXJ9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlQ29udHJvbGxlciB9IGZyb20gXCIuL2NyZWF0ZUNvbnRyb2xsZXJcIjtcclxuXHJcbmNyZWF0ZUNvbnRyb2xsZXIuY3JlYXRlVG9EbygndGl0bGVlJywgJ2Rlc2MnLCAnaGlnaCcsICc0MC8zLzIzMjInKVxyXG5jcmVhdGVDb250cm9sbGVyLmxvZ0l0ZW1zKCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=