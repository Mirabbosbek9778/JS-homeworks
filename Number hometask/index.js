// //////////////

// let a = "webbrain";
// let b = 10;

// for (let i = 0; i <= b; i++) {
//   console.log(a);
// }
////////////////////////////////

// 1)istalgan sonni binary korinishiga otkazish (nechta usuli bor)

// let n = 5;

// console.log(n.toString(2));////ikkilik sanoq sistemasiga otdi
// console.log(n.toString(4));////4lik sanoq sistemasiga otdi
// console.log(n.toString(8));////8lik sanoq sistemasiga otdi
// console.log(n.toString(16));////16lik sanoq sistemasiga otdi

///////////////////////

// function sanoq(num) {
//   if (num === 0) {
//     return "0";
//   }
//   let sum = "";
//   while (num > 0) {
//     const kola = num % 2;
//     sum = kola + sum;
//     num = Math.floor(num / 2);
//   }
//   return sum;
// }
// console.log(sanoq(10));

////////////////////2chi usul

// function sanoq(num) {
//   return num.toString(2);
// }
// console.log(sanoq(10));

//////////////////////////

// let a = Math.round(Math.random() * 100);
// let b = Math.round(Math.random() * 100);
// let c = Math.round(Math.random() * 100);
// let maxx

// console.log(a);
// console.log(b);
// console.log(c);

// if (a >= b) {
//   console.log(`eng katta son: ${a}`);
// } else {
//   console.log(`eng katta son :${b}`);
// }

// if (a>b && a>c){
//     maxx = a;
//     console.log(`${maxx}`);
// }else if (b>a && b>c){
//     maxx = b;
//     console.log(`${maxx}`);
// }else{
//     maxx = c;
// }
// console.log(maxx);

/////////////////////////////////////

// let day = Math.round(Math.random() * 31);
// let month = Math.round(Math.random() * 12);
// let year = Math.round(Math.random() * 10000);
// let year = 2003;
// let month = 5;
// let day = 3;
// // console.log(year);
// console.log(day);
// console.log(month);

// let n = year - 1998;
// let r = n % 5;
// let rang;
// switch (r) {
//   case 0:
//     rang = "yashil";
//     break;
//   case 1:
//     rang = "qizil";
//     break;
//   case 2:
//     rang = "sariq";
//     break;
//   case 3:
//     rang = "oq";
//     break;
//   case 4:
//     rang = "qora";
//     break;
//   default:
//     rang = "bunday rang yoq";
//     break;
// }
// let f = n % 12;
// let muchal;
// console.log(rang);
// switch (f) {
//   case 0:
//     muchal = "sichqon";
//     break;
//   case 1:
//     muchal = "sigir";
//     break;
//   case 2:
//     muchal = "yolbars";
//     break;
//   case 3:
//     muchal = "quyon ";
//     break;
//   case 4:
//     muchal = "ajdar";
//     break;
//   case 5:
//     muchal = "ilon";
//     break;
//   case 6:
//     muchal = "ot";
//     break;
//   case 7:
//     muchal = "qo`y";
//     break;
//   case 8:
//     muchal = "maymun ";
//     break;
//   case 9:
//     muchal = "tovuq";
//     break;
//   case 10:
//     muchal = "it";
//     break;
//   case 11:
//     muchal = "tong`iz";
//     break;
//   default:
//     muchal = "bunday muchal yoq";
//     break;
// }
// console.log(muchal);

