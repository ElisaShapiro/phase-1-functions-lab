function distanceFromHqInBlocks(streetLocation){
    if (streetLocation <42) {
        return (streetLocation - 42)*-1;
    } else return streetLocation - 42;
}

function distanceFromHqInFeet(streetLocation) {
    let numberOfBlocks = distanceFromHqInBlocks(streetLocation);
    return numberOfBlocks * 264;
}

function distanceTravelledInFeet(startLocation, endLocation) {
    if (startLocation < endLocation) {
        return (endLocation - startLocation) * 264;
     } else return (startLocation - endLocation) * 264;
}

function calculatesFarePrice(startLocation, endLocation) {
    let foot = (distanceTravelledInFeet(startLocation, endLocation));
    if (foot <= 400) {
        return 0;
    } else if ((foot > 400) && (foot <= 2000)) {
        return ((foot - 400) * 0.02);
    } else if ((foot > 2000) && (foot < 2500)) {
        return 25;
    } else if (foot > 2500) {
        return 'cannot travel that far'
    }
}

