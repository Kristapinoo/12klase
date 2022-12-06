// // mēs gribam pogas objektu lai ar viņu tālāk darbotos
// const buttonElementObject = document.querySelector('.js-show-animal')
// const animalBoxElementObject = document.querySelector('.js-animal-box')
// // pievienojam klausēkli uz pogas klikšķi
// buttonElementObject.addEventListener('click', () => {
//   // darbības, kas notiks uz pogas klikšķi


//   // pēc noklusējuma iekš CSS šim elementam uzlikām display:none,
//   // tagad ar JS mēs pārrakstām uz display:block, lai elements būtu redzams
// //   animalBoxElementObject.style.display === 'block'

//   const currentlyVisible = animalBoxElementObject.style.display === "block"
  

//   if (currentlyVisible) {
//     animalBoxElementObject.style.display = 'none'
//     buttonElementObject.innerHTML = "Show animal image"
//   } else {
//     animalBoxElementObject.style.display = 'block'
//     buttonElementObject.innerHTML = "Hide image"
//   }

// })

const headerInputElementObject = document.querySelector('.js-header')
const footerInputElementObject = document.querySelector('.js-footer')
const submitButton = document.querySelector('.js-generate-meme')

let headerValue = ""
let footerValue = ""

headerInputElementObject.addEventListener('input', () => {
    headerValue = headerInputElementObject.value
})

footerInputElementObject.addEventListener('input', () => {
    footerValue = footerInputElementObject.value
})

submitButton.addEventListener('click', () => {

    if(headerValue && footerValue) {
        console.log(`https://urlme.me/success/${headerValue}/${footerValue}.jpg`);
    }
    window.open(`https://urlme.me/success/${headerValue}/${footerValue}.jpg`)

    console.log('headerValue', headerValue)
    console.log('footerValue', footerValue)
})