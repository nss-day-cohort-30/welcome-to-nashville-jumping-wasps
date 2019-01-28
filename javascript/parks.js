// variables and arrays
let parkInputEl = document.querySelector("#parkLookup").value
const parkButton = document.querySelector("#parkLookupButton")
let filters = []
let parkArray = []

// dropdown menu with event listener
parkButton.addEventListener("click", function () {
    const parkInputEl = document.getElementById("parkLookup").selectedIndex
    const key = document.getElementById("parkLookup")[parkInputEl].id
    parkInfo(key)
})

// fetch request and dom builder
const parkInfo = (id) => {
    fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${id}=Yes&$$app_token=jnv0TSHBEnWnvTmofx6UjW0U5`)
        .then(parkData => parkData.json())
        .then(parsedParkData => {
            // function to clear old results and empty current park array EACH time the button is clicked
            bigRedDeleteButton(".parkSection", parkArray)
            console.log(parkArray)
            // counter to track number of parks
            let counter = 0
            // building park object
            parsedParkData.forEach(park => {
                let parkObject = {
                    name: park.park_name,
                    address: park.mapped_location_address
                }

                if (counter < 5) {
                    document.querySelector(".parkSection").classList.toggle("domDiv")
                    document.querySelector(".parkSection").innerHTML += createParkDom(park, counter)
                    counter++
                    parkArray.push(parkObject)
                }
            })
        })
    }
    
    // DOM creator
    const createParkDom = (park,counter) => {
        return `
        <div class="domDiv">
        <label class="domParkEl">${park.park_name} at ${park.mapped_location_address}</label>
        <button id="${park.park_name}--${counter}" class="saveButton">Save</button>
        </div>
        `
    }

    // "save" button attached to objects pasted to DOM. "save" button moves item to results section
    const createListenerForResults = () => {
        const newStringArray = event.target.id.split("--")
        itineraryObject.park = parkArray[newStringArray[1]]
        console.log(itineraryObject)
        resultsCont.innerHTML += itineraryObject.park.name + " " + itineraryObject.park.address
        
    }

    // targets for above function
    const resultsCont = document.querySelector("#itinerary")
    const parentCont = document.querySelector(".parkSection")
    parentCont.addEventListener("click", createListenerForResults)