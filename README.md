# randomPolys.js
Generate random polygons efficiently in javascript. 

A fast method of generating pseudo-random, convex polygons for testing spatial applications in O(n) time.

Considerably faster (albeit "less random") than Pavel Valtr's theorum (see “Probability that n random points are in convex position.”, https://doi.org/10.1007/BF02574070) which runs in O(n log n) time.

I have written and benchmarked both implementations for comparison here: https://jsben.ch/uJnxR.


# Use
```javascript
var polygon = new RandomPolygon(count, xmax, ymax, epsilon);
```
Where <strong>epsilon</strong> can be set to adjust the "regularity" of the polygon, with a higher epsilon tending to a square. Default value is 1.

# Demo
https://bm13563.github.io/randomPolys.js/
