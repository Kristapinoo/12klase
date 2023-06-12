const quizData = [
    {
        // 1.jautajums
        question: "1) Kāds ir datubāžu mērķis?",
        a: "Uzglabāt programmas kodu",
        b: "Uzglabāt un sakārtot datus",
        c: "Veikt datu analīzi",
        d: "Izveidot mājaslapas",
        correct: "b",
    },
    {
        // 2.jautajums
        question: "2) Kāds ir galvenais ieguvums, izmantojot datubāzes?",
        a: "Datu organizēšana un efektīva datu pārvaldība",
        b: "Ātrāka programmatūras izstrāde",
        c: "Zemākas programmatūras izmaksas",
        d: "Pārtrauktu darbu un darbību automatizēšana",
        correct: "a",
    },
    {
        // 3.jautajums
        question: "3) Kādas ir galvenās atšķirības starp SQL un NoSQL datubāzēm?",
        a: "SQL datubāzēs izmanto strukturētu datu organizāciju, bet NoSQL datubāzēs izmanto nelīdzsvarotu datu organizāciju",
        b: "SQL datubāzēs izmanto nelīdzsvarotu datu organizāciju, bet NoSQL datubāzēs izmanto strukturētu datu organizāciju",
        c: "SQL datubāzēm ir striktākas prasības attiecībā uz datu struktūru un datu ievades formātu, bet NoSQL datubāzes ir mazāk prasīgas un elastīgas",
        d: "SQL datubāzes un NoSQL datubāzes ir ļoti līdzīgas un nav daudz atšķirību.",
        correct: "a",
    },
    {
        // 4.jautajums
        question: "4) Kādas metodes var izmantot, lai identificētu un novērstu problēmas programmatūras izstrādē?",
        a: "Statiskās analīzes metodes",
        b: "Dinamiskās analīzes metodes",
        c: "Abas iepriekšminētās",
        d: "Ne vienu no iepriekšminētajām",
        correct: "c",
    },
    {
        // 5.jautajums
        question: "5) Kāda ir galvenā mērķauditorijas loma programmatūras specifikācijas izstrādē?",
        a: "Atbalstīt projektu vadību",
        b: "Nodrošināt konkrētus projektēšanas risinājumus",
        c: "Sniegt detalizētu informāciju par programmatūras lietošanu",
        d: "Definēt programmatūras prasības un specifikācijas",
        correct: "d",
    },
    {
        // 6.jautajums
        question: "6) Kāpēc ir svarīgi plānot darbu, kas tiek veikts programmatūras izstrādes procesā?",
        a: "Lai nodrošinātu, ka projekts tiek pabeigts laikā",
        b: "Lai palielinātu projektu budžetu",
        c: "Lai samazinātu programmētāju stresu",
        d: "Lai uzlabotu produkta kvalitāti",
        correct: "a",
    },
    {
        // 7.jautajums
        question: "7) Kas ir iekapsulēšana objektorientētā programmēšanā?",
        a: "Objekta ieviešanas detaļu slēpšanas process no ārpasaules.",
        b: "Objekta ieviešanas detaļu izpaušanas process ārpasaulei",
        c: "Objekta sadalīšanas process tā sastāvdaļās",
        d: "Rekvizītu un metožu pārmantošanas process no cita objekta.",
        correct: "a",
    },
    {
        // 8.jautajums
        question: "8) Kas ir mantošana objektorientētā programmēšanā?",
        a: "Objekta spēja iegūt vairākas formas",
        b: "Objekta spēja tikt instantiētam",
        c: "Viena objekta spēja mantot īpašības un metodes no cita objekta",
        d: "Objekta spēja saturēt citus objektus",
        correct: "c",
    },
    {
        // 9.jautajums
        question: "9) Kas ir polimorfisms objektorientētā programmēšanā?",
        a: "Objekta spēja tikt instantiētam",
        b: "Viena objekta spēja mantot īpašības un metodes no cita objekta",
        c: "Objekta spēja iegūt vairākas formas",
        d: "Objekta spēja saturēt citus objektus",
        correct: "c",
    },
    {
        // 10.jautajums
        question: "10) Ko nozīmē API?",
        a: "Lietojumprogrammas procesa integrācija",
        b: "Uzlabots programmēšanas interfeiss",
        c: "Lietojumprogrammu saskarne",
        d: "Uzlabota procesu integrācija",
        correct: "c",
    },
    {
        // 11.jautajums
        question: "11) Kāds ir API mērķis?",
        a: "nodrošināt lietotāja saskarni tīmekļa lietojumprogrammai",
        b: "Lai iespējotu saziņu starp dažādām programmatūras lietojumprogrammām",
        c: "Lai pārvaldītu lietotāja autentifikāciju un autorizāciju",
        d: "Lai saglabātu un izgūtu datus no datu bāzes",
        correct: "b",
    },
    {
        // 12.jautajums
        question: "12) Kas ir REST API?",
        a: "API veids, kas transakcijām izmanto attālos e-pasta pakalpojumus",
        b: "API veids, kas pieprasa lietotājiem autentificēties pirms piekļuves tās resursiem",
        c: "API veids, kas izmanto HTTP protokolu un ievēro reprezentatīvā stāvokļa pārsūtīšanas principus",
        d: "API veids, kas nodrošina piekļuvi sistēmas aparatūras un programmatūras resursiem",
        correct: "c",
    },
    {
        // 13.jautajums
        question: "13) Kas ir IP adrese?",
        a: "Adrese, kur atrodas dators fiziski",
        b: "Adrese, kur dators glabā datus",
        c: "Identifikators, kas piešķirts datoram tīklā",
        d: "Vārds, kurš piešķirts datoram tīklā",
        correct: "c",
    },
    {
        // 14.jautajums
        question: "14) Kāds ir galvenais mērķis Firewall (Ugunsmūris)?",
        a: "Bloķēt visu tīkla piekļuvi",
        b: "Nodrošināt datu apmaiņas aizsardzību pret neautorizētu piekļuvi",
        c: "Nodrošināt tīkla savienojumu ar citiem tīkliem",
        d: "Nodrošināt datora atmiņas drošību pret uzbrukumiem.",
        correct: "b",
    },
    {
        // 15.jautajums
        question: "15) Kas ir MAC adrese?",
        a: "Adrese, kas identificē datoru tīklā",
        b: "Adrese, kas identificē datora uzglabāšanas vietu",
        c: "Adrese, kas identificē datora operētājsistēmu",
        d: "Adrese, kas identificē datora procesoru",
        correct: "a",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}



submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Tu atbildēji ${score}/${quizData.length} jautājumus pareizi</h2>

           <button onclick="location.reload()">Atkārtot viktorīnu</button>
           <br>
           <button onclick="window.location.href = 'atbildes.html';"">Doties uz atbildēm</button>
           `
       }
    }
})