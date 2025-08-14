// 1. დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი ლუწია თუ კენტი.
// let number = 11;

// if (number % 2 === 0) {
//   console.log("ლუწია");
// } else {
//   console.log("კენტია");
// }

// 2. დაწერეთ პროგრამა, რათა შეამოწმოთ სტრიქონი ცარიელია თუ არა.
// let str = "         ";

// if (str.trim().length === 0) {
//   console.log("ცარიელია");
// } else {
//   console.log("არ არის ცარიელი");
// }

// 3. დაწერეთ პროგრამა, რომელიც შეეკითხება მომხმარებელს ქულას და გამოიტანს შესაბამის შეფასებას. 91-100 -> A; 81-90 -> B, 71 -> 80: C, 61-70 -> D, 51-60 -> E, 0-50 -> ჩაიჭრა. გამოიყენეთ ორივე - if/else if/else და switch.

// let score = Number(prompt("შეიყვანეთ ქულა"));

// if (score > 100 || score < 0) {
//   console.log("შეიყვანეთ სწორი ქულა");
// } else if (score >= 91 && score <= 100) {
//   console.log("A");
// } else if (score >= 81) {
//   console.log("B");
// } else if (score >= 71) {
//   console.log("C");
// } else if (score >= 61) {
//   console.log("D");
// } else if (score >= 51) {
//   console.log("E");
// } else {
//   console.log("ჩაიჭრა");
// }

// switch (true) {
//   case score > 100 || score < 0:
//     console.log("შეიყვანეთ სწორი ქულა");
//     break;
//   case score >= 91 && score <= 100:
//     console.log("A");
//     break;
//   case score >= 81:
//     console.log("B");
//     break;
//   case score >= 71:
//     console.log("C");
//     break;
//   case score >= 61:
//     console.log("D");
//     break;
//   case score >= 51:
//     console.log("E");
//     break;
//   default:
//     console.log("ჩაიჭრა");
// }

// 4. დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.) და ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით.
// let month = Number(prompt("შეიყვანეთ თვე"));

// if (
//   month === 1 ||
//   month === 3 ||
//   month === 5 ||
//   month === 7 ||
//   month === 8 ||
//   month === 10 ||
//   month === 12
// ) {
//   console.log(31);
// } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//   console.log(30);
// } else if (month === 2) {
//   console.log("28 or 29");
// } else {
//   console.log("შეიყვანეთ სწორი თვე");
// }

// switch (month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log(31);
//     break;
//   case 2:
//     console.log("28 or 29");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log(30);
//     break;
//   default:
//     console.log("შეიყვანეთ სწორი თვე");
// }

