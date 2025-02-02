document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openModal");
    const closeBtn = document.getElementById("closeModal");
    const modal = document.getElementById("modal");

    if (openBtn && closeBtn && modal) {
        openBtn.addEventListener("click", () => {
            modal.classList.add("open");
        });

        closeBtn.addEventListener("click", () => {
            modal.classList.remove("open");
        });
    } else {
        console.error("Modal elements not found in the DOM");
    }
});