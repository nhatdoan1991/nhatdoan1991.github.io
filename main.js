// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

document.getElementById("dragbleButton").onclick = function() {myFunction1()};
function myFunction1() {
  let x =document.getElementById("dragable").getAttribute("draggable");
  console.log(x);
  if(x=="false")
  {
    document.getElementById("dragable").setAttribute("draggable","true");
    document.getElementById("dragbleButton").style.backgroundColor = "#3876ac";
    //console.log(x);
  }else if(x=="true")
  {
    document.getElementById("dragable").setAttribute("draggable","false");
    document.getElementById("dragbleButton").style.backgroundColor = "#e7e7e7";
    //console.log(x);
  }
  //document.getElementById("dragbleButton").setAttribute("id","dragbleButtonOnClick");
}
//drag and drop 
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
