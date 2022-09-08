import { createController } from "./createController";
import { displayController } from "./ui/displayController"
import { storageController } from "./storageController";
import { sortController } from "./sortController";
import { searchController } from "./searchController";

const $contentTitle = document.querySelector('div#content h1');
const $dashboard = document.querySelector('li#dashboard')
const $projects = document.querySelector('li#projects')
const $toDos = document.querySelector('li#toDos')
const $createItem = document.querySelector('li#createTask')
const $today = document.querySelector('li#today')
const $thisWeek = document.querySelector('li#thisWeek')
const $searchInput = document.getElementById('searchbarInput')

$searchInput.addEventListener('change', (e)=>{
    console.log(e.target.value)
    searchController.search(e.target.value)
})


$createItem.addEventListener('click', ()=>{
    displayController.createItemPopup()
})

$dashboard.addEventListener('click', () => {
    $contentTitle.textContent = 'Dashboard'
    sortController.defaultDash();
    displayController.renderDash()
})

$projects.addEventListener('click', () => {
    $contentTitle.textContent = 'Projects'
    sortController.projects();
    displayController.renderDash()
})

$toDos.addEventListener('click', () => {
    $contentTitle.textContent = 'ToDos'
    sortController.toDos();
    displayController.renderDash()
})

$today.addEventListener('click', () => {
    $contentTitle.textContent = 'Today'
    sortController.itemsToday();
    displayController.renderDash()
})

$thisWeek.addEventListener('click', () => {
    $contentTitle.textContent = 'This Week'
    sortController.itemsThisWeek();
    displayController.renderDash()
})



storageController.loadAll()
sortController.defaultDash();

displayController.renderDash()