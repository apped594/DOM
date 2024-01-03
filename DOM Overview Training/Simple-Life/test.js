//Styling elements as inline styling
const test = document.querySelector('h1');


test.style.color = "red";

console.log(test);

const newItems = document.querySelectorAll(".nav-link");


for (let i = 0; i < newItems.length; i++) {

    newItems[i].style.color = "blue";
}

//Creating Elements - will not show something

const navie = document.querySelector('.nav-list');
const navieItem = document.createElement("li");
const anchor = document.createElement('a');

//Adding Elements - this will actually add the elements to the DOM

navie.append(navieItem)
navieItem.append(anchor)


anchor.innerText = "test nav"
anchor.href = 'about.html'

//Modify Attributes & Classes

navieItem.classList.add('nav-item')
anchor.classList.add('nav-link')

anchor.classList.remove('nav-link')

console.log(anchor.classList.contains('nav-link')) // should return false

//Remove Element

navieItem.remove();

///Traverse the DOM

//Parent Node traversal traversing up the DOM tree

    let navList = document.querySelector('ul');
    console.log(navList.parentElement);
    console.log(navList.parentNode.parentNode);



//Child Node traversal traversing down the DOM tree

let navSter = document.querySelector('nav');

console.log(navSter.childNodes);
//console.log(navSter.childNodes[1]);
console.log(navSter.firstElementChild); // selects the first HTML element type node
//console.log(navSter.lastChild);  //Selects the Last Node could be any node type
console.log(navSter.children) // returns HTML collection of HTML element type nodes only
navSter.childNodes[1].style.backgroundColor = "red"; // need to specifiy because the first node is text node becasue of indents in code (user generated nor JS generated)


//Sibling Node traversal Nodes on the same tree level in the DOM

let difSter = document.querySelector('div')
console.log(difSter.childNodes);

let navSib = document.querySelector('nav');
console.log(navSib.previousElementSibling); //Selects only HTML type Nodes
console.log(navSib.nextSibling); // selects any Node

//Event Listeners
