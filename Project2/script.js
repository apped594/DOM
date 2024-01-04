const laatGevloek = document.querySelector('.laat-gevloek-word');
const stop = document.querySelector('.stop-dit');
const vloekDeel = document.querySelector('.vloek-deel');
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

laatGevloek.addEventListener("click", e=>{
    vloekDeel.classList.add("vloek-deel-open");
});

stop.addEventListener("click",e=>{
    vloekDeel.classList.remove("vloek-deel-open");
});

vloekWeer.addEventListener("click", e=>{
    let random = Math.floor(Math.random() * vloekArr.length);

    vloeker.innerText = vloekArr[random].persoon;
    vloek.innerText = vloekArr[random].vloekWoord;
})