const vloeker = document.querySelector('.wie-my-gevloek');
const vloek = document.querySelector('.fokit');
const vloekWeer = document.querySelector('.vloek-my-weer');
const vloekArr = [
    
    {
        vloekWoord: "Jou dik tril",
        persoon: "Pielie Lang arm"

    },

    {
        vloekWoord: "Jou stink lip man",
        persoon: "Mikayla stink tiete"

    },

    {
        vloekWoord: "Jou oupa se nat wielsnare",
        persoon: "Lang tietie dam tietie"

    },

    {
        vloekWoord: "Jou Moot Hond",
        persoon: "Moot Hond"

    }

]

vloekWeer.addEventListener("click", e =>{

    let random = Math.floor(Math.random() * vloekArr.length);

    vloeker.innerText = vloekArr[random].persoon;
    vloek.innerText = vloekArr[random].vloekWoord
});

