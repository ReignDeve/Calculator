var expressionInput = document.getElementById('expression');

function appendSymbol(symbol) {
  expressionInput.value += symbol;
}

function deleteLastSymbol() {
  expressionInput.value = expressionInput.value.slice(0, -1);
}

document.getElementById('calculatorForm').addEventListener('submit', function(event) {
  event.preventDefault();
  calculate();
});

function calculate() {
  var expression = expressionInput.value;

  // Überprüfen, ob der Ausdruck gültig ist
  if (!isValidExpression(expression)) {
    document.getElementById('result').textContent = 'Ungültiger Ausdruck';
    return;
  }

  var data = {
    expression: expression
  };

  fetch('calculator.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(function(response) {
    return response.text();
  })
  .then(function(result) {
    expressionInput.value = expression + ' = ' + result;
  });
}

function isValidExpression(expression) {
  // Überprüfen, ob der Ausdruck das erwartete Format hat
  var regex = /^\s*\d+(\.\d+)?\s*[\+\-\*\/]\s*\d+(\.\d+)?\s*$/;
  return regex.test(expression);
}