//////////////////////////

let oy = [
  "January",
  "february",
  "March",
  "Aprel",
  "May",
  "June",
  "July",
  "August",
  "Sentabr",
  "October",
  "November",
  "December",
];

let hafta = [
  "Monday",
  "Tuesday",
  "Wednsday",
  "Thursday",
  "Friday",
  "Saturday",
  "sunday",
];

const moment = () => {
  let data = new Date();
  return {
    format(time) {
      if (time === "LT") {
        console.log(`${data.getHours()}:${data.getMinutes()}`);
      } else if (time === "LTS") {
        ls(() => {
          let a = new Date();
          console.log(`${a.getHours()}:${a.getMinutes()}:${a.getSeconds()}`);
        }, 1000);
      } else if (time === "L") {
        console.log(
          `${data.getDate() < 10 ? 0 : ""}:${data.getDate()}:${
            data.getMonth() < 10 ? 0 : ""
          }:${data.getMonth() + 1}:${data.getFullYear()}`
        );
      } else if (time === "l") {
        console.log(
          `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
        );
      } else if (time === "LL") {
        console.log(
          `${data.getDate()} ${oy[data.getMonth()]} ${data.getFullYear()}`
        );
      } else if (time === "ll") {
        console.log(
          `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
        );
      } else if (time === "LL") {
        console.log(
          `${data.getDate()} ${
            oy[data.getMonth()]
          } ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
        );
      } else if (time === "ll") {
        console.log(
          `${data.getDate()} ${oy[data.getMonth()].slice(
            0,
            3
          )} ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
        );
      } else if (time === "LLLL") {
        console.log(
          `${data.getDate()} ${oy[data.getMonth()]} ${data.getFullYear()}, ${
            hafta[data.getDay() - 1]
          } ${data.getHours()}:${data.getMinutes()}`
        );
      } else if (time === "llll") {
        console.log(
          `${data.getDate()} ${oy[data.getMonth()].slice(
            0,
            3
          )} ${data.getFullYear()}, ${hafta[data.getDay() - 1].slice(
            0,
            3
          )} ${data.getHours()}:${data.getMinutes()}`
        );
      } else {
        console.log("Xato malumot kiritdingiz");
      }
    },
  };
};

moment().format("LLLL");
