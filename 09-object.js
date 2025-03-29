// Примеры создания объекта

// Литерал объекта
const person = {
    firstName: "Paul",
    lastName: "Blonskiy",
    age: 22,
};
console.log(person);


// Создание объекта с помощью new Object()
const car = new Object()
car.madeIn = "Japan";
car.model = "Chery Omoda 5";
car.year = 2023;

console.log(car);

//С помощью функции конструктора
function Book(title, author) {
    this.title = title;
    this.author = author;
}

const book = new Book("Бедный богатый папа", "Пушкин");

// Можно наполнить объект методами
const person2 = {
    name: "Николай",
    age: 50,
    greet: function () {
        console.log(`Привет, я ${this.name}`);
    },
};
person2.greet();
console.log();

// Итерация по свойствам
for (const key in person2) {
    console.log(key + ": " + person2[key]);
}

console.log(person["age"]);
