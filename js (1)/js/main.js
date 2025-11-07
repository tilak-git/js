// console.log(this);

// if (true) {
//   let a = 4;
//   var b = 5;
// }

// let a = "12" - 2;
// console.log(a);
// console.log(typeof a);

// const promises = new Promise(function(resolve, reject) {
//   resolvePromise = resolve;
// });
// console.log("state first", promises);

// function myFun() {
//   resolvePromise("tilak");

//   promises.then(val => {
//     console.log("state last", promises, val);
//   });
// }

// async function myFunc() {
//   // const ress = await promises;
//   // return ress;
//   return "hello";
// }

// const res = myFunc();
// res.then(res => console.log(res));
// console.log(res.then(res => console.log(res)));

// let x = 10;
// let x;
// function foo() {
//   console.log("x", x);
//   x = 20;
// }

// foo();

// foo();
// var foo = 20;

// function foo() {
//   console.log("calling foo");
// }

// foo();

// Intit
// foo = 20;

// Exe
// foo();
// foo();

// for (var a = 1; a <= 3; a++) {
//   function t(a) {
//     setTimeout(function() {
//       console.log(a);
//     }, 1000);
//   }
//   t(a);
// }

// async function foo() {
//   return "Hello, world!";
// }

// (async function bar() {
//   let res = await foo();
//   console.log(res);
// })();

// let a = [1];
// let b = [1];

// console.log(a === b);

// const users1 = {
//   name: "foo",
//   address: {
//     town: "abc",
//     pin: "xyz"
//   }
// };

// const users2 = JSON.parse(JSON.stringify(users1));

// users2.name = "eee";
// users2.address.town = "fff";

// console.log("u2", users2);
// console.log(users1);

//circle start below
// const arr1 = [1, 2];
// arr1[0] = 3;

// console.log(arr1);

// const arr = [];

// function isIntersecting() {
//   const x1 = arr[0].x;
//   const x2 = arr[1].x;
//   const y1 = arr[0].y;
//   const y2 = arr[1].y;
//   const r1 = arr[0].r;
//   const r2 = arr[1].r;

//   const X = x2 - x1;
//   const Y = y2 - y1;

//   const distanceBetweenCircs = Math.sqrt(X * X + Y * Y);

//   const totalRadius = r1 + r2;

//   console.log(
//     "distanceBetweenCircs",
//     distanceBetweenCircs,
//     "totalRadius",
//     totalRadius
//   );

//   let r3;
//   let r4;
//   if (r1 < r2) {
//     r3 = r1;
//     r4 = r2;
//   } else {
//     r3 = r2;
//     r4 = r1;
//   }

//   if (distanceBetweenCircs + r3 < r4) {
//     return false;
//   } else {
//     return totalRadius > distanceBetweenCircs ? true : false;
//   }
// }

// document.addEventListener("click", e => {
//   const numberOfCirc = document.querySelectorAll(".circle");
//   const numberOfCirc2 = document.querySelectorAll(".inter");

//   //   console.log(numberOfCirc.length);

//   if (numberOfCirc.length === 2) {
//     document.body.removeChild(numberOfCirc[0]);
//     document.body.removeChild(numberOfCirc[1]);
//     arr.shift();
//     arr.shift();
//     document.body.removeChild(numberOfCirc2[0]);
//     return;
//   }

//   const clientX = e.clientX;
//   const clientY = e.clientY;

//   //   console.log("x", clientX, "y", clientY);

//   const radius = Math.random() * (200 - 50) + 50;

//   arr.push({ x: clientX, y: clientY, r: radius });
//   //   console.log("arr", arr);

//   const circle = document.createElement("div");
//   circle.classList.add("circle");
//   circle.style.left = clientX - radius + "px";
//   circle.style.top = clientY - radius + "px";
//   circle.style.width = radius * 2 + "px";
//   circle.style.height = radius * 2 + "px";

//   document.body.appendChild(circle);

