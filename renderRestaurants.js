 // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
    



function buildRestaurantHTML (restaurant){
    return `
            
            <div class="pokergame">
            <div style="font-size:50px; color:black;">    
                ${restaurant.name}
            </div>
            <div style="font-size:30px; color: black;">
            ${restaurant.type}
            </div>
            <div style="font-size:30px; color: green;">
            ${restaurant.priceRating}
            </div>
            </div>
           
   
      
    `
}






function renderRestaurants(restaurants) {
   var restaurantsHTMLArray = restaurants.map(buildRestaurantHTML)
   return '<div class="text-center mt-5 d-flex flex-wrap justify-content-around" ;>' +  restaurantsHTMLArray.join('') + '</div>'
}

function restaurants() {
    var content = document.getElementById('content');

    var restaurantsAbstraction = [
        {
            name: "McDonald's",
            type: "Fast Food",
            priceRating: 1
        },
        {
            name: "Gunshow",
            type: "Date Night Dining",
            priceRating: 5
        },
        {
            name: "Iron Age",
            type: "Korean BBQ",
            priceRating: 4
        },
    ];

    content.innerHTML = renderRestaurants(restaurantsAbstraction);

}