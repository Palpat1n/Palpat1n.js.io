/**
 * 
 * @param {number} n - число чисел Фибоначи* 
 * @returns {number} - n-ное число Фибоначи
 * 
 */
function fib(n) {
    let count = 0;
    let n1 = 1,
        n2 = 1,
        c = 0;
    if (n == 0)
        n2 = 0;
    else
    if (n >= 1)
        if (n >= 2) {
            for (let i = 2; i < n; i++) {
                c = n2;
                n2 = n1 + n2;
                n1 = c;
            }
        }
    return n2;
}
let n = prompt("Введите к-во чисел фибоначи");
alert(fib(n));