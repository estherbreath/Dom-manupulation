//document.getElementById()

console.log(document.getElementById('task-title'));

//Get things from the Element
console.log(document.getElementById('task-title').id);

const taskTitle = document.getElementById('task-title');

//Change styling
// document.getElementById('task-title').style.background = '#333';
taskTitle.style.background = 'red';
taskTitle.style.color = 'white';
taskTitle.style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

//Change Content
taskTitle.textContent = 'title-list';
taskTitle.innerText = 'My-Task';
taskTitle.innerHTML  = '<span style="color:blue" >Task-List</span>'

//document.queryselector
console.log(document.querySelector('#title-list'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';


