fetch("https://developers.zomato.com/api/v2.1/cuisines?city_id=1138")
    .then(cuisines => cuisines.json())
    .then(parsedCuisines => {
        parsedCuisines.forEach(cuisine => {
            console.log(cuisine);
        })
    }

// let searchName = "Asian";
// //should return three
// if(cuisine.cuisine_name == searchName){
//     return cuisine.cuisine_id;
// }


//     {
//         "cuisines": [
//           {
//             "cuisine": {
//               "cuisine_id": 152,
//               "cuisine_name": "African"
//             }
//           },
//           {
//             "cuisine": {
//               "cuisine_id": 1,
//               "cuisine_name": "American"
//             }
//           },
//           {
//             "cuisine": {
//               "cuisine_id": 3,
//               "cuisine_name": "Asian"
//             }
//           },
//           {
//             "cuisine": {
//               "cuisine_id": 193,
//               "cuisine_name": "BBQ"
//             }
//           }


    
