const displayController = (function () {
    function createTaskCard(task){
        const $cardContainer = document.querySelector('div#cardContainer');
        console.log('creatingcard');
    
        const $cardDiv = document.createElement('div');
        $cardDiv.classList.add('card');
        $cardDiv.innerHTML += `
        <div class="titleContainer">
            <h2 id="title">${task.title}</h2>
            <div id="colourCircle">&nbsp;</div>
        </div>
        <p id="desc">${task.description}</p>
        <p id="date">${task.date}</p>
    
        <div class="bottomControls">
            <input type="checkbox">
            <img id='trash' src="./images/trash-2.svg">
    
            <button>Add to project</button>
        </div>`
    
        $cardContainer.appendChild($cardDiv)
    }

    return{
        createTaskCard
    }
})()


export {displayController}