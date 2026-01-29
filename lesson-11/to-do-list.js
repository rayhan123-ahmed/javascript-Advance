const todoList = [
    {
        name:'make dinner',
        dueDate: '2026-01-29'
    },
    {
        name: 'write notes',
        dueDate: '2026-01-29'
    } 
];


renderTodoList();

function renderTodoList() {
    let todoListHtml = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        const name = todoObject.name;
        const dueDate = todoObject.dueDate;
        const html = `
        <div>
           ${name}
        </div>
        <div>
          ${dueDate}
        </div>
         <button onclick="
            todoList.splice(${i},1);
            renderTodoList();
         " class="detete-btn">Delete</button> 
        `
        todoListHtml += html
    }
        document.querySelector('.todo-list').innerHTML = todoListHtml;
}




function addTodo() {
  const inputElement = document.querySelector('.input-js');
  const DateInputelement = document.querySelector('.due-date-input');

  const name = inputElement.value;
  const dueDate = DateInputelement.value;

    todoList.push({
        name,
        dueDate
    });

  inputElement.value = ''
  renderTodoList()
}




// For Using Enter and Shift button
function keyDwon(event) {
     if (event.key === 'Enter' || event.key === 'Shift') {
        addTodo()
     }
}


