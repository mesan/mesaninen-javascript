// Numbers: 4815162342
const numbersElement = document.getElementById('numbers');
const promisedNumbers = 
    new Promise(resolve => setTimeout(() => resolve(4815162342), 4000));

promisedNumbers.then(numbers => numbersElement.innerText = numbers);
