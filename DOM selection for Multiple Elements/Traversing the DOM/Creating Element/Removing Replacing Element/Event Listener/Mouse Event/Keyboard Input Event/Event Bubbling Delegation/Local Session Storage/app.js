//Set Local Storage Item

// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// //Set session Storage Item

// sessionStorage.setItem('name', 'Joy');

//Remove from storage
// localStorage.removeItem('name');

//Get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// //Clear local storage
// localStorage.clear();
// //deprecated
// console.log(name, age);

document.querySelector('form').addEventListener('submit', 
function(e){
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks' === null)){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem(tasks));
    }
    tasks.push(task);

    localStorage.setItem('task', JSON.stringify (task));
    alert('Task saved'); 

    // console.log(task);

e.preventDefault(); 
});
const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
    console.log(task);
    
});