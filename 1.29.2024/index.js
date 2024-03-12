
// document.querySelector('h1').style.color='red'
// document.querySelector('h1').addEventListener('click',()=>{

// })
// let fName='andria'
// console.log(fName);

// fName='sandro'

// console.log(fName);
// lastName='xose'
// console.log(fName+' '+lastName);




// let a=15;
// let b='16';
// let c='andria'
// let d=true
// let e=false
// let f=undefined;
// let g=null;
// console.log(a+b)

// let num1=10;
// let num2=11;
// let bol=num2>num1;
// console.log(num1+num2);
// console.log(bol);



// let num1=1;
// let num2=2;
// let str='hello'
// const res=num1+str+num2;
// console.log(res)

// let firstName='andria'
// let lastName='loladze'
// let fullName=firstName+' '+lastName;
// console.log(fullName)



// firstName='giorgi'
// lastName='cincadze'
// fullName=firstName+' '+lastName;
// console.log(fullName)


// function sum(a,b){
//     return a+b;
// }

// let num1=6;
// let num2=7;

// let num3=sum(num1,num2)
// console.log(num3)


// function sum(a,b){
//     return a+b+' '+a*b+' '+a/b;
// }

// let num1=4;
// let num2=5;
// let num3=sum(num1,num2)
// console.log(num3)


// function gayofa(a,b){
//     if(b===0){
//         return 'second parametr not equal zero'
//     }
//     else{
//         return a/b
//     }
// }

// let num5=gayofa(10,2)
// console.log(num5)

// let num6=gayofa(10,0)
// console.log(num6)


// function test(c){
//     if(c<15){
//         return'chaicvi palto'
//     }
//     else if( c>=15 && c<=25 ){
//         return'chaicvi jempri'
//     }
//     else{
//         return 'chaicvi maisuri'
//     }
// }
// console.log(test(26))
// console.log(test(20))


// let a=5;
// a++
// a--
// console.log(a)


// let x=10;
// let y=15;
// x=x+y;
// x+=y
// x-=y
// x=x*y
// x*=y
// x=x/y
// x/=y
// x=x%y
// x%=y
// x=x**2
// x**=2
// console.log(x)


// let x=20;
// let y=5;
// x<<=y
// x>>=y
// x>>>=y
// console.log(x)



// function more(a,b){
//     if(a>b){return a}
//     else{return b}
// }
// console.log(more(20,30))


// 2davaleba
// let a=2
// a**=2
// console.log(a)


// function isEven(a){
//     let res=a%2
//     if(res>0){return false}
//     return true
// }
// console.log(isEven(7))
// console.log(isEven(8))


// function more(a,b,c){ 
//     if(a>(c,b)){return a}
//     if(b>(a,c)){return b} 
//     if(c>(b,a)){return c} 
// }
// console.log(more(5,4,3))



// function buy(unitPrisce,amount){
//     if(unitPrisce===0){
//         return 'es nivti gekutvnit sachuqrad da esec tqveni '+amount+' lari'
//     }
//     if(unitPrisce>amount){
//         return 'tanxa sakmarisi ar aris'
//     }
//     let change=amount%unitPrisce;
//     if(change==0){  
//         let quantity=amount/unitPrisce
//         return 'tqven sheidzinet '+ quantity +' nivti'
// }
//     else{
//     amount=amount-change;
//     let quantity=amount/unitPrisce
//     return 'tqven sheidzinet ' + quantity + ' nivti da xurda gekutvnit '+ change +' lari'
// }
// }
// console.log(buy(2,1))
// console.log(buy(2,8))
// console.log(buy(2,9))
// console.log(buy(0,10))


// function hello(){
   
//     return 'hello world'
// }
// console.log(hello( ))

// function hello(name){
//     return 'hello '+name
// }
// console.log(hello('andria'))


// let num=0
// function addOne(){
//     num=num+1
//     return num
// }
// console.log(addOne())
// console.log(addOne())
// console.log(addOne())
// console.log(addOne())
// console.log(addOne())



// const person={
//     firstName:'andira',
//     age:19
// }
// person.birthday=17
// console.log(person.firstName);
// console.log(person.age)
// console.log(person)


// const arr=['andria','giorgi']
// console.log(arr)
// console.log(typeof person)
// console.log(typeof arr)
// console.log(typeof a)
// console.log(typeof num)
// console.log(typeof und)
// console.log(typeof nul)
// console.log(typeof bool)
// console.log(Arrey.isArray(person))


