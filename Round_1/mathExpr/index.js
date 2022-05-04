function convertTime(time) {
  if (time[time.length - 2] == "a") {
    time = time.split(" ")[0].split(":");
    if (time[0] == 12) {
      time[0] = "0";
      return time.join(":");
    } else {
        return time.join(":");
        }
  } else if (time[time.length - 2] == "p") {
    time = time.split(" ")[0].split(":");

    if (time[0] != 12) {
      numTime = parseInt(time[0]) + 12;
      time[0] = numTime.toString();
      return time.join(":");
    }
    return time.join(":");
  } else {
    if (parseInt(time.split(":")[0]) < 12) {
      return time + " am";
    } else {
      numTime = parseInt(time.split(":")[0]) - 12;
      return numTime.toString() + ":" + time.split(":")[1] + " pm";
    }
  }
}
console.log(convertTime("12:00 am")); //, "0:00")
console.log(convertTime("6:20 pm")); //, "18:20")
console.log(convertTime("12:00 pm")); //, "12:00")
console.log(convertTime("3:00 am")); //, "3:00")
console.log(convertTime("3:00 pm")); //, "15:00")
console.log(convertTime("21:00")); //, "9:00 pm")
console.log(convertTime("5:05")); //, "5:05 am")
