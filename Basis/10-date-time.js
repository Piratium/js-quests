// Создание объекта Date, представляющего текущую дату и время
let now = new Date();
console.log(now);

// Создание объекта Date из строки
let dateStr = new Date("2064-07-10");
console.log(dateStr);

// Создание объекта Date из компонентов даты и времени
let dateComponents = new Date(2024, 2, 10, 21, 30, 0);
console.log(dateComponents);

// В строке, но это ISO 8601
console.log(dateComponents.toISOString());

// В строке (адаптируется под текущий часовой пояс)
console.log(dateComponents.toString()); 

// Год
console.log(now.getFullYear());

// Месяц
console.log(now.getMonth());

// День
console.log(now.getDate());

// Час
console.log(now.getHours());

// Минуты
console.log(now.getMinutes());

// Секунды
console.log(now.getSeconds());

// Миллисекунды
console.log(now.getMilliseconds());

// Получение дня недели текущей даты (0-6)
// 0 - воскресенье, 1 - понедельник, и так далее
console.log(now.getDay());

// Установка года текущей даты
now.setFullYear(2007);
console.log(now);
// Тоже самое можно сделать с другими временными метриками

// Получение разницы в минутах между местным временем и UTC
console.log(now.getTimezoneOffset());

// Получение строкового представления даты и времени в соответствии с локалью пользователя
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());





