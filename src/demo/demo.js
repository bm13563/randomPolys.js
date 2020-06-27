import * as rp from "../randomPolys.js";

const canvas=document.getElementById("canvas")
const ctx = canvas.getContext('2d');

var length = document.getElementById("points-range").value;
var max = document.getElementById("max-range").value;
var epsilon = document.getElementById("epsilon-range").value;
console.log(length, max, epsilon)

document.getElementById("points-value").innerHTML = length;
document.getElementById("max-value").innerHTML = max;
document.getElementById("epsilon-value").innerHTML = epsilon;

var polygon = new rp.RandomPolygon(length, max, epsilon);
polygon.draw(ctx);

document.getElementById("points-range").oninput = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    length = this.value;
    document.getElementById("points-value").innerHTML = length;
    var polygon = new rp.RandomPolygon(length, max, epsilon);
    polygon.draw(ctx);
}

document.getElementById("max-range").oninput = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    max = this.value;
    document.getElementById("max-value").innerHTML = max;
    var polygon = new rp.RandomPolygon(length, max, epsilon);
    polygon.draw(ctx);
}

document.getElementById("epsilon-range").oninput = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    epsilon = this.value;
    document.getElementById("epsilon-value").innerHTML = epsilon;
    var polygon = new rp.RandomPolygon(length, max, epsilon);
    polygon.draw(ctx);
}

