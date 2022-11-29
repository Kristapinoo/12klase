// const reverseNumber = (number) => {
//     // nav iespējams reversot type number
//     // taču ir iespējams reversot array
//     // nav iespējams pārtaisīt number par array
//     // ir iespējams pārtaisīt string par array

//     const numberToString = number.toString()
//     const stringArray = numberToString.split('')
//     const reversedStringArray = stringArray.reverse()
//     const stringToNumber = reversedStringArray.join('')
//     const finalStringToNumber = parseInt(stringToNumber)

//     return finalStringToNumber
// }

// console.log('987', reverseNumber(987));

// const alph=(tekst)=> 
// String(tekst).split('').sort().join('')
// console.log(alph(" Kartuxizimesu543321"))

// const vowelCount = (text) => {
//     const allVowels = ['a', 'e', 'i', 'o', 'u']
//     let vowelCount = 0
//     const textToString = text.split('')
  
//     textToString.forEach((letter) => {
//       const letterIsVoWel = allVowels.includes(letter)
  
//       if(letterIsVoWel) {
//           vowelCount = vowelCount + 1
//       }
//     });
  
//     return vowelCount
//   }
  
//   const result = vowelCount('Merry x-mas and a happy NY')
  
//   console.log(`Vowel count: ${result}`);

// const secondLowestSecondGreatest = (numbers) => {
//     const sorted = numbers.sort((a, b) => a - b)

//     const secondSmallest = sorted[1]
//     const secondLargest = sorted[sorted.length - 2]

//     const result = {
//         secondLargest: secondLargest,
//         secondSmallest: secondSmallest
//     }

//     return result
// }


// const numbersToCheck = [-70, 1, 2, 5, 7, 99, 44, 123456]

// console.log(secondLowestSecondGreatest(numbersToCheck));

// // second lowest 1
// // second largest 99

const coinAmountCalculator = (number) => {
    let currentAmount = number
    const twoEurCoins = Math.floor(currentAmount / 2)
    currentAmount = currentAmount - (twoEurCoins * 2)

    const oneEurCoins = Math.floor(currentAmount / 1)
    currentAmount = currentAmount - oneEurCoins

    const halfEurCoins = Math.floor(currentAmount / 0.5)
    currentAmount = currentAmount - (halfEurCoins * 0.5)

    // const EurCoins = Math.floor(currentAmount / 0.5)
    // currentAmount = currentAmount - (halfEurCoins * 0.5)

    console.log(halfEurCoins);
    console.log(currentAmount)

    return {
            "2eur": 0,
            "1eur": 0,
            "50cents": 0,
            "20cents": 0,
            "10cents": 0,
            "5cents": 0,
            "2cents": 0,
            "1cents": 0,
        }
}

coinAmountCalculator(9.89)
