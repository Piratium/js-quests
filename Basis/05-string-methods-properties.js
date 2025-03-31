let myString = "Hello, World!";
console.log(myString[0]);
console.log(myString.charAt(0));
console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
console.log(myString.indexOf("llll"));      // -1
console.log(myString.indexOf("l"));         // 2
console.log(myString.lastIndexOf("l"));     // 10
console.log(myString.includes("Goodbye"));  // flase
console.log(myString.includes("Hello"));    // true
console.log(myString.substring(0,6));       // Hello,
console.log(myString.substring(7, 13));     // World!
console.log(myString.slice(0,7));           // Hello,
console.log(myString.slice(7));             // World!
console.log(myString.slice(-6));            // World!
const filename = "document.txt";
const extension = filename.slice(filename.lastIndexOf(".")) ;
console.log(extension);                     // .txt
const toTrim = "   pls trim me   ";
console.log(toTrim);                        // Убирает отступы в конце и начале строки
console.log(toTrim.trim());
// toTrim.trimEnd()
// toTrim.trimStart()
const mySentence = "Я люблю котиков.";
const arraySentence = mySentence.split(" ");
console.log(arraySentence);                 // [ 'Я', 'люблю', 'котиков.' ]
arraySentence[1] = arraySentence[1].toUpperCase();
const myNewSentence = arraySentence.join(" ");
console.log(myNewSentence);                 // Я ЛЮБЛЮ котиков.
console.log(myString.replace("Hello", "Goodbye"));










