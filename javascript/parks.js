// SAM'S FILE STAY OUT

const parkInputEl = document.querySelector("#parkLookup")
const parkButton = document.querySelector("#parkLookupButton")

parkButton.addEventListener("click", (e) => {
    const inputField = parkInputEl.value
})

fetch("https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=jnv0TSHBEnWnvTmofx6UjW0U5")
  .then(parkData => parkData.json())
  .then(parsedParkData => {
    parsedParkData.forEach(park =>
            console.log(park)
        )
  })