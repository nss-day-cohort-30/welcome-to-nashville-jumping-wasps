let restaurants = []

function getRestaurantFromCuisine() {
    let searchName = document.querySelector("#restuarantLookup").value;

    fetch("https://developers.zomato.com/api/v2.1/cuisines?city_id=1138&apikey=609064a48fb47486975e4d63f6958fe8")
        .then(cuisines => cuisines.json())
        .then(parsedCuisines => {
            parsedCuisines.cuisines.forEach(cuisine => {
                if (cuisine.cuisine.cuisine_name == searchName) {
                    let cuisineId = cuisine.cuisine.cuisine_id;
                    
                    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=${cuisineId}&apikey=609064a48fb47486975e4d63f6958fe8`)
                        .then(restaurants => restaurants.json())
                        .then(parsedrestaurants => {

                            let counter = 1;
                            parsedrestaurants.restaurants.forEach(restaurant => {
                                let restaurantObject ={
                                    name: restaurant.restaurant.name, 
                                    address: restaurant.restaurant.location.address
                                }
                                
                                restaurants.push(restaurantObject);
                                document.querySelector("#displayResultsSection").innerHTML += createNewRestuarantDomElement(restaurantObject, counter);
                                counter++;
                            })
                            createListenerForResultsSection();
                        })
                }
            })
        })


    const createNewRestuarantDomElement = (restaurantObject, counter) => {
        return `
        <section class = "result">
        <label id = "restaurantLabel--${counter}" class = "resultLabel">${counter}. ${restaurantObject.name} ${restaurantObject.address}<label>
        <button id = "restaurantButton--${counter}">Save</button>
        </section>
        `
    }
}






function createListenerForResultsSection() {

    document.querySelector("#displayResultsSection").addEventListener("click", constructRestaurantObject)
}

function constructRestaurantObject(event) {
    if (event.target.id.split("--")[0] === "restaurantButton") {
        console.log(restaurants)
        console.log(event.target.id.split("--")[1]-1)
        console.log(restaurants[event.target.id.split("--")[1]-1].name)
        
        let textContentToSaveToItinerary = restaurants[event.target.id.split("--")[1]-1].name

        //will need some code to add to object here. Do we want the object to just have four props each that hold
        //the address and thing linked to that address or should we go further.

        
        document.querySelector("#itinerary").innerHTML += textContentToSaveToItinerary;
    }

}






