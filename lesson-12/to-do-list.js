// This is an arry

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

// This Function has been created for render Todo
function renderTodoList() {
    let todoListHtml = '';

    todoList.forEach((todoObject,index) => {
            const name = todoObject.name;
            const dueDate = todoObject.dueDate;
            const html = `
            <div>
            ${name}
            </div>
            <div>
            ${dueDate}
            </div>
            <button class="detete-btn delete-btn-js">
                Delete
            </button> 
            `
            todoListHtml += html
        })
            document.querySelector('.todo-list').innerHTML = todoListHtml;

            document.querySelectorAll('.delete-btn-js')
            .forEach((deleteBtn,index)=>{
                deleteBtn.addEventListener('click',()=>{
                todoList.splice(index,1);
                renderTodoList();
                })
            })
     }

    // Add eventListner
        document.querySelector('.date').addEventListener('click',()=>{
            addTodo()
        })
    // Add keydwon
     document.querySelector('body').addEventListener('keydown',(event)=>{
        if (event.key === 'Enter') {
             addTodo()
        }
     })
    // This Funtion has been created for add Todo
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






