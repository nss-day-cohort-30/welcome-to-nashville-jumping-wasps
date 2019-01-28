// object holding all categories of meetups from database. API only holds values. This ties them together
const meetupCategories = [
    {
        name: "music",
        id: 103
    },
    {
        name: "business",
        id: 101
    },
    {
        name: "food",
        id: 110
    },
    {
        name: "community",
        id: 113
    },
    {
        name: "performing",
        id: 105
    },
    {
        name: "film",
        id: 104
    },
    {
        name: "sports",
        id: 108
    },
    {
        name: "health",
        id: 107
    },
    {
        name: "science",
        id: 102
    },
    {
        name: "travel",
        id: 109
    },
    {
        name: "charity",
        id: 111
    },
    {
        name: "religion",
        id: 114
    },
    {
        name: "charity",
        id: 111
    },
    {
        name: "family",
        id: 115
    },
    {
        name: "seasonal",
        id: 116
    },
    {
        name: "government",
        id: 112
    },
    {
        name: "fashion",
        id: 106
    },
    {
        name: "lifestyle",
        id: 117
    },
    {
        name: "auto",
        id: 118
    },
    {
        name: "hobbies",
        id: 119
    },
    {
        name: "other",
        id: 199
    },
    {
        name: "school",
        id: 120
    }
]
document.querySelector("#meetupLookupButton").addEventListener("click", categoryToTextChanger)


function categoryToTextChanger(userInput) {
    fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville&token=PH4Q5M2GK4DX7EHSYBVN`, {
        headers: {
            "Accept": "application/json"
        },
    })
        .then(meetups => meetups.json())
        .then(parsedMeetups => {
            let userInput = document.querySelector("#meetupLookup").value
            parsedMeetups.events.forEach(event => {
                meetupCategories.forEach(function (element) {
                    document.querySelector("#meetupLookupButton").addEventListener("click", categoryToTextChanger)
                    if (element.name === userInput) {
                        let catId = element.id
                        console.log(catId)
                        fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville&categories=${catId}&search_type=promoted&token=PH4Q5M2GK4DX7EHSYBVN`, {
                            headers: {
                                "Accept": "application/json"
                            },
                        })
                            .then(events => events.json())
                            .then(parsedEvents => {
                                console.log(parsedEvents)
                                let counter = 1
                                parsedEvents.events.forEach(event => {
                                    let meetupObject = {
                                        name: events.name.text
                                    }

                                    meetups.push(meetupObject)
                                    document.querySelector("displayResultsSection").innerHTML += createMeetupHTML(events)
                                    counter++
                                })
                            }
                            );
                    }
                })
            })
        })
}

const createMeetupHTML = (events) => {
    return `
    <section class="result">
    <p>Name of Event: ${events.name.text} </p>
    </section>  
    `
}
