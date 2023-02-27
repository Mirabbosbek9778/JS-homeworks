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

let arr = ["webbrain", "academy"];

arr = arr.toString();

// console.log(arr);
let arr1 = [];
let str = "";
for (let i = 0; i < arr.length; i++) {
  let l = arr.charAt(i);
  if (arr1[l]) {
    arr1[l]++;
  } else {
    arr1[l] = 1;
  }
  //   if ((arr1[arr[i]] = 1 + arr1[arr[i]])) {
  //     arr1[arr[i]];
  //   } else {
  //     Boolean(arr1[arr[i]]);
  //   }
  //   arr1[arr[i]] = 1+arr1[arr[i]] ? arr1[arr[i]] : Boolean(arr1[arr[i]]);
}

console.log(arr1);

for (let item in arr1) {
  str += arr1[item] + " ta " + item + " dan,\n";
}

console.log(str);
