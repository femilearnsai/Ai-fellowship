
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const dueDateInput = document.getElementById('due-date-input');
    const priorityInput = document.getElementById('priority-input');
    const taskList = document.getElementById("task-list");
    const filterBtnAll = document.querySelector('#filter-btn-all');
    const filterBtnPending = document.querySelector('#filter-btn-pending');
    const filterBtnCompleted = document.querySelector('#filter-btn-completed');

    
    function saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let currentFilter = 'all';
    
    function deleteTask(id){
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
    };
    
    // Add new task
    taskForm.addEventListener('submit', function (e){
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            text: taskInput.value,
            dueDate: dueDateInput.value,
            priority: priorityInput.value,
            completed: false,
        };

        tasks.push(newTask);
        saveTasks();
        renderTasks();
        dueDateInput.value = new Date().tolSOString().split("T")[0];
    });

    // mark task as complete or delete task
    taskList.addEventListener('click', function(e){
        const target = e.target;
        const taskItem = target.closest('.task-item');
        if (!taskItem) return;
        const taskId = Number(taskItem.dataset.id);
        if (target.classList,contains('complete-checkbox'))
            toggleComplete(taskId);
        if (target.classList.contains('task-content') ||
            target.parentElement.classList.contains('task-content')) {
            toggleComplete(taskId);
        }

        if (target.classList.contains('delete-btn')) {
            deleteTask(taskId);
        }
    })

    // Filter tasks
    filterBtnAll.addEventListener('click', function(){renderTasks()})
    filterBtnPending.addEventListener('click', function(){
        tasks.filter((task)=>!task.completed)
        renderTasks()
    })
    
    filterBtnCompleted.addEventListener('click', function(){tasks.filter((task)=>task.completed)
        renderTasks()
    })
    const renderTasks = () => {
        taskList.innerHTML = '';


        const filteredTasks = tasks.filter(task => {
            if (currentFilter === 'completed') return task.completed;
            if (currentFilter === 'pending') return !task.completed;
            return true;
        });

        if (filteredTasks.length === 0) {
            taskList.innerHTML = '<li class="no-tasks">No tasks to show! 🎉</li>';
            return;
        }

        filteredTasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task-item', task.priority);
            if (task.completed) {
                taskItem.classList.add('completed');
            }
            taskItem.dataset.id = task.id;


            const formattedDate = new Date(task.dueDate).toLocaleDateString('en-US', {
                year: 'numeric', month: 'short', day: 'numeric'
            });

            taskItem.innerHTML = `
                <div class="task-content">
                    <span class="task-text">${task.text}</span>
                    <span class="task-meta">
                        Due: ${formattedDate} | Priority: ${task.priority}
                    </span>
                </div>
                <div class="task-actions">
                    <button class="delete-btn">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            taskList.appendChild(taskItem);
        });
    };


    const toggleComplete = (id) => {
        tasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        saveTasks();
        renderTasks();
    };

    renderTasks();

    

