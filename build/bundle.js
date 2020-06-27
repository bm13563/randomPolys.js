'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var RandomPolygon = function RandomPolygon(length, max) {
  var _this = this;

  var epsilon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  _classCallCheck(this, RandomPolygon);

  this.generatePolygon = function () {
    console.log(_this.epsilon);
    var theta = 360 / _this.length * (Math.PI / 180);
    var radius = _this.max / 2;
    var centre = {
      x: radius,
      y: radius
    };

    for (var i = 0; i < _this.length; i++) {
      var random = 1 - Math.pow(Math.random(), _this.epsilon);
      console.log(random);
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
    ctx.lineWidth = 1;
    ctx.fillStyle = '#f00';
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (var j = 1; j < points.length; j++) {
      ctx.lineTo(points[j].x, points[j].y);
    }

    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#000';

    for (var i = 0; i < points.length; i++) {
      ctx.beginPath();
      ctx.arc(points[i].x, points[i].y, 2, 0, 2 * Math.PI);
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
var polygon = new RandomPolygon(10, 300, 5);
polygon.draw(ctx);
