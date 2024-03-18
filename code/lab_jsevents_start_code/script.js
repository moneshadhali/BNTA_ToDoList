const form = document.querySelector("#todo-form");
const todoList = document.querySelector("#list");
const date = document.querySelector("#dateDisplay"); //<p>
const dateBtn = document.querySelector("#date"); //<button>
const completedList = document.querySelector("#completed-list"); //<ul>

//Add item to list
form.addEventListener("submit", (evt)=> {
    evt.preventDefault();
    // console.log(evt.target["new-todo"].value);
    const newListItem = document.createElement("li");
    newListItem.innerText = evt.target["new-todo"].value;

    //create delete button
    const btnDelete = document.createElement("button");
    btnDelete.innerText = "Delete";
    btnDelete.setAttribute("onclick", "removeItemList(this)");

    //create done / complete button
    const btnDone = document.createElement("button");
    btnDone.innerText = "Done";
    btnDone.setAttribute("onclick", "doneItemList(this)");

    newListItem.appendChild(btnDelete);
    newListItem.appendChild(btnDone);
    todoList.appendChild(newListItem);
})

//Marking Item in List as Done:
function doneItemList(evt){
    const parent = evt.parentElement;
    evt.remove();
    completedList.appendChild(parent);
}

//Removing item from List:
function removeItemList(evt){
    evt.parentElement.remove();
}

//Display Date:
dateBtn.addEventListener("click", () => {
    date.innerText = Date();
});