//   if (arr.length == 2) {
//     const res = isIntersecting();
//     console.log("is inter", res);
//     const pp = document.createElement("p");
//     pp.classList.add("inter");
//     if (res == true) {
//       pp.innerText = "true";
//     } else {
//       pp.innerText = "flase";
//     }
//     document.body.appendChild(pp);
//   }
// });

//circle end

//function chain

// function countValue() {
//   let result = 0;

//   let obj = {
//     lacs: function(index) {
//       result += index * 100000;
//       return obj;
//     },
//     crore: function(index) {
//       result += index * 10000000;
//       return obj;
//     },
//     value: function() {
//       return result;
//     }
//   };

//   return obj;
// }

// // Test the function
// console.log(countValue().lacs(5).value());

// {
//   var a = 1;
//   let b = 2;

//   console.log("a", a);
//   console.log("b", b);
// }

// var a = 3;
// console.log("a2", a);
// console.log("b2", b);

// var a = 1;

// function foo() {
//   let a = 2;
//   console.log(a);
// }

// foo();

// function outer() {
//   function inner2() {
//     console.log(x);
//   }
//   var x = 6;
//   return inner2;
// }

// var inner = outer();
// console.log(inner);
// console.log(outer());

// block thread for 2 seocnd
// let result = 0;
// const maxIterations = 1000000000;
// const startTime = Date.now();
// console.log("start time: ", startTime);
// const duration = 2000; // 2 seconds

// for (let i = 0; i < 1000000000000; i++) {
//   if (Date.now() - startTime > duration) {
//     break;
//   }
//   result = result + i;
// }

// console.log(result, Date.now() - startTime);

//arr
// const arr = [1, 2, 3];
// arr[4] = 5;
// console.log(arr);

// const { 4: a } = [10, 20, 30, 40, 50];
// // const a = arr2[0];
// // const b = arr2[55];
// console.log(a);

// function abc() {
//   // const obj = {
//   //   valsz: function() {
//   //     return 277;
//   //   }
//   // };
//   // return obj;
//   this.name = "abc";
// }

// let val = new abc();
// console.log(val);

// abc.prototype.getname = function() {};

//digital clock
// function getTime() {
//   let now = new Date();
//   let curr = now.toLocaleTimeString();
//   console.log(curr);
//   document.getElementById("time").innerHTML = curr;
// }

// setInterval(() => {
//   getTime();
// }, 1000);

// let a;
// console.log(name);
// var name = "ee";
// a = 5;

//Follow circle on mouse move
// window.addEventListener("click", e => {
//   let clientX = e.clientX;
//   let clientY = e.clientY;

//   let radius = 66;

//   const circles = document.querySelectorAll(".circle");
//   if (circles.length <= 0) {
//     const circle = document.createElement("div");
//     circle.classList.add("circle");
//     circle.style.left = clientX - radius + "px";
//     circle.style.top = clientY - radius + "px";
//     circle.style.width = radius * 2 + "px";
//     circle.style.height = radius * 2 + "px";

//     document.body.appendChild(circle);
//   }
// });

// window.addEventListener("mousemove", e => {
//   const circles = document.querySelectorAll(".circle");
//   circles.forEach(circle => {
//     let radius = parseInt(circle.style.width) / 2;

//     // Check scrolling direction
//     let offsetX = e.clientX - prevX;
//     if (offsetX > 0) {
//       // Scrolling right
//       circle.style.left = e.clientX - radius * 3 + "px";
//     } else if (offsetX < 0) {
//       // Scrolling left
//       circle.style.left = e.clientX + radius + "px";
//     }

//     circle.style.top = e.clientY - radius + "px";
//   });

//   prevX = e.clientX;
// });

//chnage value on click of arr
// const arr = [];
// function myFunc() {
//   const h11 = document.getElementById("myy");
//   const val = h11.textContent;
//   const ind = arr.findIndex(item => item == val);
//   console.log("ind: ", ind);
//   h11.innerText = arr[ind + 1];
// }

//Memozie to stor param and results in map
// const map = new Map();

// function memozieOne(fn) {
//   return (...args) => {
//     console.log("args: ", args);

//     const key = JSON.stringify(args);

