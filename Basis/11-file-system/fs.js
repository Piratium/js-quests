const fs = require('fs');

// Данные для записи в файл
const data = "Пример текста для записи в файл.";

// Запись файла происходит асинхронно
fs.writeFile('example.txt', data, 'utf8', (err) => {
    if (err) {
        console.error("Ошибка при записи файла: ", err);
        return;
    }
    console.log("Файл был успешно записан.");
});

fs.readFile('example2.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Ошибка при чтении файла: ", err);
        return
    }
    console.log("Содержание файла: ", data);
});