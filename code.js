// переменная для хранения действия 
var op;

// функция расчёта
function calculator() {
    // переменная для результата
    var result;
    // получаем первое и второе число
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
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