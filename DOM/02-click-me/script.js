const form = document.querySelector(".form");

form.addEventListener("click", () => {
    if (form.classList.contains("square")) {
        form.classList.remove("square");
        form.classList.add("circle");
    } else {
        form.classList.remove("circle");
        form.classList.add("square");
    }
});