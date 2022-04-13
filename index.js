const drivers = [];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = function() {
    return [
        returnFirstTwoDrivers(drivers),
        returnLastTwoDrivers(drivers)   
    ];
}

const createFareMultiplier = function(i) {

    return function(fare) {
        (fare * i);
    }
}

