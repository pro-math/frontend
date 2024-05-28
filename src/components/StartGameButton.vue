<script setup>
function generateExample(operators) {
    // Функция для генерации случайного числа в заданном диапазоне
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Функция для выбора случайного оператора из списка
    function getRandomOperator() {
        const randomIndex = Math.floor(Math.random() * operators.length);
        return operators[randomIndex];
    }

    // Генерация двух случайных чисел
    const num1 = getRandomInt(1, 10);
    const num2 = getRandomInt(1, 10);
    const operator = getRandomOperator();

    // Формирование примера в виде строки
    const example = `${num1} ${operator} ${num2}`;

    // Вычисление ответа
    let answer;
    switch (operator) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            answer = (num2 !== 0) ? (num1 / num2).toFixed(2) : 'undefined'; // для деления, чтобы избежать деления на ноль
            break;
        default:
            answer = 'unknown operator';
    }

    // Возвращение примера и ответа
    return {
        example: example,
        answer: answer
    };
}

// Пример использования функции
const operators = ['+', '-', '*', '/'];
const generatedExample = generateExample(operators);
console.log('Пример:', generatedExample.example);
console.log('Ответ:', generatedExample.answer);
</script>

<template>
  <button
    class="btn bordered bg-secondary text-xl btn-xl max-sm:btn-sm border-dark-grey bodrer-4 text-center btn-xl"
  >
    НАЧАТЬ
  </button>
</template>
