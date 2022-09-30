export const draw = (ctx, points) => {
    ctx.lineWidth= 1;
    ctx.fillStyle = '#f00';
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for(let j=1; j < points.length; j++){
        ctx.lineTo(points[j].x, points[j].y);
    }
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#000';
    for(let i=0; i < points.length ; i++){
        ctx.beginPath();
        ctx.arc(points[i].x, points[i].y, 2, 0, 2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}