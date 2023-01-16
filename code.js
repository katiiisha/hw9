// переменная для хранения действия 
var op;

// функция расчёта
function calculator() {
    // переменная для результата
    let result;
    // получаем первое и второе число
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    // делаем расчеты опираясь на то, что запомнила переменная ор
    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    // отправляем результат на страницу
    document.getElementById("result").innerHTML = result;
}
//как я поняла эта функция не имеет доступа к значениям переменных calculator, поэтому была идея найти элементы по id на стр и записать пустую строку, но как можно заметить, она не сработала 
function clearAll() {
    document.getElementById("result").innerHTML = '';
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
}