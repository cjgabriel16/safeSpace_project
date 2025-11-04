document.addEventListener("DOMContentLoaded", () => {
  const appContainer = document.querySelector(".app-container");
  const menuToggle = document.getElementById("menu-toggle");

  // ==== Sidebar toggle ====
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      appContainer.classList.toggle("sidebar-collapsed");
    });
  }

  // ==== Sidebar active state ====
  const clickableIcons = document.querySelectorAll(".nav-icon, .sidebar-btn");
  clickableIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      clickableIcons.forEach((i) => i.classList.remove("active"));
      if (icon.tagName === "A") icon.classList.add("active");
    });
  });

  // ==== Login dropdown toggle ====
  const loginBtn = document.querySelector(".login-btn");
  const dropdownContent = document.querySelector(".dropdown-content");

  if (loginBtn && dropdownContent) {
    loginBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent event bubbling
      dropdownContent.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!loginBtn.contains(e.target)) {
        dropdownContent.classList.remove("show");
      }
    });
  }

  // ==== Example Notification Action ====
  const notificationBtn = document.getElementById("notification-btn");
  if (notificationBtn) {
    notificationBtn.addEventListener("click", () => {
      alert("🔔 Notifications panel coming soon!");
    });
  }
});