//     if (map.has(key)) {
//       console.log("Cache hit for key:", key);
//       return map.get(key);
//     }

//     const result = fn(...args);
//     map.set(key, result);
//     console.log("Cache miss. Storing in map:", map);

//     return result;
//   };
// }

// const add = (a, b) => a + b;
// const memoizedAdd = memozieOne(add);
// console.log("final", memoizedAdd(1, 2));
// console.log("final", memoizedAdd(1, 2));
// console.log("final", memoizedAdd(1, 3));
// console.log("final", memoizedAdd(40, 2));
// console.log("final", memoizedAdd(40, 2));

//flatten array pollyfill
// const array = [1, [2, 3], [[4, 5, [8]], [6, 7]]];
// let data = [1, [2, 3], [[4, 5, [8]], [6, 7]]];

// if (!Array.prototype.flatArrz) {
//   Array.prototype.flatArrz = function() {
//     let depth = Infinity;
//     let res1 = [];

//     function flatten(arr, currentDepth) {
//       arr.forEach(item => {
//         if (Array.isArray(item) && currentDepth < depth) {
//           flatten(item, currentDepth + 1);
//         } else {
//           res1.push(item);
//         }
//       });
//     }

//     flatten(this, 0);
//     return res1;
//   };
// }

// function flatArr (arr){
//    let depth = Infinity;
//    let res = [];

//     function flatten(arr, currentDepth){
//         arr.forEach(item => {
//             if(Array.isArray(item) && currentDepth < depth){
//                 flatten(item, currentDepth+1);
//             }
//             else{
//                 res.push(item);
//             }
//         })
//     }

//     flatten(arr, 0);
//     return res;
// }

// console.log(Array.prototype);
// console.log(data.flatArrz());

// let allowWhiteColor = false;
// function canDoWhite() {
//   const dd = document.querySelectorAll(".dd");
//   let res = [];

//   dd.forEach(item => {
//     if (item.style.backgroundColor == "green") {
//       res.push(true);
//     } else {
//       res.push(false);
//     }
//   });

//   const filt = res.filter(item => item == true);

//   if (filt.length == 4) {
//     allowWhiteColor = true;
//   } else if (filt.length == 0) {
//     allowWhiteColor = false;
//   }
//   console.log("aa", allowWhiteColor);
//   return allowWhiteColor;
// }

// function colorChange(e) {
//   const divsId = e.target.id;
//   const divId = document.getElementById(divsId);
//   const allowWhiteColor = canDoWhite();

//   if (divId.style.backgroundColor == "") {
//     divId.style.backgroundColor = "green";
//   } else if (
//     allowWhiteColor == true &&
//     divId.style.backgroundColor == "green"
//   ) {
//     divId.style.backgroundColor = "";
//   }
// }

//todo list
// var inp = "";
// let todo = [];

// function handleInp(event) {
//   inp = event.target.value;
// }

// function handleAdd() {
//   let ids = todo?.length ? todo[todo.length-1].id: 0;

//   const newTodo = {
//     id: ids+1,
//     val: inp
//   }

//   todo.push(newTodo);
//   inp = ""
//   document.getElementById('todoInput').value = ""; // Clear the input field
//   console.log("todo", todo);
//   showTodos();
// }

// function showTodos(){
//   const tododiv = document.getElementById("tododiv");
//   tododiv.innerHTML = ""; // Clear the current list

//   todo.forEach(item => {
//     const todop = document.createElement("p");
//     todop.id = item.id;
//     todop.textContent = item.val;
//     todop.onclick = deleteTodo; // Attach the event handler correctly
//     tododiv.appendChild(todop);
//   });
// }

// function deleteTodo(event) {
//   const idToDelete = parseInt(event.target.id, 10);
//   todo = todo.filter(item => item.id !== idToDelete);

//   const tododiv = document.getElementById("tododiv");
//   const pToDelete = document.getElementById(idToDelete);
//   tododiv.removeChild(pToDelete);
//   console.log("todo after delete", todo);
// }

//Dsa - string prefix common
// let obj = ["test1", "test2", "test3", "test4"];
// let comp = obj[0];
// let res = "";

