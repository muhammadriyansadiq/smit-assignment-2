// 1. Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.

// function name(adf){
//    return function(lot){
//     console.log(adf + lot);
//    }
// }
// let x = name(5);
// x(5);

// 2.Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.


// let v = [1,2,3,5,7]
// let r = v.filter(function(a){
//     if (a ===5){
//         return true;
//      }
//      else{
//          return false;
//      }

// })
// console.log(r);




// 3)
// let x = document.querySelector("div");

// x.innerText = "<p>WELCOME TO NEW WORLD</p>";
// console.log(x);





// 4)
// let newlistitem = document.getElementById("Fruits");
// setInterval(function(){
//    newlistitem.innerHTML = "<li>Mango</li>";
// //  console.log("hello world");
// },1000);



// 5)
// let x = document.getElementById("my-para");
// x.innerHTML = "<b>Pakistan are you Ready</b>"
// setInterval(function(){
// let z = Math.round(Math.random() * 1000)
// let y = Math.round(Math.random() * 100000)
// x.style.background = "#"+ z;
// x.style.color = "#" + y;
// },500);


// 6)
// let studentsrecord = [];
// function logo(){
//     let y= {
//        name: prompt("enter name here"),
//     rollnumber: +prompt("enter your roll number here"),
//     discipline: prompt("enter your discipline"),
// };
// studentsrecord.push(y);
// console.log(studentsrecord);
// let z = JSON.stringify(studentsrecord);
// localStorage.setItem("studentsrecord",z);
// }

// 7)
// let record = localStorage.getItem("studentsrecord");
//  let studentsrecord = record ? JSON.parse("record") : [];
//  function logo(){
//      let y= {
//         name: prompt("enter name here"),
//      rollnumber: +prompt("enter your roll number here"),
//      discipline: prompt("enter your discipline"),
//  };
//  studentsrecord.push(y);
//  console.log(studentsrecord);
//  let z = JSON.stringify(studentsrecord);
//  localStorage.setItem("studentsrecord",z);
//  }


// 8)
// let z =[];
// function logo(){
//     let y ={
//         name:prompt("enter name");
//     }
//     z.push(y);
//     console.log(z);
// }
// localStorage.setItem("name","riyan");