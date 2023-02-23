//////////////////////////Mirabbos harakat qil akang qiynalyapti iltimos sendan ozing uchun bomasayam akang uchun iltimos bollardan otib ket

///////function yozilsin GEtCount.functiondagi str dagi harflar sonini chiqarilsin masalan webbrain

// function getCount(str) {
//   let kola = {};
//   for (let i = 0; i < str.length; i++) {
//     let harf = str.charAt(i);
//     if (kola[harf]) {
//       kola[harf]++;
//     } else {
//       kola[harf] = 1;
//     }
//   }
//   let str2 = "";
//   for (let harf in kola) {
//     if (kola.hasOwnProperty(harf)) {
//       str2 += harf + ":" + kola[harf] + ", ";
//     }
//   }
//   return str2.slice(0, -2);
// }
// console.log(getCount("Mirabbosbek Abduvohidov"));

////////////////////////////////////

//soz kiriting functionda n=5ta harfini kesib olsin

// let str2 = "webbrain";
// let n = 5;

// function truncate(str, n) {
//   let zaryadka = n - 1;
//   if (zaryadka >= str.length) {
//     return "so'z kiriting : -> " + n + "bitta ham harf yoq!";
//   }
//   let namuna = str.slice(0, zaryadka + 1);
//   return namuna;
// }
// console.log(truncate(str2, n));

//////////////////////////

/////////////////satrdagi faqat raqamlarni chiqarib bersin

// let stakan = "$!@1200";

// function belgi(str) {
//   let num = "";
//   for (let i = 0; i < str.length; i++) {
//     let soz = str[i];
//     if (!isNaN(soz) && soz !== " ") {
//       num += soz;
//     }
//   }
//   return num;
// }
// console.log(belgi(stakan));

//////////////////////////////////////////
// // satrdagi belgi raqamlar sonini aniqlash

// let soz = "webbrain@#423";

// function belgisoz(str) {
//   let harf = 0;
//   let raqam = 0;
//   for (let i = 0; i < str.length; i++) {
//     let str2 = str[i];
//     if (isNaN(str2) || str2 === " ") {
//       harf++;
//     } else {
//       raqam++;
//     }
//   }
//   return "harflar soni:  " + harf + "\nraqamlar soni: " + raqam;
// }

// console.log(belgisoz(soz));

////////////////

// let soz2 = "webbrain academy";

// function boshharf(str) {
//   let soz = str.split(" ");
//   for (let i = 0; i < soz.length; i++) {
//     let soz2 = soz[i];
//     soz[i] = soz2.charAt(0).toUpperCase() + soz2.slice(1);
//   }
//   return soz.join(" ");
// }

// console.log(boshharf(soz2));
