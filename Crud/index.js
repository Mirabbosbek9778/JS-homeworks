//////////bismillah

///////Motiv//////////Mirabbos akang qiynalyapti ltimos ozing uchun oqimasang ham akang uchun oqi ogir mehnatdan ozod qivor iltimos akang charchagan iltimos

///////////////////////////////

// let str = "Webbrain Academy";
// let katta = 0,
//   kichik = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] >= "A" && str[i] <= "Z") {
//     katta++;
//   } else if (str[i] >= "a" && str[i] <= "z") {
//     kichik++;
//   }
// }

// console.log(`Katta harflar soni: ${katta} ta`);
// console.log(`Kichik harflar soni: ${kichik} ta`);

/////////////////////////////

// let str = "Webbr@in Ac@demy";

// function oxshashlik(str) {
//   let a = str.split("@");
//   for (let i = 1; i < a.length; i++) {
//     a[i] = "a" + a[i][0] + a[i].slice(1);
//   }
//   return a.join("");
// }
// console.log(oxshashlik("Webbr@in Ac@demy"));

///////////////////////

// let str = "webbbrain accaddemmy";

// function dublik(str) {
//   let sum = "";
//   for (let i = 0; i < str.length; i++) {
//     if (sum.indexOf(str[i]) === -1) {
//       sum += str[i];
//     }
//   }
//   return sum;
// }
// console.log(dublik("webbbrain accaddemmy"));

////////////////

// let str = "We66ra1n Acad4my";

// let son = 0;

// function raqam(str) {
//   for (let i = 0; i < str.length; i++) {
//     let str2 = str[i];
//     if (!isNaN(str2)) {
//       son++;
//     }
//   }
//   return "Raqamlar soni: " + son;
// }

// console.log(raqam("We66ra1n Acad4my"));

////////////////////////////////////////

// function checkPalindrome(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return "bu so'z palindrom emas";
//     }
//   }
//   return "bu so'z palindrom";
// }

// console.log(checkPalindrome("kiyik"));

/////////////////////

// let arr = ["webbrain", "academy"];

// arr = arr.toString();

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
// // console.log(arr1);
// for (let item in arr1) {
//   str += arr1[item] + " ta " + item + " dan,\n";
// }

// console.log(str)

/////////////////////////////////////

// let str = "kiyik",
//   s;
// let res = false;

// for (let i = str.length - 1; i >= 0; i--) {
//   s += str[i];
// }
// if (s === str) {
//   res = true;
// }
// console.log(`palindrommi: ${res}`);

//////////////////////////////

// let obj = {
//   title: "webbrain",
//   age: 2,
//   child: {
//     age: 4,
//     name: "Webbrain",
//     child: {
//       age: 3,
//     },
//   },
// };

// let sum = 0;

// while (1) {
//   if (obj) {
//     sum += obj.age;
//   } else {
//     break;
//   }
//   obj = obj.child;
// }
// console.log(sum);

//////////////////////////

// let obj = {
//   id: 1,
//   name: "WebBrain",
//   offline: true,
//   online: true,
//   individual: false,
// };

// for (let key in obj) {
//   if (typeof obj[key] === "boolean") {
//     console.log(key + " : " + obj[key]);
//   }
// }

////////////////////////////

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];

// let str1 = arr1.toString();
// let str2 = arr1.toString();

// function taqqoslash(str1,str2) {
//   if (str1.localeCompare() === str2.localeCompare()) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(taqqoslash(str1,str2));

// console.log(str1.localeCompare() === str2.localeCompare());

////////////////////////

// let arr = [1, 64, 8, 27, 64, 125];

// for (let i = 0; i < arr.length; i++) {
//   let str = arr[i].toString();
//   if (str.length === 2) {
//     console.log(str);
//   }
// }


///////////////////////


