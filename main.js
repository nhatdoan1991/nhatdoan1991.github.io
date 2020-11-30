
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
      document.getElementById("dragble-button").style.backgroundColor = "#333333";
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
  
  let children= Array.from(e.target.parentNode.parentNode.parentNode.children);
  //console.log(e.target.nodeName);
  
  if(e.target.className ==="draggable no-table")
  {
      createTable();
      var thisID =e.target.parentNode.id;
      var thisTable = document.getElementById(thisID);
      var firstTR= thisTable.firstChild;
      thisTable.insertBefore(row,firstTR.nextSibling.nextSibling);
      document.querySelector(".no-table").remove();

  }else if (e.target.nodeName ==="TD"){
    if(children.indexOf(e.target.parentNode)>=children.indexOf(row))
    e.target.parentNode.after(row);
    else
    e.target.parentNode.before(row);
  }
 
}

function drop(){
 
}
var id =1;
function createTable(){
 
   var table = document.querySelector(".no-table").parentNode;
   var tr = document.createElement('tr');
   var text = document.createTextNode("Order Number");
   var th = document.createElement('th');
   th.appendChild(text);
   tr.appendChild(th);
   var text = document.createTextNode("Name");
   var th = document.createElement('th');
   th.appendChild(text);
   tr.appendChild(th);
   var text = document.createTextNode("Item");
   var th = document.createElement('th');
   th.appendChild(text);
   tr.appendChild(th);
   var text = document.createTextNode("Action");
   var th = document.createElement('th');
   th.appendChild(text);
   tr.appendChild(th);
   var text = document.createTextNode("Order Number");
   var th = document.createElement('th');
   th.appendChild(text);
   tr.appendChild(th);
   table.appendChild(tr);
   table.className="table-content";
   table.id=id;
    id++;
   //this.insertBefore(table,document.getElementsByClassName("draggable no-table"));
   
}

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');
const cancelBtn = document.querySelector('#close');

const modal1 = document.querySelector('#my-modal1');
const modalBtn1 = document.querySelector('#modal-btn1');
const closeBtn1 = document.querySelector('.close1');
const cancelBtn1 = document.querySelector('#close1');
// Events

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
cancelBtn.addEventListener('click',closeModal);

modalBtn1.addEventListener('click', openModal1);
closeBtn1.addEventListener('click', closeModal1);
window.addEventListener('click', outsideClick1);
cancelBtn1.addEventListener('click',closeModal1);
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
function openModal1() {
  modal1.style.display = 'block';
}

// Close
function closeModal1() {
  modal1.style.display = 'none';
}

