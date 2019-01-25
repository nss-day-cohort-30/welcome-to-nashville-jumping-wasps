const meetupCategories = [
    {
    name: "Music",
    id: 103    
    },  
    {
    name: "Business & Professional",
    id: 101    
    },  
    {
    name: "Food & Drink",
    id: 110    
    },    
    {
    name: "Community & Culture",
    id: 113    
    },    
    {
    name: "Performing & Visual Arts",
    id: 105    
    },   
    {
    name: "Film, Media & Entertainment",
    id: 104    
    },
    {
    name: "Sports & Fitness",
    id: 108    
    },
    {
    name: "Health & Wellness",
    id: 107    
    },
    {
    name: "Science & Technology",
    id: 102   
    },
    {
    name: "Travel & Outdoor",
    id: 109  
    },
    {
    name: "Charity & Causes",
    id: 111   
    },
    {
    name: "Religion & Spirituality",
    id: 114  
    },
    {
    name: "Charity & Causes",
    id: 111   
    },
    {
    name: "Family & Education",
    id: 115  
    },
    {
    name: "Seasonal & Holiday",
    id: 116 
    },
    {
    name: "Government and Politics",
    id: 112
    },
    {
    name: "Fashion & Beauty",
    id: 106
    },
    {
    name: "Home & Lifestyle",
    id: 117
    },
    {
    name: "Auto, Boat & Air",
    id: 118
    },
    {
    name: "Hobbies & Special Interest",
    id: 119
    },
    {
    name: "Other",
    id: 199
    },
    {
    name: "School Activities",
    id: 120
    }      
]

function categoryToTextChanger (id) {
    
}



const meetupInput = document.querySelector("#meetupLookup")
const meetupButton = document.querySelector("meetupLookupButton")

// meetupButton.addEventListener("click", (event)=>{
//     const outputField = meetupInput.innerHTML
// })

fetch(`https://www.eventbriteapi.com/v3/events/search/?q=nashville&token=PH4Q5M2GK4DX7EHSYBVN`, {
    headers: {
        "Accept": "application/json"
      },
})
    .then(meetups => meetups.json())
    .then(parsedMeetups => {
        parsedMeetups.events.array.forEach(event => {
            if (parsedMeetups.events.name.text === userSearch) {
                let meetupId = events.category_id
            }
        });
    })  
       
        console.log(parsedMeetups)
        // let outputMeetup = events.name.text    
        // createMeetupHTML(outputMeetup)



const createMeetupHTML = () => {
    return `
    <section class="result">
    <p>Name of Event: ${events.name.text} </p>
    </section>
    `
}    

