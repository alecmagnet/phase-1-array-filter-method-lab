// Code your solution here
const drivers = [
	{
		name: 'Bobby',
		hometown: 'Pittsburgh'
	},
	{
		name: 'Sammy',
		hometown: 'New York'
	},
	{
		name: 'Sally',
		hometown: 'Cleveland'
	},
	{
		name: 'Annette',
		hometown: 'Los Angeles'
	},
	{
		name: 'Bobby',
		hometown: 'Tampa Bay'
	}
];

expect(matchName(drivers, 'Bobby')).to.eql([
	{
		name: 'Bobby',
		hometown: 'Pittsburgh'
	},
	{
		name: 'Bobby',
		hometown: 'Tampa Bay'
	}
]);

function findMatching (namesArray, string) {
	return namesArray.filter((num) => num.toLowerCase() === string.toLowerCase())
};

function fuzzyMatch(namesArray, string) {
	return namesArray.filter((num) => num[0] === string[0])
};

function matchName(namesArray, string) {
	return namesArray.filter((num) => num['name'] === string)
};