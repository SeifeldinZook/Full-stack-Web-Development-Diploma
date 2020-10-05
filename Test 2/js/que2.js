var que2 = document.getElementById("que2");
var music = document.getElementById("music");

music.addEventListener ("mousemove", changeColor);

function changeColor() {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
  
    que2.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}

// $('.music').hover(function () {

//   var r = Math.round(Math.random() * 255);
//   var g = Math.round(Math.random() * 255);
//   var b = Math.round(Math.random() * 255);

//   que2.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

// });