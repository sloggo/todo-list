import { createController } from "./createController"
import { displayController } from "./ui/displayController";

const searchController = (function(){
    function search(text){
        if(text==false){
            displayController.renderDash()
        }else{
            const items = createController.getCurrentItems();
            const itemFilteredTitle = items.filter( i=> i.title.toLowerCase().includes(text.toLowerCase()) );
            const itemFilteredDescType = items.filter( i=> (i.type === 'subTask') || (i.type === 'toDo'))
            const itemFilteredDesc = itemFilteredDescType.filter( i=> i.description.toLowerCase().includes(text.toLowerCase()));

            itemFilteredDesc.forEach(item => {
                if(itemFilteredTitle.includes(item)){
                    itemFilteredDesc.splice(itemFilteredDesc.indexOf(item),1)
                }
            })

            const filteredItems = itemFilteredTitle.concat(itemFilteredDesc)

            console.log(filteredItems)

            createController.setCurrentItems(filteredItems);
            displayController.renderDash(true)
        }
    }

    return {
        search
    }
})();

export { searchController }