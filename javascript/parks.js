let parkInputEl = document.querySelector("#parkLookup").value
const parkButton = document.querySelector("#parkLookupButton")
let filters = []
let parks = []

parkButton.addEventListener("click", function(){
    const parkInputEl = document.querySelector("#parkLookup")
    console.log(parkInputEl)
    getParksStuff(parkInputEl)
})
// const parkInputEl = document.querySelector("#parkLookup")

const getParksStuff = (id) => {
fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${id}=Yes&$$app_token=jnv0TSHBEnWnvTmofx6UjW0U5`)
    .then(parkData => parkData.json())
    .then(parsedParkData => {
        let counter = 0
        parsedParkData.forEach(park => {
            let parkObject = {
                name: park.park_name, 
                address: park.mapped_location_address
            }
            // push returned park into array & save for later
            parks.push(parkObject);
            if (counter < 4) {
            document.querySelector("#displayResultsSection").innerHTML += createParkDom(park)
            counter++
            }
        });
    })
}

const createParkDom  = (park) => {
    return `
    <div class="domParkDiv">
        <p class="domParkEl">${park.park_name} at ${park.mapped_location_address}</p>
        
    </div>
    `
} 

