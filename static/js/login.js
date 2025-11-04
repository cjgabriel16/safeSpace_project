document.addEventListener("DOMContentLoaded", () => {
    const authButton = document.querySelector(".auth-btn");

    authButton.addEventListener("click", (e) => {
        e.preventDefault();
        alert("This is a mock demo — no real login/register yet!");
    });
});
