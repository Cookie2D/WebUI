let n = 100;

// 67) Дано натуральное число n ( n<= 100)
// б) Чему равна сума его цифр.

function sumOfNums(num) {
  return num
    .toString()
    .split('')
    .reduce((prev, cur) => +prev + +cur)
}

console.log(sumOfNums(n))

n = 6000

// 68) Дано натуральное число n ( n <= 9999)
// б) Верно ли, что это число содержит ровно три одинаковые цифры

function threeDigits(n) {
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

console.log(threeDigits(n))

module.exports = {sumOfNums, threeDigits};