var humanYearsCatYearsDogYears = function (humanYears) {
  var catYears = 0;
  var dogYears = 0;
  if (humanYears == 1) {
    catYears =  humanYears * 15;
    dogYears =  humanYears*15;
  } else if (humanYears == 2) {
    catYears = +15 +9;
    dogYears = +15 +9;
  }
  else {
    catYears = 15 +9+4*(humanYears-2);
    dogYears = 15 +9+5*(humanYears-2);
  }
  return [humanYears, catYears, dogYears];
};

console.log(humanYearsCatYearsDogYears(1));//[1, 15, 15]
console.log(humanYearsCatYearsDogYears(2));//[2, 24, 24]
console.log(humanYearsCatYearsDogYears(3));//[ 3, 28, 29 ]
console.log(humanYearsCatYearsDogYears(4));//[ 4, 32, 34 ]
console.log(humanYearsCatYearsDogYears(10));//[ 10, 56, 64 ]
