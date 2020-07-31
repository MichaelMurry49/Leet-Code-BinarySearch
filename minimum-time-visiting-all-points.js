/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) 
{
    // shortest distance between each point
    // check horizontal distance
    // check virtical distance
    // add the larger distance

    let distance = 0;
    for (let i = 0; i < points.length - 1; i++) 
    {
        let h = Math.abs(points[i][1] - points[i + 1][1]);
        let w = Math.abs(points[i][0] - points[i + 1][0]);
        distance += h > w ? h : w;
    }
    return distance;
};