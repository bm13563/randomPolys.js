export class RandomPolygon {
    constructor(length, xmax, ymax, epsilon=1) {
        this.length = length;
        this.xmax = xmax;
        this.ymax = ymax;
        this.epsilon = epsilon;
        this.polygon = [];
        this.generatePolygon();
    }

    generatePolygon = () => {
        const theta = (360 / this.length) * (Math.PI/180);
        const centre = {x: this.xmax/ 2, y: this.ymax/ 2};
        for (let i = 0; i < this.length; i++) {
            var random = Math.pow(Math.random(), 1 / this.epsilon);
            var angle = i * theta;
            var randomAngle = angle + (random * theta);
            var absCosAngle = Math.abs(Math.cos(randomAngle));
            var absSinAngle = Math.abs(Math.sin(randomAngle));
            if (this.xmax / 2*absSinAngle <= this.ymax / 2*absCosAngle){
                var magnitude= this.xmax / 2 / absCosAngle;
            } else {
                var magnitude= this.ymax / 2 / absSinAngle;
            }
            var xEdge = centre.x + Math.cos(randomAngle) * magnitude;
            var yEdge = centre.y + Math.sin(randomAngle) * magnitude;
            var vector = {x: xEdge - centre.x, y: yEdge - centre.y};
            this.polygon.push({x: centre.x + (random * vector.x), y: centre.y + (random * vector.y)})
        }
    }
}