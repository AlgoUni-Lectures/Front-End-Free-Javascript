// 1. დაწერეთ ფუნქცია, სახელად sayHello, რომელიც დაპრინტავს - "Hello, World".

// function sayHello() {
//   console.log("Hello, World");
// }

// sayHello();

// 2. დაწერეთ ფუნქცია, სახელად greet, რომელიც პარამეტრად მიიღებს სახელს და დაპრინტავს - "გამარჯობა, [სახელი]"

// function greet(name = "უცნობო") {
//   console.log(`გამარჯობა, ${name}`);
// }

// greet("თემო");

// 3. დაწერეთ ფუნქცია, რომელიც მიიღებს ორ არგუმენტს და დააბრუნებს მათ შორის უდიდესს. გამოიყენეთ სამივე - Function Declaration, Function Expression, Arrow Function.

// Function Declaration
// function max(x, y) {
//   if (x > y) {
//     return x;
//   } else if (y > x) {
//     return y;
//   }
//   return "ტოლია";
// }

// Function Expression
// const max = function (x, y) {
//   if (x > y) {
//     return x;
//   } else if (y > x) {
//     return y;
//   }
//   return "ტოლია";
// };

// Arrow Function
// const max = (x, y) => {
//   if (x > y) {
//     return x;
//   } else if (y > x) {
//     return y;
//   }
//   return "ტოლია";
// };

// console.log(max(6, 12));

// 4. დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს

// function sumDigits(number) {
//   let sum = 0;
//   while (number > 0) {
//     let digit = number % 10;
//     sum += digit;
//     number = Math.floor(number / 10);
//   }

//   return sum;
// }

// console.log(sumDigits(145));

// 5. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს სტრინგს და დააბრუნებს true-ს თუ სტრინგი არის პალინდრომი (თავიდან და ბოლოდან იგივენარიად იწერება) და false-ს თუ არაა პალინდრომი.

// function isPalindrome(str) {
//   let reversedStr = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }

//   return str === reversedStr;

//   // if (str === reversedStr) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
// }
// console.log(isPalindrome("როგორ"));

// 6. დაწერეთ ფუნქცია, რომელიც მომხმარებელს შეეკითხება, რომ გამოიცნოს რანდომული საიდუმლო რიცხვი 0-დან 100-მდე მანამ სანამ სწორად არ გამოიცნობს მომხმარებელი. თუ შემოყვანილი რიცხვი საიდუმლო რიცხვზე მეტია, უნდა დავუკონსოლოთ "Too High", ხოლო თუ ნაკლებია - "Too Low". გამოცნობის შემთხვევაში უნდა დავპრინტოთ "You got it!" და დავაბრუნოთ რიცხვი.

const generateRandomNumber = () => Math.floor(Math.random() * 100);

function guessNumber() {
  const random = generateRandomNumber();

  let userNum;

  do {
    userNum = Number(prompt("Enter a number"));

    if (userNum > random) {
      console.log("Too High");
    } else if (userNum < random) {
      console.log("Too Low");
    } else {
      console.log("You got it!");
    }
  } while (userNum !== random);
}

guessNumber();
