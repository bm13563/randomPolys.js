'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var RandomPolygon = function RandomPolygon(length, max) {
  var _this = this;

  var epsilon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;

  _classCallCheck(this, RandomPolygon);

  this.generatePolygon = function () {
    var theta = 360 / _this.length * (Math.PI / 180);
    var radius = _this.max / 2;
    var centre = {
      x: radius,
      y: radius
    };

    for (var i = 0; i < _this.length; i++) {
      var random = Math.pow(Math.random(), 1 / _this.epsilon);
      var angle = i * theta;
      var randomAngle = angle + random * theta;
      var absCosAngle = Math.abs(Math.cos(randomAngle));
      var absSinAngle = Math.abs(Math.sin(randomAngle));

      if (_this.max / 2 * absSinAngle <= _this.max / 2 * absCosAngle) {
        var magnitude = _this.max / 2 / absCosAngle;
      } else {
        var magnitude = _this.max / 2 / absSinAngle;
      }

      var xEdge = centre.x + Math.cos(randomAngle) * magnitude;
      var yEdge = centre.y + Math.sin(randomAngle) * magnitude;
      var vector = {
        x: xEdge - centre.x,
        y: yEdge - centre.y
      };

      _this.polygon.push({
        x: centre.x + random * vector.x,
        y: centre.y + random * vector.y
      });
    }
  };

  this.draw = function (ctx) {
    var points = _this.polygon;
    var offset = (ctx.canvas.clientWidth - _this.max) / 2; //TODO variable x and y dimensions

    ctx.lineWidth = 1;
    ctx.fillStyle = '#f00';
    ctx.beginPath();
    ctx.moveTo(points[0].x + offset, points[0].y + offset);

    for (var j = 1; j < points.length; j++) {
      ctx.lineTo(points[j].x + offset, points[j].y + offset);
    }

    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#000';

    for (var i = 0; i < points.length; i++) {
      ctx.beginPath();
      ctx.arc(points[i].x + offset, points[i].y + offset, 2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }
  };

  this.length = length;
  this.max = max;
  this.epsilon = epsilon;
  this.polygon = [];
  this.generatePolygon();
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var length = document.getElementById("points-range").value;
var max = document.getElementById("max-range").value;
var epsilon = document.getElementById("epsilon-range").value;
document.getElementById("points-value").innerHTML = length;
document.getElementById("max-value").innerHTML = max;
document.getElementById("epsilon-value").innerHTML = epsilon;
var polygon = new RandomPolygon(length, max, epsilon);
polygon.draw(ctx);

document.getElementById("points-range").oninput = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  length = this.value;
  document.getElementById("points-value").innerHTML = length;
  var polygon = new RandomPolygon(length, max, epsilon);
  polygon.draw(ctx);
};

document.getElementById("max-range").oninput = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  max = this.value;
  document.getElementById("max-value").innerHTML = max;
  var polygon = new RandomPolygon(length, max, epsilon);
  polygon.draw(ctx);
};

document.getElementById("epsilon-range").oninput = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  epsilon = this.value;
  document.getElementById("epsilon-value").innerHTML = epsilon;
  var polygon = new RandomPolygon(length, max, epsilon);
  polygon.draw(ctx);
};

document.getElementById("new-polygon").onclick = function (e) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var polygon = new RandomPolygon(length, max, epsilon);
  polygon.draw(ctx);
};
