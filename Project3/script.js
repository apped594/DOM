const accordian = document.querySelectorAll('.content-container');


accordian.forEach(element => {

    element.addEventListener("click", e=>{
        element.classList.toggle("active");
     
    })
    
});



    
