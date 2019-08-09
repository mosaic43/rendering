
function renderNametags(nametags) {
    return `
        <div class="text-center mt-5">
            <div style="width: 400px; height:200px; border: 4px solid black;"> 
            <div style="    width: 100%;
            height: 30%;
            background-color: blue;
            color: white;
            font-size: 30px;
            text-align: center;">
                Hello, my name is:
            </div>
            <div style="width: 100%;
            height: 70%;
            background-color: white;
            color: black;
            padding: 10px;
            font-size: 35px;
            padding-top: 30px; ">
            ${nametags[0]}
            </div>
            </div>
        </div>
    `
}

function nametags() {
    var content = document.getElementById('content');

    var nametagsAbstraction = [
       "Kamilah",
       "Kim",
       "Stuart",
       "Ron",
       "Krissy"
    ]

    content.innerHTML = renderNametags(nametagsAbstraction);

}