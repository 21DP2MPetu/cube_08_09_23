
let counter = 0;

function Random(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

function myFunction() {
    counter++;
    let leftS = "left: " + String(`${Random(0, 1180)}`) + "px;";
    let topS = "top: " + String(`${Random(0, 620)}`) + "px;";
    let color = "background-color: " + String(`rgb(${Random(0, 255)}, ${Random(0, 255)}, ${Random(0, 255)});`);
    let rotation = "rotate: " + String(`${Random(0, 360)}`) + "deg";

    let text = leftS + topS + color + rotation;

    document.getElementById('cube').style.cssText = text;
    document.getElementById('button').innerHTML = String(counter);
}