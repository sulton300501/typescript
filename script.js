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
function logger(a) {
    if (typeof (a) == "string") {
        console.log(a.toLowerCase());
    }
    else if (typeof (a) == "number") {
        console.log(a.toFixed());
    }
}
var number = [1, 2, 3, 4, 5];
var logCar = function (car) {
    return "Name of car -".concat(car.name, " ").concat(car.kocha);
};
console.log(logCar({ name: "qaleysan", age: 22, salary: "kim", kocha: 34 }));
