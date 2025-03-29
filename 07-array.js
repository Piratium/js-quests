const array1 = [1, 2, 3, 4, 5];
array1[1] = 6;
console.log(array1);

// Создание массива с использованием конструктора new Array()
const array2 = new Array("apple", "banana", "orange", "peach", "lime");

// Добавление и удаление элементов массива
array2.push("grape"); // Добавляет в конец массива
console.log(array2);

array2.pop(); // Извлекает последний элемент массива
console.log(array2);

const item = array2.pop();
console.log(`\nitem: ${item}\narray: ${array2}\n`);

array2.shift(); // Извлекает первый элемент массива
console.log(array2);

// Вывод значений массива через forof
for (const element of array1) {
    console.log(element);
}
console.log();
// Вывод через forin (рекомендуется обходить такой метод перебора массива)
for (const index in array1) {
    console.log(array1[index]);
}

const sliceArray = array1.slice(1, 4);
console.log(sliceArray);

array1.sort();
console.log(array1);

array1.reverse();
console.log(array1);

// Заполнение массива случайными числами
const randomNumsArray = [];
for (let i = 0; i < 6; i++) {
    randomNumsArray[i] = Math.floor(Math.random() * 10);
}
console.log(randomNumsArray);