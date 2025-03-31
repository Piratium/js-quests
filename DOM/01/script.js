function btnClick() {
    const textBar = document.getElementById("textBar");
    textBar.value = "";
}

const wipeBtn = document.getElementById("wipeBtn")
wipeBtn.addEventListener("click", btnClick)

