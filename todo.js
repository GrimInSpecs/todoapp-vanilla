let todoInput = document.querySelector("#todo-input");
let todoButton = document.querySelector("#todo-btn");
let todoContainer = document.querySelector(".todos");

todoButton.addEventListener("click" , addItem);

function addItem(e){
    e.preventDefault();
    console.log(todoInput.value);


    let val = todoInput.value;

    let todo = document.createElement("div");
    todo.classList.add("todo");

    let todoLabel = document.createElement("label");
    todoLabel.classList.add("item");
    todoLabel.innerText = val ;

    let todoEdit = document.createElement("button");
    todoEdit.classList.add("btn")
    todoEdit.classList.add("btn-primary");
    todoEdit.setAttribute("id","todo-edit");
    todoEdit.innerHTML=`<i class="bi bi-pencil-fill"></i>`;
    

    let todoDelete= document.createElement("button");
    todoDelete.classList.add("btn");
    todoDelete.classList.add("btn-danger"); 
    todoDelete.setAttribute("id","todo-delete");
    todoDelete.innerHTML=`<i class="bi bi-trash-fill"></i>`;

    todo.appendChild(todoLabel);
    todo.appendChild(todoEdit);
    todo.appendChild(todoDelete);


    todoContainer.appendChild(todo);

}