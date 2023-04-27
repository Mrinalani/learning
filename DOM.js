 // //  EXAMINE THE DOCUMENT OBJECT 

// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.tilte)
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// console.log(document.forms)
// console.log(document.forms[0])
// console.log(document.links)
// console.log(document.images)

 // //  GET ELEMENT BY ID

//  console.log(document.getElementById('header-title'))
//  var headertitle = document.getElementById('header-title')
//  var header = document.getElementById('main-header')

//  console.log(headertitle)
//   console.log(headertitle.textContent)

//  // headertitle.textContent = 'newheader'
//  //header.innerText = 'goodbye'
//  //headertitle.innerHTML = '<h1>hello</h1>'
//  //headertitle.style.borderBottom = 'solid 3px #000'
//  console.log(header.textContent)

 // //  GET ELEMENT BY CLASS NAME

//  var item = document.getElementsByClassName('list-group-item')
//  console.log(item)

// //  var item2 = document.getElementsByClassName('list-group')
// //  console.log(item)
// console.log(item[1])
// item[1].textContent = 'hellolist'
// item[1].style.fontWeight = 'bold'
// item[1].style.backgroundColor = 'yellow'

// //  error //item.style.backgroundColor = 'blue' 

// for(var i=0; i<item.length; i++){
//     item[i].style.backgroundColor = 'blue'
// }

// //  GET ELEMENT BY TAG NAME

//  var li = document.getElementsByTagName('li')
//  console.log(li)
//  console.log(li[1])
//  li[2].textContent = 'hellolist2'
//  li[3].style.fontWeight = 'bold'
//  li[1].style.backgroundColor = 'green'

// // //  error //li.style.backgroundColor = 'blue' 

//  for(var i=0; i<li.length; i++){
//     li[i].style.backgroundColor = 'blue'
//  }

// // QUERY SELECTOR

// var header = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 4px black'

// var input = document.querySelector('input')
// input.value = 'hello world'  // only one input value will be hello 

// var submit = document.querySelector('input[type="submit"]')
// submit.value = 'SEND'

// var item = document.querySelector('.list-group-item')
// item.style.color = 'red' // color of first list will be change

// var lastitem = document.querySelector('.list-group-item:last-child')
// lastitem.style.color = 'green'

// var lastitem = document.querySelector('.list-group-item:nth-child(2)')
// lastitem.style.color = 'yellow'

 // // QUERY SELECTORALL

//  var title = document.querySelectorAll('.title')
//  console.log(title)
//  title[0].textContent = 'hello'

//  var odd = document.querySelectorAll('li:nth-child(odd)')
//  var even = document.querySelectorAll('li:nth-child(even)')

//  for(var i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4'
//  }
//  for(var i=0; i<even.length; i++){
//     even[i].style.backgroundColor = '#ccc'
//  }

// //TREVERSING THE DOM

// var itemlist = document.querySelector('#items')
// // parentNodes
// console.log(itemlist.parentNode)
// itemlist.parentNode.style.backgroundColor = 'blue'
// console.log(itemlist.parentNode.parentNode)

   // // parentElement(preferable)
// console.log(itemlist.parentElement)
//  itemlist.parentElement.style.backgroundColor = 'blue'
//  console.log(itemlist.parentElement.parentElement)

 // // childNodes
//  var itemlist = document.querySelector('#items')
//  console.log(itemlist.childNodes)

// console.log(itemlist.children) //(prefered)
// console.log(itemlist.children[1])
// console.log(itemlist.children[1].style.backgroundColor = 'yellow')

// // firstchild
// console.log(itemlist.firstChild)  // firstchild
// console.log(itemlist.firstElementChild)  // firstElementchild
// console.log(itemlist.firstElementChild.textContent)
// itemlist.firstElementChild.textContent = 'hello'
 
