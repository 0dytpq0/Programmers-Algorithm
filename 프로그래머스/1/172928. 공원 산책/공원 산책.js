function findStartPoint(park) {
    for (let i = 0; i < park.length; i++) {
        const col = park[i].indexOf('S');
        if (col !== -1) {
            return [i, col]; 
        }
    }
    return null;
}

function isPathClear(park, x, y, dx, dy, distance) {
    for (let step = 1; step <= distance; step++) {
        const newX = x + dx * step;
        const newY = y + dy * step;
        if (newX < 0 || newX >= park.length || newY < 0 || newY >= park[0].length || park[newX][newY] === 'X') {
            return false;  
        }
    }
    return true;  
}

function solution(park, routes) {
    let [x, y] = findStartPoint(park);

    const directionMap = {
        'E': [0, 1],  
        'W': [0, -1], 
        'S': [1, 0],  
        'N': [-1, 0]  
    };

    routes.forEach((route) => {
        const [direction, distanceStr] = route.split(' ');
        const distance = Number(distanceStr);
        const [dx, dy] = directionMap[direction];

        if (isPathClear(park, x, y, dx, dy, distance)) {
            x += dx * distance;
            y += dy * distance;
        }
    });

    return [x, y];
}
