///////////////////home task///////////////////////////

// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }
// let user = makeUser();

// console.log(user.ref.name); ////undefined

//////////////////////////////////

// class Calculator {
//   sum(a, b) {
//     return a + b;
//   }
//   ayirish(a, b) {
//     return a - b;
//   }
//   kopaytirish(a, b) {
//     return a * b;
//   }
// }
// ///ozlashyapti yangi calculator boldi
// const calculator = new Calculator();

// /////yigindini hisoblayapti
// console.log(calculator.sum(1, 2));

// /////ayirish hisoblayapti
// console.log(calculator.ayirish(2, 2));

// /////kopaytirish hisoblayapti
// console.log(calculator.kopaytirish(1, 2));

/////////////////////////////////////

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  ShowStep: function () {
    console.log(this.step);
  },
};

ladder.up().up().down().ShowStep().down().ShowStep();