// // lastchild
// console.log(itemlist.lastChild)  // lastchild
// console.log(itemlist.lastElementChild)  // lastElementchild
// console.log(itemlist.lastElementChild.textContent)
// itemlist.lastElementChild.textContent = 'hello4'

// // nextsibling
// var itemlist = document.querySelector('#items')
// console.log(itemlist.nextElementSibling)

// // // previoussibling
// console.log(itemlist.previousElementSibling)
// itemlist.previousElementSibling.style.color = 'green'

// // CREATE ELEMENTS

// var newdiv = document.createElement('div')
// newdiv.className = 'hello1'
// newdiv.id = 'hello'
// newdiv.setAttribute('title', 'hello div')
// var newdivtext = document.createTextNode('hello world')
// newdiv.appendChild(newdivtext)

// var container =document.querySelector('header .container') // child of header is container class
// var h1 = document.querySelector('header h1')  // child of header is h1

// container.insertBefore(newdiv, h1)
// console.log(newdiv)

   // // EVENT LISTNER
       // 1st method
// function buttonClick(){
//    console.log('button clicked')
// }
      // 2nd method
//     var button = document.getElementById('button').addEventListener('click',function(){
//     console.log(123)
//  })  

    // 3rd method
   // var button = document.getElementById('button').addEventListener('click',btnclick)
      
   //  function btnclick(){
   //    console.log('button is clicked')
   //  }

    // // modification on btnclick function
   //  function btnclick(){
   //    document.getElementById('header-title').textContent = 'changed'
   //    document.querySelector('#main').style.backgroundColor = 'yellow'
   //  }

    // 4th method
   //  var button = document.getElementById('button').addEventListener('click',btnclick)

   //  function btnclick(e){
   //    // console.log(e)
   //    // console.log(e.target)
   //    // console.log(e.target.id)
   //    // console.log(e.target.className)
   //    // console.log(e.target.classList)
   //    //var output = document.getElementById('output')
   //   // output.appendChild(document.createTextNode('hello world'))
   //    // output.innerHTML = '<li>hello world</li>'    // giving error
   //    //  output.innerHTML = '<h3>'+e.target.id+'</h3'

   //    console.log(e.type)
   //     console.log(e.clientX)
   //     console.log(e.clientY)

   //     console.log(e.offsetX)
   //     console.log(e.offsetY)

   //     console.log(e.altKey)
   //     console.log(e.ctrlKey)
   //     console.log(e.shiftKey)
   //  }

  // 5th method

 // var button = document.getElementById('button')
 // button.addEventListener('click',runEvent);
 //button.addEventListener('dblclick',runEvent);
 //button.addEventListener('mouseup',runEvent);
 //button.addEventListener('mousedown',runEvent);

 // 6th method
 //var box = document.getElementById('box')
 //box.addEventListener('mouseenter',runEvent);
 //box.addEventListener('mouseleave',runEvent);
//  box.addEventListener('mouseover',runEvent);
//  box.addEventListener('mouseout',runEvent);
 
//   function runEvent(e){
//    console.log('EVENT TYPE:'+e.type)
  //}

//   var box = document.getElementById('box')
//   var output = document.getElementById('output')
//   box.addEventListener('mousemove',runEvent);

   // // 6th method
//   function runEvent(e){
//    console.log('EVENT TYPE:'+e.type)
//    //output.innerHTML = '<h3>mouseX: '+e.offset+' </h3><h3>mouseY:'+e.offsetY+'</h3>'
//    //box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"
//    document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"
 // }

  // // 7th method

//   var iteminput = document.querySelector('input[type="text"]')
//   var form = document.querySelector('form')
//   iteminput.addEventListener('keydown',runEvent);

//   function runEvent(e){
//       //console.log('EVENT TYPE:'+e.type)
//       console.log(e.target.value)
//       document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3'
//   }

// 2ND PART
    // // add li with input value

// var form = document.getElementById('addform')
// var itemlist = document.getElementById('items')

// form.addEventListener('submit',additem)

