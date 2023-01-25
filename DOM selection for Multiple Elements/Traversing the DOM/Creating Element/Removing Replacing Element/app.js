//REPLACE ELEMENT

//Create element
const newHeading = document.createElement('h2');
//Add id
newHeading.id = 'text-title';
//Add text node
newHeading.appendChild(document.createTextNode('Task List'));

//Get the old heading
const oldHeading = document.getElementById('task-title');
//parent
const cardAction = document.querySelector('.card-action');
//Replce
cardAction.replaceChild(newHeading, oldHeading);



//REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const List = document.querySelector('ul');

//Remove list item
lis[0].remove();
//Remove child element
List.removeChild(lis[3]);

//CLASSES AND ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = (firstLi.children[0]);

let val;

//Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('text');
link.classList.remove('text');
val = link;

//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http//google.com');
val = link.hasAttribute('href');
val = link.setAttribute('title', 'Google');
val = link.hasAttribute('title');
link.removeAttribute('title')

val = link;


console.log(val);