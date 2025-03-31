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
console.log(book);


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

// Вывод через квадратные скобки
console.log(person["age"]);

const food = {
    meet: "chicken",
    fruit: "banana",
    bread: "white",
}

food.meet = "beef"
console.log(food["meet"]);

// Будет ошибка т.к. const
// food = {
//     meet: "фыв",
//     fruit: "banпыавпana",
//     bread: "ячсм",
// } 

// Перебор оъекта и использование .bind()
for (const key in person2) {
    const item = person2[key]
    if (typeof item === "function") {
        item.bind(person2)();        
    } else {
        console.log(item);
    }
}

// Комбинация разных типов данных и чутка объектного мышления
const product = {
    name: "Смартфон",
    brand: "Poco",
    price: 23000,
    inStock: true,
    specification: {
        screenSize: "6.67 дюймов",
        RAM: "12 ГБ",
        storage: "512 ГБ",
    },
    displayDeteails: function () {
        console.log(`Товар: ${this.brand}, Цена: ${this.price}, В наличии: ${this.inStock}`);
    }
}
product.displayDeteails()

// Ещё пример
const bankAccount = {
    accountNumber: "283412938213",
    balance: 3000,
    currency: "usd",
    owner: {
        firstName: "Jim",
        lastName: "Conor",
        age: 32,
    },
    deposit: function(amount) {
        this.balance += amount;
        console.log(`Внесено $${amount}, Новый баланс: $${this.balance}`);
    },
    withdraw: function(amount) {
        if (this.balance < amount) {
            console.log("Недостаточно средств");
        } else {
            this.balance -= amount;
            console.log(`Снято: $${amount}, Новый баланс: $${this.balance}`);
        }
    }
}

bankAccount.deposit(1000);
bankAccount.deposit(1000);
bankAccount.withdraw(1000);
bankAccount.withdraw(1000);
bankAccount.withdraw(10000);
