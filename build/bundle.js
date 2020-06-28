'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var RandomPolygon = function RandomPolygon(length, xmax, ymax) {
  var _this = this;

  var epsilon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 4;

  _classCallCheck(this, RandomPolygon);

  this.generatePolygon = function () {
    var theta = 360 / _this.length * (Math.PI / 180);
    var centre = {
      x: _this.xmax / 2,
      y: _this.ymax / 2
    };

    for (var i = 0; i < _this.length; i++) {
      var random = Math.pow(Math.random(), 1 / _this.epsilon);
      var angle = i * theta;
      var randomAngle = angle + random * theta;
      var absCosAngle = Math.abs(Math.cos(randomAngle));
      var absSinAngle = Math.abs(Math.sin(randomAngle));

      if (_this.xmax / 2 * absSinAngle <= _this.ymax / 2 * absCosAngle) {
        var magnitude = _this.xmax / 2 / absCosAngle;
      } else {
        var magnitude = _this.ymax / 2 / absSinAngle;
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
    var xoffset = (ctx.canvas.clientWidth - _this.xmax) / 2;
    var yoffset = (ctx.canvas.clientHeight - _this.ymax) / 2;
    ctx.lineWidth = 1;
    ctx.fillStyle = '#f00';
    ctx.beginPath();
    ctx.moveTo(points[0].x + xoffset, points[0].y + yoffset);

    for (var j = 1; j < points.length; j++) {
      ctx.lineTo(points[j].x + xoffset, points[j].y + yoffset);
    }

    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = '#000';

    for (var i = 0; i < points.length; i++) {
      ctx.beginPath();
      ctx.arc(points[i].x + xoffset, points[i].y + yoffset, 2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    }
  };

  this.length = length;
  this.xmax = xmax;
  this.ymax = ymax;
  this.epsilon = epsilon;
  this.polygon = [];
  this.generatePolygon();
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var polygon = new RandomPolygon(10, 300, 300, 5);
polygon.draw(ctx);