// if ((month == 1 && day >= 20 && day <= 31) || (month == 2 && day <= 18)) {
//   console.log("qovga");
// } else if ((month == 2 && day > 18 && day <= 29) || (month == 3 && day <= 20)) {
//   console.log("baliq");
// } else if ((month == 3 && day > 20 && day <= 31) || (month == 4 && day <= 19)) {
//   console.log("Qo`y");
// } else if ((month == 4 && day > 19 && day <= 30) || (month == 5 && day <= 20)) {
//   console.log("buzoq");
// } else if ((month == 5 && day > 20 && day <= 31) || (month == 6 && day <= 21)) {
//   console.log("egizaklar");
// } else if ((month == 6 && day > 21 && day <= 31) || (month == 7 && day <= 22)) {
//   console.log("qisqichbaqa");
// } else if ((month == 7 && day > 22 && day <= 30) || (month == 8 && day <= 22)) {
//   console.log("arslon");
// } else if ((month == 8 && day > 22 && day <= 31) || (month == 9 && day <= 22)) {
//   console.log("parizodaya");
// } else if (
//   (month == 9 && day > 22 && day <= 30) ||
//   (month == 10 && day <= 22)
// ) {
//   console.log("tarozi");
// } else if (
//   (month == 10 && day > 22 && day <= 31) ||
//   (month == 11 && day <= 22)
// ) {
//   console.log("chayon");
// } else if (
//   (month == 11 && day > 22 && day <= 30) ||
//   (month == 12 && day <= 21)
// ) {
//   console.log("o'qotar");
// } else if (
//   (month == 12 && day > 21 && day <= 31) ||
//   (month == 1 && day <= 19)
// ) {
//   console.log("echki");
// } else {
//   console.log(`hato kiritingiz qaytadan urinib koring!`);
// }

////////////////////////////////

// const myObj = { name: "John", age: 30 };

// Object.assign(myObj, { age: 35, city: "New York" });

// console.log(myObj);

// function toBinary(num) {
//   if (num === 0) {
//     return "0";
//   }

//   let binary = "";
//   while (num > 0) {
//     const remainder = num % 2;
//     binary = remainder + binary;
//     num = Math.floor(num / 2);
//   }

//   return binary;
// }
// console.log(toBinary(10));

/////////////////////////////

// function toBinary(num) {
//   return num.toString(2);
// }
// console.log(toBinary('qiymat kiritinf example'));

//////////////
// let a = Math.round(Math.random() * 50);
// let b = Math.round(Math.random() * 50);
// console.log(a);
// console.log(b);
// let max;
// let min;

// if (a >= b || b >= a) {
//   max = a;
//   min = a;
// } else {
//   max = b;
//   min = b;
// }

// console.log(max);
// console.log(min);

////////////////////////

// let n = 2,
//   str;
// let m = 5,
//   a = 2;
// let l;
// let k = parseInt(n),
//   sum = 0,
//   daraja = 0;
// while (k != 0) {
//   sum += (k % 10) * Math.pow(m, daraja);
//   daraja++;
//   k /= 10;
// }
// while (sum > a) {
//   daraja = sum % a;
//   daraja > 9 ? l.charCodeAt(55) + daraja : toString(daraja) + str;
//   sum /= a;
// }
// sum > 9 ? l.charCodeAt(55 + sum) : (str = toString(sum) + str);
// console.log(str);

/////////////////

// let num = 5;
// let day = "";
// let count = 0;
// let oldNum = num;
// for (let j = 0; j < 10; j++) {
//   while (num > 0) {
//     let k = num % 10;
//     if (j == k) count++;
//     num /= 10;
//   }
//   if (count > 0) {
//     day.concat(count).concat(" ta ");
//     switch (j) {
//       case 1:
//         day.concat("bir, ");
//       case 2:
//         day.concat("ikki, ");
//       case 3:
//         day.concat("uch, ");
//       case 4:
//         day.concat("tort,");
//       case 5:
//         day.concat("besh, ");
//       case 6:
//         day.concat("olti, ");
//       case 7:
//         day.concat("yetti, ");
//       case 8:
//         day.concat("sakkiz, ");
//       case 9:
//         day.concat("toqqiz, ");
//       case 0:
//         day.concat("nol, ");
//     }
//   }
//   count = 0;
//   num = oldNum;
// }
// console.log(day);

///////////////////////

let num = 2473678;
num = num.toString();
let obj = {};
let str = "";
for (let i = 0; i < num.length; i++) {
  obj[num[i]] = 1 + (obj[num[i]] ? obj[num[i]] : Boolean(obj[num[i]]));
}
console.log(obj);

for (let item in obj) {
  str += obj[item] + "  ta, " + item + " dan,\n";
}
console.log(str);

// console.log(Number(undefined));