// Close If Outside Click
function outsideClick1(e) {
  if (e.target == modal1) {
    modal1.style.display = 'none';
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
  input = document.getElementById("mySearchInput");
  filter = input.value.toUpperCase();
  console.log(input);
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

var nameInput =null;

function getName(){
  nameInput = document.getElementById("newGroupName").value;
}
if(nameInput!=null)
{
  document.getElementById("create-group").backgroundColor= "rgb(189,33,48)";
}else{
  document.getElementById("create-group").backgroundColor= "rgb(51,51,51)";
}

function addGroup(){
  if(nameInput!=null)
  {
  var notable = document.createTextNode("There is no table in this group.");
  var node = document.createTextNode(" " +nameInput);
  var p = document.createElement('h3');
  p.className= "queue-group-heading";
  p.appendChild(node);
  var div = document.querySelector(".queue-catagories");
  div.appendChild(p);
  var table = document.createElement('table');
  var newDiv = document.createElement('div');
  newDiv.className ="draggable";
  newDiv.className += " no-table";
  newDiv.setAttribute('draggable',false);
  newDiv.setAttribute('ondragstart',"start()");
  newDiv.setAttribute('ondragover',"dragover()");
  newDiv.setAttribute('style',"text-align:center;");
  newDiv.setAttribute('ondrop',drop());
  
  newDiv.appendChild(notable);
  table.appendChild(newDiv);
  
  div.appendChild(table);
  closeModal();
  document.getElementById("newGroupName").value="";
  }else{
    
  }
  
}
function SortByDate(){
  var SortByDateHTML ="<h3 class = 'queue-group-heading'> Wed 11/25</h3><table class = 'table-content'><tr><th>Order Number</th><th>Name</th><th>Item</th><th>Address</th><th>Action</th></tr><tr class='draggable' draggable='false' ondragstart='start()' ondragover='dragover()'><td>00841</td><td>Duane Wilson</td><td><p>Fairytale x2</p><p>Hemly Pink Lady x2</p> </td><td>95670</td><td><button class='button button-pop' onclick='pop(this)'><i class='fa fa-share' aria-hidden='true'></i></i>Pop</button> </td>    </tr>   <tr class='draggable' draggable='false' ondragstart='start()' ondragover='dragover()'>        <td>00842</td>        <td>Francis McKinney</td>        <td>            <p>Japanese Curry & Vegetables x2</p>            <p>Peach& Prociutto x2</p>        </td>        <td>95811</td>        <td>            <button class='button button-pop'onclick='pop(this)'>               <i class='fa fa-share' aria-hidden='true'></i></i>Pop            </button>        </td>    </tr>    <tr class='draggable' draggable='false' ondragstart='start()' ondragover='dragover()'>         <td>00845</td>        <td>Ezekiel Sung</td>        <td>            <p>Japanese Curry & Vegetables x4</p></td>        <td>95670</td>        <td>            <button class='button button-pop'onclick='pop(this)'>                <i class='fa fa-share' aria-hidden='true'></i></i>Pop            </button>        </td>    </tr>  </table><h3 class = 'queue-group-heading'> Fri 11/27</h3><table class = 'table-content'><tr>    <th>Order Number</th>    <th>Name</th>    <th>Item</th>    <th>Address</th>    <th>Action</th></tr><tr class='draggable' draggable='false' ondragstart='start()'ondragover='dragover()'>    <td>00843</td>    <td>Kris Helmets</td>    <td>        <p>Hemly Fuji Apple x2</p>        <p>Japanese Curry & Vegetable x2</p>    </td>    <td>95825</td>    <td>        <button class='button button-pop'onclick='pop(this)'>            <i class='fa fa-share' aria-hidden='true'></i></i>Pop        </button>    </td></tr><tr class='draggable' draggable='false' ondragstart='start()' ondragover='dragover()'>    <td>00844</td>    <td>Omamouwa Shinderou</td>    <td>        <p>Hemly Fuji Apple x2</p>        <p>Japanese Curry & Vegetable x2</p>    </td>    <td>95825</td>    <td>        <button class='button button-pop'onclick='pop(this)'>            <i class='fa fa-share' aria-hidden='true'></i></i>Pop        </button>   </td></tr>  </table>    <h3 class = 'queue-group-heading'> All Order</h3><table id='allOrderTable'class = 'table-content'><center><p>There is no orders in All Order</p></center></table>";
  document.querySelector(".queue-catagories").innerHTML=SortByDateHTML;

}
function SortByAddress(){
 var SortByAddressHTML= "<h3 class = 'queue-group-heading'>  95670</h3> <table class = 'table-content'> <tr> <th>Order Number</th> <th>Name</th> <th>Item</th> <th>Address</th> <th>Action</th>  </tr> <td>00842</td> <td>Francis McKinney</td> <td> <p>Japanese Curry & Vegetables x2</p> <p>Peach& Prociutto x2</p> </td> <td>95811</td> <td> <button class='button button-pop'onclick='pop(this)'> <i class='fa fa-share' aria-hidden='true'></i></i>Pop </button> </td> </tr> <tr class='draggable' draggable='false' ondragstart='start()' ondragover='dragover()'> <td>00845</td> <td>Ezekiel Sung</td> <td> <p>Japanese Curry & Vegetables x4</p></td> <td>95670</td> <td> <button class='button button-pop'onclick='pop(this)'> <i class='fa fa-share' aria-hidden='true'></i></i>Pop </button> </td> </tr> </table> <h3 class = 'queue-group-heading'> 95848</h3> <table class = 'table-content'> <tr> <th>Order Number</th> <th>Name</th> <th>Item</th> <th>Address</th> <th>Action</th> </tr> <tr class='draggable' draggable='false' ondragstart='start()' ondragover='dragover()'> <td>00843</td> <td>Kris Helmets</td> <td> <p>Hemly Fuji Apple x2</p> <p>Japanese Curry & Vegetable x2</p> </td> <td>95825</td> <td> <button class='button button-pop'onclick='pop(this)'> <i class='fa fa-share' aria-hidden='true'></i></i>Pop </button> </td> </tr> <tr class='draggable' draggable='false'ondragstart='start()' ondragover='dragover()'> <td>00844</td> <td>Omamouwa Shinderou</td> <td> <p>Hemly Fuji Apple x2</p> <p>Japanese Curry & Vegetable x2</p> </td> <td>95825</td> <td> <button class='button button-pop'onclick='pop(this)'> <i class='fa fa-share' aria-hidden='true'></i></i>Pop </button> </td> </tr> </table> <h3 class = 'queue-group-heading'>  All Order</h3> <table id='allOrderTable' class = 'table-content'> <center><p>There is no orders in All Order</p></center> </table>";
 document.querySelector(".queue-catagories").innerHTML=SortByAddressHTML;

}
function pushOrder(){
  var pushOrderHTML ="<h3 class = 'queue-group-heading'>  95670</h3> <table class = 'table-content'> <tr> <th>Order Number</th> <th>Name</th> <th>Item</th> <th>Address</th> <th>Status</th> </tr> <tr > <td>00841</td> <td>Duane Wilson</td> <td> <p>Fairytale x2</p> <p>Hemly Pink Lady x2</p> </td> <td>95670</td> <td class='status inDelivery'> <i class='fa fa-shopping-basket' aria-hidden='true'></i></i>In Delivery </td> </tr> <tr> <td>00845</td> <td>Ezekiel Sung</td> <td> <p>Japanese Curry & Vegetables x4</p></td> <td>95670</td> <td class='status inDelivery'> <i class='fa fa-shopping-basket' aria-hidden='true'></i></i>In Delivery </td> </tr> </table> <h3 class = 'queue-group-heading'> <i class='fa fa-table'aria-hidden='true'></i> 95811</h3> <table class = 'table-content'> <tr> <th>Order Number</th> <th>Name</th> <th>Item</th> <th>Address</th> <th>Status</th> </tr> <tr> <td>00842</td> <td>Francis McKinney</td> <td> <p>Japanese Curry & Vegetables x2</p> <p>Peach& Prociutto x2</p> </td> <td>95811</td> <td class='status inDelivery'> <i class='fa fa-shopping-basket' aria-hidden='true'></i></i>In Delivery </td> </tr> </table> <h3 class = 'queue-group-heading'> <i class='fa fa-table' aria-hidden='true'></i> 95825</h3> <table class = 'table-content'> <tr> <th>Order Number</th> <th>Name</th> <th>Item</th> <th>Address</th> <th>Status</th> </tr> <tr> <td>00843</td> <td>Kris Helmets</td> <td> <p>Hemly Fuji Apple x2</p> <p>Japanese Curry & Vegetable x2</p> </td> <td>95825</td> <td class='status inDelivery'> <i class='fa fa-shopping-basket' aria-hidden='true'></i></i>In Delivery </td> </tr> <tr> <td>00844</td> <td>Omamouwa Shinderou</td> <td> <p>Hemly Fuji Apple x2</p> <p>Japanese Curry & Vegetable x2</p> </td> <td>95825</td> <td class='status inDelivery'> <i class='fa fa-shopping-basket' aria-hidden='true'></i></i>In Delivery </td> </tr> </table> ";
  //console.log(document.querySelectorAll('.queue-catagories')[1].innerHTML);
  temp = "<center><p> There is no orders in this table<p><center>";
  document.querySelector(".queue-catagories").innerHTML=temp;
  document.querySelectorAll('.queue-catagories')[1].innerHTML += pushOrderHTML;
  closeModal1();
}

