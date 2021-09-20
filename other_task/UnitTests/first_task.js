n = 100;

// 67) Дано натуральное число n ( n<= 100)
// б) Чему равна сума его цифр.

function sumOfNums(num) {
  return num
    .toString()
    .split('')
    .reduce((prev, cur) => +prev + +cur)
}

console.log(sumOfNums(n))
