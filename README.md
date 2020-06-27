# randomPolys.js
Library for generating random polygons in javascript. 

A fast method for generating pseudo-random, convex polygons for testing spatial applications.

Considerably faster (although less random) than angle ordering as in Pavel Valtr's implementation (see “Probability that n random points are in convex position.”), particularly for larger numbers of points per polygon: https://jsben.ch/bvkiU.

# Polygon examples:
10 Points: 

![picture](src/img/10_pts_2.PNG)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![picture](src/img/10_pts.PNG)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ![picture](src/img/10_pts_3.PNG)