// for (let i = 0; i < comp.length; i++) {
//   let isSame = false;
//   for (let j = 0; j < obj.length; j++) {
//     if (obj[j].charAt(i) === comp[i]) {
//       isSame = true;
//     } else {
//       isSame = false;
//       break;
//     }
//   }
//   if (isSame) {
//     res += comp[i];
//   }
// }

// console.log("res: ", res);

//Dsa - missing odd number
// const arr = [2,4,13,5,7,9,17,12,11,12];
// arr.sort();
// const len = arr.length;
// let first;
// let miss;
// function missing(){
//     let i = 0;
//     for(i; i< len; i++){
//         if(arr[i] % 2 !== 0){
//             first = arr[i];
//             i++;
//             break;
//         }
//     }

//     for(i ; i<len; i++){
//         if(arr[i] % 2 != 0){
//             if(arr[i] == first+2){
//                 first = arr[i];
//             }
//             else{
//                 miss = first+2;
//                 break;
//             }
//         }
//     }

//     console.log("missing", miss)
// }
// missing();

//Dsa - longest palindrome that can be constructed
// let s = "this is Js Code"

// function rever(){
//     let len = s.length;
//     let i = len-1;
//     let j = len-1;
//     let res = "";
//    console.log("res")

//     while(i >= 0){
//         res = res+s[i];
//         i--;
//     }

//    res = res.split(" ").reverse().join(" ");

//    //  let res = "";
//    //  const sArr = s.split(" ");
//    //  console.log(sArr[0]);

//    //  for(let i=0; i<sArr.length ; i++){
//    //      let len = sArr[i].length;
//    //      while(len >= 0){
//    //          res += sArr[i].charAt(len);
//    //          len--;
//    //      }
//    //      res += " ";
//    //  }
//            console.log("res",res)

// }
// rever();

//freeze one object property without Object.freeze()
// let user = {
//   id: 22,
//   name: "Sasd"
// };

// const getId = Object.getOwnPropertyDescriptor(user, "id");
// getId.configurable = false;
// getId.writable = false;
// getId.enumerable = false;
// Object.defineProperty(user, "id", getId);

// user.id = 555333;
// console.log(user);

//Constructor function (it is just a function only diff is calling it with new keyword,is same as making object with class)
// class person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// function person(name) {
//   this.name = name;
// }

// person.prototype = {
//   breed: "human"
// };

// const me = new person("me name");
// const me2 = new person("me name");
// me.id = 123;
// console.log(me, me2);

//Retry api call 3 times after fails
// async function autoRetry(fetcherFunc, count) {
//   console.log("fetching", fetcherFunc);
//   if (count > 0) {
//     try {
//       const res = await fetcherFunc();
//       return res;
//     } catch (e) {
//       console.log("error: ", e, count);
//       const res = await autoRetry(fetcherFunc, count - 1);
//       return res;
//     }
//   } else {
//     throw new Error("error count is 0");
//   }
// }

// const fetcherFunc = () => fetch(`https://jsonplaceholder.typicode.com/todos/1`);

// const res = autoRetry(fetcherFunc, 3);
// res
//   .then(response => response.json())
//   .then(resp => console.log("last response", resp))
//   .catch(err => console.error("final error", err));

// const p1 = new Promise((resolve, reject) => {
//   let random = Math.random();
//   if (random > 0.5) resolve("success > 0.5");
//   reject("error < 0.5");
// });

// const res2 = autoRetry(() => p1, 3);
// console.log("res", res2.then(resp => console.log(resp)));
// res
//   .then(response => response.json())
//   .then(resp => console.log("last response", resp))
//   .catch(err => console.error("final error", err));

//LRU cache
// const MAX_CHACHE_SIZE = 7;
// const cache = new Map();

// const getCache = key => {
//   if (cache.has(key)) {
//     const getCacheDetail = cache.get(key);
//     getCacheDetail.count = getCacheDetail.count + 1;
//     console.log("in Get", getCacheDetail);
//   } else {
//     console.log("No key Found");
//   }
// };

