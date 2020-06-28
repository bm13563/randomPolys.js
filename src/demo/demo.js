import * as rp from "../randomPolys.js";

const canvas=document.getElementById("canvas")
const ctx = canvas.getContext('2d');

var length = document.getElementById("points-range").value;
var xmax = document.getElementById("xmax-range").value;
var ymax = document.getElementById("ymax-range").value;
var epsilon = document.getElementById("epsilon-range").value;
const startLength = length;
const startXMax = xmax;
const startYMax = ymax;
const startEpsilon = epsilon;

document.getElementById("points-value").innerHTML = length;
document.getElementById("xmax-value").innerHTML = xmax;
document.getElementById("ymax-value").innerHTML = ymax;
document.getElementById("epsilon-value").innerHTML = epsilon;

var polygon = new rp.RandomPolygon(length, xmax, ymax, epsilon);
console.log(polygon.polygon);
polygon.draw(ctx);

document.getElementById("points-range").oninput = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    length = this.value;
    document.getElementById("points-value").innerHTML = length;
    var polygon = new rp.RandomPolygon(length, xmax, ymax, epsilon);
    polygon.draw(ctx);
}

document.getElementById("xmax-range").oninput = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    xmax = this.value;
    document.getElementById("xmax-value").innerHTML = xmax;
    var polygon = new rp.RandomPolygon(length, xmax, ymax, epsilon);
    polygon.draw(ctx);
}

document.getElementById("ymax-range").oninput = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ymax = this.value;
    document.getElementById("ymax-value").innerHTML = ymax;
    var polygon = new rp.RandomPolygon(length, xmax, ymax, epsilon);
    polygon.draw(ctx);
}

document.getElementById("epsilon-range").oninput = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    epsilon = this.value;
    document.getElementById("epsilon-value").innerHTML = epsilon;
    var polygon = new rp.RandomPolygon(length, xmax, ymax, epsilon);
    polygon.draw(ctx);
}

document.getElementById("new-polygon").onclick = function(e){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var polygon = new rp.RandomPolygon(length, xmax, ymax, epsilon);
    polygon.draw(ctx);
}

document.getElementById("reset").onclick = function(e){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var polygon = new rp.RandomPolygon(startLength, startXMax, startYMax, startEpsilon);
    polygon.draw(ctx);
    document.getElementById("points-value").innerHTML = startLength;
    document.getElementById("xmax-value").innerHTML = startXMax;
    document.getElementById("ymax-value").innerHTML = startYMax;
    document.getElementById("epsilon-value").innerHTML = startEpsilon;
    document.getElementById("points-range").value = startLength;
    document.getElementById("xmax-range").value = startXMax;
    document.getElementById("ymax-range").value = startYMax;
    document.getElementById("epsilon-range").value = startEpsilon;
    length = startLength;
    xmax = startXMax;
    ymax = startYMax;
    epsilon = startEpsilon;
}

