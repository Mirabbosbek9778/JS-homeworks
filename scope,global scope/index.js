// function sum(a) {
//   return (b) => {
//     return (c) => {
//       return (d) => {
//         return (e) => {
//           return (f) => {
//             console.log(a + b + c + d + e + f);
//           };
//         };
//       };
//     };
//   };
// }

// sum(0)(1)(2)(3)(4)(5);

////////////////////

const sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

console.log(sum(0)(1)(2)(3)(4)(5)());
