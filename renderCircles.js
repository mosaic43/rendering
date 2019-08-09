function renderCircles (circleArray) {
    var circles = circleArray.map(circle => 
            `         <div class="text-center mt-5" style="
            height: ${2 * circle.radius}px; 
            width: ${2 * circle.radius}px; 
                    border-radius: ${circle.radius}px; 
                    background-color: ${circle.color};">
                    </div>
                    
                `
        ).join('')
        return circles;
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}

