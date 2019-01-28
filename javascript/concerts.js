const printToDom = (stringToPrint) => {
    const printHere = document.getElementById('displayResultsSection');
    printHere.innerHTML = stringToPrint;
  }

let concertLookupButton = document.getElementById("concertLookupButton")

let concerts = []
let concertsInfoObject = {
    name : "",
    address: "",
    time: ""
}

function checkTheSearhTaco() {
    let userInput = document.querySelector("#concertLookup").value

fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=ajmmmSwdyGkP6EYQvyGowr39Go67RL9B&city=nashville&keyword=${userInput}`)
.then(response => response.json())
    .then(parsingTheData => {
        bigBurpleNurpleDeleteButton()
        // console.log(parsingTheData)
        // console.log(parsingTheData._embedded.events)
        let eventsDetails = parsingTheData._embedded.events
        let counter = 1;
        eventsDetails.forEach(eventsDetails => {
            let gettingTheGenreName = eventsDetails.classifications[0].genre.name
            let gettingTheGenreId = eventsDetails.classifications[0].genre.id
            let gettingTheGenretype = eventsDetails.classifications[0].segment.name
            let gettingTheTimedate = eventsDetails.dates.start.localDate
            let gettingTheTimeStartTime = eventsDetails.dates.start.localTime
            let gettingTheAddressName = eventsDetails._embedded.venues.name
            let gettingTheAddressAddress = eventsDetails._embedded.venues[0].address.line1
            let gettingTheName = eventsDetails.name
            console.log(gettingTheGenreId)
            console.log(gettingTheGenreName)
            console.log(gettingTheGenretype)
            let concertsInfoObject ={
                name: `${gettingTheName}`,
                address:`${gettingTheAddressAddress}`,
                time:`${gettingTheTimeStartTime}${gettingTheTimedate}`
            }
            concerts.push(concertsInfoObject);
            document.querySelector(".concertSection").innerHTML += createNewConcertsDomElement(concertsInfoObject, counter);
            counter++;



        // })
            // createListenerForResultsSection();
            // console.log(eventsDetails)

        })
        document.querySelector("#displayResultsSection").addEventListener("click", constructConcertsObject)
        console.log(concerts)
    })
}
document.querySelector("#concertLookupButton").addEventListener("click", checkTheSearhTaco)

    // concertLookupButton.addEventListener("click", function (event) {
    //     if
    // })


    const createNewConcertsDomElement = (concertsInfoObject, counter) => {
        return `
        <section class = "result">
            <label id = "concertslable--${counter}" class = "resultLabel">${counter}. ${concertsInfoObject.name} ${concertsInfoObject.address}${concertsInfoObject.time}<label>
        <button id = "concertsButton--${counter}">Save</button>
        </section>
        `
    }

    function constructConcertsObject(event) {
        console.log("hi")
        if (event.target.id.split("--")[0] === "concertsButton") {
            itineraryObject.concert = concerts[event.target.id.split("--")[1] - 1]
            itineraryObject.createItineraryHtml()
        }

    }

    const bigBurpleNurpleDeleteButton = () => {
        let clearNode = document.querySelector(".concertSection")
        clearNode.innerHTML = ""
        // while (clearNode.firstChild) {
        //     clearNode.removeChild(clearNode.firstChild)
        // }
        // parkArray = []
    }