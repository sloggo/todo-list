import { createController } from "./createController"
import { displayController } from "./ui/displayController";

const searchController = (function(){
    function search(text){
        if(text==false){
            displayController.renderDash()
        }else{
            const items = createController.getCurrentItems();
            const itemFilteredTitle = items.filter( i=> i.title.toLowerCase().includes(text.toLowerCase()) );
            const itemFilteredDesc = items.filter( i=> i.description.toLowerCase().includes(text.toLowerCase()));

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