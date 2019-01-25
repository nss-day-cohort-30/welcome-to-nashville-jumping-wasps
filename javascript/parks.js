// SAM'S FILE STAY OUT

let parkInputEl = document.querySelector("#parkLookup").value
const parkButton = document.querySelector("#parkLookupButton")

parkButton.addEventListener("click", function(){
    const parkInputEl = document.querySelector("#parkLookup").target.id
    getParksStuff(parkInputEl)
})

const getParksStuff = (id) => {
fetch(`https://data.nashville.gov/resource/xbru-cfzi.json?${id}=Yes&$$app_token=jnv0TSHBEnWnvTmofx6UjW0U5`)
    .then(parkData => parkData.json())
    .then(parsedParkData => {
        parsedParkData.forEach(park => {
                document.querySelector("#displayResultsSection").innerHTML += createParkDom(park)
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