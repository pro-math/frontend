export function generateExample(operations, min, max) {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function getRandomOperation(operations) {
    const randomIndex = Math.floor(Math.random() * operations.length)
    return operations[randomIndex]
  }

  let num1 = getRandomInt(min, max)
  let num2 = getRandomInt(min, max)
  const operation = getRandomOperation(operations)

  if (operation === '/') {
    num2 = getRandomInt(min, max)
    const multiplier = getRandomInt(2, Math.floor(max / num2))
    num1 = num2 * multiplier
    if (num1 < min) {
      num1 = min // Убедимся, что num1 находится в пределах min
    }
  }

  // Вычисление ответа
  let answer
  switch (operation) {
    case '+':
      answer = num1 + num2
      break
    case '-':
      answer = num1 - num2
      break
    case '*':
      answer = num1 * num2
      break
    case '/':
      answer = num2 !== 0 ? num1 / num2 : undefined
      break
    default:
      answer = 'unknown operation'
  }
  // Формирование примера в виде строки

  const example = `${num1} ${operation} ${num2}`

  return {
    example: example,
    answer: answer
  }
}
