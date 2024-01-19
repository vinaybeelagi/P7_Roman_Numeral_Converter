// Get references to HTML elements
const form = document.getElementById('form');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

// Function to convert a number to Roman numerals
const convertToRoman = num => {
  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const res = [];

  // Iterate through the reference array and build the result array
  ref.forEach(function (arr) {
    while (num >= arr[1]) {
      res.push(arr[0]);
      num -= arr[1];
    }
  });

  return res.join('');
};

// Function to validate input and display error messages
const isValid = (str, int) => {
    // Variable to store error text
    let errText = '';
  
    // Check for invalid input (non-numeric or contains 'e')
    if (!str || str.match(/[e.]/g)) {
      errText = 'Please enter a valid number.';
    } else if (int < 1) {
      errText = 'Please enter a number greater than or equal to 1.';
    } else if (int > 3999) {
      errText = 'Please enter a number less than or equal to 3999.';
    } else {
      // No errors detected
      return true;
    }
  
    // Handle error text and output styling
    output.innerText = errText;
    output.classList.add('alert');
  
    return false;
  };
  // Function to clear output and remove alert styling
const clearOutput = () => {
    output.innerText = '';
    output.classList.remove('alert');
  };
  // Event listener for form submission
form.addEventListener('submit', e => {
    e.preventDefault();
    updateUI();
  });
  
  // Event listener for button click
  convertButton.addEventListener('click', () => {
    updateUI();
  });