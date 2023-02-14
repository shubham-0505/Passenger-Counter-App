let countEl = document.getElementById("count");
let saveEl = document.getElementById("saveElement");

console.log(countEl);

let count = 0;

function increment(){
    count = count + 1
    countEl.innerText = count
}

function save(){
    let myMsg = count + " , "
    saveEl.innerText = saveEl.innerText + myMsg

    countEl.innerText = 0
    count = 0
}

