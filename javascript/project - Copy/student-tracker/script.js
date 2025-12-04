// Student data array
let students = []

// Delete student function
function deleteStudent(id) {
  if (confirm("Are you sure you want to delete this student?")) {
    students = students.filter((student) => student.id !== id)
    saveStudents()
    renderStudents()
  }
}

// Save to localStorage
function saveStudents() {
  localStorage.setItem("students", JSON.stringify(students))
}

// Load from localStorage
function loadStudents() {
  const stored = localStorage.getItem("students")
  if (stored) {
    students = JSON.parse(stored)
  }
}


// Load students from localStorage on page load
document.addEventListener("DOMContentLoaded", () => {
  loadStudents()
  renderStudents()
})

// Form submission
document.getElementById("studentForm").addEventListener("submit", (e) => {
  e.preventDefault()
  addStudent()
})

// Search functionality
document.getElementById("searchInput").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase()
  renderStudents(searchTerm)
})

// Add student function
function addStudent() {
  const name = document.getElementById("studentName").value
  const age = Number.parseInt(document.getElementById("studentAge").value)
  const studentClass = document.getElementById("studentClass").value
  const imageUrl = document.getElementById("imageUrl").value
  const subject1 = Number.parseFloat(document.getElementById("subject1").value)
  const subject2 = Number.parseFloat(document.getElementById("subject2").value)
  const subject3 = Number.parseFloat(document.getElementById("subject3").value)

  // Calculate average
  const average = ((subject1 + subject2 + subject3) / 3).toFixed(2)

  // Determine performance category
  let performance
  if (average >= 75) {
    performance = "excellent"
  } else if (average >= 50) {
    performance = "good"
  } else {
    performance = "needs-help"
  }

  // Create student object
  const student = {
    id: Date.now(),
    name: name,
    age: age,
    class: studentClass,
    imageUrl: imageUrl,
    scores: [subject1, subject2, subject3],
    average: Number.parseFloat(average),
    performance,
  }

  // Add to array
  students.push(student)

  // Save to localStorage
  saveStudents()

  // Render table
  renderStudents()

  // Reset form
  document.getElementById("studentForm").reset()
}

// Render students table
function renderStudents(searchTerm = "") {
  const tbody = document.getElementById("studentTableBody")
  const emptyState = document.getElementById("emptyState")

  // Filter students based on search term
  const filteredStudents = students.filter((student) => student.name.toLowerCase().includes(searchTerm))

  // Show/hide empty state
  if (filteredStudents.length === 0) {
    tbody.innerHTML = ""
    emptyState.classList.remove("hidden")
    return
  } else {
    emptyState.classList.add("hidden")
  }

  // Clear tbody
  tbody.innerHTML = ""

  // Add each student
  filteredStudents.forEach((student) => {
    const row = document.createElement("tr")

    const performanceText = {
      excellent: "Excellent",
      good: "Good",
      "needs-help": "Needs Help",
    }

    row.innerHTML = `
            <td><img src="${student.imageUrl}" alt="${student.name}" class="profile-img" onerror="this.src='https://via.placeholder.com/50'"></td>
            <td><strong>${student.name}</strong><br><small>Age: ${student.age}</small></td>
            <td>${student.class}</td>
            <td><strong>${student.average}</strong></td>
            <td><span class="badge ${student.performance}">${performanceText[student.performance]}</span></td>
            <td><button class="btn-delete" onclick="deleteStudent(${student.id})">Delete</button></td>
        `

    tbody.appendChild(row)
  })
}

