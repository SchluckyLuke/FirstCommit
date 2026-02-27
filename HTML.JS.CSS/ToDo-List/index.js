const ToDoInput = document.getElementById("ToDoInput");
const ToDoInput2 = document.getElementById("ToDoInput2");
const saveBtn = document.getElementById("saveBtn");

let deleteBtn;
let ToDo;
let ToDoDiv;
let storeToDos = {};

function saveToDo(){
    localStorage.setItem(localStorage.length, ToDoInput.value);
    ToDo = document.createElement("h4");
    ToDo.innerHTML = ToDoInput.value;
    
    deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "finished";

    document.body.appendChild(ToDo);
    document.body.appendChild(deleteBtn);
}

function loadToDos(){
    for(let i = 0; i <= localStorage.length-1; i++){
        ToDo = document.createElement("h4");
        ToDo.innerHTML = localStorage.getItem(i);

        deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "finished";
        deleteBtn.onclick = function(){
            for(let e = localStorage.length-1; e >= i+1; e--){
                const oldValue = localStorage.getItem(e);
                storeToDos[String(e)-1] = oldValue;
                console.log(storeToDos);

            }
            localStorage.clear();
            for(el in Object.keys(storeToDos)){
                console.log(el);
                console.log(storeToDos[el]);
                console.log(Number(el), storeToDos[el]);
                localStorage.setItem(Number(el), storeToDos[el]);
            }
        }

        document.body.appendChild(ToDo);
        document.body.appendChild(deleteBtn);
    }
}

loadToDos()