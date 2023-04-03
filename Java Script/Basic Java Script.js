// for writing a basic alert program

// let ClckForAlrt = document.querySelector('button');
// ClckForAlrt.addEventListener('click',showMsg);
// function showMsg(){
//     alert("This is pop-up for alert");
// }

let inPut =document.querySelector('button');
inPut.addEventListener('click', enterMsg);
function enterMsg(){
    let name = prompt('enter name of student');
    inPut.textContent= 'FOR INPUT:' + name;
}
//  Javascript Engines
// mozilla- Spidermonkey
// chrome=-v8
// msedge-chakra


