 // HINT: You can use <img /> tags that point to these playing card images: 
    // https://commons.wikimedia.org/wiki/Category:SVG_playing_cards
    



function buildRestaurantHTML (restaurant){
    var rating = ''
    for (var i = 0; i < restaurant.priceRating; i++) { 
        rating += "$";
      }
      return `
            
            <div class="pokergame">
            <div style="font-size:50px; color:black;">    
                ${restaurant.name}
            </div>
            <div style="font-size:30px; color: black;">
            ${restaurant.type}
            </div>
            <div style="font-size:30px; color: green;">
            ${rating}
            </div>
            </div>
           
   
      
    `
}



function renderRestaurants(restaurants) {
   var restaurantsHTMLArray = restaurants.map(buildRestaurantHTML)
   return '<div class="text-center mt-5 d-flex flex-wrap justify-content-around"><div style="width: 1200px;height:800px;d-flex flex-wrap flex-direction:row;display: inline-flex;">'  +  restaurantsHTMLArray.join('') +  '</div></div>'
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