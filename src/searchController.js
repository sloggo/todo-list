import { createController } from "./createController"
import { displayController } from "./ui/displayController";

const searchController = (function(){
    function search(text){
        if(text==false){
            displayController.renderDash()
        }
        const items = createController.getCurrentItems();
        const itemFiltered = items.filter( i=> i.title.toLowerCase().includes(text.toLowerCase()) );

        console.log(itemFiltered)

        createController.setCurrentItems(itemFiltered);
        displayController.renderDash(true)
    }

    return {
        search
    }
})();

export { searchController }