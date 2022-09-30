class RandomPolygon {
  constructor(length, bounds, epsilon=1) {
    this.length = length;
    this.bounds = bounds;
    const {topLeft, bottomRight} = bounds;
    this.xsize = bottomRight.x - topLeft.x;
    this.ysize = bottomRight.y - topLeft.y;
    this.epsilon = epsilon;
    this.polygon = [];
    this.generatePolygon();
  }

  generatePolygon = () => {
    const theta = (360 / this.length) * (Math.PI/180);
    const centre = {x: this.xsize/ 2 + this.bounds.topLeft.x, y: this.ysize/ 2 + this.bounds.topLeft.y};
    for (let i = 0; i < this.length; i++) {
      const random = Math.pow(Math.random(), 1 / this.epsilon);
      const angle = i * theta;
      const randomAngle = angle + (random * theta);
      const absCosAngle = Math.abs(Math.cos(randomAngle));
      const absSinAngle = Math.abs(Math.sin(randomAngle));
      let magnitude;
      if (this.xsize / 2*absSinAngle <= this.ysize / 2*absCosAngle){
        magnitude = this.xsize / 2 / absCosAngle;
      } else {
        magnitude = this.ysize / 2 / absSinAngle;
      }
      var xEdge = centre.x + Math.cos(randomAngle) * magnitude;
      var yEdge = centre.y + Math.sin(randomAngle) * magnitude;
      var vector = {x: xEdge - centre.x, y: yEdge - centre.y};
      this.polygon.push({x: centre.x + (random * vector.x), y: centre.y + (random * vector.y)});
    }
  }
}

export default RandomPolygon;