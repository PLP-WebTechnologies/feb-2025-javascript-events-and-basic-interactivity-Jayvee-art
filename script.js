function changeText() {
  document.getElementById("itemList").children[0].textContent = "Text Changed!";
}

function toggleStyle() {
  document.body.classList.toggle("dark-mode");
}

function addItem() {
  const li = document.createElement("li");
  li.textContent = "New Item";
  document.getElementById("itemList").appendChild(li);
}

function removeItem() {
  const list = document.getElementById("itemList");
  if (list.children.length > 0) {
    list.removeChild(list.lastElementChild);
  }
}

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Modal Logic
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Form LocalStorage
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

window.addEventListener("DOMContentLoaded", () => {
  nameInput.value = localStorage.getItem("userName") || "";
  emailInput.value = localStorage.getItem("userEmail") || "";
});

nameInput.addEventListener("input", () => {
  localStorage.setItem("userName", nameInput.value);
});

emailInput.addEventListener("input", () => {
  localStorage.setItem("userEmail", emailInput.value);
});

document.getElementById("clearStorage").addEventListener("click", () => {
  localStorage.removeItem("userName");
  localStorage.removeItem("userEmail");
  nameInput.value = "";
  emailInput.value = "";
  alert("Saved data cleared!");
});
