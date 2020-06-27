# randomPolys.js
Generate random polygons efficiently in javascript. 

A fast method of generating pseudo-random, convex polygons for testing spatial applications.

Considerably faster (albeit "less random") than angle ordering as in Pavel Valtr's "standard" implementation (see “Probability that n random points are in convex position.”, https://doi.org/10.1007/BF02574070), particularly for larger numbers of points per polygon: https://jsben.ch/bvkiU.


# Use
```javascript
var polygon = new RandomPolygon(count, xmax, ymax, epsilon);
```
Where <strong>epsilon</strong> can be set to adjust the "regularity" of the polygon, with a higher epsilon tending to a square. Default value is 1.

# Demo
https://bm13563.github.io/randomPolys.js/
