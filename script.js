var expenseTotal = 0;
var incomeTotal = 0;

// Function to add expense
function addExpense() {
  var expenseInput = document.getElementById('expenseInput');
  var expenseAmount = Number(expenseInput.value);
  if (!isNaN(expenseAmount) && expenseAmount > 0) {
    expenseTotal += expenseAmount;
    updateTotals();
    expenseInput.value = '';
  } else {
    alert('Please enter a valid expense amount.');
  }
}

// Function to add income
function addIncome() {
  var incomeInput = document.getElementById('incomeInput');
  var incomeAmount = Number(incomeInput.value);
  if (!isNaN(incomeAmount) && incomeAmount > 0) {
    incomeTotal += incomeAmount;
    updateTotals();
    incomeInput.value = '';
    } else {
    alert('Please enter a valid income amount.');
    }
}

// Function to update totals
function updateTotals() {
  var savingsTotal = incomeTotal - expenseTotal;
  document.getElementById('expenseTotal').textContent = 'Rupees ' + expenseTotal.toFixed(2);
  document.getElementById('incomeTotal').textContent = 'Rupees ' + incomeTotal.toFixed(2);
  document.getElementById('savingsTotal').textContent = 'Rupees ' + savingsTotal.toFixed(2);
    if (expenseTotal > 100){
      alert("Kharcha Kam kar Bhai! Paisay Nahi Hen Tere Paas!")
    }
}

// Event listeners for buttons
document.getElementById('addExpenseBtn').addEventListener('click', addExpense);
document.getElementById('addIncomeBtn').addEventListener('click', addIncome);
