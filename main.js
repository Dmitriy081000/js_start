/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */


// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'

let myNum = 10;
let myStr = "some string";
let myBool = true;
let myArr = [1, 2, 3, 4, 5];
let myObj = {
    first: "First name",
    last: "last name"
};

document.write("<br>" + "LEVEL: 1" + "<br>" + "myNum: " + myNum + "<br>" + "myStr: " + myStr + "<br>" + "myBoll: " + myBool + "<br>" + "myArr: " + myArr + "<br>" + "myObj: " + myObj + "<br>" + "<br>");

console.log("LEVEL: 1" + "<br>" + "myNum: " + myNum + "<br>" + "myStr: " + myStr + "<br>" + "myBoll: " + myBool + "<br>" + "myArr: " + myArr + "<br>" + "myObj: " + myObj + "<br>");
console.log(myObj)


/*
* #2
*
* Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
* Результат збережіть у змінній decimal2.
*/

// decimal2
let decimal2 = myNum.toFixed(2);
document.write("LEVEL: 2"+ "<br>" + "myNum.toFixed(2)" + decimal2 + "<br>");
console.log(decimal2)

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

// i


let i = 3;
document.write("<br>" + "LEVEL: 3" + "<br>" + i);
console.log(i);

let x = i++;
document.write("<br>" + "i++ = " + x);
console.log(x);

let y = ++i;
document.write("<br>" + "++i = " + y);
console.log(y);

let c = i--;
document.write("<br>" + "i-- = " + c);
console.log(c);

let w = --i;
document.write("<br>" + "--i = " + w + "<br>");
console.log(w);

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

let myTest = 20;
document.write("<br>" + "LEVEL: 4" + "<br>" + "myTest = " + myTest);
console.log(myTest);

myTest = myTest - myNum;
document.write("<br>" + "myTest - myNum = " + myTest);
console.log(myTest);

myTest = myTest + myNum;
document.write("<br>"  + "myTest + myNum = " + myTest);
console.log(myTest);

myTest = myTest * myNum;
document.write("<br>" + "myTest * myNum = " + myTest);
console.log(myTest);

myTest = myTest / myNum;
document.write("<br>" + "myTest / myNum = " + myTest);
console.log(myTest);

myTest = myTest % myNum;
document.write("<br>" + "myTest % myNum = " + myTest + "<br>");
console.log(myTest);

// myTest
// +=
// –=
// *=
// /=
// %=

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

let myPi = Math.PI;
console.log(myPi);
document.write("<br>" + "LEVEL: 5" + "<br>" + "myPi = " + myPi);

let myRound = Math.round(89.279);
console.log(myRound);
document.write("<br>" + "myRound (89.279) = " + myRound);

let myRandom = Math.round(Math.random() * 10);
console.log(myRandom);
document.write("<br>" + "myRandom = " + myRandom);

let myPow = Math.pow(3, 5);
console.log(myPow);
document.write("<br>" + "myPow (3.5)= " + myPow + "<br>")

// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 → myRandom
// 3 у 5 степені → myPow

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

let strObj = {
    str: "Мама мыла раму, рама мыла маму",
    // length: strObj.str.length
};
document.write("<br>" + "LEVEL: 6 <br> str.Obj.str = " + strObj.str + "<br>strObj.length = " + strObj.str.length + "<br>");
console.log(strObj.str + strObj.str.length);

// Мама мыла раму, рама мыла маму
// strObj

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

document.write("<br> LEVEL: 7<br>");
let isRamaPos = strObj.str.indexOf("рама");
let isRama = strObj.str.includes("рама");
document.write ("indexOf: " + isRamaPos + "<br> includes: " + isRama + "<br>");
console.log(isRamaPos, isRama)

// isRamaPos
// isRama

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

document.write("<br> LEVEL: 8 <br>")
document.write("Мама мыла раму, рама мыла маму = ")
let car = strObj.str.replace("мыла", "моет");
let rama = car.replace("рама", "Рама");
document.write(rama.replace("мыла", "держит"));
console.log(rama.replace("мыла", "держит"))




// strReplace

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

let someStr = "I like WEB, bUt i HATE js";
document.write("<br> <br> LEVEL: 9 <br> someStr = " + someStr);
document.write("<br> toUpperCase = " + someStr.toUpperCase());
document.write("<br> toLowerCase = " + someStr.toLowerCase());
console.log(someStr)
console.log(someStr.toUpperCase())
console.log(someStr.toLowerCase())

// var someStr = 'some STRING'
// var upperStr
// var lowerStr
