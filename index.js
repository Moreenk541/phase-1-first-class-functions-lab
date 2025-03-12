// Code your solution in this file!
const returnFirstTwoDrivers =function(drivers){
return drivers.slice(0,2)
  
}

   
console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])); 
const returnLastTwoDrivers=function(LastTwoDrivers){
    return LastTwoDrivers.slice(-2)
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]
console.log(selectingDrivers[0](['Antonia', 'Nuru', 'Amari', 'Mo']))

console.log(selectingDrivers[1](['Antonia', 'Nuru', 'Amari', 'Mo']));
function createFareMultiplier(num1){
    return function(fare){
        return fare*num1
    }
}

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(2)) 

const fareTripler =createFareMultiplier(3)
console.log(fareTripler(9)
)

const selectDifferentDrivers = function(drivers, driverSelector) {
    return driverSelector(drivers);
};


console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers));


console.log(selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers));
