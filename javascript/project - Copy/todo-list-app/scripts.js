// Initialize tasks array from localStorage or empty array
let tasks = JSON.parse(localStorage.getItem("tasks")) || []

// DOM elements
const taskForm = document.getElementById("taskForm")
const tasksList = document.getElementById("tasksList")
const emptyState = document.getElementById("emptyState")
const filterStatus = document.getElementById("filterStatus")
const filterPriority = document.getElementById("filterPriority")

// Event listeners
taskForm.addEventListener("submit", addTask)
filterStatus.addEventListener("change", renderTasks)
filterPriority.addEventListener("change", renderTasks)

// Initialize app
renderTasks()

// Add new task
function addTask(e) {
  e.preventDefault()

  const taskName = document.getElementById("taskName").value
  const dueDate = document.getElementById("dueDate").value
  const priority = document.getElementById("priority").value
  const status = document.getElementById("status").value

  const newTask = {
    id: Date.now(),
    name: taskName,
    dueDate: dueDate,
    priority: priority,
    status: status,
  }

  tasks.push(newTask)
  saveTasks()
  taskForm.reset()
  renderTasks()
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

// Render tasks based on filters
function renderTasks() {
  const statusFilter = filterStatus.value
  const priorityFilter = filterPriority.value

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    const matchesStatus = statusFilter === "All" || task.status === statusFilter
    const matchesPriority = priorityFilter === "All" || task.priority === priorityFilter
    return matchesStatus && matchesPriority
  })

  // Clear tasks list
  tasksList.innerHTML = ""

  // Show/hide empty state
  if (filteredTasks.length === 0) {
    emptyState.classList.remove("hidden")
    tasksList.style.display = "none"
  } else {
    emptyState.classList.add("hidden")
    tasksList.style.display = "flex"

    // Render each task
    filteredTasks.forEach((task) => {
      const taskElement = createTaskElement(task)
      tasksList.appendChild(taskElement)
    })
  }
}

// Create task element
function createTaskElement(task) {
  const taskDiv = document.createElement("div")
  taskDiv.className = `task-item priority-${task.priority.toLowerCase()} ${task.status.toLowerCase()}`

  const formattedDate = new Date(task.dueDate).toISOString()

  taskDiv.innerHTML = `
        <div class="task-header">
            <div class="task-name">${task.name}</div>
        </div>
        <div class="task-details">
            <div class="task-detail">
                <strong>Due:</strong> ${formattedDate}
            </div>
            <div class="task-detail">
                <span class="priority-badge ${task.priority.toLowerCase()}">${task.priority} Priority</span>
            </div>
            <div class="task-detail">
                <span class="status-badge ${task.status.toLowerCase()}">${task.status}</span>
            </div>
        </div>
        <div class="task-actions">
            ${
              task.status === "Pending"
                ? `<button class="btn-complete" onclick="toggleComplete(${task.id})">Mark Complete</button>`
                : `<button class="btn-complete" onclick="toggleComplete(${task.id})">Mark Pending</button>`
            }
            <button class="btn-delete" onclick="deleteTask(${task.id})">Delete</button>
        </div>
    `

  return taskDiv
}

// Toggle task completion status
function toggleComplete(taskId) {
  const task = tasks.find((t) => t.id === taskId)
  if (task) {
    task.status = task.status === "Completed" ? "Pending" : "Completed"
    saveTasks()
    renderTasks()
  }
}

// Delete task
function deleteTask(taskId) {
  if (confirm("Are you sure you want to delete this task?")) {
    tasks = tasks.filter((t) => t.id !== taskId)
    saveTasks()
    renderTasks()
  }
}
