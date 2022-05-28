/**
 * 
 * @param {number} num - число
 * @param {number} cols - к-во столбцов 
 * @returns {string} - на вывод
 * 
 */
function printNumbers(num, cols) {
    let str1 = ""
    let rows = Math.ceil(num / cols); //кол-во строк округлено в большую сторону
    for (let row = 0; row < rows; ++row) {
        let str = '';
        for (let col = 0; col < cols; ++col) {
            if ((row + rows * col) < num)
                str += (row + rows * col) + ' ';
        }
        str1+=str+"\n";       
    }
    return str1;
}
let num = +prompt("Введите число");
let cols = +prompt("Введите кол-во колонок");
console.log(printNumbers(num, cols));