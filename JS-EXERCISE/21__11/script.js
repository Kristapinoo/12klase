


// true and false - booleans
// Truthy and Falsy values

// Truthy and Falsy vērtības, kas nav ar datu tipu boolean,
// taču kādas viņas būtu, ja tiktu pārkonvertētas uz boolean,
//  un nosauktas mīļvārdiņā (deminutīvā)

// != NAV VIENĀDS
// !== NAV VIENĀDS

// AND && - visiem ir jābūt true, atgriež pēdējo true vērtību
// OR || - vismaz vienam ir jābūt true, atgriež pirmo true vērtību

// Klasiskajā for loopā mums ir svarīgas 4 lietas
// 1. lieta no kāda skaitļa sāksim
// 2. lieta cik ilgi cikls darbosies
// 3. kas ciklam ir jādara
// 4. ko dara katra cikla beigās

// for (let i = 5; i <= 10; i = i + 1 ) {
//     console.log(`I am in the loop with index: ${i}`);
// }

for (let i = 1; i <=100; i = i + 1) {
    if (i % 3 == 0) {
        console.log(`${i}. Fizz`);
    }

    if (i % 5 == 0) {
        console.log(`${i}. Buzz`);
    }

    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('${i}. FizzBuzz');
    }

}