const accordion = document.querySelectorAll('.content-container');


accordion.forEach(element => {  // adds event listener to eeach item of the array

    element.addEventListener("click", e=>{
        element.classList.toggle("active"); //toggles the class on or off depending on the current state

    });
    
});



    
