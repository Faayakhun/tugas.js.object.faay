let todos = [
    {id: 1, todo: "belajar coding"},
    {id: 2, todo: "nanti tidur"}
]

// function print all
function printAll () {
todos.map((item) => {
    console.log(item.id+" "+item.todo)
})
}

// function print by id
function printById () {
    let idContent = document.querySelector(".byId").value;
    let foundId = todos.find(item => item.id == idContent);
    console.log(foundId.id+" "+foundId.todo);
    
}

// function add(newtodo)
function addNewTodo () {
    let newId = todos.length+1
    let isiTodo = document.querySelector(".todo").value;
    todos.push({id: newId, todo: isiTodo})
    printAll()
}

// function delete by id
function deleteById () {
    let idContent = document.querySelector(".byId2").value;
    delete todos [idContent-1]
    printAll()
    
}

// function update by id
function addById () {
    let newId = document.querySelector(".byId3").value;
    let isiTodo = document.querySelector(".byTodo").value;
    let objIndex = todos.findIndex(item => item.id == newId)
    todos[objIndex].todo = isiTodo;
    printAll()
}