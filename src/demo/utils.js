export const draw = (ctx, points) => {
    const xmax = Math.max.apply(Math, points.map(function(o) { return o.x; }));
    const ymax = Math.max.apply(Math, points.map(function(o) { return o.y; }));
    const xmin = Math.min.apply(Math, points.map(function(o) { return o.x; }));
    const ymin = Math.min.apply(Math, points.map(function(o) { return o.y; }));
    const xoffset = (((ctx.canvas.clientWidth) - (xmax - xmin)) / 2) - xmin;
    const yoffset = (((ctx.canvas.clientHeight) - (ymax - ymin)) / 2) - ymin;
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