// let num=25;
// let firstName='doe'
// let x=num * firstName;
// console.log(x)
// console.log(typeof x)


// let str='it is my pc'


// let a=21;

// if(a>10){
//     console.log('from if '+a)
// }
// else if(a==11){
//     console.log('from else if '+a)
// }
// else{
//     console.log('from else '+a)
// }


// const cars=["saab", "volvo"]
// cars[2]="BMW"

// addToCars('opel')
// addToCars('ferari')
// console.log(cars[2])
// console.log(cars)

// function addToCars(a){
//     cars[3]=a
// }



// const cars=["saab", "volvo"]
// cars[2]="BMW"

// cars.push('opel')
// cars.push('ferari')
// cars.push('scania')
// cars.push('mersedec')

// cars.pop();
// cars.shift()
// console.log(cars[2])
// console.log(cars)





//  masivshi chamateba boloshi:
// Array.push('some  value');
//  masivshi chamateba tavshi:
// Array.unshift('some value');
//  masivshi amoshla boloshi
// Array.pop();
//  masivshi amoshla sawyisshi
// Array.shift()


// sheqmenit masivi shemdeg chaamatet 5 elementi boloshi xolo shemdeg 5 elementi tavshi  amoshalet 3 elementi bolodan da 3 elementi tavshi

// const names=["andria", "giorgi",]
// names.push('dachi')
// names.push('sandro')
// names.push('madina')
// names.push('luka')
// names.push('lela')
// console.log(names)
// names.pop()
// names.pop()
// names.pop()
// console.log(names)

// names.unshift('saba')
// names.unshift('nazi')
// names.unshift('gurami')
// names.unshift('nika')
// names.unshift('andro')
// console.log(names)
// names.shift()
// names.shift()
// names.shift()
// console.log(names)

// console.log(names)


// const numbers=["1", "2", "3", "4"]
// numbers.pop()
// numbers.shift()
// numbers.unshift('4')
// numbers.push('1')

// console.log(numbers)


// const numbers=["1", "2", "3", "4"]
// console.log(numbers)
// const first=numbers[0];
// console.log(first);
// const last=numbers[3];
// console.log(last);
// numbers[0]=last;
// numbers[3]=first;


// const numbers=["1", "2", "3", "4"]
// console.log(numbers.length)
// const first=numbers[0];
// const last=numbers[numbers.length-1];

// numbers[0]=last;
// numbers[numbers.length-1]=first;
// console.log(numbers)



// const numbers=["1", "2", "3", "4"]
// const lastindex=getlastindex(numbers)
// const first=numbers[0];
// const last=numbers[numbers.length-1];

// numbers[0]=last;
// numbers[numbers.length-1]=first;
// console.log(numbers)
// console.log(getlastindex(numbers))

// function getlastindex(a){
//     const lastindex=a.length -1
//     return lastindex
// }



// const numbers=["1", "2", "3", "4"]
// const lastindex=getlastindex(numbers)
// const first=numbers[0];
// const last=numbers[numbers.length-1];

// numbers[0]=last;
// numbers[numbers.length-1]=first;
// console.log(numbers)
// console.log(getlastindex(numbers))




// function getlastindex(a){
//     if(Array.isArray(a)){
//         const lastindex=a.length -1
//         return lastindex 
//     }
//     else if(Array.isArray=false  ){
//         return 'this in not array'
//     }
// }
// console.log(getlastindex(numbers))



// const numbers=["1", "2", "3", "4"]
// console.log(numbers.join('-'))




// const numbers=["member-1", "member-2", "member-3"]
// const numbers2=["1", "2", "3"]
// console.log(numbers.concat(numbers2))
// console.log([...numbers,...numbers2])




// const numbers=["1", "2", "3"];
// const numbers2=["4", "5", "6"];
// const numbers3=["7", "8", "9"];
// const fullArray=numbers.concat(numbers2,numbers3).join('-')
// // const fullArray=[...numbers,...numbers2,...numbers3].join('-')

// console.log(fullArray)


// const fruits = ["banana", "orange", "apple", "mango"];
// let removed = fruits.splice(2,2);

// console.log(fruits)
// console.log(removed)


// const fruits = ["banana", "orange", "apple", "mango", "orange2"];

// console.log(fruits)

// console.log(fruits.slice(2,4));
// console.log(fruits);

