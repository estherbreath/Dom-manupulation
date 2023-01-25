let val;

val = document;
val = document.querySelectorAll('*');
val = document.querySelectorAll('*')[1];
val = document.querySelectorAll('*').length;
val = document.head;
val = document.body;
val = document.url;
val = document.doctype;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;

val = document.links;
val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.scripts;
val = document.scripts[2].getAttribute('src');

console.log(val);