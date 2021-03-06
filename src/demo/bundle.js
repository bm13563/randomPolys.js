(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var RandomPolygon = function RandomPolygon(length, xmax, ymax) {
    var _this = this;

    var epsilon = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

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

    this.length = length;
    this.xmax = xmax;
    this.ymax = ymax;
    this.epsilon = epsilon;
    this.polygon = [];
    this.generatePolygon();
  };

  var draw = function draw(ctx, points) {
    var xmax = Math.max.apply(Math, points.map(function (o) {
      return o.x;
    }));
    var ymax = Math.max.apply(Math, points.map(function (o) {
      return o.y;
    }));
    var xmin = Math.min.apply(Math, points.map(function (o) {
      return o.x;
    }));
    var ymin = Math.min.apply(Math, points.map(function (o) {
      return o.y;
    }));
    var xoffset = (ctx.canvas.clientWidth - (xmax - xmin)) / 2 - xmin;
    var yoffset = (ctx.canvas.clientHeight - (ymax - ymin)) / 2 - ymin;
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

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');
  var length = document.getElementById("points-range").value;
  var xmax = document.getElementById("xmax-range").value;
  var ymax = document.getElementById("ymax-range").value;
  var epsilon = document.getElementById("epsilon-range").value;
  var startLength = length;
  var startXMax = xmax;
  var startYMax = ymax;
  var startEpsilon = epsilon;
  document.getElementById("points-value").innerHTML = length;
  document.getElementById("xmax-value").innerHTML = xmax;
  document.getElementById("ymax-value").innerHTML = ymax;
  document.getElementById("epsilon-value").innerHTML = epsilon;
  var polygon = new RandomPolygon(length, xmax, ymax, epsilon);
  draw(ctx, polygon.polygon);

  document.getElementById("points-range").oninput = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    length = this.value;
    document.getElementById("points-value").innerHTML = length;
    var polygon = new RandomPolygon(length, xmax, ymax, epsilon);
    draw(ctx, polygon.polygon);
  };

  document.getElementById("xmax-range").oninput = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    xmax = this.value;
    document.getElementById("xmax-value").innerHTML = xmax;
    var polygon = new RandomPolygon(length, xmax, ymax, epsilon);
    draw(ctx, polygon.polygon);
  };

  document.getElementById("ymax-range").oninput = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ymax = this.value;
    document.getElementById("ymax-value").innerHTML = ymax;
    var polygon = new RandomPolygon(length, xmax, ymax, epsilon);
    draw(ctx, polygon.polygon);
  };

  document.getElementById("epsilon-range").oninput = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    epsilon = this.value;
    document.getElementById("epsilon-value").innerHTML = epsilon;
    var polygon = new RandomPolygon(length, xmax, ymax, epsilon);
    draw(ctx, polygon.polygon);
  };

  document.getElementById("new-polygon").onclick = function (e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var polygon = new RandomPolygon(length, xmax, ymax, epsilon);
    draw(ctx, polygon.polygon);
  };

  document.getElementById("reset").onclick = function (e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var polygon = new RandomPolygon(startLength, startXMax, startYMax, startEpsilon);
    draw(ctx, polygon.polygon);
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
  };

})));
