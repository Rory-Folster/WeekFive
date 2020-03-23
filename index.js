// for (let i = 0; i < 5; i--) {}
// if (i => 5){
//     console.log(5,4,3,2,1);
// }

// for (let i = 0; ; i++) {
//     console.log("loop, i = " + i);
//     if (i > 1)
//     break;
// }

// let counter = 0;
// function inc() { counter++; }for (let i = 0; i < 10; i++, inc());
// console.log(counter); //10

// // for (var i = 0; i < 10; i++) let x = i; //won't work because no brackets
// // for (var i = 0; i < 10; i++) { let x = i; } //changed now with {} should perform now

// for (let y = 0; y < 2; y++)
//     for (let x = 0; x < 2; x++)
//        for (let z = 0; z < 2; z++)   //this code will display 3 rows of 1's and 0's
//         console.log(x, y, z);

// // for (let i = 0; i < 3; i++) console.log(“loop.”); //supposed to display loop 3 times but isnt working.

// for ( let i = 0; i < 3; i++) { 
//     let loop = "Loop."; console.log(loop) //this displays loop 3 times and works.
// };

// for ( let i = 0; i < 3; i++) {
//     if (i===1)
//     continue;                          //this skips the 1 and 2 in '1,2,3' and goes straight to the end.
//     console.log(i);
// }

// for ( let i = 0;; i++) { console.log(" loop "); break; }; 

// let c = 0;
// mark: for(let i = 0; i < 5; i++) {
//      inner: for (let j = 0; j < 5; j++)    //For loop, kinda useless
//         c++; if (i == 2) break mark;
// }
//         console.log(c); 

// let c = 0;
// mark: for (let i = 0; i < 5; i++) {
//     inner: for (let j = 0; j < 5; j++){   //same loop but 21 
//         c++; if (i == 2) break mark;
//     }
// }
// console.log(c);

// block: {
//     console.log("before");    //block is telling VSCode 'this is a block' 
//     break block;
//     console.log("after");
// }

// // Generator function:
// function* generator() {
//     yield 1;
//     yield 2;
//     yield 3;
//   }for (let value of generator())
//     console.log( value );

// let string = 'text';for (let value of string)
//   console.log( value );

//   let object = { a: 1, b: 2, c: 3 };for (let value of object) // Error: object is not iterable
//    console.log( value );

// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
//   };
  
//   console.log(Object.keys(object1));
//   // expected output: Array ["a", "b", "c"]

//   const object1 = {
//     a: 'somestring',
//     b: 42
//   };
  
//   for (let [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
//   }
  
//   // expected output:
//   // "a: somestring"
//   // "b: 42"
//   // order is not guaranteed

//   const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
//   };
  
//   console.log(Object.values(object1));
//   // expected output: Array ["somestring", 42, false]
  