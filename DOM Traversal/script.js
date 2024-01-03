
const parents = Array.from(document.getElementsByClassName("Tier1")); // we need to create an array form the collection we get back in order to use the array methods to apply the colour change.
console.log(parents);

/////moving down the tree

const oupie = document.querySelector(".oupa"); //selects the 1st one that fits the criteria

const child = document.querySelector(".Tier2");

console.log(child)

changeColor3(child);

changeColor(oupie);


parents.forEach(changeColor2); //changes the colour for each item in the array. parents[1] would change only the second element in the array.


const childrenChild = document.querySelectorAll(".Tier3");
console.log(childrenChild); //selects all the items with .Tier3 class

childrenChild.forEach(changeColor);

// Another way to select the children of an element

const newParents = Array.from(oupie.children); // this select all the children of Oupie

newParents.forEach(changeColor);

const parentOne = newParents[0];

const newChildren = parentOne.children; // get all the children from the one parent - parentOne

changeColor2(newChildren[0]); // only changes the colour of the first child.
 

const youngOnes = oupie.querySelectorAll('.Tier3'); //dos not have to only start at the document level, can start at any level in the DOM tree

youngOnes.forEach(changeColor3)



//////Moving up the tree

//Move up one parent at a time.
const onlyYoungOne = youngOnes[0];

const TopParent = onlyYoungOne.parentElement; // Will select it's parent.

changeColor3(TopParent);

const ouerParent = TopParent.parentElement;

changeColor2(ouerParent)

//skip parents moving up

const nuweOupie = onlyYoungOne.closest(".oupa"); // moves up and selects the firtst element with the .oupa class. skipping all the parents above it.

changeColor2(nuweOupie);

////Moving side to side

const secondouerParent = ouerParent.nextElementSibling; //moves to next sibling.

changeColor2(secondouerParent);
changeColor3(secondouerParent.previousElementSibling); //move to previous sibling

function changeColor(element) {

    element.style.backgroundColor = "black";
};

function changeColor2(element) {

    element.style.backgroundColor = "green";
};

function changeColor3(element) {

    element.style.backgroundColor = "red";
};