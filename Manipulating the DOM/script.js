const body = document.body;
const div = document.createElement('div'); // creating the element but not added to the page yet

const boldie = document.createElement('strong'); //create strong tag

boldie.innerText ="Ja fokkers"; //add text you want bold insode strong tag

div.innerText = "Hello Bliksems"  //adds the text inside the div
body.append(div);  // actualy adds the div to our page

div.append(boldie); // adds strong element to our page.


//////////Removing elements

const spanLosers = document.querySelector("#losers"); // select by id
const spanFokkers = document.querySelector('.fokkers');
console.log(spanLosers);
console.log(spanFokkers);

//spanLosers.remove(); // removes the loser span element
spanFokkers.remove();

///// Modifying Element attributes

div.id = 'pDivvy'; //set id to element
console.log(div.id)

div.removeAttribute('id') // removing attributes
console.log(div.id);

boldie.classList.add("classyneh"); // adds class to element
boldie.classList.remove("classyneh") // removes the class again

spanLosers.classList.remove("class1") //removes class

spanLosers.classList.toggle('class1') // toglles if there then removes and visa versa

spanLosers.classList.toggle("class1", false) // this will rmeove it again using a boolean as second paramater


//https://blog.webdevsimplified.com/2020-11/class-list/



///// Modifying the Style


spanLosers.style.color = 'red'; // sets the style attributes for the  elements.

