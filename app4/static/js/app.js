// Global state
let todos = [];
let filteredTodos = [];
let currentFilter = 'all';
let searchTerm = '';

// Load todos on page load
document.addEventListener('DOMContentLoaded', () => {
    loadTodos();
});

// Load todos from API
async function loadTodos() {
    const container = document.getElementById('todosContainer');
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const stats = document.getElementById('stats');
    const progressCard = document.getElementById('progressCard');

    // Show loading
    loading.classList.remove('hidden');
    error.classList.add('hidden');
    container.classList.add('hidden');
    stats.classList.add('hidden');
    progressCard.classList.add('hidden');

    try {
        const response = await fetch('/api/todo');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        todos = data.todo_list || [];

        // Update stats
        updateStats(todos);

        // Update progress visual
        updateProgress(todos);

        // Update last refreshed timestamp
        updateLastUpdated();

        // Apply filters + render
        applyFilters();

        // Hide loading, show container
        loading.classList.add('hidden');
        container.classList.remove('hidden');
        stats.classList.remove('hidden');
        if (todos.length > 0) {
            progressCard.classList.remove('hidden');
        }
    } catch (err) {
        console.error('Error loading todos:', err);
        error.textContent = `Error loading todos: ${err.message}`;
        error.classList.remove('hidden');
        loading.classList.add('hidden');
        showToast(`Failed to load todos: ${err.message}`, true);
    }
}

// Update statistics
function updateStats(todosList) {
    const total = todosList.length;
    const completed = todosList.filter(todo => todo.status === true).length;
    const pending = total - completed;

    document.getElementById('totalTodos').textContent = total;
    document.getElementById('completedTodos').textContent = completed;
    document.getElementById('pendingTodos').textContent = pending;
}

// Update progress widgets
function updateProgress(todosList) {
    const progressPercentEl = document.getElementById('progressPercent');
    const progressBarFill = document.getElementById('progressBarFill');

    if (!progressPercentEl || !progressBarFill) {
        return;
    }

    const total = todosList.length;
    const completed = todosList.filter(todo => todo.status === true).length;
    const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

    progressPercentEl.textContent = `${percent}%`;
    progressBarFill.style.width = `${percent}%`;
    progressBarFill.setAttribute('aria-valuenow', percent);
}

// Update metadata chip
function updateLastUpdated() {
    const lastUpdated = document.getElementById('lastUpdated');
    if (!lastUpdated) return;

    const now = new Date();
    const formatted = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    lastUpdated.textContent = `Updated ${formatted}`;
}

// Apply search + filter pipeline
function applyFilters() {
    filteredTodos = todos
        .filter(todo => {
            if (currentFilter === 'completed') return todo.status === true;
            if (currentFilter === 'pending') return todo.status === false;
            return true;
        })
        .filter(todo => todo.title.toLowerCase().includes(searchTerm.toLowerCase()));

    renderTodos(filteredTodos);
}

// Render todos
function renderTodos(todosList) {
    const container = document.getElementById('todosContainer');

    if (todosList.length === 0) {
        const hasTodos = todos.length > 0;
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">${hasTodos ? '🧭' : '📝'}</span>
                <p>${hasTodos ? 'No todos match your filters. Try adjusting search or filter tabs.' : 'No todos yet. Click "Add New Todo" to get started!'}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = todosList.map(todo => `
        <div class="todo-card ${todo.status ? 'completed' : ''}">
            <input
                type="checkbox"
                class="todo-checkbox"
                ${todo.status ? 'checked' : ''}
                onchange="toggleTodo(${todo.id}, this.checked)"
            >
            <div class="todo-content">
                <div class="todo-title">${escapeHtml(todo.title)}</div>
                <span class="todo-status">
                    ${todo.status ? 'Completed' : 'Pending'}
                </span>
            </div>
            <button class="btn-delete" onclick="deleteTodo(${todo.id})" title="Delete">
                🗑️
            </button>
        </div>
    `).join('');
}

// Toggle todo status
async function toggleTodo(id, status) {
    try {
        const response = await fetch(`/api/todo/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: status })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        showToast(`Todo #${id} marked as ${status ? 'completed' : 'pending'}.`);
        // Reload todos
        loadTodos();
    } catch (err) {
        console.error('Error updating todo:', err);
        alert(`Error updating todo: ${err.message}`);
        // Reload to reset checkbox
        loadTodos();
    }
}

// Add new todo
async function addTodo(event) {
    event.preventDefault();
    const titleInput = document.getElementById('todoTitle');
    const title = titleInput.value.trim();

    if (!title) {
        alert('Please enter a todo title');
        return;
    }

    try {
        const response = await fetch('/api/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: title })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Clear input and hide form
        titleInput.value = '';
        hideAddForm();

        // Reload todos
        loadTodos();
        showToast('Todo added successfully!');
    } catch (err) {
        console.error('Error adding todo:', err);
        alert(`Error adding todo: ${err.message}`);
        showToast(`Failed to add todo: ${err.message}`, true);
    }
}

// Delete todo
async function deleteTodo(id) {
    if (!confirm('Are you sure you want to delete this todo?')) {
        return;
    }

    try {
        const response = await fetch(`/api/todo/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Reload todos
        loadTodos();
        showToast('Todo deleted');
    } catch (err) {
        console.error('Error deleting todo:', err);
        alert(`Error deleting todo: ${err.message}`);
        showToast(`Failed to delete todo: ${err.message}`, true);
    }
}

// Show add form
function showAddForm() {
    document.getElementById('addForm').classList.remove('hidden');
    document.getElementById('todoTitle').focus();
}

// Hide add form
function hideAddForm() {
    document.getElementById('addForm').classList.add('hidden');
    document.getElementById('todoTitle').value = '';
}

// Search handler
function handleSearch(value) {
    searchTerm = value.trim();
    applyFilters();
}

// Filter tab handler
function setFilter(filter, buttonEl) {
    currentFilter = filter;
    document.querySelectorAll('.filter-pill').forEach(btn => {
        const isActive = btn === buttonEl;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive);
    });
    applyFilters();
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Simple toast notifications
let toastTimeout;
function showToast(message, isError = false) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.toggle('error-toast', isError);
    toast.classList.remove('hidden');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.add('hidden');
    }, 2500);
}
