// //callback
// function fetchdata(callback) {
//     console.log("out side effect");
//     setTimeout(function() {
//         const data = "hello world";
//         console.log("in side effect");
//         callback(data);
//         console.log("after side effect", data);
//      }, 2000)
// }

// function handleData(data) {
//     console.log("received data: " ,(data));
// }

// fetchdata(handleData);


//Map pollyfill
const arr = [1,1,2];
const add = (a) => a+5;
// const arrmap = arr.map(add);
// console.log("add",add(10));
// console.log("arr map: " ,arrmap);

const mymap = (arr, fn) => {
    let res = [];
    arr.forEach((item) => {
        const add = fn(item);
        res.push(add);
    })

    return res;
}
// console.log("myma",mymap(arr, add)); 

Array.prototype.mymap2 = function(fn){
    let res = [];
    this.forEach((item) => {
        const add = fn(item);
        res.push(add);
    })

    return res;
}

const arrmap2 = arr.mymap2(add);
console.log("m2", arrmap2);


//Filter pollyfill
const arr2 = [1,3,2,3];
const filter = (a) => a == 3;
// const arrFilter = arr2.filter(filter);
// console.log("arr filter: " ,arrFilter);

const myFilter = (arr, fn) => {
    const res = [];
    arr.forEach((item) => {
        const filt = filter(item);
        if(filt) res.push(item);
    })

    return res;
}
// console.log("my filter: " ,myFilter(arr2, filter));

Array.prototype.myFilter2 = function(fn){
    const res = [];
    this.forEach((item) => {
        const filt = fn(item);
        if(filt) res.push(item);
    })

    return res;
}

const myfil2 = arr2.myFilter2(filter);
console.log("myfil 2", myfil2);


//Reduce pollyfill
const arr3 = [1,1,2,2];
const redfn = (a,b) => a+b;
const initalValue = 4;
// const red = arr3.reduce(redfn);
// console.log("red", red);

Array.prototype.myReduce = function(fn, initVal){
    let val = initVal ?? 0;

   this.forEach((item) => {
    const redd = fn(val, item);
    val = redd;
   })

    return val;
}

const red2 = arr3.myReduce(redfn, initalValue);
console.log("my red", red2);