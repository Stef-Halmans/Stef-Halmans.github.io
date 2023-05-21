fetch('items.json')
 .then(response => response.json())
 .then(data => initList(data))

function inputClicked(){
    input = document.getElementById("todoInput");
    addLi(input.value);

    //trying to save changes to the file, doesnt work
    todoList = document.getElementById("todoList");
    console.log(todoList);

    var values = [];

    for (var item of todoList.children) {
        // console.log(item);
        if (item.nodeName == "LI") {

            var value = item.childNodes[3].innerHTML;
            values.push({"value": value});
        }
    }
    console.log(values)

    fetch("/test.json", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        
        },
        body: JSON.stringify(values)
    });

}


function initList(data){
    for(var item of data){
        addLi(item.value);
    }   
 }
 

function addLi(value){
    todoList = document.getElementById("todoList");

    var randomValue = Math.floor(Math.random() * 100000000);
    var li = `
        <li id="${randomValue}" 
            draggable="true" 
            onDrag="drag(this)"
            onDragEnd="drop(this)">
            <button id="delete" onclick="deleteLi('${randomValue}')">
                Del
            </button>
            <label>${value}</label>
        </li>
    
    `
    todoList.innerHTML += li;
}

function deleteLi(id){
    var li = document.getElementById(id);
    li.parentNode.removeChild(li);
}
// inspiration from: https://www.codehim.com/vanilla-javascript/javascript-drag-and-drop-reorder-list/ 
function drag(item){
    list = item.parentNode;
    x = event.clientX;
    y = event.clientY;

    item.classList.add('drag-sort-active');
    let swapItem = document.elementFromPoint(x, y) === null 
        ? item : document.elementFromPoint(x, y);
  
    if (list === swapItem.parentNode) {
      swapItem = swapItem !== item.nextSibling 
        ? swapItem : swapItem.nextSibling;
      list.insertBefore(item, swapItem);
    }
}

function drop(item) {
    item.classList.remove('drag-sort-active');
  }

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

