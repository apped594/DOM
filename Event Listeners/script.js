const tier1 = document.querySelector(".Tier1");
const tier2 = document.querySelector(".Tier2");
const tier3 = document.querySelector(".Tier3");


addGlobalEventListener("click","div", e => {
    console.log("P-Divvy")
    });

    function addGlobalEventListener(type, selector, callback) { // for event delegation

            document.addEventListener(type, e => {
                if (e.target.matches(selector)) {
                    callback(e);
                }
       
            })

    } 

tier1.addEventListener("click", e => {
    console.log("Tier1 - Bubble");
});

tier1.addEventListener("click", e => {
    console.log("Tier1 Capture")
},{capture: true, once: true}); // once true will only run that event once.
tier2.addEventListener("click", Once,{capture: true});
tier2.addEventListener("click",e => {
    console.log("Tier2- Capture");
},{capture: true});

tier2.addEventListener("click", e =>{
    console.log("Tier2 - Bubble")
} );

setTimeout(() =>{
    tier2.removeEventListener("click", Once,{capture: true});// when removing make sure the parameters also need to match
}, 3000);


tier3.addEventListener("click",e=>{
    console.log("Tier3- Bubble");
});

tier3.addEventListener("click", e=>{
    console.log("Tier 3 - Capture");
    //e.stopPropagation(); // This stops the flow on this event, so won't bubble up https://chat.openai.com/share/f2b83be7-7421-4613-b2c0-1ba0de9bebc2
},{capture: true});

function Once() {
    console.log("Ek run net once neh!")
}

const newDiv = document.createElement("div");
newDiv.style.width = '60%';
newDiv.style.height = '60%';
newDiv.style.backgroundColor = 'yellow';



tier3.append(newDiv);
