# randomPolys.js
Generate random polygons efficiently in javascript.

A fast method of generating pseudo-random convex polygons in O(n) time, useful for testing spatial applications.

Considerably faster (albeit "less random") than Pavel Valtr's theorum (see “Probability that n random points are in convex position.”, https://doi.org/10.1007/BF02574070) which runs in O(n log n) time.

I have written and benchmarked both implementations for comparison here: https://jsben.ch/4fgfo.

# Source

```javascript
// URL
<script src="https://bm13563.github.io/randomPolys.js/build/bundle.js"></script>

// NODE
npm install randompolys
```

NPM package info: https://www.npmjs.com/package/randompolys.

# Use

```javascript
var polygon = new rp.RandomPolygon(count, bounds, epsilon);
console.log(polygon.polygon);

var rp = require('randompolys/build/bundle');
var polygon = new rp.RandomPolygon(count, bounds, epsilon);
console.log(polygon.polygon);
```
**Bounds** is an object in the form `{topLeft: [x, y], bottomRight[x, y]}` that defines the limits of the polygon. This can be used to set the size and location of the polygons in the available space

**Epsilon** adjusts the "regularity" of the polygon by narrowing the random distribution of vector lengths by ```y = x^(1 / epsilon)```. Default value is 1.

# Demo
https://bm13563.github.io/randomPolys.js/