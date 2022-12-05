// const heading = document.querySelector(".js-heading")

// heading.innerHTML = "Rinis sūdzās par to, ka māca lietot googli"
// heading.innerHTML = "Viņš tomēr nesūdzās"
// heading.innerHTML = "Viņu tas fascinē"


// console.log(heading);

// window.prompt() ierakstīt var šajā, funkcija kā input

// const box = document.querySelector(".js-box")
// const typedInBrowser = "Some text we will add in box"
// const body = document.querySelector("body")

// box.innerHTML = `
//     <h1 class = "heading">${typedInBrowser}</h1>
//     `

// box.style.backgroundColor="green" 
// box.style.padding = '30px'
// body.style.margin = '0'

// console.log(body.style);

// getElementById atgriež to pašu ko querySelector


//.js-person-box jāizveido virsraksts ar savu nickname un jānokrāso viņš zelta krāsā

// const heading =  document.querySelector(".js-person-box")

// heading.innerHTML = `
//     <h1 class = "js-heading">Kristapinoo</h1>`

// heading.style.color = "gold"

// // 2) Tam pašam .js-person-box zem virsraksta ir jāpievieno bilde, kura ir 200x200 ar mīļāko ēdienu 

// heading.innerHTML += `
// <img src='https://cdn.mos.cms.futurecdn.net/iC7HBvohbJqExqvbKcV3pP-1200-80.jpg.webp' width=200, height=200>`

// const headingElementObject = document.querySelector(".js-heading")

// headingElementObject.classList.add('active')


// PIEMĒRS NO SERŽA

// // 1) .js-person-box jāizveidot virsraksts ar savu nickname un jānokrāso teksta krāsa zelta krāsa
// // 2) Tam pašam .js-person-box zem virsraksta ir jāpievieno bilde, kura ir 200x200 ar mīļāko ēdienu 
// // 3) Iepriekš izveidotam virsrakstam ir jāpievieno klase .active, un ja šim elementam ir klase active, viņš tiek pasvītrots ar CSS palīdzību, CSS failā

// // izvēlamies elementu ar kuru darbosimies
// const personBoxElementObject = document.querySelector('.js-person-box');
// // pievienojam virsrakstu
// personBoxElementObject.innerHTML = `<h1 class="js-heading" style="color: gold">Seržs</h1>`

// // papildinam elementa saturu ar papildus elementu
// // personBoxElementObject.innerHTML = `${personBoxElementObject.innerHTML} <img src="https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg" width="200" height="200" />`

// // VAI/OR

// // izveidojam elementu
// const imageElementObject = document.createElement('img')
// // saliekam vajadzīgās lietas
// imageElementObject.src = "https://thumbs.dreamstime.com/b/pizza-rustic-italian-mozzarella-cheese-basil-leaves-35669930.jpg"
// imageElementObject.width = "200"
// imageElementObject.height = "200"

// // pievienojam viņu boxim
// personBoxElementObject.appendChild(imageElementObject)

// // izvēlamies no jaunu pašu virsrakstu
// const headingElementObject = document.querySelector('.js-heading')
// // pievienojam active klasi
// headingElementObject.classList.add('active')

// const boxElementObjects = document.querySelectorAll(".js-box")

// boxElementObjects.forEach((element) => {
//     element.style.width = "200px",
//   element.style.height = "200px",
//   element.style.margin = "10px",
//   element.style.backgroundColor = "red";
//   })

// console.log('boxElementObject', boxElementObjects[0]);

// boxElementObjects[0].style.width = "200px"
// boxElementObjects[0].style.height = "200px"
// boxElementObjects[0].style.margin = "10px"
// boxElementObjects[0].style.backgroundColor = "red"

// boxElementObjects[1].style.width = "200px"
// boxElementObjects[1].style.height = "200px"
// boxElementObjects[1].style.margin = "10px"
// boxElementObjects[1].style.backgroundColor = "red"

// boxElementObjects[2].style.width = "200px"
// boxElementObjects[2].style.height = "200px"
// boxElementObjects[2].style.margin = "10px"
// boxElementObjects[2].style.backgroundColor = "red"


