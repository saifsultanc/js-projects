(function(){

    // get elements
    const form = document.getElementById('input-form');
    const input = document.getElementById('input-value');
    const feedback = document.querySelector('.feedback');
    const listItems = document.querySelector('.list-items');
    const clearBtn = document.querySelector('.clearBtn');

    // add event listeners
    form.addEventListener('submit', function(event){
        event.preventDefault();

        // user input
        const value = input.value;

        if (value === '') {
            showFeedback(feedback, "can not add empty value", 'alert-danger'); 
        }
        else {
            // add to list
            addItem(value);
            // add to storage
            addStorage(value);
        }
    });

    // clear button event listener
    clearBtn.addEventListener('click', function(){

        // while listItem has any children
        while (listItems.children.length > 0){
            // remove a child from the listItems
            listItems.removeChild(listItems.children[0]);
            // clear storage
            clearStorage();
        }
    });

    // delete one item
    listItems.addEventListener('click', function(event){
        // get to the remove span
        if (event.target.parentElement.classList.contains('remove-icon')){
            // get the item to be deleted on this selection
            let itemToDelete = event.target.parentElement.parentElement;
            // remove the item from the listItems
            listItems.removeChild(itemToDelete);
            // remove value from storage
            let text = event.target.parentElement.previousElementSibling.textContent;
            clearSingle(text);
        }
    });

    // DOM content loaded
    document.addEventListener('DOMContentLoaded', function(){
        loadItems();
    });

    // show feedback function
    function showFeedback(element, text, result){
        element.classList.add('show-item', `${result}`);
        element.innerHTML = `<p>${text}</p>`;

        setTimeout(function(){
            element.classList.remove('show-item', `${result}`);
        }, 3000);
    }

    // add item function
    function addItem(value){
        // create the new item div
        const div = document.createElement('div');
        div.classList.add('item', 'my-3', 'd-flex', 'justify-content-between', 'p-2');
        div.innerHTML = `<h5 class="item-title text-capitalize">${value}</h5>
        <span class="remove-icon text-danger"><i class="fas fa-trash"></i></span>`;

        // append to the listItems tag
        listItems.appendChild(div);

        // clear out the input
        input.value = '';

        // feedback success
        showFeedback(feedback, 'item added to the list', 'alert-success');
    }

    // add to local storage
    function addStorage(value){
        let items;
        // either reload already existing data on the array, or initialize to empty array
        if (localStorage.getItem('grocery-list')) {
            items = JSON.parse(localStorage.getItem('grocery-list'));
        }
        else {
            items = [];
        }
        // push the new value
        items.push(value);
        // overriding the local storage with the new data
        localStorage.setItem('grocery-list', JSON.stringify(items));
    }

    // clear local storage
    function clearStorage(){
        localStorage.removeItem('grocery-list');
    }

    // clear single item in the local storage
    function clearSingle(value){
        const tempItems = JSON.parse(localStorage.getItem('grocery-list'));
        // filter out tempItems to items, such that items has all except the value
        const items = tempItems.filter(function(item){
            if (item !== value){
                return item;
            }
        });
        localStorage.setItem('grocery-list', JSON.stringify(items));
    }

    // load items from the storage
    function loadItems(){
        // check if grocery list storage has items
        if (localStorage.getItem('grocery-list')){
            // get the items array
            const items = JSON.parse(localStorage.getItem('grocery-list'));
            // loop on each item
            items.forEach(function(item){
                // process add item on the dom
                addItem(item);
            });
        }
    }
})();