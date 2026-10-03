// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Dark / light mode toggle (remembers the choice)
var root = document.documentElement;
var btn = document.getElementById("theme-toggle");

function updateLabel() {
  var dark = root.getAttribute("data-theme") === "dark";
  btn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
}
updateLabel();

btn.addEventListener("click", function () {
  var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
  updateLabel();
});