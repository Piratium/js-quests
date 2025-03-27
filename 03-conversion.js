// Преобразование к строке
let numToStr = 10;
let toStr = String(numToStr);
console.log(toStr);
console.log(typeof numToStr);
console.log(typeof toStr);
// Преобразование к числу
let strToNum = "10";
console.log(Number(strToNum));
console.log(Number(105 == 105));
// Преобразование к логическому типу
let strToBool = "false";
console.log(Boolean(strToBool)); // true
console.log(Boolean("Hello")); // true
// Неявное преобразование
let implicitConversion = 10 + "20";
console.log(implicitConversion); // 1020
// Неявное преобразование при сравнение
let num = 10;
let str = "10";
console.log(num == str); // true
console.log(num === str); // false
// Проверка на NaN
console.log(isNaN("Привет"));   // true
console.log(isNaN(undefined));  // true
console.log(isNaN({}));         // true
console.log(isNaN("123"));      // false
// Number.isNuN()
console.log(Number.isNaN(NaN));         // true;
console.log(Number.isNaN("Привет"));    // false;
console.log(Number.isNaN(undefined));   // false;
console.log(Number.isNaN({}));          // false;
console.log(Number.isNaN("123"));       // false;
console.log(Number.isNaN(123));         // false;
// Проверка на конечное число
console.log(Number.isFinite(0));         // true
console.log(Number.isFinite(2e64));      // true
console.log(Number.isFinite(2.4));       // true
console.log(Number.isFinite(Infinity));  // false
console.log(Number.isFinite(NaN));       // false
console.log(Number.isFinite("0"));       // false (строка)
// Проверка на integer
console.log("Проверка на integer Number.isInteger()");
console.log(`${Number.isInteger(1)}\t <- Number.isInteger(1)`);                                              // true
console.log(`${Number.isInteger(0)}\t <- Number.isInteger(0)`);                                              // true
console.log(`${Number.isInteger(-100000)}\t <- Number.isInteger(-100000)`);                                  // true
console.log(`${Number.isInteger(99999999999999999999999)} \t <- Number.isInteger(99999999999999999999999)`); // true 
console.log(`${Number.isInteger(0.1)}\t <- Number.isInteger(0.1)`);                                          // false
console.log(`${Number.isInteger(Math.PI)}\t <- Number.isInteger(Math.PI)`);                                  // false
console.log(`${Number.isInteger(NaN)}\t <- Number.isInteger(NaN)}`);                                         // false
console.log(`${Number.isInteger(Infinity)}\t <- Number.isInteger(Infinity)`);                                // false
console.log(`${Number.isInteger("10")}\t <- Number.isInteger("10")`);                                        // false (строка)
console.log(`${Number.isInteger(true)}\t <- Number.isInteger(true)`);                                        // false
console.log(`${Number.isInteger([1])}\t <- Number.isInteger([1])`);                                          // false