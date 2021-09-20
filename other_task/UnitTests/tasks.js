// 67) Дано натуральное число n ( n<= 100)
// б) Чему равна сума его цифр.
function sumOfDigits(num) {
  num += '';
  let result = +num
    .split('')
    .reduce((prev, cur) => +prev + +cur)
  return isNaN(result) ? 0 : result;
}

// 68) Дано натуральное число n ( n <= 9999)
// б) Верно ли, что это число содержит ровно три одинаковые цифры
function threeDigits(n) {
  if (!n) return false;
  let nums = n.toString()

  for (let i = 0, count = 0; i < nums.length / 2; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) count++;
    }
    if(count === 3) return true;
    count = 0;
  }
  return false;
}

module.exports = {sumOfNums: sumOfDigits, threeDigits}; // exports to test