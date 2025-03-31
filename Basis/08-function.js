// Пример использования функций
function assistantMax (num1, num2, num3) {
    let maximum;
    if (num1 > num2 && num1 > num3) {
        maximum = num1;
    } else if (num2 > num3) {
        maximum = num2;
    } else {
        maximum = num3;
    }
    return maximum;
}

let a1 = 26;
let a2 = 25;
let a3 = 30;

let a4 = 25;
let a5 = 35;
let a6 = 15;

let a7 = 30;
let a8 = 15;
let a9 = 85;

let max1 = assistantMax(a1,a2,a3);
let max2 = assistantMax(a4,a5,a6);
let max3 = assistantMax(a7,a8,a9);
let max = assistantMax(max1,max2,max3);

console.log(max);

// Виды функций

// Ничего не возвращает, ничего не принимает
function printHello() {
    console.log("Hello");
}

// Ничего не возвращает, принимает аргументы
function printHelloPerson(nickname) {
    console.log(`Hello ${nickname}`);
}

// Возвращает результат, ничего не принимает
function getHelloText() {
    return "Hello";
}

const hello = getHelloText();
console.log(hello);

// Возвращает и принимает
function getHelloTextForUser(nickname) {
    return `Hello, ${nickname}`
}
console.log(getHelloTextForUser("Paul"));
// Простенький пример замыканий
function outerFunction() {
    let outerVariable = "Я снаружи!";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction
}

const myFunction = outerFunction();
myFunction(); // Выведет "Я снаружи"

// Пример функции высшего порядка: функция, принимающая другую функцию
function applyOperation(x, y, operation) {
    return operation(x, y);
}

function add(x, y) {
    return x + y;
}

let result = applyOperation(5, 3, add);
console.log(result);

// Стрелочная функция
const div = (x, y) => x / y;
result = applyOperation(9, 3, div);
console.log(result);

// Анонимная функция
const multiply = function(x, y) {
    return x * y;
}

result = applyOperation(5, 5, multiply);
console.log(result);
