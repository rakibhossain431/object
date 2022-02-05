// let x = 5;
// let y = 5;
// let z = 6;


// console.log( (x==y));
// console.log( (x==z));

// const cars =["rakib","hassain"]
// console.log(cars[1]);

// const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

// console.log(person.firstName + " prebareat color is " +person.eyeColor);


//  let n = 5;
//  let m = 5;
//  let a = 5;
//  let d = 5;

//  console.log(typeof n);
//  console.log(typeof m);
//  console.log(typeof a);
//  console.log(typeof d);


//  function slecp(){
//      console.log('josim "is" good boy');
//  }
//  slecp();
//  console.log("My name is rakib");


// function sleeping(names,time){
//     console.log(names + "Rakib is good boy" + "He sleeping at " + time);
// }

// sleeping("korim","10pm");

// sleeping("rohim","12pm");

// function rakib(name,old){
//     console.log(name + " is good boy. he is "+ old + " old.")
// }

//  rakib("rakib",24);


//  return type valu;

// function rakib(name, old){
    
//     return "rakib", 25;
// }
//   const z = rakib();

// console.log(z);
// function squared(num) {
//     return num * num;
//   }
  
//   function cubed(num) {
//       return num * num * num;
//     }
//     const z = squared(4);
//     const x = cubed(5);
//     console.log(x);
//     console.log(z);
  
//   function factorial(num) {
//     if (num < 0) return undefined;
//     if (num == 0) return 1;
//     let x = num - 1;
//     while (x > 1) {
//       num *= x;
//       x--;
//     }
//     return num;
//   }
//   const x = factorial(5);
//   console.log(x);

// function toCelsius(fahrenheit){
    
//     return (5/6) * (fahrenheit-32);
// }
// document.getElementById("demo").innerHTML = toCelsius(77);
//  let num = "rakib";
// function rakib(){
//     let num = "Hello";
//     console.log(num);
// }
// rakib();

// console.log(num);


// const car = {firstName:"Rakib", lestName:"Hossain"}

// console.log(car.firstName + " "+ car.lestName +" is good boy");


// const car = {
//     firstNmae : "rakib",
//     lastName : "hasan",

//     fullName : function(){
//         return this.firstNmae+ " "+ this.lastName;
//     }
// };


// const car = {
//     nam : "bmw",
//     weight : "512kg",

//     start : function(){
//         console.log("this car is start ")
//     }
// }
// console.log(car.nam)
// car.start();

// const student1 = {
//     names : "rakib",
//     age : 24,
//     result :4.31,
//     languase : ["Bangla","Hindi","English"]
// }
// console.log(student1.names)
// console.log(student1.age)
// console.log(student1.result)
// console.log(student1.languase)

function Student(name,age,lang,result){
    this.name=name;
    this.age=age;
    this.lang=lang;
    this.result=result;
    this.display = function(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.result);

    }
}

const student1 = new Student("rakib",24,4.31,["Bangla,English,arbi,Hindi"]);
const student2 = new Student("rony",24,4.31,["Bangla,English,arbi,Hindi"]);
const student3= new Student("rajib",24,4.31,["Bangla,English,arbi,Hindi"]);
student1.display();
student2.display();
student3.display();