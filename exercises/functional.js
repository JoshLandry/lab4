var _ = require("../node_modules/lodash/lodash"), exercises = {};

// 8 points
// this function takes a variable number of string arguments
// use the arguments keyword as well as the _.each() method from
// lodash to return the first string containing the substring
// "waldo"
exercises.wheresWaldo = function() {
  // TODO: implement me
  var waldoLocation;
  _.each(arguments, function(val, index) {
    if (val.search("waldo") >= 0) {
      waldoLocation = val;
    }
	});
  return waldoLocation;
};

// 8 points
// given an array of arrays (all holding numbers), return an
// array holding the largest number in each sub-array.
// use _.chain() and _.map() and _.max()
exercises.largestNums = function(arrayOfNumberArrays) {
  // TODO: implement me
  var largestNumArray = _.map(arrayOfNumberArrays, function(val, index) {
    return _.chain(val).max().value();
  });
  return largestNumArray;
};

exercises.largestNums([ [ 1, 2, 3 ], [ 1, 2, 5 ], [ 1, 2, 6 ] ]);

// 8 points
// you are given an array of Date objects and two boundary dates
// use the lodash _.filter() method to return an array with all
// the objects from dates that fit within the given boundaries
exercises.filterDates = function(dates, lowerBound, upperBound) {
  // TODO: implement me
    var datesWithinBound = [];
    _.each(dates, function(val, index) {
      val =  new Date(val);
    if (val > lowerBound && val < upperBound) {
      datesWithinBound.push(val);
    }
	});
  return datesWithinBound;
};

var upperBoundaryDate = new Date("2014/09/26"),
lowerBoundaryDate = new Date("2012/06/23");

exercises.filterDates([ "2014/10/26", "2014/09/25", "2010/04/21", "2012/05/24" ],
  lowerBoundaryDate, upperBoundaryDate);

// 16 points (including the test)
// make up your own exercise like those above. implement it and
// write a test for it in tests/functional.spec.js.
// for 4 extra credit points, use _.reduce()

// Josh's exercise - Three games are played everyday, after which the total
// points scored the game are stored in an array unique to that day, meaning
// every week generates 7 arrays of 3 values each.  Write a function that
// generates a new array that totals the points for each day, using the lodash
// _.reduce() method.

exercises.josh = function(array) {
	var pointsPerDay = [];
	_.each(array, function(val, index) {
	 var totalForDay = _.reduce(val, function(sum, val) {
    return sum + val;
		}, 0);
		pointsPerDay.push(totalForDay);
	});
	return pointsPerDay;
};

exercises.josh([ [ 3, 2, 1 ], [ 0, 0, 6 ], [ 2, 4, 0 ], [ 5, 1, 0 ], [ 1, 1, 4 ],
[ 2, 2, 2 ], [ 2, 3, 1 ] ]);

module.exports = exercises;
