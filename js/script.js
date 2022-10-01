const insert = document.getElementById("insert");
const fristkeyEl = document.getElementById("firstKey");
const secondkeyEl = document.getElementById("secondKey");
const thirdKeyEl = document.getElementById("thirdKey");
const contentEl = document.querySelector(".content");



window.addEventListener("keydown", (event) => {
    
   
fristkeyEl.innerText = event.key === ' ' ? 'Space' : event.key;

secondkeyEl.innerText = event.keyCode;

thirdKeyEl.innerText = event.code;

contentEl.classList.add("content");

//Another Method:-




// insert.innerHTML = `
// <div class="key">
// ${event.key === ' ' ? 'Space' : event.key}
// <small>event.key</small>
// </div>
// <div class="key">
// ${event.keyCode}
// <small>event.keycode</small>
// </div>
// <div class="key">
// ${event.code}
// <small>event.code</small>
// </div>`
})

contentEl.classList.remove("content");