
document.addEventListener("DOMContentLoaded",getItems);

let todoInput = document.querySelector("#todo-input");
let todoButton = document.querySelector("#todo-btn");
let todoContainer = document.querySelector(".todos");

todoButton.addEventListener("click" , addItem);


//start function addItem
function addItem(e){
    e.preventDefault();
    let task = todoInput.value;
    addContainer(task);
    saveItem(task);

}

//end function addItem


//start func addContainer
function addContainer(item){
        //forming the element structure
        let todo = document.createElement("div");
        todo.classList.add("todo");
    
        let todoLabel = document.createElement("input");
        todoLabel.classList.add("item");
        todoLabel.setAttribute("readonly" , "readonly");
    
        if(!item){
            alert("enter a task");
            return;
        }
        else{
        todoLabel.value = item ;
        }
    
    
        //adding edit button for the element
        let todoEdit = document.createElement("button");
        todoEdit.classList.add("btn")
        todoEdit.classList.add("btn-primary");
        todoEdit.setAttribute("id","todo-edit");
        todoEdit.innerHTML=`<i class="bi bi-pencil-fill"></i>`;
        
        //adding delete button for the element
        let todoDelete= document.createElement("button");
        todoDelete.classList.add("btn");
        todoDelete.classList.add("btn-danger"); 
        todoDelete.setAttribute("id","todo-delete");
        todoDelete.innerHTML=`<i class="bi bi-trash-fill"></i>`;
    
        todo.appendChild(todoLabel);
        todo.appendChild(todoEdit);
        todo.appendChild(todoDelete);
    
    
        todoContainer.appendChild(todo);
    
        todoInput.value="";
    
        todoEdit.addEventListener("click" , ()=>{
    
            if(todoEdit.innerHTML == `<i class="bi bi-pencil-fill"></i>`)
            {
                todoLabel.removeAttribute("readonly");
            todoLabel.focus();
            todoEdit.innerHTML = `<i class="bi bi-check2-circle"></i>`;
            todoEdit.classList.add("btn-success");
            }
            else{
                todoLabel.setAttribute("readonly","readonly");
            todoEdit.innerHTML = `<i class="bi bi-pencil-fill"></i>`;
            todoEdit.classList.remove("btn-success");

            let todoItems = localStorage.getItem("todo_items");
            todoItems = JSON.parse(todoItems);

            todoItems = todoItems.filter(function(value){
                return value !== item
            })

            todoItems.push(todoLabel.value);
            localStorage.setItem("todo_items" , JSON.stringify(todoItems));

            console.log(todoLabel.value);
    
            }
            
        })
    
        todoDelete.addEventListener("click" , ()=>{
            todoContainer.removeChild(todo);
            let todoItems = localStorage.getItem("todo_items");
            todoItems = JSON.parse(todoItems);

            todoItems = todoItems.filter(function(value){
                return value !== item
            })
            
            localStorage.setItem("todo_items" , JSON.stringify(todoItems));
        })

}



//start func getItems
function getItems(e){
    let todoItems = localStorage.getItem("todo_items");
        if(todoItems==null){
        todoItems =[];
        localStorage.setItem("todo_items" , JSON.stringify(todoItems));
        }

        else{
            items=JSON.parse(todoItems);
            items.forEach(element => {
                addContainer(element)
            });
        }
        
    
    
}
//end func getItems


//start func saveItems
function saveItem(item){
    let todoItems = localStorage.getItem("todo_items");
    todoItems = JSON.parse(todoItems);
    todoItems.push(item);
    
    localStorage.setItem("todo_items" , JSON.stringify(todoItems));

}
//end func saveItems
