

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
        parsedMeetups.events.forEach(event => {
            document.querySelector("#displayResultsSection").innerHTML += createMeetupHTML(event)
        })
}) 
}

// Print to DOM function
const createMeetupHTML = (event) => {
    return `
    <section class="result">
    <a href="${event.logo.original.url}"> ${event.name.text}</a>
    </section>  
    `
}

