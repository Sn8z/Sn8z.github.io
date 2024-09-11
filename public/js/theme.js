document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("themeToggle");
  const currentMode = localStorage.getItem("theme") || "dark";

  if (currentMode === "dark") {
    document.body.classList.add("dark");
		switcher.checked = true;
  } else {
    document.body.classList.remove("dark");
		switcher.checked = false;
  }

  switcher.addEventListener("change", () => {
    document.body.classList.toggle("dark");
    const mode = document.body.classList.contains("dark") ? "dark" : "light";
    switcher.textContent = mode === "dark" ? "Light" : "Dark";
    localStorage.setItem("theme", mode);
  });
});
