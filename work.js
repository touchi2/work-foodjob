// document.querySelectorAll('.blt').forEach((item)=>{item.addEventListener('click',()=>{alert('google')})});

// const table='chair'
// const food='rice'
// console.log(table,food)

// document.write('hello javascrte')
// console.log('hello javascrte')

// let house='good house'
// console.log(house)

// function gold(silver){
// const name='television man'
// console.log('man of the house')
// console.log('god is good')
// console.log('man of' + silver)
// }
// gold('love you')

// function green(myvalue){
//     const best = 'my phone'
// }

//  green('show me')
// // arrry
// const select=['red one','white one','green one']
// console.log(select)
// console.log(select[2])

// // object
// const object ={
//     name:'femi of milano',
//     age:'26',
//     location:'roma',
// }
// console.log(object.name)

// const varible = "femi"
// const age = 26
// if(varible === "femi" ){
//     console.log('my good work')
// }
// else{
//     console.log('big plan tech')
// }

// let name = 'shola'
// let ages = 28
// if(!name == 28 ){
//     console.log('yes it is')
// }
// else{
//     console.log('i love you')
// }

// const work = 'developer'
// const site = 'facebook'
// const job = `${work}  ${site}`
// console.log(job)

// const love =[
//     { name: 'godwin', age: 26, position:'engineer', location:'roma', salary:'300'},
//     { name:'joes', ages: 28, position:'doctor', location:'milano', salary:'200'},
//     { name:'ife',age: 30, position:'sport', location:'germany', salary:'500'},

// console.log(love[2]);
// console.log(love.age);
// function works(stand) {
//   console.log(`${stand}`);
//   return;
// }
// works("this my job");

// ];
// function people(water){
//     console.log(water.name)
// }
// love.forEach(people)

// love.forEach(function(items){
//     console.log(items.salary)
// })

// const person = love.map(function(each){
//     console.log(each)
//     return`<h1>${each.name} ${each.salary}</h1>`
// })
// console.log(person)
// document.body.innerHTML = person.join(' ')

// const perche = love.find(function(una){
//     return una.age === 26
// })
// console.log(perche)

// const houses = love.filter(function(bian){
//     return bian.ages <= 28
// })
// console.log(houses)

// const type = love.reduce(function(acc,accountitem){
//     console.log(`type amount ${acc}`);
//     console.log(`account item ${accountitem.salary}`);
//     acc += accountitem.salary;
//     return acc

// },100)

// document.body.style.backgroundColor = 'orange'
// // document.style.color = 'green'

// const dou = document.getElementById("name");
// dou.style.background = "green";

// const pull = document.querySelector(".word");
// pull.style.color = "blue";
// pull.style.background = "red";

// const water = document.querySelectorAll(".special");
// water.forEach(function (item) {
//   item.style.background = "orange";
// });

// const google = document.querySelector(".item");
// google.classList.add("color", "text");

// const element = document.querySelector(".result");
// const push = document.createElement("h2");
// const text = document.createTextNode(
//   "the reworld of being a developer it beautiful"
// );
// push.appendChild(text);
// document.body.appendChild(push);

// const book = document.querySelector(".qua");
// console.log(book.innerhtml);
// console.log(book.textContent);

// const level = document.createElement("first");
// level.innerHTML =
//   "the word of tech is a sweet word join tech have alot of aventage in tis word";
// document.body.appendChild(level);

// level.textContent = "being a developer is the beautiful";

// const bless = document.querySelector(".heading");
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", function () {
//   bless.classList.add("green");
// });

// //    function reference

// const veni = document.querySelector(".have");
// const si = document.querySelector(".click");
// function success() {
//   const always = veni.classList.contains("blue");
//   if (always) {
//     veni.classList.remove("blue");
//   } else {
//     veni.classList.add("blue");
//   }
// }
// si.addEventListener("click", success);

// const gold = document.querySelector(".admin");
// const buro = document.querySelector(".phone");
// gold.addEventListener("click", function (e) {
//   console.log(e.target);
//   e.currentTarget.style.color = "yellow";
//   e.target.style.color = "brown";
// });

// const teethpike = document.querySelectorAll('.btn')
// teethpike.forEach(function(items){
// items.addEventListener('click',function(e){
//   // console.log(e.currentTarget)
//   e.currentTarget.style.color = 'red'
// })
// })

// // declear variables

// const been = {
//   firstname :'johnson',
//   lastname : 'benson',
//   jointo(){
//     console.log(`the fullname is ${this.firstname}${this.lastname}`)
//   }
// }
// been.jointo()

// function colder(topboy){
// console.log(`that is stuff ${topboy}`)
// }
// colder('entertaining')

