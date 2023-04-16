const app = document.getElementById('app')
const divMain = document.createElement('div')
const myTittle = document.createElement('h3')
const myInput = document.createElement('input')
const button2 = document.createElement('button')
const button3 = document.createElement('button')
const divContent = document.createElement('div')
const divPart1 = document.createElement('div')
const divPart2 = document.createElement('div')
const divPart3 = document.createElement('div')
const divPart4 = document.createElement('div')
const divPart5 = document.createElement('div')
const divPart6 = document.createElement('div')
const active = document.createElement('span')
const newcases = document.createElement('span')
const recases = document.createElement('span')
const tcases = document.createElement('span')
const tdeaths = document.createElement('span')
const ttests = document.createElement('span')

main()

function main () {
    
    divAll()
    renderButton()
}

function divAll(){
    
    divMain.classList.add('main')
    app.append(divMain)
    
    myTittle.innerHTML = 'Covid-19 Tracker'
    divMain.append(myTittle)

    myInput.classList.add('input')
    myInput.setAttribute('id', 'input')
    divMain.append(myInput)
    
    divMain.append(button2)
    divMain.append(button3)
    
    divContent.classList.add('content')
    divMain.append(divContent)
    
    // divPart1
    divPart1.classList.add('part')
    divContent.append(divPart1)

    const img1 = document.createElement('img')
    img1.setAttribute('src', 'img/activecases.png')
    divPart1.appendChild(img1)
    
    const tittle1 = document.createElement('span')
    tittle1.setAttribute('id', 'span')
    tittle1.innerHTML = 'active cases'
    divPart1.append(tittle1)

    active.setAttribute('id', 'result')
    active.innerHTML = '0'
    divPart1.append(active)
    
    // divPart2
    divPart2.classList.add('part')
    divContent.append(divPart2)

    const img2 = document.createElement('img')
    img2.setAttribute('src', 'img/newcases.png')
    divPart2.appendChild(img2)
    
    const tittle2 = document.createElement('span')
    tittle2.setAttribute('id', 'span')
    tittle2.innerHTML = 'new cases'
    divPart2.append(tittle2)

    newcases.setAttribute('id', 'result')
    newcases.innerHTML = '0'
    divPart2.append(newcases)

    // divPart3
    divPart3.classList.add('part')
    divContent.append(divPart3)

    const img3 = document.createElement('img')
    img3.setAttribute('src', 'img/recases.png')
    divPart3.appendChild(img3)
    
    const tittle3 = document.createElement('span')
    tittle3.setAttribute('id', 'span')
    tittle3.innerHTML = 'recovery cases'
    divPart3.append(tittle3)

    recases.setAttribute('id', 'result')
    recases.innerHTML = '0'
    divPart3.append(recases)

    // divPart4
    divPart4.classList.add('part')
    divContent.append(divPart4)

    const img4 = document.createElement('img')
    img4.setAttribute('src', 'img/totalcases.png')
    divPart4.appendChild(img4)
    
    const tittle4 = document.createElement('span')
    tittle4.setAttribute('id', 'span')
    tittle4.innerHTML = 'total cases'
    divPart4.append(tittle4)

    tcases.setAttribute('id', 'result')
    tcases.innerHTML = '0'
    divPart4.append(tcases)

    // divPart5
    divPart5.classList.add('part')
    divContent.append(divPart5)

    const img5 = document.createElement('img')
    img5.setAttribute('src', 'img/totaldeaths.png')
    divPart5.appendChild(img5)
    
    const tittle5 = document.createElement('span')
    tittle5.setAttribute('id', 'span')
    tittle5.innerHTML = 'total deaths'
    divPart5.append(tittle5)

    tdeaths.setAttribute('id', 'result')
    tdeaths.innerHTML = '0'
    divPart5.append(tdeaths)

    //divPart6
    divPart6.classList.add('part')
    divContent.append(divPart6)

    const img6 = document.createElement('img')
    img6.setAttribute('src', 'img/totaltests.png')
    divPart6.appendChild(img6)
    
    const tittle6 = document.createElement('span')
    tittle6.setAttribute('id', 'span')
    tittle6.innerHTML = 'total tests'
    divPart6.append(tittle6)

    ttests.setAttribute('id', 'result')
    ttests.innerHTML = '0'
    divPart6.append(ttests)
}

function renderButton () {
    button2.setAttribute('id', 'my-button')
    button2.innerHTML = 'Get Data'
    button2.classList.add('button2')
    

    button3.setAttribute('id', 'reset-button')
    button3.innerHTML = 'Reset'
    button3.classList.add('button2')
    
    button2.addEventListener('click',fecthCovidData)
    button3.addEventListener('click', clearData)
}



function clearData () {
    const spans = document.querySelectorAll('#result')
    spans.forEach(span => {
    span.remove()
  })
}
//clear data bisa jalan, tapi harus refresh halaman kalo mau get data lagi, solusinya gimana ya kak biar bisa langsung get data lagi tanpa harus refresh halaman? *terimakasih jawabannya :D

function fecthCovidData(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': ,
            'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
        }
    };
    
    const inputnya = document.querySelector('.input').value
    const url = "https://covid-193.p.rapidapi.com/statistics?country=" + inputnya

    fetch(url, options)
        .then(response => response.json())
        .then(response => {
            renderCovidData(response)
        })
        .catch(err => console.error(err));
}

function renderCovidData(data){
    console.log(data.response[0])
    const currentCountry = data.response[0].country
    const currentPopulation  = data.response[0].population
    const currentActiveCases  = data.response[0].cases.active
    const currentNewCases  = data.response[0].cases.new
    const currentRecoveredCases  = data.response[0].cases.recovered
    const currentTotalCases  = data.response[0].cases.total
    const currentTotalDeaths  = data.response[0].deaths.total
    const currentTotalTests  = data.response[0].tests.total


    console.log(currentCountry, currentPopulation, currentActiveCases, currentNewCases,currentRecoveredCases, currentTotalCases, currentTotalDeaths, currentTotalTests)
    active.innerHTML = currentActiveCases
    newcases.innerHTML = currentNewCases
    recases.innerHTML = currentRecoveredCases
    tcases.innerHTML = currentTotalCases
    tdeaths.innerHTML = currentTotalDeaths
    ttests.innerHTML = currentTotalTests
}