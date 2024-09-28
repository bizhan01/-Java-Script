document.getElementById("addBtn").addEventListener("click", function() {
    const item = document.getElementById("todoInput").value;
    const listItem = document.createElement("li");
    listItem.textContent = item;
    document.getElementById("todoList").appendChild(listItem);
});
