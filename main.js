
document.getElementById("dragble-button").onclick = function() {myFunction1()};
function myFunction1() {
  var x =document.getElementsByClassName("draggable");
  for (i = 0; i < x.length; i++) {
    let temp = x[i].getAttribute("Draggable");
    if(temp=="false")
    { 
      x[i].setAttribute("draggable","true");
      document.getElementById("dragble-button").style.backgroundColor = "#3876ac";
      document.getElementById("unlockIcon").className = "fa fa-unlock";
    }else if(temp=="true")
    {
      x[i].setAttribute("draggable","false");
      document.getElementById("dragble-button").style.backgroundColor = "#6e6d6a";
      document.getElementById("unlockIcon").className = "fa fa-unlock-alt"; 
    }
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

//drag and drop try 2
var row;

function start(){  
  row = event.target; 
}
function dragover(){
  var e = event;
  e.preventDefault(); 
  
  let children= Array.from(e.target.parentNode.parentNode.children);
  
  if(children.indexOf(e.target.parentNode)>children.indexOf(row))
    e.target.parentNode.after(row);
  else
    e.target.parentNode.before(row);
}

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');
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

function pop(r) {
  var i = r.parentNode.parentNode.rowIndex;
  document.getElementById("allOrderTable").deleteRow(i);
}

//dropdown
function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.button-drop')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function filterTable() {
  var input, filter, table, tr, td, i, txtValue,txtValue2, txtValue3, txtValue4;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  //table = document.getElementById("allOrderTable");
  tables= document.getElementsByClassName("table-content");
  for(j = 0; j < tables.length; j++)
  {
    tr = tables[j].getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      td2 = tr[i].getElementsByTagName("td")[1];
      td3 = tr[i].getElementsByTagName("td")[2];
      td4 = tr[i].getElementsByTagName("td")[3];
      if (td || td2 || td3) {
        txtValue = td.textContent || td.innerText;
        txtValue2 = td2.textContent || td2.innerText;
        txtValue3 = td3.textContent || td3.innerText;
        txtValue4 = td4.textContent || td4.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 ||
            txtValue2.toUpperCase().indexOf(filter) > -1 ||
            txtValue3.toUpperCase().indexOf(filter) > -1 ||
            txtValue4.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        }else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  //tr = table.getElementsByTagName("tr");
 
}