var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var linearGradientParts = getComputedStyle(body,null).
getPropertyValue("background-image").split("rgb");

var rgb1 = linearGradientParts[1]
.substring(0,linearGradientParts[1].lastIndexOf(",") );

var rgb2 = linearGradientParts[2]
.substring(0,linearGradientParts[2].lastIndexOf(")") );

function hexc(colorval) {
    colorval = "rgb" + colorval;
    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    delete(parts[0]);
    for (var i = 1; i <= 3; ++i) {
        parts[i] = parseInt(parts[i]).toString(16);
        if (parts[i].length == 1) parts[i] = '0' + parts[i];
    }
    color = '#' + parts.join('');

    return color;
}

function setGradient(){
    body.style.background = 
    "linear-gradient(to right," 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    setTextContent();
}

function setTextContent(){
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input", setGradient);

color1.value = hexc(rgb1);
color2.value = hexc(rgb2);
setGradient();



