  // // Async await

//   console.log('person1:shows Ticket')
//   console.log('person2:shows Ticket')

//   const promisewifebringingtickets = new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//             resolve('ticket')
//           },3000)  
//         });
      
//      const getpopcorn = promisewifebringingtickets.then((t)=>{
//         console.log('wife:here is a ticket')
//         console.log('husband:lets go')
//         console.log('wife:no i am hungry')
//         return new Promise((resolve,reject)=>{
//             resolve(`${t},popcorn`)
//         });
//      });   

//      const getbutter = getpopcorn.then((t)=> {
//         console.log('husband:i got popcorn')
//         console.log('husband:lets go')
//         console.log('wife:no i need butter')
//         return new Promise((resolve,reject)=>{
//             resolve(`${t},butter`)
//        });
//      });
//         getbutter.then((t)=>console.log(t))


    //  console.log('person4:shows Ticket')
    //  console.log('person5:shows Ticket')


   // // seprate function Async await

   console.log('person1:shows Ticket')
   console.log('person2:shows Ticket')

   const premovie = async () =>{

    const promisewifebringingtickets = new Promise((resolve,reject)=>resolve(`ticket`));
    const getpopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    const addbutter = new Promise((resolve,reject)=>resolve(`butter`))
    const getcoldrink = new Promise((resolve,reject)=>resolve(`coldrink`))

    const getcandy = new Promise((resolve,reject)=>resolve(`candy`))
    const getcoke = new Promise((resolve,reject)=>resolve(`coke`))
    const getcorn = new Promise((resolve,reject)=>resolve(`corn`))


let ticket = await promisewifebringingtickets;
         console.log('wife:here is a ticket')
         console.log('husband:lets go')
         console.log('wife:no i am hungry')

let popcorn = await getpopcorn;
         console.log('husband:I got ticket')
         console.log('husband:lets go')
         console.log('wife:no i need popcorn')

let butter =   await addbutter      
         console.log('husband:i got popcorn')
         console.log('husband:lets go')
         console.log('wife:no i need butter')

let coldrink =   await getcoldrink      
         console.log('husband:i got popcorn')
         console.log('husband:lets go')
         console.log('wife:no i need coldrink')

let [candy,coke,corn]  = await Promise.all([getcandy,getcoke,getcorn])
         console.log(`${candy} ,${coke} ,${corn}`)       



   return ticket

   }
   premovie().then((m)=>console.log(m))

   console.log('person4:shows Ticket')
   console.log('person5:shows Ticket')
  
  

  
  
  
  // // understand promise part 1
   
//    const posts = [{title: 'Post One'},{title: 'Post Two'}];

//    //Do not touch this function below
//    function printPost() {
//            posts.forEach((post) => {
//                console.log(post.title)
//            })
//    }
   
//    //Do not touch this function below
//    function create3rdPost() {
//        return new Promise( (resolve, reject) => {
//            setTimeout( () => {
//                posts.push({title: 'post Three'});
//                resolve()
//            }, 3000)
//        }) 
//    }
   
//    //Do not touch this function below
//    function create4thPost() {
//        return new Promise( (resolve, reject) => {
//            setTimeout( () => {
//                posts.push({title: 'post Four'});
//                resolve();
//            }, 2000)
//        }) 
//    }
   
//    create3rdPost().then(() =>{
//    create4thPost().then(()=>{
//     printPost()
//    })
//    })

    // // promice part2

//     const posts = [{title: 'POST1'},{title: 'POST2'}];

// // Do not touch the following function
// function printPost() {
//         posts.forEach((post) => {
//             console.log(post.title)
//         })
// }
// // Do not touch the following function
// function create3rdPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST3'});
//             resolve()
//         }, 3000)
//     }) 
// }
// // Do not touch the following function
// function create4thPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST4'});
//             resolve();
//         }, 2000)
//     }) 
// }
// // Complete the following function 
// //It should add POST5 to posts array with setTimeout of 1 second
// function create5thPost(){
//     //should return a promise
//     return new Promise((resolve,reject)=>{
//         setTimeout( () => {
//             posts.push({title: 'POST5'});
//             resolve();
//         }, 2000)
//     })
  
// }

// // The following 4 lines need to be fixed too
// create3rdPost().then(()=>{
//     create4thPost().then(()=>{
//         create5thPost().then(()=>{
//             // create3rdPost().then(()=>{
//                 printPost()
//             })
//         })
//     })
//  //})


     // // promise part3

//      const posts = [{title: 'POST1'},{title: 'POST2'}];

// //Do not touch this function below
// function printPost() {
//     posts.forEach((post) => {
//         console.log(post.title)
//     })
// }

// //Do not touch this function below
// function create3rdPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST3'});
//             resolve()
//         }, 3000)
//     }) 
// }
// //Do not touch this function below
// function create4thPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST4'});
//             resolve();
//         }, 2000)
//     }) 
// }

