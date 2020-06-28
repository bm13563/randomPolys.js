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

    draw = (ctx) => {
        const points = this.polygon;
        const xoffset = (ctx.canvas.clientWidth - this.xmax) / 2;
        const yoffset = (ctx.canvas.clientHeight - this.ymax) / 2;
        ctx.lineWidth= 1;
        ctx.fillStyle = '#f00';
        ctx.beginPath();
        ctx.moveTo(points[0].x + xoffset, points[0].y + yoffset);
        for(let j=1; j < points.length; j++){
            ctx.lineTo(points[j].x + xoffset, points[j].y + yoffset);
        }
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#000';
        for(let i=0; i < points.length ; i++){
            ctx.beginPath();
            ctx.arc(points[i].x + xoffset, points[i].y + yoffset, 2, 0, 2*Math.PI);
            ctx.fill();
            ctx.closePath();
        }
    }
}