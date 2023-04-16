 var form = document.getElementById('addform');
  var itemList = document.getElementById('items');
  var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);
filter.addEventListener('keyup',filteritems)
function addItem(e){
  e.preventDefault();
  var newItem = document.getElementById('item').value
   var moreitem = document.getElementById('description').value
  var li = document.createElement('li');

  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(newItem));
  //li.appendChild(document.createTextNode(' '));
  li.appendChild(document.createTextNode(moreitem));

   itemList.appendChild(li)

   var deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  deleteBtn.appendChild(document.createTextNode('X'));
  li.appendChild(deleteBtn);
  //itemList.appendChild(li);

  var editbutton = document.createElement('button')
  editbutton.className="btn btn-sn float-right editbtn"
  editbutton.appendChild(document.createTextNode('EDIT'))
  li.appendChild(editbutton);
  itemList.appendChild(li);
}

function filteritems(e){
    var text = e.target.value.toLowerCase();
     var iitems = itemList.getElementsByTagName('li');
     Array.from(iitems).forEach(function(item){
        var itemname = item.firstChild.textContent;
        var description = item.childNodes[1].textContent;
    
        if(itemname.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
            item.style.display='block'
        }
        else{
            item.style.display='none'
        }

        // Array.from(iitems).forEach(function(item){
        // var itemname2 = item.childNodes[1].textContent;
        // if(itemname2.toLowerCase().indexOf(text) != -1){
        //     item.style.display='block'
        // }
        // else{
        //     item.style.display='none'
        // }

     })

     
}