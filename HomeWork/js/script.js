
// ***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка повинна показати “Іван”).
// let name, city;
// name = "Ivan";
// city = name;
// console.log(city);

//***2***
//Який буде результат виконання скрипта?
// let name = "Olga";
// console.log(`привіт ${1}`); //
// console.log(`привіт ${"name"}`); //
// console.log(`привіт ${name}`); // ?
// привіт 1
// привіт name
// привіт Olga

//***3***
//Видобути число зі змінних
// let a = "5";
// let b = "13cvb";

// let c = "12.9sxdcfgv";
// let resultA = Number(a);
// let resultB = parseInt(b);
// let resultC = parseFloat(c)
// console.log( Number(a));
// console.log( parseInt(b));
// console.log( parseFloat(c));
// console.log(typeof(resultA));
// console.log(typeof(resultB));
// console.log(typeof(resultC));
// вивести в консоль тип

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3
// let result = Math.round((0.1 + 0.2) * 10) / 10;
// console.log(result);


//***5**
//Поверніть найбільше число с набору 20, 10, 50, 40
// console.log(Math.max(20, 10, 50, 40));


//***6**
//Поверніть випадкове число в діапазоні від 2 до 4
// console.log(Math.random(2,4))

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";
// console.log(message.length);

//***8**
//вивести в консоль message  великими літерами
// let result = "message";
// console.log(result.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль
// let obj = {};
// obj.name = "Artem";
// obj.age = 34; 
// obj.city = "Kyiv";
// console.log(obj);
// delete obj.city;
// obj['like flowers'] = true;
// console.log(obj);
//***10**
// За допомогою циклу  “for…in” вивести в консоль ключі і значення об*єкта
// let obj = {
// name:  "Artem",
// age:  34,
// city:  "Kyiv",
// 'like flowers':  true,
// };
// for (key in obj) {
// console.log(key);
// console.log(obj[key]);
// }git add .