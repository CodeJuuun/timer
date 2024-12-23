process.stdout.write("\x07");

const argument = process.argv.slice(2);
// console.log(argument)

const alarmClock = []; // store numbers in seconds when alarm will beep

for (let i = 0; i < argument.length; i++) {
  const time = Number(argument[i]);// converts the argument into a number and handles edge case where the value is not a number

  // loops through and checks if time is not a number, and also zero, skip it
  if (!isNaN(time) && time > 0) {
    alarmClock.push(time);
  }
  // console.log(time)
}

// handles edge case where no number is provided
if (alarmClock.length === 0) {
  console.log('No number was found');
  return;
}

alarmClock.forEach((time) => {
  setTimeout(() => {
    process.stdout.write("\x07");
    console.log(`Timer for ${time}`);
  }, time * 1000);
});