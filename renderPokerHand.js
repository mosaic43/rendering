function buildSingleCard (card) {
    return `<img style="width: 100px" src="${card.value}${card.suit}.png" />`
}

function renderPokerHand(pokerHand) {
    var cardsHTMLArray = pokerHand.map(buildSingleCard)

    console.log('before .map:')
    console.log(pokerHand)
    console.log('after .map:')
    console.log(cardsHTMLArray)
    console.log('join cardsHTML:')
    console.log(cardsHTMLArray.join(''))

    return '<div class="text-center mt-5">' + cardsHTMLArray.join('') + '</div>'

    // HINT: You can use <img /> tags that point to the card images in the /cards folder
    // <div class="text-center mt-5">
    //    <img src ="${hand.value}${hand.suit}.png"  class="pokergame" />
    // </div>
    // ).join('')
    // return myPokerHand;
}

function pokerHand() {
    var content = document.getElementById('content');

    var pokerHandAbstraction = [
        {
            value: "K",
            suit: "C",
            // images: "/cards/KC.png"
           images: "KC.png"
        },
        {
            value: "K",
            suit: "D",
            // images: "/cards/KD.png"
            images: "KD.png"
           
        },
        {
            value: "9",
            suit: "S",
            // images: "/cards/9S.png"
            images: "9S.png"
            
        },
        {
            value: "2",
            suit: "H",
            // images: "/cards/2H.png"
            images: "2H.png"
           
        },
        {
            value: "9",
            suit: "H",
            images: "9H.png",
       
        }
    ];

    content.innerHTML = renderPokerHand(pokerHandAbstraction);

}