// //Complete this function such that it returns a Promise
// //and removes the last element of the posts array with a 1 second delay(setTimeout)
// //to remove you can use array.pop method
// function deletePost(){
//     //complete this function
//      return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.pop();
//             resolve();
//         }, 1000)
//     }) 
// }

// //make the following sequence work properly
// create3rdPost().then(()=>{
//     deletePost().then(()=>{
//         create4thPost().then(()=>{
//             printPost()
//         })
//     })
// })

   // // promise part4

//    const posts = [{title: 'POST1'}];
// //Do not touch this function
// function create2ndPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST2'});
//             resolve()
//         }, 3000)
//     }) 
// }
// //Do not touch this function
// function create3rPost() {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             posts.push({title: 'POST3'});
//             resolve();
//         }, 2000)
//     }) 
// }

// //Do not touch this function
// function deletePost(){
//     return new Promise((resolve, reject) => {
//         setTimeout( () => {
//             if(posts.length > 0){
//                 const poppedElement  = posts.pop();
//                 resolve(poppedElement);
//             } else {
//                 reject("ERROR: ARRAY IS EMPTY")
//             }
//         }, 1000)
//     })
// }

// //Modify the lines below and use .then and .catch smartly to get the correct output.
// // create2ndPost()
// // .then(deletePost)
// // .then(create3rPost)
// // .then(deletePost)
// // .then(deletePost)
// // .catch(deletePost)

// create2ndPost()
// .then(() => deletePost()
//     .then((poppedElement) => console.log(poppedElement.title))
// )
// .then(create3rPost)
// .then(() => deletePost()
//     .then((poppedElement) => console.log(poppedElement.title))
// )
// .then(() => deletePost()
//     .then((poppedElement) => console.log(poppedElement.title))
//     .catch((errorMessage) => console.log(errorMessage))
// )
// .then(() => deletePost()
//     .then((poppedElement) => console.log(poppedElement.title))
//     .catch((errorMessage) => console.log(errorMessage))
// );



    // // promise project

//     const posts = [];
// let lastActivityTime = null;

// function createPost(post) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             posts.push(post);
//            // console.log(post)
//             resolve();
//         }, 0);
//     });
// }

// function updateLastUserActivityTime() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             lastActivityTime = new Date();
//            // console.log(lastActivityTime)
//             resolve(lastActivityTime);
//         }, 1000);
//     });
// }

// function deleteLastPost() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             posts.pop();
//             resolve();
//         }, 1000);
//     });
// }

// createPost('Post 1')
//     .then(() => updateLastUserActivityTime())
//     .then(() => createPost('Post 2'))
//     .then(() => updateLastUserActivityTime())
//     .then(() => createPost('Post 3'))
//     .then(() => Promise.all([updateLastUserActivityTime(), deleteLastPost()]))
//     .then(([_, deletedPost]) => {
//         console.log('All Posts:', posts);
//         console.log('Last Activity Time:', lastActivityTime);
//         console.log('Deleted Post:', deletedPost);
//         console.log('New Posts:', posts);
//     });

// createPost('post1')

// .then(updateLastUserActivityTime)
// .then((updateLastUserActivityTime)=>console.log(lastActivityTime))















     
     
     // // promise

// const posts =[
//     {title:'post1',  body:'this is post1'},
//     {title:'post2',  body:'this is post2'},
// ]

// function getposts(){
//     setTimeout(() => {
//    var output = '';
//    posts.forEach((post) =>{
//    output += `<li>${post.title}</li>`
//    });
//    document.body.innerHTML = output

//     },1000)
// }

// function createpost(post){
//     return new Promise((resolve, reject) => {
//      setTimeout(() =>{
//      posts.push(post);

//      const error = false;
//      if(!error){
//         resolve();
//      }else{
//         reject(' Error: something went wrong')
//      }

//      },2000)
//     })
// }

// function createpost2(){
//     return new Promise((resolve, reject) => {
//      setTimeout(() =>{
//      posts.push({title:'post4',  body:'this is post4'});
//      resolve()

//      },3000)
//     })
// }



// createpost({title:'post3',body:'this is post3'})
// .then(createpost2)
// .then(getposts);


    // // callback

// const posts =[
//     {title:'post1',  body:'this is post1'},
//     {title:'post2',  body:'this is post2'},
// ]

// function getposts(){
//     setTimeout(() => {
//    var output = '';
//    posts.forEach((post) =>{
//    output += `<li>${post.title}</li>`
//    });
//    document.body.innerHTML = output

//     },1000)
// }

// function createpost(post,callback){
//     setTimeout(() =>{
//     posts.push(post);
//     callback()
//     },2000)
// }

// getposts()

// createpost({title:'post3',body:'this is post3'},getposts);