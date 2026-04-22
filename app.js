const taskInput = document.getElementById("new-task");
const addButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
const searchInput = document.getElementById("search-task");

addButton.addEventListener("click", function() {
  const taskText = taskInput.value.trim();
  
  if (taskText !== "") {
    const li = document.createElement("li");
    
    // Simpan teks dalam span
    const textSpan = document.createElement("span");
    textSpan.textContent = taskText;
    li.appendChild(textSpan);

    // Wadah tombol agar rapi
    const btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";

    // Tombol Selesai
    const completeButton = document.createElement("button");
    completeButton.textContent = "Done";
    completeButton.className = "done-btn";
    completeButton.addEventListener("click", function() {
      li.classList.toggle("completed");
    });

    // Tombol Edit
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "edit-btn";
    editButton.addEventListener("click", function() {
      const updatedText = prompt("Edit tugas kamu:", textSpan.textContent);
      if (updatedText !== null && updatedText.trim() !== "") {
        textSpan.textContent = updatedText.trim();
      }
    });

    // Tombol Hapus
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", function() {
      li.remove();
    });

    btnGroup.appendChild(completeButton);
    btnGroup.appendChild(editButton);
    btnGroup.appendChild(deleteButton);
    
    li.appendChild(btnGroup);
    taskList.appendChild(li);

    taskInput.value = "";
    taskInput.focus();
  }
});

// Shortcut Enter
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addButton.click();
});

// Fitur Search
searchInput.addEventListener("input", function() {
  const filterText = searchInput.value.toLowerCase();
  const allTasks = taskList.getElementsByTagName("li");

  Array.from(allTasks).forEach(item => {
    const taskContent = item.querySelector("span").textContent.toLowerCase();
    item.style.display = taskContent.includes(filterText) ? "flex" : "none";
  });
});