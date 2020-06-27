import * as rp from "./randomPolys.js";

var canvas=document.getElementById("canvas")
var ctx = canvas.getContext('2d');

var polygon = new rp.RandomPolygon(10, 300, 300, 5);
polygon.draw(ctx);