// function additem(e){
//    e.preventDefault();
//    var newitem = document.getElementById('item').value
//    var newitem2 = document.getElementById('description').value
//    var li = document.createElement('li')
//    li.className = 'list-group-item'
//    li.appendChild(document.createTextNode(newitem+' '+newitem2))
//    itemlist.appendChild(li)
//    var delbtn = document.createElement('button')
//    delbtn.className="btn btn-danger btn-sm float-right delete"
//    delbtn.appendChild(document.createTextNode('X'))
//    li.appendChild(delbtn)
//    var editbtn = document.createElement('button')
//    editbtn.className="btn btn-sn float-right editbtn"
//    editbtn.appendChild(document.createTextNode('EDIT'))
//    li.appendChild(editbtn)
// }

// // remove li as click delete

// var itemlist = document.getElementById('items')
// itemlist.addEventListener('click' , removeitem)

// function removeitem(e){
//    if(e.target.classList.contains('delete')){
//       if(confirm('Are you sure')){
//          var li = e.target.parentElement
//          itemlist.removeChild(li)
//       }
//    }
// }

// // filter in a search box 

// 1st method
// var filter = document.getElementById('filter')
// filter.addEventListener('keyup',filteritem)

// function filteritem(e){
//    //convert text to lowercase
//    var text = e.target.value.toLowerCase();
//    // get lis
//    var items = document.getElementsByTagName('li')
//    Array.from(items).forEach(function(item){
//       console.log(item.textContent)
//       var itemname = item.firstChild.textContent
//       if(itemname.toLowerCase().indexOf(text) != -1){
//          item.style.display = 'block'
//       }
//       else{
//          item.style.display = 'none'
//       }

//    })

// }

// 2nd method
// var filter = document.getElementById('filter');  // get serchbox
// filter.addEventListener('keyup',filteritem)  // give function call on keyup

// function filteritem(e){                         // function
//    var text = filter.value.toLowerCase()        // get searchbox value
//    var li = document.getElementsByTagName('li'); // get li

//    for(var i=0; i<li.length; i++){                // get all li's
//     let textvalue = li[i].textContent             // get li value one by one
//      if(textvalue.toLowerCase().indexOf(text) > -1){   // convert li value to lowercase and check if search box has element of li
//       li[i].style.display = 'block' // if present show li
//      }else{
//       li[i].style.display = 'none'    // if not present do not show li
//      }
    
//    }

// }


              //1st

//  setTimeout(() => console.log('timer expired'), 1000)


// function x(y) {

// console.log('inside x');

// y();

// }
// x(function y(){

// console.log('inside y')

// })
               
               
          //2nd

          // setTimeout(() => console.log('timer1 expired'), 1000)



          // setTimeout(() => console.log('timer2 expired'), 0)
          
          
          
          // function x(y) {
          
          // console.log('inside x');
          
          // y();
          
          // }
          
          
          
          // x(function y(){
          
          // console.log('inside y')
          
          // })
          
          
            
            
         //3rd

//         setTimeout(() => console.log('timer1 expired'), 1000)



// setTimeout(() => console.log('timer2 expired'), 0)



// function x(y) {

// console.log('inside x');

// y();

// }



// x(function y(){

// setTimeout(() => console.log('inside y'), 0)

