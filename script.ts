// const firstName:string = "sulton";

// let lastName:string = "sultonmalik"
// lastName="sanjar"

// const x:number=1

// const d:boolean = firstName+x;

// const nameIs:boolean = true;

// console.log(d)


// const  nullVal:null = null;
// const und:undefined=undefined;

// const colors:string[] = ['red','black','white']
// const number:number[]=[1,2,3,4,5]

// // tavsiya berilmiydi xolagan tipga o'zgartirsa boladi...
// let smth:any=1;
// smth='salom'

// smth={
//     name:"salom",
//     kim:"jakal"
// }


// console.log(smth)





// function logger(a:number):string{
//     return `${a+2}`
// }


// function logger(a:number):string|number{
//     return "salom"
// }

// function logger(a:number|string):void{
//     if(typeof(a)=="string"){
//         console.log(a.toLowerCase())
//     }else if(typeof(a)=="number"){
//         console.log(a.toFixed())
//     }
// }

// const number:number[]=[1,2,3,4,5]

// type CarType ={
//     name:string,
//     age:number
// }

// number.map((num:number)=>console.log(num.toFixed()))

// const logCar = (car:CarType):string=>{
// return `Name of car -${car.name}`
// }


// console.log(logCar({name:"BMW",age:22}))



// type stringOrnumber ={
//     name:string;
//     age:number;
// }

// number.map((num:number)=>console.log(num.toFixed()))

// function log(a:stringOrnumber,b:stringOrnumber):void{
//     console.log(a.name+" "+a.age+b.age+" "+b.name)
// }

// log({name:"salom",age:12},{name:"lala",age:33});


// interface ICar{
//     name:string;
//     age:number;
// }

// interface IBMW extends ICar {
//     salary?:string;
//     kocha?:number;
// }


// const logCar = (car:IBMW):string=>{
// return `Name of car -${car.name} ${car.kocha}`
// }


// console.log(logCar({name:"qaleysan",age:22}))





// type BmwCar = {
//     name:string;
//     age:number;
// }

// type Moshina = BmwCar &{
//     ism?:string;
//     kalla?:number
// }



// const logCar = (car:Moshina):string=>{
// return `Name of car -${car.name} ${car.kalla}`
// }


// console.log(logCar({name:"qaleysan",age:22}))






// interface Point {
//     x:number;
//     y:number;
// }

// interface I3OPoint extends Point{
//     z:number
// }

// function logPoint(point:Point):void{
//     const d3:I3OPoint = point as I3OPoint
//     console.log()
// }