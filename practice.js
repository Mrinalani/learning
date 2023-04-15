var form = document.getElementById('addForm');
var itemList = document.getElementById('items');


form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

function addItem(e){
  e.preventDefault();
  var newItem = document.getElementById('item').value;
  var li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));

  var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

var newbtn = document.createElement('button')
newbtn.className = 'btn btn-danger btn-sm float-right delete'
newbtn.id = 'butt'
var newbtntext = document.createTextNode('exit')
newbtn.appendChild(newbtntext)
var fix = document.querySelectorAll('li')
for(var i=0; i<fix.length; i++){
fix[i] .append(newbtn)
}







