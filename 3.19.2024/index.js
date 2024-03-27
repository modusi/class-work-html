// const h1=document.querySelector('h1');

// h1.innerText="hellow world"

// const user={
//     fName:"john",
//     lName:"doe",
//     addres:"doerustavi"
// }

// localStorage.setItem("myUser",JSON.stringify(user));
// console.log(JSON.parse(localStorage.getItem("myUser")))



// const user={
//     fName:"john",
//     lName:"doe",
//     addres:"rustavi"
// }

// localStorage.setItem("myUser",JSON.stringify(user));
// console.log(JSON.parse(localStorage.getItem("myUser")))


// const andria={
//     fName:"andria",
//     lName:"loladze",
//     addres:"rustavi"
// }

// localStorage.setItem("myAndria",JSON.stringify(andria));
// console.log(JSON.parse(localStorage.getItem("myAndria")))

// const gio={
//     fName:"gio",
//     lName:"berozashvili",
//     addres:"rustavi"
// }

// localStorage.setItem("myGio",JSON.stringify(gio));
// console.log(JSON.parse(localStorage.getItem("myGio")))

// const dachi={
//     fName:"dachi",
//     lName:"biwadze",
//     addres:"rustavi"
// }

// localStorage.setItem("myDachi",JSON.stringify(dachi));
// console.log(JSON.parse(localStorage.getItem("myDachi")))

// const alexsandre={
//     fName:"alexsandre",
//     lName:"xose",
//     addres:"rustavi"
// }

// localStorage.setItem("myAlexsandre",JSON.stringify(alexsandre));
// console.log(JSON.parse(localStorage.getItem("myAlexsandre")))

// const luka={
//     fName:"luka",
//     lName:"giorgobiani",
//     addres:"rustavi"
// }

// localStorage.setItem("myLuka",JSON.stringify(luka));
// console.log(JSON.parse(localStorage.getItem("myLuka")))

// const madina={
//     fName:"madina",
//     lName:"svanadze",
//     addres:"rustavi"
// }

// localStorage.setItem("myMadina",JSON.stringify(madina));
// console.log(JSON.parse(localStorage.getItem("myMadina")))

// const beqa={
//     fName:"beqa",
//     lName:"dostoevski",
//     addres:"rustavi"
// }

// localStorage.setItem("myBeqa",JSON.stringify(beqa));
// console.log(JSON.parse(localStorage.getItem("myBeqa")))

// const nika={
//     fName:"nika",
//     lName:"jeladze",
//     addres:"rustavi"
// }

// localStorage.setItem("myNika",JSON.stringify(nika));
// console.log(JSON.parse(localStorage.getItem("myNika")))

// const nea={
//     fName:"nea",
//     lName:"pircxalava",
//     addres:"batumi"
// }

// localStorage.setItem("myNea",JSON.stringify(nea));
// console.log(JSON.parse(localStorage.getItem("myNea")))


// localStorage.removeItem("myUser");
// localStorage.clear();


// const users=[];
// const user1={
//     fName:"nea",
//     lName:"pircxalava",
//     addres:"batumi"
// }

// const user2={
//     fName:"nika",
//     lName:"jeladze",
//     addres:"rustavi"
// }

// function addUser(user){
//     users.push(user)
// }
// addUser(user1);
// addUser(user2);
// console.log(users);

// function saveUsers(arra){
//     localStorage.setItem('myUsers',JSON.stringify(arra))
// }

// saveUsers(users)


// function logUsers(){
//     const Users=JSON.parse(localStorage.getItem('myUsers'));
//     console.log('users in localStorage:',users)
// }
// logUsers()


// const users2=users.map(e=>e);
// users2[0].fName='beqa';

// console.log(users2)
// console.log(users)


// const tBody=document.querySelector('tBody')

// function renderUsers(){
//     const users=JSON.parse(localStorage.getItem('myUsers'));
//     tBody.innerHTML='';
//     users.forEach(user => {
//         tBody.innerHTML+=`   
//         <tr>
//         <th>${user.fName}</th>
//         <th>${user.lName}</th>
//         <th>${user.addres}</th>
//         </tr>`
 

//     });
// }

// renderUsers()

// const h1=document.querySelector('h1');
// const start=document.querySelector('.start')
// const stop=document.querySelector('.stop')
// function addOne(){
//     let s=h1.innerText;
//     h1.innerText=+s+1;
// }

// let interval;
// start.addEventListener('click',()=>{
//     interval=setInterval(addOne,1000)
// })
// stop.addEventListener('click',()=>{
//    if(interval){
//     clearInterval(interval);
//    }
// })



// const h2=document.querySelector('h2');
// const starts=document.querySelector('.starts')
// const stops=document.querySelector('.stops')
// function addTwo(){
//     let s=h2.innerText;
//     h2.innerText=+s+2;
// }

// let intervali;
// starts.addEventListener('click',()=>{
//     intervali=setInterval(addTwo,2000)
// })
// stops.addEventListener('click',()=>{
//    if(intervali){
//     clearInterval(intervali);
//    }
// })



