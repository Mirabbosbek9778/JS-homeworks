//////////bismillah

// /Motiv//////Mirabbos akang qiynalyapti sen uchun pul topyapti iltimos ozing uchun oqimasang ham akang uchun harakat qil iltmos!//////////////////

/////////////////////

// 1chi arrayning ichidagi sonlarni yigindisini toping

// let ar = [1, 2, 3, 4, 5];

// let res = ar.reduce((res, value) => {
//   return res + value;
// }, 0);

// console.log(res); ///15

/////////////////////////////////////////////////////////
// console.log(arr);

// let arr = ["webbrain", "academy"];

// arr = arr.toString();

// // console.log(arr);
// let arr1 = [];
// let str = "";
// for (let i = 0; i < arr.length; i++) {
//   let l = arr.charAt(i);
//   if (arr1[l]) {
//     arr1[l]++;
//   } else {
//     arr1[l] = 1;
//   }
// }
// console.log(arr1);
// for (let item in arr1) {
//   str += arr1[item] + " ta " + item + " dan,\n";
// }

// console.log(str);

/////////////////////////////////////////

// let arr1 = [1, 2, 3, 4, 5, 6];

// let arr2 = [1, 2, 3, 4, 5, 6];

// let a = arr1;
// let b = arr2;

// function taqqoslash(a, b) {
//   if (a.length == b.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(oxshashlik(a, b));

// ////////////////////////

// function oxshashlik(str) {
//   let a = str.split("-");
//   for (let i = 1; i < a.length; i++) {
//     a[i] = a[i][0].toUpperCase() + a[i].slice(1);
//   }
//   return a.join("");
// }

// console.log(oxshashlik("background-color"));

// let  = "background-color"=="backgroundColor";
// let b = "list-style-image";
// let c = "-webkit-transition";

//////////////////////////////////////

let user = [
  { id: 1, year: 1998, engine: 1, name: "Tico" },
  { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
  { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
  { id: 4, year: 2010, engine: 1.5, name: "Color" },
  { id: 5, year: 2012, engine: 2, name: "Malibu" },
  { id: 6, year: 2000, engine: 1, name: "Damas" },
  { id: 7, year: 2018, engine: 1, name: "Tracker" },
];

////yil boyicha chiqardim
// let yil = () => {
//   let res = user.sort((a, b) => a.year - b.year);
//   user = res;
// };
// let alfbit = () => {
//   let res = user.sort((a, b) => a.name.localeCompare(b.name));
//   user = res;
// };
// let mator = () => {
//   let res = user.sort((a, b) => b.engine - a.engine);
//   user = res;
// };

// // yil();
// // alfbit();
// // mator();

// console.log(user);

