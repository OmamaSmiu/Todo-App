var todoList = document.getElementById('list')
var addTodoBtn = document.getElementById('addBtn')
var deleteAllBtn = document.getElementById('deleteAll')

function deleteAllChild() {
    var node = document.querySelector("ul")
    node.innerHTML = "";
}

function deleteListitem(id) {
    var delete_List_item = document.getElementById(id);
    todoList.removeChild(delete_List_item);
}

function saveEdit(id) {
    var todoText = document.getElementById('todoText')
    var listItemToEdit = document.getElementById(id);
    listItemToEdit.firstChild.nodeValue = todoText.value
    todoText.value = "";
    addTodoBtn.innerHTML = "Add Todo";
    addTodoBtn.onclick = addTodo;
}

function editListitem(id) {
    var listItemToEdit = document.getElementById(id);
    var todoText = document.getElementById('todoText')
    var todoItemText = listItemToEdit.firstChild.nodeValue;
    todoText.value = todoItemText;
    addTodoBtn.innerHTML = 'Save';
    addTodoBtn.onclick = function () {
        return saveEdit(id);
    }

}

function addTodo() {
    var todoText = document.getElementById('todoText')
    var list = document.createElement('li')
    var listItemId = 'list-item-' + todoList.childNodes.length;
    list.setAttribute('id', listItemId)
    var deleteBtn = document.createElement('button')
    var editBtn = document.createElement('button')
    editBtn.setAttribute('style', ' background-color: black; color:  #E94B3CFF;font-family: Courier New Courier monospace; width: 118px; height: 28px; font-size: large;margin-left: -15px;');
    deleteBtn.setAttribute('style', ' background-color: black; color:  #E94B3CFF;font-family: Courier New Courier monospace; width: 118px; height: 28px; font-size: large; margin-left: 12px;');
    list.innerText = todoText.value;
    editBtn.innerHTML = "Edit"
    deleteBtn.innerHTML = "Delete"


    editBtn.onclick = function () {
        return editListitem(listItemId);
    };
    deleteBtn.onclick = function () {
        return deleteListitem(listItemId);
    };


    todoList.appendChild(list)
    list.appendChild(document.createElement("br"));
    list.appendChild(editBtn)
    list.appendChild(deleteBtn)

    todoText.value = "";
}
