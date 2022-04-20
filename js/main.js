// let gap =
//   "salom bolalar yaxshimisizlar, ahvollaringiz yaxshimi, so'g salomatmisizlar";

// function textChanger(mySentence) {
//   const gatheredArr = [];

//   let myWord = mySentence.split(" ");

//   for (text of myWord) {
//     let birinchiSuz = text.charAt(0).toUpperCase();
//     gatheredArr.push(text.replace(text.charAt(0), birinchiSuz));
//   }

//   return gatheredArr.join(" ");
// }

// console.log(textChanger(gap));

// let nimadir = "salom alekum xaloyiq";

// function toCapitalize(malumot) {
//   const mainArr = [];

//   let bol = malumot.split(" ");

//   for (suz of bol) {
//     let yiguvchi = suz.charAt(0).toUpperCase();
//     mainArr.push(suz.replace(suz.charAt(0), yiguvchi));
//   }

//   return mainArr.join(" ");
// }

// console.log(toCapitalize(nimadir));
//1-misol //
// function isEmpty(obj) {
//   return obj.lenght > 0 ? false : true;
// }
// console.log(isEmpty({ name: 18 }));

//2-misol
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// function sum(obj) {
//   let sum = 0;

//   for (const key in obj) {
//     sum += obj[key];
//   }
//   return sum;
// }

// console.log(sum(salaries));

//3-misol
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(obj) {
//   for (const price in obj) {
//     let pul = obj[price];
//     if (!isNaN(price)) {
//       obj[price] = pul * 2;
//     }

//     return obj;
//   }
// }
// console.log(multiplyNumeric(menu));

// //4-misol
// let arr = [5, 2, 1, -10, 8];
// console.log(arr.sort().reverse());

//5-misol
const mainArr = [];
function inputNumber(numb) {
  numb = Number(prompt("kirit"));
  while (!isNaN(numb)) {
    mainArr.push(numb);
    numb = Number(prompt("kirit"));
  }
  return mainArr;
}
console.log(inputNumber(mainArr));
