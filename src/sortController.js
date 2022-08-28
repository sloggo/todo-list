import { isThisWeek, isToday, parseISO } from 'date-fns'
import { createController } from './createController'
import { displayController } from './ui/displayController';

const sortController = (function(){
    function itemsToday(){
        const items = createController.getItems();
        const itemsToday = [];

        items.forEach(item => {
            if(isToday(parseISO(item.date))){
                itemsToday.push(item);
                if(item.type === 'subTask'){
                    const project = createController.findItem(item.parentId);

                    itemsToday.push(project);
                }
            }
        })

        createController.setCurrentItems(itemsToday)
    }

    function itemsThisWeek(){
        const items = createController.getItems();
        const itemsThisWeek = [];

        items.forEach(item => {
            if(isThisWeek(parseISO(item.date))){
                itemsThisWeek.push(item);

                if(item.type === 'subTask'){
                    const project = createController.findItem(item.parentId);

                    itemsThisWeek.push(project);
                }
            }
        })

        createController.setCurrentItems(itemsThisWeek)

    }

    function defaultDash(){
        const items = createController.getItems();
        createController.setCurrentItems(items);

    }

    function projects(){
        const items = createController.getItems();
        const projects = [];

        items.forEach(item => {
            if(item.type === 'project'){
                projects.push(item);

                if(item.type === 'subTask'){
                    const project = createController.findItem(item.parentId);

                    projects.push(project);
                }
            }
        })

        createController.setCurrentItems(projects)

    }

    function toDos(){
        const items = createController.getItems();
        const toDos = [];

        items.forEach(item => {
            if(item.type === 'toDo'){
                toDos.push(item);

                if(item.type === 'subTask'){
                    const project = createController.findItem(item.parentId);

                    toDos.push(project);
                }
            }
        })

        createController.setCurrentItems(toDos)

    }


    return { itemsToday,
            defaultDash,
            itemsThisWeek,
            projects,
            toDos}
})();

export { sortController }