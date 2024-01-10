const addItem = document.getElementById('add-item-button');
const input = document.getElementById('item-input');


addItem.addEventListener("click", e=>{
    
    if (input.value === '') {

        alert("Please add value")
    }

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container");
    document.getElementById("items-list").append(itemContainer);

    const item = document.createElement("li");
    item.innerText = input.value;
    item.classList.add("items");

    itemContainer.append(item);
    input.value = '';

    const checkButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    checkButton.classList.add("item-action-buttons");

    checkButton.classList.add("check-button");

    checkButton.innerHTML =  '<i class="fa-solid fa-check"></i>';

    itemContainer.append(checkButton);

    deleteButton.classList.add("item-action-buttons");

    deleteButton.classList.add("delete-button");

    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    itemContainer.append(deleteButton);

    checkButton.addEventListener("click", e=>{

        checkButton.previousElementSibling.style.textDecoration = "line-through";


    })

    deleteButton.addEventListener("click", e=>{
        deleteButton.parentElement.remove();
    })

})