// const setCache = (key, value) => {
//   if (cache.size >= MAX_CHACHE_SIZE && !cache.has(key)) {
//     const allKeys = [...cache.keys()];

//     let deleteKey = allKeys[0];
//     const getCache0 = cache.get(allKeys[0]);
//     let deleteCount = getCache0.count;

//     for (let i = 1; i < cache.size; i++) {
//       const getCache = cache.get(allKeys[i]);

//       if (deleteCount > getCache.count) {
//         deleteCount = getCache.count;
//         deleteKey = allKeys[i];
//         console.log("in ", deleteKey);
//       }
//     }

//     console.log("to delete key ", deleteKey);
//     cache.delete(deleteKey);
//   }

//   const val = value;
//   let count = 1;

//   if (cache.has(key)) {
//     const getCache = cache.get(key);
//     count = getCache.count + 1;
//   }

//   cache.set(key, {
//     val,
//     count
//   });
// };

// setCache("1", "1");
// setCache("2", "2");
// setCache("3", "3");
// setCache("4", "4");
// setCache("5", "5");
// setCache("6", "6");
// setCache("7", "7");
// getCache("1");
// getCache("6");
// setCache("2", "2uu");
// setCache("5", "5uu");
// setCache("7", "7uu");
// setCache("8", "8");

// getCache("1");
// getCache("4");
// getCache("1");
// getCache("8");
// getCache("5");

// setCache("9", "9");

// getCache("5uu");

// console.log("changed cache", cache);

//chunk
// function chunk(arr, size) {
//   const res = [];
//   let i = 0;

//   while (i < arr.length) {
//     let tempSize = size;
//     let items = [];

//     while (tempSize > 0) {
//       items.push(arr[i]);
//       tempSize--;
//       i++;

//       if (i >= arr.length) {
//         break;
//       }
//     }

//     res.push(items);
//   }

//   return res;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7];
// const res = chunk(arr, 8);

// console.log("after chunk", res);

//count and reset function

// const count = (() => {
//   let result = 0;

//   function counter() {
//     result += 1;
//     return result;
//   }

//   counter.reset = function() {
//     result = 0;
//     return result;
//   };

//   return counter;
// })();

// count();
// count();
// console.log(count());

// console.log(count.reset());
// console.log(count());

//Traffic Signal lights
// function createSignal(redL, yellowL, greenL) {
//   const timeRed = 2000;
//   const timeYellow = 500;
//   const timeGreen = 4000;

//   function redLight() {
//     redL.style.backgroundColor = "red";
//     yellowL.style.backgroundColor = "";
//     greenL.style.backgroundColor = "";
//     setTimeout(yellowLight, timeRed);
//   }

//   function yellowLight() {
//     redL.style.backgroundColor = "";
//     yellowL.style.backgroundColor = "yellow";
//     greenL.style.backgroundColor = "";
//     setTimeout(greenLight, timeYellow);
//   }

//   function greenLight() {
//     redL.style.backgroundColor = "";
//     yellowL.style.backgroundColor = "";
//     greenL.style.backgroundColor = "green";
//     setTimeout(redLight, timeGreen);
//   }

//   // Start the cycle
//   redLight();
// }

// document.addEventListener("DOMContentLoaded", function(e) {
//   const redL = document.getElementById("red");
//   const yellowL = document.getElementById("yellow");
//   const greenL = document.getElementById("green");

//   createSignal(redL, yellowL, greenL);
// });

function errorToSchema(error) {
  return {
    error: {
      code: error.error.code,
      message: error.error.message
    }
  };
}

function errorUnionSchema(errors) {
  const ee = errors;
  console.log("ee", ee[0]);
  // return z.union(
  //   [
  //     errorToSchema(errors[0]),
  //     errorToSchema(errors[1]),
  //   ]
  // );
}

const smartErrorSchema = errorUnionSchema([
  {
    error: {
      code: "no_access_token",
      message: "No Access Token found in request header"
    }
  },
  {
    error: {
      code: "invalid_access_token",
      message: "Access Token in request header is invalid"
    }
  }
]);
