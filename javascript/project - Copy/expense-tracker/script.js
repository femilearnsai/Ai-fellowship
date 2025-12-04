// Initialize expenses array from localStorage or empty array
let expenses = JSON.parse(localStorage.getItem("expenses")) || []
let monthlyBudget = Number.parseFloat(localStorage.getItem("monthlyBudget")) || 0

// DOM elements
const expenseForm = document.getElementById("expense-form")
const expenseName = document.getElementById("expense-name")
const expenseAmount = document.getElementById("expense-amount")
const expenseCategory = document.getElementById("expense-category")
const expenseDate = document.getElementById("expense-date")
const expensesTbody = document.getElementById("expenses-tbody")
const totalAmountDisplay = document.getElementById("total-amount")
const filterCategory = document.getElementById("filter-category")
const filteredTotalDisplay = document.getElementById("filtered-total")
const monthlyBudgetInput = document.getElementById("monthly-budget")
const setBudgetBtn = document.getElementById("set-budget-btn")
const budgetDisplay = document.getElementById("budget-display")
const alertBox = document.getElementById("alert-box")

// Set today's date as default
expenseDate.valueAsDate = new Date()

// Initialize the app
function init() {
  displayExpenses()
  updateTotalAmount()
  displayBudget()
  checkBudgetAlert()
}

// Format currency in Nigerian Naira
function formatCurrency(amount) {
  return (
    "₦" +
    Number.parseFloat(amount).toLocaleString("en-NG", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  )
}

// Add expense
expenseForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const newExpense = {
    id: Date.now(),
    name: expenseName.value.trim(),
    amount: Number.parseFloat(expenseAmount.value),
    category: expenseCategory.value,
    date: expenseDate.value,
  }

  expenses.push(newExpense)
  saveToLocalStorage()
  displayExpenses()
  updateTotalAmount()
  checkBudgetAlert()

  // Reset form
  expenseForm.reset()
  expenseDate.valueAsDate = new Date()

  // Show success feedback
  showTemporaryMessage("Expense added successfully!")
})

// Display expenses
function displayExpenses(filter = "All") {
  const filteredExpenses = filter === "All" ? expenses : expenses.filter((expense) => expense.category === filter)

  if (filteredExpenses.length === 0) {
    expensesTbody.innerHTML = `
            <tr class="no-expenses">
                <td colspan="5">${filter === "All" ? "No expenses recorded yet. Add your first expense above!" : "No expenses found for this category."}</td>
            </tr>
        `
    filteredTotalDisplay.textContent = ""
    return
  }

  // Sort by date (newest first)
  filteredExpenses.sort((a, b) => new Date(b.date) - new Date(a.date))

  expensesTbody.innerHTML = filteredExpenses
    .map(
      (expense) => `
        <tr>
            <td>${formatDate(expense.date)}</td>
            <td>${expense.name}</td>
            <td><span class="category-badge category-${expense.category}">${expense.category}</span></td>
            <td><strong>${formatCurrency(expense.amount)}</strong></td>
            <td><button class="delete-btn" onclick="deleteExpense(${expense.id})">Delete</button></td>
        </tr>
    `,
    )
    .join("")

  // Update filtered total if filtering
  if (filter !== "All") {
    const filteredTotal = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0)
    filteredTotalDisplay.textContent = `Filtered Total: ${formatCurrency(filteredTotal)}`
  } else {
    filteredTotalDisplay.textContent = ""
  }
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString)
  const options = { year: "numeric", month: "short", day: "numeric" }
  return date.toLocaleDateString("en-US", options)
}

// Delete expense
function deleteExpense(id) {
  if (confirm("Are you sure you want to delete this expense?")) {
    expenses = expenses.filter((expense) => expense.id !== id)
    saveToLocalStorage()
    displayExpenses(filterCategory.value)
    updateTotalAmount()
    checkBudgetAlert()
    showTemporaryMessage("Expense deleted successfully!")
  }
}

// Update total amount
function updateTotalAmount() {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  totalAmountDisplay.textContent = formatCurrency(total)
}

// Filter expenses
filterCategory.addEventListener("change", (e) => {
  displayExpenses(e.target.value)
})

// Set monthly budget
setBudgetBtn.addEventListener("click", () => {
  const budget = Number.parseFloat(monthlyBudgetInput.value)

  if (isNaN(budget) || budget <= 0) {
    alert("Please enter a valid budget amount.")
    return
  }

  monthlyBudget = budget
  localStorage.setItem("monthlyBudget", monthlyBudget)
  displayBudget()
  checkBudgetAlert()
  monthlyBudgetInput.value = ""
  showTemporaryMessage("Budget set successfully!")
})

// Display budget
function displayBudget() {
  if (monthlyBudget > 0) {
    budgetDisplay.textContent = `Current Monthly Budget: ${formatCurrency(monthlyBudget)}`
    monthlyBudgetInput.placeholder = formatCurrency(monthlyBudget)
  }
}

// Check budget alert
function checkBudgetAlert() {
  if (monthlyBudget === 0) {
    alertBox.style.display = "none"
    return
  }

  const totalSpending = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  const percentageUsed = (totalSpending / monthlyBudget) * 100

  if (percentageUsed >= 100) {
    alertBox.className = "alert-box danger"
    alertBox.textContent = `⚠️ BUDGET EXCEEDED! You have spent ${formatCurrency(totalSpending)} which is ${percentageUsed.toFixed(1)}% of your ${formatCurrency(monthlyBudget)} budget.`
    alertBox.style.display = "block"
  } else if (percentageUsed >= 80) {
    alertBox.className = "alert-box warning"
    alertBox.textContent = `⚠️ Budget Warning: You have spent ${percentageUsed.toFixed(1)}% of your monthly budget (${formatCurrency(totalSpending)} of ${formatCurrency(monthlyBudget)}).`
    alertBox.style.display = "block"
  } else {
    alertBox.style.display = "none"
  }
}

// Save to localStorage
function saveToLocalStorage() {
  localStorage.setItem("expenses", JSON.stringify(expenses))
}

// Show temporary success message
function showTemporaryMessage(message) {
  const messageDiv = document.createElement("div")
  messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4caf50;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 1000;
        font-weight: 600;
    `
  messageDiv.textContent = message
  document.body.appendChild(messageDiv)

  setTimeout(() => {
    messageDiv.remove()
  }, 3000)
}

// Initialize app on page load
init()
