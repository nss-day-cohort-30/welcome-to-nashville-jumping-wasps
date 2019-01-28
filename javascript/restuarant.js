//array to hold all restaurant objects. An object will be passed to this for each restaurant i get passed back from my search.
//The index of each object will have to match up correctly with the ids to the button and label tags created later so we can 
//properly use the save button
let restaurants = []

function getRestaurantFromCuisine() {
    //gets the search name the user is looking at
    let searchName = document.querySelector("#restuarantLookup").value;

    //capitalize first letter of our search string
    searchName = searchName.charAt(0).toUpperCase() + searchName.slice(1);

    //first fetch to find where the user search matches a cuisine. I then grab the cuisines id to use later 
    fetch("https://developers.zomato.com/api/v2.1/cuisines?city_id=1138&apikey=609064a48fb47486975e4d63f6958fe8")
        .then(cuisines => cuisines.json())
        .then(parsedCuisines => {
            //for each to look through my cuisines
            parsedCuisines.cuisines.forEach(cuisine => {

                //when a cuisine mataches my search run everything else
                if (cuisine.cuisine.cuisine_name == searchName) {

                    //capture the cuisines actual id now that I have matched it properly
                    let cuisineId = cuisine.cuisine.cuisine_id;

                    //my second fetch using the correct suisine id inside the fetch
                    fetch(`https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=${cuisineId}&apikey=609064a48fb47486975e4d63f6958fe8`)
                        .then(restaurants => restaurants.json())
                        .then(parsedrestaurants => {

                            //I make a counter so that I can store the new labels and button with a unique id that should match the counter closely
                            //because I am going to push to the array as I increment the counter.
                            let counter = 0;

                            //loop through each restaurant the our query brought up with the cuisine id
                            parsedrestaurants.restaurants.forEach(restaurant => {


                                if (counter < 5) {
                                    //create restaurant object to store so i can easily reference that objects data easily using the index(which relates to the button
                                    //id and label id of my new dom elements). I can also push this object later to the itineraryObject in itineraryObject.js for east
                                    //itinerary storage
                                    let restaurantObject = {
                                        //storing the name to my object for each restaurant
                                        name: restaurant.restaurant.name,
                                        //storing the address to my object for each restaurant 
                                        address: restaurant.restaurant.location.address
                                    }

                                    //push restaurant to the restaurants array so its stored
                                    restaurants.push(restaurantObject);

                                    //select the area we will display the results. We update the html using a function that returns the html
                                    document.querySelector(".restaurantSection").innerHTML += createNewRestuarantDomElement(restaurantObject, counter);
                                    counter++;
                                }
                            })
                            createListenerForResultsSection();
                        })
                }
            })
        })


    //function that creates our new dom elements with html. uses the counter so that we have unique ids we can easily access later.
    //also uses our restaurant object to fill in data that needs to be filled in
    const createNewRestuarantDomElement = (restaurantObject, counter) => {
        return `
        <section class = "result">
        <label id = "restaurantLabel--${counter}" class = "resultLabel">${counter + 1}. ${restaurantObject.name} ${restaurantObject.address}<label>
        <button id = "restaurantButton--${counter}">Save</button>
        </section>
        `
    }
}





//this creates a listener on the parent of all our save buttons and labels. This will be used to store stuff to the itinerary
function createListenerForResultsSection() {
    document.querySelector("#displayResultsSection").addEventListener("click", constructRestaurantObject)
}

//the call from our results listener. first check if the listener is a button(maybe not working yet)
//this split the id so we can get our unique ids we stored earlier with the counter(that should lineup withh array indexes).
function constructRestaurantObject(event) {
    //this splits first part of our button id to make sure its a buton
    if (event.target.id.split("--")[0] === "restaurantButton") {

        //this below gets our restaurants object at correct array index
        let textContentToSaveToItinerary = restaurants[event.target.id.split("--")[1]].name

        //will need some code to add to object here. Do we want the object to just have four props each that hold
        //the address and thing linked to that address or should we go further.

        //print out the result we decided to save to itinerary. later itinerary will be built with our itinerary object
        document.querySelector("#itinerary").innerHTML += textContentToSaveToItinerary;
    }

}






