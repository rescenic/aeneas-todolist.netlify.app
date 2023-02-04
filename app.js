// Ambil referensi dari DOM elements
const taskInput = document.querySelector("#taskInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#taskList");
const searchInput = document.querySelector("#searchInput");

// Buat array kosong untuk menyimpan tugas
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//Tambah sebuah tugas ke list tugas
const addTask = (task) => {
    tasks.push(task);
    renderTasks();
};

//Delete sebuah tugas di list tugas
const deleteTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    renderTasks();
};

//Edit sebuah tugas di list tugas
const editTask = (taskIndex, newTask) => {
    tasks[taskIndex] = newTask;
    renderTasks();
};

// Render list tugas ke halaman
const renderTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskList.innerHTML = "";
    const filteredTasks = tasks.filter((task) =>
        task.toLowerCase().includes(searchInput.value.toLowerCase())
    );

    filteredTasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = task;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn", "btn-danger", "float-right");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.onclick = () => {
            deleteTask(index);
        };
        li.appendChild(deleteBtn);

        const editBtn = document.createElement("button");
        editBtn.classList.add("btn", "btn-secondary", "float-right", "mr-2");
        editBtn.innerHTML = "Edit";
        editBtn.onclick = () => {
            taskInput.value = task;
            addTaskBtn.innerHTML = "Edit Task";
            addTaskBtn.onclick = () => {
                editTask(index, taskInput.value);
                taskInput.value = "";
                addTaskBtn.innerHTML = "Add Task";
                addTaskBtn.onclick = () => {
                    addTask(taskInput.value);
                    taskInput.value = "";
                };
            };
        };
        li.appendChild(editBtn);

        taskList.appendChild(li);
    });
};

// Tambah event listeners
addTaskBtn.onclick = () => {
    addTask(taskInput.value);
    taskInput.value = "";
};

taskInput.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) {
        addTask(taskInput.value);
        taskInput.value = "";
    }
});

// Render list tugas
searchInput.addEventListener("keyup", renderTasks);
renderTasks();
