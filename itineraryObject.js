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
            html += `<p>Park: ${this.park.name}</p>`;
        }
        if (this.restaurant.name != null) {
            html += ` <p>Restaurant: ${this.restaurant.name}</p>`;
        } if (this.meetup.name != null) {
            html +=  `<p>Meetup: ${this.meetup.name}</p>`;
        }
        if (this.concert.name != null) {
            html +=  `<p>Concert: ${this.concert.name}</p>`;
        }
        document.querySelector("#itinerary").innerHTML = html;    

    }

}