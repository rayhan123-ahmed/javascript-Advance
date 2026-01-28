const todoList = ['make dinner', 'write notes'];


renderTodoList();

function renderTodoList() {
    let todoListHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`
        todoListHtml += html
    }
        console.log(todoListHtml);
        document.querySelector('.todo-list').innerHTML = todoListHtml;
}


const myArray = [];

function addTodo() {
  const inputElement = document.querySelector('.input-js');
  
  const name = inputElement.value;

  todoList.push(name);
  console.log(myArray);

  inputElement.value = ''
  renderTodoList()
}




// For Using Enter and Shift button
function keyDwon(event) {
     if (event.key === 'Enter' || event.key === 'Shift') {
        addTodo()
     }
}


