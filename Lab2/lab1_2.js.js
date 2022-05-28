/**
 * 
 * @param {number} n число до которого ведётся сумма
 * @param {number} result сумма чисел от 1 до n
 */
function sumTo(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i;
  }

  return result;
}

let n = prompt("Число для суммы N:"); {
  alert(sumTo(n));
}