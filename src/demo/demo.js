import { draw } from "./utils.js";
import * as rp from "../../index.js";

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d');
const bounds = {topLeft: {x: 0, y: 0}, bottomRight: {x: canvas.width, y: canvas.height}};

let length = document.getElementById("points-range").value;
let epsilon = document.getElementById("epsilon-range").value;
const startLength = length;
const startEpsilon = epsilon;

document.getElementById("points-value").innerHTML = length;
document.getElementById("epsilon-value").innerHTML = epsilon;

const polygon = new rp.RandomPolygon(length, bounds, epsilon);
draw(ctx, polygon.polygon);

document.getElementById("points-range").oninput = function()  {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    length = this.value;
    document.getElementById("points-value").innerHTML = length;
    const polygon = new rp.RandomPolygon(length, bounds, epsilon);
    draw(ctx, polygon.polygon);
}

document.getElementById("epsilon-range").oninput = function()  {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    epsilon = this.value;
    document.getElementById("epsilon-value").innerHTML = epsilon;
    const polygon = new rp.RandomPolygon(length, bounds, epsilon);
    draw(ctx, polygon.polygon);
}

document.getElementById("new-polygon").onclick = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const polygon = new rp.RandomPolygon(length, bounds, epsilon);
    draw(ctx, polygon.polygon);
}

document.getElementById("reset").onclick = function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const polygon = new rp.RandomPolygon(startLength, bounds, startEpsilon);
    draw(ctx, polygon.polygon);
    document.getElementById("points-value").innerHTML = startLength;
    document.getElementById("epsilon-value").innerHTML = startEpsilon;
    document.getElementById("points-range").value = startLength;
    document.getElementById("epsilon-range").value = startEpsilon;
    length = startLength;
    epsilon = startEpsilon;
}