// })
          
          
            
            
              //4th

              // function fun(a){

              //   console.log(a)
                
              //   }
                
              //   var b = 10;
                
              //   fun(b)
                
                
                // 5th  
                         // A
                
                // function fun1(){

                //   console.log('a')
                  
                //   return () => {
                  
                //   console.log('b')
                  
                //   }}
                  
                  
                  
                //   fun1()

                    // B

                    // function fun1(){

                    //   var a = 10
                      
                    //   return () => {
                      
                    //   a = 20;
                      
                    //   console.log(a)
                      
                    //   }}
                      
                      
                      
                    //   fun1()()

                         // C

                        //  function fun1(a){

                        //   return () => {
                          
                        //   a = a + 20;
                          
                        //   console.log(a)
                          
                        //   }}
                          
                          
                          
                        //   fun1(10)(20)

                            // D

                            // function fun1(a){

                            //   return (b) => {
                              
                            //   a = a + b;
                              
                            //   console.log(a)
                              
                            //   }}
                              
                              
                              
                            //   fun1(10)(30)

                            // E

                            // function fun1(a){

                            //   const fun2 = (b) => {
                              
                            //   a = a + b;
                              
                            //   console.log(a)
                              
                            //   }}
                              
                              
                              
                            //   fun1(10)(30)
                              
                  
                  
               
               
                
                
                  
                  
                  // 6th

                  // var obj = {

                  //    val: 100
                     
                  //    }
                     
                  //    function fun(a, b , c){
                     
                  //    console.log(this.val + a + b + c)
                     
                  //    }
                     
                  //    fun.call(obj, 3, 4, 5)
                     
                       // 7th

                     //   var obj = {

                     //    val: 100
                        
                     //    }
                        
                     //    function fun(a, b , c){
                        
                     //    console.log(a)
                        
                     //    console.log(b)
                        
                     //    console.log(c)
                        
                     //    }
                        
                     //    fun.call(obj, [3, 4, 5])

                      //8th

                     //  var obj = {

                     //    val: 100
                        
                     //    }
                        
                     //    function fun(a, b , c){
                        
                     //    console.log(this.val + a + b + c)
                        
                     //    }
                        
                     //    fun.apply(obj, 3, 4, 5)

                      // 9th

                     //  var obj = {

                     //    val: 100
                        
                     //    }
                        
                     //    function fun(a, b , c){
                        
                     //    console.log(this.val + a + b + c)
                        
                     //    }
                        
                     //    const fun2 = fun.bind(obj)
                        
                        
                        
                     //    fun2(1, 2,3)
                        
                        
    //      document.addEventListener("DOMContentLoaded", () => { console.log('DOM HAS LOADED') })    
    //  window.addEventListener("DOMContentLoaded", () => { console.log('DOM HAS LOADED') })        
    //  document.addEventListener("DOMContentLoaded", console.log('DOM HAS LOADED')) 
    //  window.addEventListener("DOMContentLoaded", console.log('DOM HAS LOADED'))  
    
//     var fun = a => a

// var a =10;

// console.log(fun(a))

// 2nd

// var fun = a => a

// console.log(fun(a))

// var a =10;

//3d

// var fun = a =>{ a }

// var a =10;

// console.log(fun(a))

// 4th

// var fun =( a, b) =>{

//   var sum = a + b
  
//   return sum
  
//   }
  
//   var a =10;
  
//   var b = 20
  
//   console.log(fun(a, b))

//5th

// var fun =( a, b) =>

// var sum = a + b

// return sum

// var a =10;

// var b = 20

// console.log(fun(a, b))

//6th

// var student = function(name){

//   this.name = name;

//   function printName() {

//     console.log(this.name)

//   }

//    printName()

// }

// var yash = new student("yash")
  

//7th

// var student = function(name){

//   this.name = name;

//   var printName = () => {

//     console.log(this.name)

//   }

//    printName()

// }

// var yash = new student("yash")

// function fun1(){

//   console.log("a")
  
//   }
  
//   function fun2(){
  
//   console.log('b')
  
//   }
  
  
  
//   document.getElementById("some button").addEventListener("click", fun1)
  
//   fun2();
  

const obj1= {

  "key1": "value1",
  
  "key2" : "value2",
  
  "key3" : "value3"
  
  }
  
  const obj2 = { ...obj1	, "key3": "new value"}
  
  
  
  console.log(obj2)
  console.log(obj1)
  







                  
                  
               
            
            
            
            
                     
   









                  
               
               
      
               
               