// function test(arr,start,quant){
//     const coppyArray=[...arr];
//     const result=coppyArray.splice(start,quant)
//     return result
// }

// console.log(test(fruits,2,2));
// console.log(fruits)


// const fruits = ["banana", "orange", "apple", "mango", "orange2"];

// console.log(fruits)

// console.log(fruits.slice(1,3));
// console.log(fruits.splice(1,4))

 
// const arr=[1,2,3,4,5,6,7,8,9];
// for(let i=0; i<arr.length; i++){
//     // arr[i]+=10
//     arr[i]=arr[i]+10;
// }
// console.log(arr)



// const arr=[1,2,3,4,5,6,7,8,9,10]
// const arr2=[]
// const arr3=[]
// for(let a=0; a<arr.length; a++){
//     if(arr[a]%2>0){
//         arr2.push(arr[a])
//     }
// }
// for(let a=0; a<arr.length; a++){
//     // arr[a]*=10;
//     if(arr[a]%2===0){
//         arr3.push(arr[a])
//     }
// }
// console.log(arr)
// console.log(arr2)
// console.log(arr3)


// const arr2=[1,2,3,4,5,6,7,8,9,10]
// function addNumber(start,arr2,end){
//     if(start<end){
//         addNumber[start]+=10;
//         start++;
//        addNumber(start,end,arr2)
//     }
    
// }
// addNumber(0,arr2.length,arr2)
// console.log(arr2)


// let a=6;
// let b=6;
// console.log(a==b);
// console.log(a!=b);

// let a=6;
// a>10?console.log('hello'):console.log("goodbye")



// let a=undefined;
// let b;
// if(a!=null){b=a;}
// else{b='hello'}
// console.log(b)


// var firstName= 'andria';
// var age= 19;

// console.log(fristName + ' ' +age);

// var job,isMarried;
// job='teacher';
// isMarried=false;
// console.log(firstName + ' is a ' + age + ' year old ' + job + ' . is he maried? ' +isMarried);




// let MarkMass, MarksBMI, MArksHight;
// let JohnMass,JohnBMI, JohnHight;

// MarkMass=85;
// MArksHight=1.9;
// MarksBMI=calcBMI(MarkMass,MArksHight)

// JohnMass=90;
// JohnHight=1.75;
// JohnBMI=calcBMI(JohnMass,JohnHight)

// let MarksBMIGrateJohn=MarksBMI>JohnBMI;


// function calcBMI(mass,height){
//     return mass/(height*height);
// }


// console.log("Mark's BMI is : " + MarksBMI)
// console.log("John BMI is : " + JohnBMI)
// console.log("is Mark's BMI higher than John? " + MarksBMIGrateJohn)




// let MarkMass, MarksBMI, MArksHight;
// let JohnMass,JohnBMI, JohnHight;

// MarkMass=85;
// MArksHight=1.9;
// MarksBMI=calcBMI(MarkMass,MArksHight)

// JohnMass=90;
// JohnHight=1.75;
// JohnBMI=calcBMI(JohnMass,JohnHight)

// let MarksBMIGrateJohn=MarksBMI>JohnBMI;


// function calcBMI(MarkMass,JohnMass){
//     if(JohnMass>MarkMass){
//         return 'jon daikeli 5kilo'
//     }
//     else(JohnMass<MarkMass)
//         return 'mshvenieri wonaa'
    
// }
// console.log(calcBMI())



// var firstName='andria';
// var age=19;
// if(age<13){
//     console.log(firstName + ' is aboy ');
// }
// else if(age>13 && age<20){
//     console.log(firstName + ' tenager ')
// }
// else{
//     console.log(firstName + ' man ')
// }




// let JohnTeamScore=[89,120,103]
// let MikeTeamScore=[116,94,123]
// let MaryTeamScore=[97,134,105]


// function sum(arr){
//     let res=0;
//     for(let i=0; i<arr.length; i++){
//         res+=arr[i]
//     }
//     return res;
// }

// function avarage(arr){
//     return sum(arr)/arr.length
// }

// let JohnAvarageScore=avarage(JohnTeamScore)
// let MikeAvarageScore=avarage(MikeTeamScore)

