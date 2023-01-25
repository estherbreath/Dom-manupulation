// document.querySelector('.clear-tasks').addEventListener('click', 
// function(e){
//     console.log('Hello world');
    
//     // e.preventDefault();
// })

document.querySelector('.clear-tasks').addEventListener('click', onClick)
 
function onClick(e){
    // console.log('clicked');

let val;

val = e;

//Event target element
val = e.target;
val = e.target.id;
val = e.target.className;
val = e.target.classList;

//Event type
val = e.type;

//Timestamp
val = e.timeStamp;

//Coord event relative to the window
val = e.clientY;
val = e.clientZ;

//Coord event relative to the element
val = e.offsetY;
val = e.offsetZ;



    console.log(val);
}