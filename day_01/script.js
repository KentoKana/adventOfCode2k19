const fs = require('fs');
const dataString = fs.readFileSync('./input.txt', 'utf-8');
const massArray = dataString.split('\r\n');

const getFuelPerComponent = (mass) => {
	return Math.floor(mass / 3) - 2;
};

const getTotal = (array) => {
	return array.reduce((a, b) => a + b);
};

// Part 1
const requiredFuelArray = massArray.map((mass) => {
	return getFuelPerComponent(mass);
});

console.log('Part 1: ', getTotal(requiredFuelArray));

// Part 2
const getMassForFuel = (fuel) => {
	if (getFuelPerComponent(fuel) <= 0) {
		return 0;
	} else {
		fuel = getFuelPerComponent(fuel);
		return (fuel += getMassForFuel(fuel));
	}
};

const massPerModuleArray = massArray.map((mass) => {
	return getMassForFuel(mass);
});

console.log('Part 2: ', getTotal(massPerModuleArray));