// if(JohnAvarageScore>MikeAvarageScore){
//     console.log('winner is John with ' + JohnAvarageScore + " score")
// }
// else if(MikeAvarageScore>JohnAvarageScore){
//     console.log('winner is Mike with ' + MikeAvarageScore + " score")
// }
// else{
//     console.log('game end with draw with ' + MikeAvarageScore + " score")
// }
// console.log(MikeAvarageScore,JohnAvarageScore)


// 1)
// let newyear=2024;
// function age(year){
//     let age=newyear-year;
//     return age;
// }

// console.log(age(2004))


// const today=2024;

// function calcAge(yearOfBirdth){
//     return today-yearOfBirdth
// }
// console.log(calcAge(2004))



// 2)
// const today=2024;

// function calcAge(yearOfBirdth){
//     return today-yearOfBirdth
// }
// function calcRetires(name,yearsOfBirdth){
//     const age=calcAge(yearsOfBirdth)
//     if(age<60){
//         let retires=60-age;
//         return `${name} is ${age}  years old he will be retires in ${retires} years`
//     }
//     else{
//         return `${name} is ${age} years old and he is retires`
//     }
// }
// console.log(calcRetires('andria',2004))


 // 3)
// function person(name,profession){
//     if(profession=='teacher'){
//         return `${name} teaches children sports`
//     }
//     else if(profession=='driver'){
//         return `${name} driver bus`
//     }
//     else if(profession=='designer'){
//         return `${name} create design for web-page`
//     }
//     else{
//         return `${name} unknow profession`
//     }

// }
// console.log(person('dato','teacher'))
// console.log(person('zviadi','driver'))
// console.log(person('andria','designer'))
// console.log(person('unknow'))



// const arr=[1,2,3,4,5,6,7,8,,9,10,11,12,13];
// const odd=arr.filter((items)=>items%2===0)
// console.log(odd)

// for(let i=0; i<arr.length; i++){
    
// }

// const arr1=["Banana", "Orange", "Apple","Mango", "Apple"];
// const person={
//     // firstName:'beqa',
//     firstName:{nikName:'adda',secondName:'24588'},
//     lastName:'eqse',
//     age:40
// }
// console.log(person.fullName)


  
// const numbersArr=[1,2,3,4,5];
// for(let i=0 ; i<numbersArr.length; i++){
//     numbersArr[i]+=10
// }
// console.log(numbersArr)


// for(let el of numbersArr){
//     el+=10
//     console.log(el)
//     console.log('***********************')
// }

// console.log(numbersArr)


// for(let el in numbersArr){
//     console.log(el)
// }


// const arr1=["Banana", "Orange", "Apple","Mango", "Apple"];
// arr1.forEach((item)=>console.log(item));
// const filteredArray=arr1.filter((item)=>{return item.length>4});
// console.log('filterredArray: ', filteredArray);
// const index=arr1.indexOf((item)=>{return item.length<4});
// const index=arr1.indexOf((item)=>{return item.length==3});
// console.log(index)



// const arr= ['banani','avikado','msxali']
// arr.forEach((item)=>console.log(item));

// 1)
// const person={
//     firstName:'john',
//     lstName:'Doe',
//     age:35,
//     isMarried:true
//  }
//  function getKyes()
//  const keys=Object.keys(person)

// console.log(keys)

// 2)
// const person={
//     firstName:'john',
//     lstName:'Doe',
//     age:35,
//     isMarried:true
// }
// const values=Object.values(person)
// console.log(values)


// 3)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const includes=fruits.includes("kiwi")
// console.log(includes)

// 4)
// const fruits2 = ["Banana", "Orange", 'kiwi', "Apple", 'kiwi',"Mango"];
// const includes=fruits2.includes("kiwi")
// function getQuantity(arr,value){
//     let res=0
//     for(let item of arr){
//     if(item){
    
//     }

//     }
// }
// console.log(includes)

// let a=10;
// let b=20;
// let c=sum(a,b)
// function sum(a,b){
//         return  a+b
// }
// console.log(c)


// const arr=[1,2,3,4,5,6,7]

// function test(item,index,paramsArray){
    // console.log('item: ', item)
    // console.log('index: ',index)
    // console.log('parmasArray:' , paramsArray)
    // console.log('***************************')
//     return item+30;
// }
// const mapped=arr.map(element => element + 30);
// console.log(mapped);
// console.log(arr) 

// 1)
// const input=[1,2,3,4,5];
// function andria(square){
//     return input.map(item => item ** (square))
// }
// console.log(andria(2))