// // factory function

// function promise(firstname,lastname){
//   return{
//     firstname,
//     lastname,
//     fullname:function(){
//       console.log(`bright and ${this.firstname} ${this.lastname}`)
//     }
//   }
// }
// const looking = promise('light shinelight')
// looking.fullname()
// console.log(looking)

// // const umdey = 'umdey'
// // const later = 'man'
// // console.log(...umdey)

//   // constractor
// function mypeople(firstname, lastname){
//   this.firstname = firstname,
//   this.lastname = lastname,
//   this.fullname = function(){
//     console.log(`this my house  ${this.firstname} ${this.lastname}`)
//   }
//   console.log(this)

// }
// const phone = new mypeople('mango, friut, orange')
// phone.fullname()
// console.log(phone)

//          // arrrow function
//          const arrow = () =>console.log('long job don')
//          arrow()

//   function regular(){
//     console.log('power of truth')
//   }
//   regular()

//   const coded = para => para
//   const power = coded('refreance to power work')
//   console.log(power)

// // spread opertor

// const umdey = 'umdey'
// const later = [...umdey]
// console.log(later )

// const arry = ['mango','orange','apple','banana']
// const friut = [...arry]
// console.log(friut)

// const banana = ['bananas','beans','egg','rice']
// const boys = ['rita','rute','elephant']
// const girls = ['merit','rowke','precious']
// const man = [...banana,...boys,...girls]
// console.log(man)

// // rest operator

// const myman = ['one','two','three','four']
// const [two,long,...rest] = myman
// console.log(two,long,rest)

// // object operator

// const person = {
// name: 'john',
// age: 34,
// job: 'deveper',
// conutrys: 'canada',
// state: 'toroto',
// status: 'single'

// }
// const {job,state,...restx} =person
// console.log(job,state,restx)

// closure

// function outer(){
//   const java = 'peoples jobs'
//   function inner(){
//     // const bags = 'loading bags'
//     // console.log(bags)
//     console.log(`this is the power ${java}`)
//   }
//   return inner
//   // inner()
// }
// outer()
// const value = outer()
// console.log(value)
// value()

// function plans() {
//   const great = "the music man";
//   function liquid() {
//     const bear = "market and structure work";
//     console.log(`buy and sell in market ${bear}, ${great}`);
//   }
//   return liquid();
// }
// const charge = plans();
// console.log(charge);
// plans();

// // for loop
// // let = [1,2,3,4,5]

// let logos;
// for (logos = 0; logos < 10; logos++) {
//   console.log(`number of logos ${logos}`);
// }

// const list = [1, 2, 3, 4, 5];

// let i;
// for (i = 0; i < 10; i++) {
//   console.log(`hello peope ${i}`);
// }

// let amount = 20;
// while (amount < 0) {
//   console.log(`great amount ${amount}`);
// }

// // JSON.parse

// const object = { name: "isreal", age: 27, country: "italy" };
// const next = JSON.parse(object);
// console.log(next);

// const boo = {
//   name: "mark",
//   age: 20,
//   city: "roma",
//   job: "developer",
// };
// console.log(boo);

// const url = 'https://reqres.in/api/users/'
// const response = fetch(url)
// console.log(response)
// const mybaby = document.querySelector('.btn')
// mybaby.addEventListener('click', async () =>{
//     const response = await fetch(url)
//     const data = await response.json()
//     displayitem(data)
// })

// function displayitem(item){
//     const displaydata = item.map((item)=>{
//         const{name,age}= item
//         return`<p>${name} ${age}</p>`
//     }).join('')
//     const element = document.createElement('div')
//     element.innerHTML.displaydatah
//     document.body.appendChild(element)

// }

// synchoronice
// console.log('number one')
// console.log('number two')
// flybrid(1000)

// function flybrid(){
//     console('the flying bird')
//     if (let i=0; i < 1000; i++){
//         console.log('all right')

//     }
// }

// flybrid(1000)
// console.log('number one')
// console.log('number two')
// console.log('number three')

// function flybrid(time){
//     console.log('the flying number')
//     setTimeout(()=>{
//         console.log('all right')
//     },time)
// }


// const urls = 'https://icanhazdadjoke.com'
// const myfled = fetch(urls)
// console.log(myfled)

 
//  const url = " https://spoonacular.com/food-api";
//  const foods = fetch(url)
//  console.log(foods)

const x = document.getElementById("loginbtn");
const y = document.getElementById("registerbtn");
const a = document.getElementById("login");
const b = document.getElementById("register");

function login(){
    x.style.left = "4px";
    y.style.right = "-520px";
}

function register(){
    x.style.left = "-510px"
    y.style.right = "5PX"
}









