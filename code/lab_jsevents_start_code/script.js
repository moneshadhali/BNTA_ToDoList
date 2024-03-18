const form = document.querySelector("#todo-form");
const todoList = document.querySelector("#list");
const date = document.querySelector("#dateDisplay"); //<p>
const dateBtn = document.querySelector("#date"); //<button>

form.addEventListener("submit", (evt)=> {
    evt.preventDefault();
    value = 1;
    // console.log(evt.target["new-todo"].value);
    const newListItem = document.createElement("li");
    newListItem.innerText = evt.target["new-todo"].value;

    //create delete button
    const btnDelete = document.createElement("button");
    btnDelete.innerText = "Delete";
    btnDelete.setAttribute("onclick", "removeItemList(this)");

    newListItem.appendChild(btnDelete);
    todoList.appendChild(newListItem);
    // todoList.appendChild(btnDelete);
})

//Removing item from list
function removeItemList(evt){
    evt.parentElement.remove();
}

//Date button function:
dateBtn.addEventListener("click", () => {
    date.innerText = Date();
});