// 2)
// const arr = [1, -4, 12, 0, -3, 29, -150];
// const filtered =arr.filter(element => element === 1 || element === 12 || element=== 29);
// const reduced=filtered.reduce((total,current) => total + current);
// console.log(reduced);




// const arrowFn=()=>{}
// arrowFn()
// normalFn()
// function normalFn(){}


// console.log(this)
 


// const arr=[1,2,3,4]
// const test=arr.reduce((a,b)=>{
//   console.log(' start interation ')
//   console.log('a: ',a)
//   console.log('b: ',b)
//   console.log(' end interation ')
//   a['key'+b]=b;
//   return a
// },{})
// console.log(test)



// const products = [
//   { name: "Product 1", price: 20, category: "Electronics" },
//   { name: "Product 2", price: 30, category: "Clothes" },
//   { name: "Product 3", price: 40, category: "Electronics" },
//   { name: "Product 4", price: 50, category: "Clothes" },
//   { name: "Product 5", price: 60, category: "Clothes" },
//   { name: "Product 6", price: 70, category: "Electronics" },
//   { name: "Product 7", price: 80, category: "Clothes" },
//   { name: "Product 8", price: 90, category: "Electronics" },
// ];

// const res=products.reduce((acum,item)=>{
//   let key=item.category;
//   if(acum[key]){
//     acum[key].push(item.price)
//     return acum
//   }
//   else{
//     acum[key]=[item.price]
//     // 1-iter: acum-->> {Electronics:[20]}
//     // 2-iter: acum-->> {Electronic:[20,40],Clothes:[30],food:[40]}
//     return acum
//   }

// },{})
// console.log(res)


// const employees = [
//   { name: "John", salary: 50000, department: "IT" },
//   { name: "Jane", salary: 60000, department: "HR" },
//   { name: "Bob", salary: 55000, department: "IT" },
//   { name: "Sophie", salary: 75000, department: "HR" },
//   { name: "Mike", salary: 65000, department: "IT" },
//   { name: "Emily", salary: 80000, department: "HR" },
//   { name: "David", salary: 70000, department: "IT" },
// ];
// const res=employees.reduce((acum,item)=>{
//   let key=item.department;
//   if(acum[key]){
//     acum[key].push(item.salary)
//     return acum
//   }
//   else{
//    acum[key]=[item.salary] 
//     // 1-iter: acum-->> {IT:[20]}
//     // 2-iter: acum-->> {IT:[20,40],HR:[30]}
//    return acum
//   }
// },{})
// console.log(res)





// const myArray=[1,2,3,4,1,6,8,4,9,78,12]
// const uniqueArray=[]
// function getUniqueArray(arr){
//     if(arr.length){
//         let item=arr[0];
//         let lastIndex=arr.lastIndexOf(item);
//         lastIndex===0?uniqueArray.push(arr.splice(0,1)[0]):arr.splice(0,1);
//         getUniqueArray(arr)
//     }
// }

// getUniqueArray(myArray)


// console.log(uniqueArray)




// const myArray=[1,2,3,4,1,6,8,4,9,78,12];
// function getUnique(arr){return arr.reduce((a,b)=>a.includes(b)?a:[...a,b],[])}
// console.log(getUnique(myArray))



// const num=2.533333.toFixed(2)
// console.log(num)

// const arr=['a', 'b', 'c'];
// const iterator1 = arr.enteries();
// for(let item of iterator1){
//     console.log(item)   
// }


// const bill=[100,48,200]
// const pit=[10,15,20]

// function calculation(billamount){
//     if(billamount < 50){
//         return '10%'
//     }
//     else if(50 <= billamount <= 200){
//         return '15%'
//     }
//     else{
//         return '20%'
//     }
// }


// const weight=document.querySelector('#weight');
// const height=document.querySelector('#height');
// const btn=document.querySelector('.btn');
// const resultContainer=document.querySelector('#result')
// // BMI=KG/height*height meter
// btn.addEventListener('click',()=>{
//    const kg=weight.value;
//    const meter=height.value/100;
//    const BMI=Math.round(kg/meter**2);
//    resultContainer.innerHTML=`your BMI is ${BMI}`
// //    window.alert('you must fill weight and height')
// })





// const btnAdd=document.querySelector('.btn-add');
// const input=document.querySelector('input');
// const list=document.querySelector('.to-do-list');
// const edit=document.querySelector('.btn-edit');
// const select=document.querySelector('select')
// let myToDos=[];
// let editJobId=''
// let jobisActive=null;

