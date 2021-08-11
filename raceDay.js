let raceNumber = Math.floor(Math.random() * 1000);

let earlyReg = true;
let runnerAge = 4;

if (runnerAge > 18 && earlyReg === true) {
  raceNumber += 1000;
}

if (runnerAge > 18 && earlyReg === true) {
  console.log(`Your race number is ${raceNumber} and your starting time is 9:30am`);
} else if (runnerAge > 18 && earlyReg === false) {
  console.log(`Your race number is ${raceNumber} and your starting time is 11:00am`);
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber} and your starting time is 12:30pm`);
} else {
  console.log(`Your race number is ${raceNumber} and you start at 12:45pm`);
}

