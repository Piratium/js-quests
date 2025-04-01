const readlineSync = require('readline-sync');

const userName = readlineSync.question("What is your name?\nName:")
console.log(`Hi, ${userName}!`);
