// Define UI Element
let form = document.querySelector('#task_form');
let taskList = document.querySelector('ul');
let clearButton = document.querySelector('#clear_task_button');
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector('#new_task');

// Define EventListener
form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);
clearButton.addEventListener('click', clearTask);
filter.addEventListener('keyup', filterTask)

// Define Functions

// Add Task Function
function addTask(ele) {
    if (taskInput.value === '') {
        alert('Enter a task!')
    } else {
        // Create li element
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value + ' '));
        let link = document.createElement('a');
        link.setAttribute('href', '#');
        link.innerText = 'x';
        li.appendChild(link)
        taskList.appendChild(li);
        taskInput.value = '';
    }
    ele.preventDefault();
}

// Remove Task Function
function removeTask (ele) {
    if(ele.target.hasAttribute('href')) {
        let element = ele.target.parentElement;
        element.remove()
    }
}

// Clear Task Function
function clearTask () {
    if (confirm('Are you ready to delete everything from your life?')) {
        taskList.innerHTML = '';
    } else {
        alert('Nothing has change.')
    }
}

// Filter Task
function filterTask (ele) {
    let text = ele.target.value.toLowerCase();

    document.querySelectorAll('li').forEach(task => {
        let item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none'
        }
    })
}