// Empty meetup array
let meetups = []

// Event listener on search button
document.querySelector("#meetupLookupButton").addEventListener("click", categoryToTextChanger)

function categoryToTextChanger() {
    let userInput = document.querySelector("#meetupLookup").value
    fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${userInput}+&location.address=nashville&token=PH4Q5M2GK4DX7EHSYBVN`, {
        headers: {
            "Accept": "application/json"
        },
    })
        .then(meetups => meetups.json())
        .then(parsedMeetups => {
            bigGreenDeleteButton()
            let counter = 0
            parsedMeetups.events.forEach(event => {
                let meetupObject = {
                    name: event.name.text,
                    url: event.url
                }
                if (counter < 4) {
                    document.querySelector(".meetupSection").innerHTML += createMeetupHTML(event, counter)
                    meetups.push(meetupObject)
                    console.log(meetups)
                    counter++
                }

            })
            document.querySelector(".meetupSection").addEventListener("click", createResultsSection)
        })
}

// Print to DOM function
const createMeetupHTML = (event, counter) => {
    return `
    <section class="result">
    <a href="${event.url}"> ${event.name.text}</a>
    <button id="meetupLookupButton--${counter}">Save</button>
    </section>  
    `
}

function createResultsSection(event) {
    if (event.target.id.split("--")[0] === "meetupLookupButton") {
        let saveMeetupsToItinerary = meetups[event.target.id.split("--")[1]].name
        // console.log(meetups[event.target.id.split("--")[1]].name)
        document.querySelector("#itinerary").innerHTML += saveMeetupsToItinerary;
    }
}

const bigGreenDeleteButton = () => {
    let clearNode = document.querySelector(".meetupSection")
    while (clearNode.firstChild) {
        clearNode.removeChild(clearNode.firstChild)
    }
    meetups = []
}
