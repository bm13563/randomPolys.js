'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

exports.RandomPolygon = RandomPolygon;
