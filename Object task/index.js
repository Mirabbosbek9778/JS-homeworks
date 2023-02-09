///////////////////home task///////////////////////////
//1)bo'sh ob'ekt foydalanuvchisini yaratish

// let user = {};

// console.log(user);

////////////////////////////////

// 2)namega john bering?

// let user = {
//   name: "John",
// };

// // console.log(user);  ////{ name: 'John' }

/////////////////////////////

// 3)Surnamega Smith qohing objectga

// let user = {
//   name: "John",
//   surname: "Smith",
// };
// // console.log(user);//{ name: 'John', surname: 'Smith' }

////////////////////////////////////

// 4)namega pete qoshing  ///Name:'Pete'

// let user = {
//   name: "John",
//   surname: "Smith",
// };
// console.log({ ...user, name: "Pete" });

//////////////////////////////////////////

// 5)

// let isEmpty = "hey";

// let schedule = {
//   isEmpty() {},
// };

// console.log(isEmpty(schedule));

// schedule["8:30"] = "get up";

// console.log(isEmpty(schedule));

///////////////////////////////////////

// 6)

// let saralies = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// ///bu yigindi ochilgan ozgaruvchi qiymati doimo nolga teng bolishi kerak chunki 1 bosa 1ta oshib ketadi!

// let sum = 0;

// for (let key in saralies) {
//   if (saralies.hasOwnProperty(key)) {
//     sum += saralies[key];
//   }
// }

// console.log(sum); //javobi 390

// // ////////////////////////////

// 7)

// let obj = {
//   name: "Mirabbos",
//   age: 20,
// };

// for (let age in obj) {
//   obj[age] *= 2;
// }

// console.log(obj.age); ///bunda objectni valuesini 2ga kopayttirib chiqarib beradi

//////////////////////////////

// 8)

// let obj = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let keys = Object.keys(obj);
// keys.sort();

// for (let key of keys) {
//   console.log(key, obj[key]);
// }
// // console.log(obj);

///////////////

// 9)

// let menu = {
//   width: 200,
//   heigth: 300,
//   title: "My menu",
// };

// for (let key in menu) {
//   if (typeof menu[key] === "number") {
//     menu[key] *= 2;
//   }
// }
// console.log(menu);
//  //bunda consolda valuelarda raqam kesa 2ga kopayib chiqyapti
