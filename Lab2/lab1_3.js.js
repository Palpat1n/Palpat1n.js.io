/**
 * 
 * @param {number} n число для факториала
 * @return {number}  - возращает n-1 для рекурсивного умножения до 1 
 */
function factorial(n) {
  if (n)
    return (n * factorial(n - 1));
  else
    return 1;
}
let n = prompt("Число для факториала N:");
if (n == 0) {
  alert(1);
} else
  alert(factorial(n));