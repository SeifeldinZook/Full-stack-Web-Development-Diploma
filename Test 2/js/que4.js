var rgb = document.getElementById("rgb");
var colorR = document.getElementById("colorR");
var colorG = document.getElementById("colorG");
var colorB = document.getElementById("colorB");


colorR.addEventListener ("mouseover", function () {
  rgb.style.backgroundColor = "red";
});

colorG.addEventListener ("mouseover", function () {
  rgb.style.backgroundColor = "green"
});

colorB.addEventListener ("mouseover", function () {
  rgb.style.backgroundColor = "blue"
});



colorR.addEventListener ("mouseleave", function () {
  rgb.style.backgroundColor = "white";
});

colorG.addEventListener ("mouseleave", function () {
  rgb.style.backgroundColor = "white"
});

colorB.addEventListener ("mouseleave", function () {
  rgb.style.backgroundColor = "white"
});

