// Code your solution in this file!
// Function to calculate distance from Scuber HQ in blocks
function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42;
    return Math.abs(someValue - hqLocation);
}

// Function to calculate distance from Scuber HQ in feet
function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}

// Function to calculate total feet traveled between start and destination
function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}

// Function to calculate fare price based on distance traveled
function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
