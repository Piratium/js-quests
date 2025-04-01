// Функция высшего порядка
const numbers = [1, 2, 3, 30, -15, -16, -20, -13, 5, 10, 60, 14, 13, 17,];

function getItems(items, checkItem) {
    const result = [];
    for (let i = 0; i < items.length; i++) {
        if (checkItem(items[i])) {
            result.push(items[i])
        }
    }
    return result
}

const div2 = element => element % 2 === 0;
const div5 = element => element % 5 === 0;
const div10 = element => element % 10 === 0;

console.log(getItems(numbers, div10));

// На самом деле рассмотренный пример это буквально функционал метода filter() 
console.log(numbers.filter(e => e < 0));

// Ещё пример
function select(items, logic) {
    const result = [];
    for (let i = 0; i < items.length; i++) {
        result.push(logic(items[i]))
    }
    return result
}

console.log(select(numbers, el => Math.abs(el)));

// Тоже самое что и map()
console.log(numbers.map(el => el ** 2));

// Чейнинг
console.log(numbers
    .map(el => el ** 2)
    .filter(el => el > 300)
);


