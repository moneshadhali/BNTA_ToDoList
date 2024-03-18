const form = document.querySelector("#todo-form");
const todoList = document.querySelector("#list");

form.addEventListener("submit", (evt)=> {
    evt.preventDefault();
    value = 1;
    // console.log(evt.target["new-todo"].value);
    const newListItem = document.createElement("li");
    newListItem.innerText = evt.target["new-todo"].value;

    //create delete button
    const btnDelete = document.createElement("button");
    btnDelete.innerText = "Delete";
    btnDelete.setAttribute("id", "value");

    todoList.appendChild(newListItem);
    todoList.appendChild(btnDelete);
})

//Removing item from list
function removeList(id){
    const listItem = document.getElementById(id);
    return listItem.parentNode.removeChild(listItem); 
}