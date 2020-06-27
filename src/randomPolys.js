export class RandomPolygon {
    constructor(length, max, epsilon=4) {
        this.length = length;
        this.max = max;
        this.epsilon = epsilon;
        this.polygon = [];
        this.generatePolygon();
    }

    generatePolygon = () => {
        const theta = (360 / this.length) * (Math.PI/180);
        const radius = this.max/ 2;
        const centre = {x: radius, y: radius};
        for (let i = 0; i < this.length; i++) {
            var random = 1 - Math.pow(Math.random(), this.epsilon);
            var angle = i * theta;
            var randomAngle = angle + (random * theta);
            var absCosAngle = Math.abs(Math.cos(randomAngle));
            var absSinAngle = Math.abs(Math.sin(randomAngle));
            if (this.max / 2*absSinAngle <= this.max / 2*absCosAngle){
                var magnitude= this.max / 2 / absCosAngle;
            } else {
                var magnitude= this.max / 2 / absSinAngle;
            }
            var xEdge = centre.x + Math.cos(randomAngle) * magnitude;
            var yEdge = centre.y + Math.sin(randomAngle) * magnitude;
            var vector = {x: xEdge - centre.x, y: yEdge - centre.y};
            this.polygon.push({x: centre.x + (random * vector.x), y: centre.y + (random * vector.y)})
        }
    }

    draw = (ctx) => {
        const points = this.polygon;
        const offset = (ctx.canvas.clientWidth - this.max) / 2; //TODO variable x and y dimensions
        ctx.lineWidth= 1;
        ctx.fillStyle = '#f00';
        ctx.beginPath();
        ctx.moveTo(points[0].x + offset, points[0].y + offset);
        for(let j=1; j < points.length; j++){
            ctx.lineTo(points[j].x + offset, points[j].y + offset);
        }
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#000';
        for(let i=0; i < points.length ; i++){
            ctx.beginPath();
            ctx.arc(points[i].x + offset, points[i].y + offset, 2, 0, 2*Math.PI);
            ctx.fill();
            ctx.closePath();
        }
    }
}