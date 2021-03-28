const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // минимальное число ходов, необходимое для решения головоломки, равно (2 в степени n) − 1, где n — число дисков
  let turns = Math.pow(2, disksNumber) - 1;
  let seconds = Math.floor(turns / (turnsSpeed / 3600)); // 1 час = 3600 секунд
  let result = {
    turns: turns,
    seconds: seconds
  };
  return result;
};