// //ვუსმენთ სელეცტის ცვლილებას;
// select.addEventListener('change',(e)=>{
//    jobisActive=e.target.value;   
// })
// // ევენთ ლისენერი ახალი ჯობის შექმნისთვის ან შეცვილსთვის მთავარი
// // ღილაკისთვის;
// btnAdd.addEventListener('click',(e)=>{
//    e.preventDefault();
//    const value=input.value.trim();
//    if(value=='') return;  
//    editJobId?addNew(value,editJobId,jobisActive):addNew(value);
//    reset();
// });


// function addNew(jobTitle,jobId=null,jobStaus=null){
  
//    const item={
//       id:jobId ?? Math.random().toFixed(4).slice(2),
//       title:jobTitle,
//       isActive:jobStaus ?? true
//    }
//    console.log(item)
//    if(!jobId){
//       myToDos.push(item)
//    }
//    else{
//      const toDos=myToDos.filter(e=>e.id!==jobId);
//      myToDos=[...toDos];
//      myToDos.push(item);

//    }
//    renderToDos();
// };


// function renderToDos(){
//    list.innerHTML='';
//    for(let todo of myToDos){
//       list.innerHTML+=`
//             <tr>
//                      <td>${todo.id}</td>
//                      <td>${todo.title}</td>
//                      <td>${todo.isActive.toString()=='true'?'Active':'Completed'}</td>
//                      <td>
//                      <button jobId=${todo.id} class="btn-delete">delete</button>
//                      <button jobId=${todo.id} class="btn-edit">edit</button>
//                      </td>
//             </tr>
//          `
//       }
//       // დააყენებს ევენთ ლისენერებს წაშლის და ედიტის ღილაკებზე;
//       seteventListeners();
//       setdeletelis();
// }

// function seteventListeners(){
//    const btns=Array.from(document.querySelectorAll('.btn-edit'));
//    for(let btn of btns){
//       btn.addEventListener('click',(e)=>{
//          const jobId=e.target.attributes.jobId.value;
//          const job=myToDos.find(el=>el.id==jobId);
//          btnAdd.innerText='edit Job';
//          select.classList.add('active');
//          input.value=job.title;
//          editJobId=jobId;       

//       })
//    }
// };

// function setdeletelis(){
//    const btns=Array.from(document.querySelectorAll('.btn-delete'));
//    for(let btn of btns){
//       btn.addEventListener('click',(e)=>{
//          const jobId=e.target.attributes.jobId.value;
//         const toDos=myToDos.filter(e=>e.id!==jobId);
//          myToDos=[...toDos];
//          renderToDos();
//       })
//    }
// };

// function reset(){
//    editJobId='';
//    jobisActive=null;
//    input.value='';
//    btnAdd.innerText='add new'; 
//    select.classList.remove('active');
// }


localStorage.setItem('user-1','andria')
localStorage.setItem('user-2','sandro')
localStorage.setItem('user-3','giorgi')

const users=[];
const tBody=document.querySelector('tBody')
const form=document.querySelector('form');


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let formData = new FormData (form);
    const user=Object.fromEntries(formData)
    //output as an object
    user.id=idGenerator();
    user.push(user);
    console.log(users);
    form.reset();

    // console.log(object.fromEventries(formData));
    //...or iterate through the name-value pairs
    // for (var pair of formData.entries()){
    //     console.log(pair[0] + ": " + pair[1]);
    // }
});

function idGenerator(){
    return Math.random().toFixed(4).slice(2)
}
function renderUsers(arr){
    arr.array.forEach(user =>{
        tBody.innerHTML+=`
        <tr>
        <th>${user.id}</th>
        <th>${user.fName}</th>
        <th>${user.lName}</th>
        <th>${user.email}</th>
        <th>${user.phone}</th>
        <th>${user.addres}</th>
        <td class="d-flex">  <img class="col-7" src="./photo/5996831.png" alt="">
        <img class="col-6" src="./photo/delete-181.png" alt=""></td>
      </tr>
    
        `
    })
}

const arr=[1,2,3,4,5]
const obj={
    name: 'beqa',
    age: 10
};
const objString=JSON.stringify(obj)

localStorage.setItem('myArray',arr);
localStorage.setItem('person',obj);

const objformStorage=JSON.parse(localStorage.getItem('person'));
console.log(objformStorage)