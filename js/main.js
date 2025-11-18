// 1. عناصر اصلی را انتخاب می‌کنیم
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

// 2. افزودن آیتم
addBtn.addEventListener("click", addTodo);

// تابع افزودن کار
function addTodo() {
  const text = input.value.trim();

  if (text === "") {
    alert("Please enter a task!");
    return;
  }

  // ساخت li جدید
  const li = document.createElement("li");
  li.textContent = text;

  // افزودن به لیست
  list.appendChild(li);
  // خالی کردن input
  input.value = "";
}
