const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

const checkPalindrome = () => {
  const regex = /[\W_]/gi;
  const userInput = textInput.value.replace(regex, '').toLowerCase();
  const userInputReverse = userInput.split('').reverse().join('').toLowerCase();

  if (userInput === '') {
    alert('Please input a value');
    return null;
  }

  if (userInput === userInputReverse) {
    result.innerHTML = `<b>${textInput.value}</b> is a palindrome`;
  } else {
    result.innerHTML = `<b>${textInput.value}</b> is not a palindrome`;
  }

  return null;
};

checkBtn.addEventListener('click', checkPalindrome);
textInput.addEventListener('keyup', (e) => (e.key === 'Enter' ? checkPalindrome() : null));
