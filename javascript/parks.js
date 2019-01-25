// SAM'S FILE STAY OUT

const parkInputEl = document.querySelector("#parkLookup")
const parkButton = document.querySelector("#parkLookupButton")
const inputValue = ""
let url = "https://data.nashville.gov/resource/xbru-cfzi.json?$$app_token=jnv0TSHBEnWnvTmofx6UjW0U5"

// fetch(url)
//   .then(parkData => parkData.json())
//   .then(parsedParkData => {
//     parsedParkData.forEach(park => {
//         if (parkInputEl === ) {
//             console.log(park_name)
//             return park.park_name
//         }
//     })
//   })

  https://data.nashville.gov/resource/xbru-cfzi.json?

//   const inputValue
//   if (park[input] === "yes") {
//       return park_name
//   }

fetch(url)
    .then(parkData => parkData.json())
    .then(parsedParkData => {
        parsedParkDat.forEach(park => {
            if (parkInputEl === `https://data.nashville.gov/resource/xbru-cfzi.json?${parkInputEl}$$app_token=jnv0TSHBEnWnvTmofx6UjW0U5`) {

            }
        });
    })

    const createParkDom  = () => {
        return `
        <div class="domParkDiv">
            <p class="domParkEl">park_name</p>
        </div>
        `
    }

  