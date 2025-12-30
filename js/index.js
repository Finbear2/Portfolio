const expand1 = document.getElementById("expand1");
const expand2 = document.getElementById("expand2");
const expand3 = document.getElementById("expand3");

const info1 = document.getElementById("info1");
const info2 = document.getElementById("info2");
const info3 = document.getElementById("info3");

let expanded1 = false;
let expanded2 = false;
let expanded3 = false;

expand1.addEventListener("click", () => {
    expanded1 = !expanded1;

    if (expanded1) {
        info1.removeAttribute("hidden");
        expand1.textContent = "▲";
    } else {
        info1.setAttribute("hidden", "");
        expand1.textContent = "▼";
    }

});

expand2.addEventListener("click", () => {

    expanded2 = !expanded2;

    if (expanded2) {
        info2.removeAttribute("hidden");
        expand2.textContent = "▲";
    } else {
        info2.setAttribute("hidden", "");
        expand2.textContent = "▼";
    }

});

expand3.addEventListener("click", () => {

    expanded3 = !expanded3;

    if (expanded3) {
        info3.removeAttribute("hidden");
        expand3.textContent = "▲";
    } else {
        info3.setAttribute("hidden", "");
        expand3.textContent = "▼";
    }

});