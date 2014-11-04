var expect = require("../node_modules/chai/chai").expect,
    functional = require("../exercises/functional");

describe("Functional", function() {

  it("should find waldo", function() {
    var result = functional.wheresWaldo(
      "kitty star trek", "firefly rules",
      "waldorf salad", "read dune"
    );

    // use equal to compare primitives
    expect(result).to.equal("waldorf salad");
  });

  it("should find the largest numbers", function() {
    var testData = [ [ 1, 2 ],  [ 4, 10 ],  [ 15, 1, 3 ],  [ 0 ] ],
        result = functional.largestNums(testData);

    // use eql to compare objects
    expect(result).to.eql([ 2, 10, 15, 0 ]);
  });

  it("should return filtered dates", function() {
    var dateArray = [],
        lower = new Date("2001/01/01"),
        upper = new Date("2004/01/01"),
        answer, result;

    // create test data
    dateArray.push( new Date("2000/12/1") );
    dateArray.push( new Date("2001/12/1") );
    dateArray.push( new Date("2002/12/1") );
    dateArray.push( new Date("2003/12/1") );

    // expected result
    answer = [ dateArray[1], dateArray[2], dateArray[3] ];

    // call the method we're testing
    result = functional.filterDates(dateArray, lower, upper);

    expect(result).to.eql(answer);
  });

  // this test is pending because i didn't give it a
  // function argument.
  // TODO: write a test for the custom method you wrote
  // in exercises/functional.js
  it("should total the daily points", function() {
    var newTestData = [ [ 3, 2, 5 ], [ 1, 3, 6 ], [ 2, 4, 2 ], [ 3, 1, 1 ], [ 1, 0, 4 ],
    [ 1, 2, 2 ], [ 2, 0, 1 ] ],
    result = functional.josh(newTestData),
    answer = [ 10, 10, 8, 5, 5, 5, 3 ];
    expect(result).to.eql(answer);
  });

});
