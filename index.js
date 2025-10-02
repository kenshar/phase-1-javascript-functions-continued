// code your solution here
// index.js

// 1. saturdayFun – function declaration with default parameter
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// 2. mondayWork – function expression with default parameter
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// 3. wrapAdjective – higher-order function that returns a function
const wrapAdjective = function(symbol = "*") {
  return function(adjective = "special") {
    return `You are ${symbol}${adjective}${symbol}!`;
  };
};

// Optional: For testing purposes, you can also attach to window
// (not always necessary with JSDOM if they're global)
// window.saturdayFun = saturdayFun;
// window.mondayWork = mondayWork;
// window.wrapAdjective = wrapAdjective;