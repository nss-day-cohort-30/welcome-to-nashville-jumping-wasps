let itineraryObject = {
    park: {

    },
    restaurant: {

    },
    meetup: {

    },
    concert: {

    },
    createItineraryHtml: function () {
        
        let html = "";
        if (this.park.name != null) {
            html += `<p>${this.park.name}</p>`;
        }
        if (this.restaurant.name != null) {
            html += ` <p>${this.restaurant.name}</p>`;
        } if (this.meetup.name != null) {
            html +=  `<p>${this.meetup.name}</p>`;
        }
        if (this.concert.name != null) {
            html +=  `<p>${this.concert.name}</p>`;
        }
        document.querySelector("#itinerary").innerHTML = html;    

    }

}