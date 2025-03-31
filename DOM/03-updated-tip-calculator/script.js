const calcBtn = document.querySelector(".calculate-btn");
const calcForm = document.querySelector(".output");
const checkTextbar = document.querySelector("#check");
const tipsTextbar = document.querySelector("#tips");
const peopleTextbar = document.querySelector("#people");
const tipsOutput = document.querySelector("#tips-output");
const checkPerPerson = document.querySelector("#check-per-person");

calcBtn.addEventListener("click", () => {
    const check = parseFloat(checkTextbar.value);
    const tips = Math.ceil((parseInt(tipsTextbar.value) / 100 * check));
    const people = parseInt(peopleTextbar.value);

    tipsOutput.textContent = `${tips} руб`;
    checkPerPerson.textContent = `${Math.ceil((tips + check) / people)} руб`;

    if (calcForm.classList.contains("invis")) {
        calcForm.classList.remove("invis");
    }
})