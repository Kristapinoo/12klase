// Viduslaiku pieraksts, kas padara funkciju globālu

// function logSomethingOut () {
//     console.log('This function works');
// }


// Viduslaiku pieraksts

// const sumOneAndThreeandReturn = function() {
//     return 1 + 3
// }

// const result = sumOneAndThreeandReturn()

// console.log(result)


// Mūsdienu pieraksts - izmantosim visu laiku

// const onePlusThreeAndReturn = () => {
//     return 1 + 3
// }

// const result = onePlusThreeAndReturn()

// console.log(result);


// // atgriež uzreiz firstNumber + secondNumber un ir vienrindelis
// const sumTwoNumbers = (firstNumber, secondNumber) => firstNumber + secondNumber


// // atgriež uzreiz firstNumber + secondNumber un ir vairākrindelis
// const sumTwoNumbers = (firstNumber, secondNumber) => (
//   firstNumber 
//   + secondNumber
//   )


//   // strādā parasti, bez shortcutiem
// const sumTwoNumbers = (firstNumber, secondNumber) => {
//   return firstNumber + secondNumber
// }


// i++ // palielinam par 1
// i+=1 // palielinam par 1
// i = i + 1 // palielinam par 1

// let age = 18

// // garais ifs
// if(age >= 18) {
//   console.log('pilngadīgs')
// } else {
//   console.log('nepilngadīgs')
// }

// // īsais ifs, zināms kā ternary operator ? - if, : - else
// age >= 18 ? console.log('pilngadīgs') : console.log('nepilngadīgs')


// const sumTwoNumbers = (firstNumber, secondNumber) => {
//     return firstNumber + secondNumber
// }

// const result = sumTwoNumbers(5, 6)

// console.log(result);

// 1.uzd
// function myFirstFunction() {
//     console.log('Kristapinoo');
// }

// 2.uzd
// const myFirstVariableFunction = function() {
//     console.log('Tupeņi')
// }

// 3.uzd
// const returnTwo = () => {
//     return 2
// }

// 4.uzd
// const sumTwoandFive = () => {
//     return 2 + 5
// }
// console.log(sumTwoandFive());

// 5.uzd
// const argumentFunction = (a) =>
// {
//     console.log(a);
// }

// 6.uzd
// const sumTwoNumbers = (a, b) =>
// {
//     return a+b;
// }

// // 7.uzd
// const mathObj = {
//     sumTwoNumbers: sumTwoNumbers
// }

// console.log(mathObj.sumTwoNumbers(2, 6));

// 8.uzd
// const luckyFunction = () => 7+7+7

// console.log(luckyFunction());

// const objectFunction = () => (  
//     {
//         favouriteMovie: "Filma",
//         favouriteAnimal: "Suns",
//         favouriteMcDonaldsMeal: 'Burgir'
//     }
// )
// console.log(objectFunction());

// const squareNumber = (number) => {
//     return Math.sqrt(number)
// }

// console.log(squareNumber(49))

// const celsiusConverter = (degrees) => {
//     return (degrees *1.8 ) + 32
// }

// console.log(celsiusConverter(30));

// const backToSeconds = (minutes) => {
//     return minutes * 60
// }

// console.log(backToSeconds(40));

// const pointsInTotal = (threePointers, twoPointers) => {
//     return 3 * threePointers + 2 * twoPointers
// }

// console.log(pointsInTotal(3, 5));

// const frames = (minutes, frames) => {
//     return minutes * frames * 60
// }

// console.log("Kopējais FPS pa šajām minūtēm " +frames(3, 154));

const fizzBuzz = (startNumber, endNumber) => {
    for (let i = startNumber; i <= endNumber; i++) {
        if ((i%3===0)&&(i%5===0)){
            console.log("FizzBuzz")
        }
        else if (i % 3 === 0) {
          console.log('fizz');
        }
        else if(i % 5 === 0){
        console.log('buzz');
        }else{
          console.log(i);
        }
    }
}
console.log(fizzBuzz(43, 21))