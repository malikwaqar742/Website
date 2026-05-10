document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  const actionButton = document.getElementById("actionButton");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (actionButton) {
    actionButton.addEventListener("click", () => {
      alert("Hello! Your starter website is ready.");
    });
  }

  console.log("DOM fully loaded and parsed. Basic setup complete.");
});
