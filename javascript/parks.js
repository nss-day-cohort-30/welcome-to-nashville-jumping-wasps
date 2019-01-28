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
            bigRedDeleteButton()
            let counter = 0
            parsedParkData.forEach(park => {
                let parkObject = {
                    name: park.park_name,
                    address: park.mapped_location_address
                }
                // I want to clear out the old information in the DOM before submitting more.
                
                if (counter < 4) {
                    document.querySelector(".parkSection").innerHTML += createParkDom(park, counter)
                    counter++
                    parkArray.push(parkObject)
                    console.log(parkArray)
                }
            })
        })
    }
    
    // dom creater
    // TODO would love to make this prettier, my god
    const createParkDom = (park,counter) => {
        return `
        <div class="domParkDiv">
        <p class="domParkEl">${park.park_name} at ${park.mapped_location_address}</p>
        <button id="${park.park_name}--${counter}" class="saveButton">Save</button>
        </div>
        `
    }
    
    const createListenerForResults = () => {
        const newStringArray = event.target.id.split("--")
        itineraryObject.park = parkArray[newStringArray[1]]
        console.log(itineraryObject)
        
    }
    const parentCont = document.querySelector(".parkSection")
    parentCont.addEventListener("click", createListenerForResults)
    
    // function to clear DOM everytime button is clicked. also clears array list
    const bigRedDeleteButton = () => {
    let clearNode = document.querySelector(".parkSection")
    while (clearNode.firstChild) {
        clearNode.removeChild(clearNode.firstChild)
    }
    parkArray = []
}