// 5. დაწერეთ პროგრამა, რომელიც გამოთვლის კენტი რიცხვების ჯამს 1-დან 100-ის ჩათვლით და დაბეჭდავს შედეგს.

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 1) {
//     sum += i;
//   }
// }

// console.log(sum);

// 6. დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს გამოიცნოს საიდუმლო რიცხვი 1-დან 10-მდე. განაგრძეთ გამოცნობის მოთხოვნა, სანამ ისინი სწორად გამოიცნობენ, while loop-ის და do while-ის გამოყენებით.

// let secretNum = 7;
// let guess;

// do {
//   guess = Number(prompt("შეიყვანეთ რიცხვი"));
//   if (guess > 10 || guess < 1) {
//     console.log("შეიყვანეთ რიცხვი 1-დან 10-მდე");
//   }
//   if (guess !== secretNum) {
//     console.log("ვერ გამოიცანი, სცადე თავიდან");
//   }
// } while (guess !== secretNum);

// console.log("გილოცავ, მოიგე!");

// 7. გამოიყენეთ for loop 4-ის გამრავლების ცხრილის დასაბეჭდად (4 × 1-დან 4 × 10-მდე)

// let num = 4;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} x ${i} = ${num * i}`);
// }

/*
4 x 1 = 4
4 x 2 = 8
4 x 3 = 12
4 x 4 = 16
4 x 5 = 20
4 x 6 = 24
4 x 7 = 28
4 x 8 = 32
4 x 9 = 36
4 x 10 = 40
*/

// 8. გამოიყენეთ for loop 20-დან 10-მდე რიცხვების დასაბეჭდად.

// for (let i = 20; i >= 10; i--) {
//   console.log(i);
// }

/*9. Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
// → 3


თუ გაგიჭირდათ, მინიშნებასაც გადახედეთ: You can start with a program that prints out the numbers 1 to 7, which you can derive by making a few modifications to the even number printing example given earlier in the chapter, where the for loop was introduced.

Now consider the equivalence between numbers and strings of hash characters. You can go from 1 to 2 by adding 1 (+= 1). You can go from "#" to "##" by adding a character (+= "#"). Thus, your solution can closely follow the number-printing program.
*/

// for (let i = 1; i <= 7; i++) {
//   console.log("#".repeat(i));
// }

// for (let i = "#"; i.length <= 7; i += "#") {
//   console.log(i);
// }

/*10. Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)

თუ გაგიჭირდათ, მინიშნებასაც გადახედეთ: Going over the numbers is clearly a looping job, and selecting what to print is a matter of conditional execution. Remember the trick of using the remainder (%) operator for checking whether a number is divisible by another number (has a remainder of zero).

In the first version, there are three possible outcomes for every number, so you’ll have to create an if/else if/else chain.

The second version of the program has a straightforward solution and a clever one. The simple solution is to add another conditional “branch” to precisely test the given condition. For the clever solution, build up a string containing the word or words to output and print either this word or the number if there is no word, potentially by making good use of the || operator.
*/

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 100; i++) {
//   let str = "";

//   if (i % 3 === 0) {
//     str += "Fizz";
//   }

//   if (i % 5 === 0) {
//     str += "Buzz";
//   }

//   //   if (str === "") {
//   //     str = i;
//   //   }

//   console.log(str || i); // logical operator short circuiting
// }

/* 11
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboa

Passing this string to console.log should show something like this:

 # # # #   i = 0
# # # #  i = 1
 # # # #  i = 2
# # # #  i = 3
 # # # #  i = 4
# # # #  i = 5
 # # # #  i = 6
# # # #  i = 7

When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

თუ გაგიჭირდათ, მინიშნებასაც გადახედეთ: You can build the string by starting with an empty one ("") and repeatedly adding characters. A newline character is written "\n".

To work with two dimensions, you will need a loop inside of a loop. Put braces around the bodies of both loops to make it easy to see where they start and end. Try to properly indent these bodies. The order of the loops must follow the order in which we build up the string (line by line, left to right, top to bottom). So the outer loop handles the lines, and the inner loop handles the characters on a line.

You’ll need two bindings to track your progress. To know whether to put a space or a hash sign at a given position, you could test whether the sum of the two counters is even (% 2).

Terminating a line by adding a newline character must happen after the line has been built up, so do this after the inner loop but inside the outer loop.
*/
let size = 8;
let chessboard = "";
for (let i = 0; i < size; i++) {
  let line = "";
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      line += " ";
    } else {
      line += "#";
    }
  }
  chessboard += line + "\n";
}

console.log(chessboard);

// i = 0; j = 0; line = "#"
// i = 0; j = 1; line = "##"
// i = 0; j = 2; line = "###"
// i = 0; j = 3; line = "####"
// i = 0; j = 4; line = "#####"
// i = 0; j = 5; line = "######"
// i = 0; j = 6; line = "#######"
// i = 0; j = 7; line = "########"

// i = 1; j = 0; line = "#"
// i = 1; j = 1; line = "##"
// i = 1; j = 2; line = "###"
// i = 1; j = 3; line = "####"
// i = 1; j = 4; line = "#####"
// i = 1; j = 5; line = "######"
// i = 1; j = 6; line = "#######"
// i = 1; j = 7; line = "########"
