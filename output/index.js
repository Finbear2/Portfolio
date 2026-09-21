let activeWindow = null;
let offsetX = 0;
let offsetY = 0;
let index = 1;


const SizeIcon = document.getElementById("Size-icon");
const SizePopup = document.getElementById("Size");
const SizeSound = new Audio("sounds/tada.mp3");


const AestheticsIcon = document.getElementById("Aesthetics-icon");
const AestheticsPopup = document.getElementById("Aesthetics");
const AestheticsSound = new Audio("sounds/tada.mp3");


const CustomerIcon = document.getElementById("Customer-icon");
const CustomerPopup = document.getElementById("Customer");
const CustomerSound = new Audio("sounds/yougotmail.mp3");


const FunctionIcon = document.getElementById("Function-icon");
const FunctionPopup = document.getElementById("Function");
const FunctionSound = new Audio("sounds/tada.mp3");


const SafetyIcon = document.getElementById("Safety-icon");
const SafetyPopup = document.getElementById("Safety");
const SafetySound = new Audio("sounds/error.mp3");


const EnvironmentIcon = document.getElementById("Environment-icon");
const EnvironmentPopup = document.getElementById("Environment");
const EnvironmentSound = new Audio("sounds/error.mp3");


const CostIcon = document.getElementById("Cost-icon");
const CostPopup = document.getElementById("Cost");
const CostSound = new Audio("sounds/exclamation.mp3");


const startupScreen = document.querySelector(".startup-screen");
const startupSound = new Audio("sounds/startup.mp3");

SizeIcon.addEventListener("dblclick", () => {
    if (getComputedStyle(SizePopup).display === "none") {
        SizeSound.play();
        SizePopup.style.top = "50%";
        SizePopup.style.left = "50%";
        SizePopup.style.transform = "translate(-50%, -50%)";
        SizePopup.style.zIndex = index;
        SizePopup.style.display = "block";

        index++;
    }
});


AestheticsIcon.addEventListener("dblclick", () => {
    if (getComputedStyle(AestheticsPopup).display === "none") {
        AestheticsSound.play();
        AestheticsPopup.style.top = "50%";
        AestheticsPopup.style.left = "50%";
        AestheticsPopup.style.transform = "translate(-50%, -50%)";
        AestheticsPopup.style.zIndex = index;
        AestheticsPopup.style.display = "block";

        index++;
    }
});


CustomerIcon.addEventListener("dblclick", () => {
    if (getComputedStyle(CustomerPopup).display === "none") {
        CustomerSound.play();
        CustomerPopup.style.top = "50%";
        CustomerPopup.style.left = "50%";
        CustomerPopup.style.transform = "translate(-50%, -50%)";
        CustomerPopup.style.zIndex = index;
        CustomerPopup.style.display = "block";

        index++;
    }
});


FunctionIcon.addEventListener("dblclick", () => {
    if (getComputedStyle(FunctionPopup).display === "none") {
        FunctionSound.play();
        FunctionPopup.style.top = "50%";
        FunctionPopup.style.left = "50%";
        FunctionPopup.style.transform = "translate(-50%, -50%)";
        FunctionPopup.style.zIndex = index;
        FunctionPopup.style.display = "block";

        index++;
    }
});


SafetyIcon.addEventListener("dblclick", () => {
    if (getComputedStyle(SafetyPopup).display === "none") {
        SafetySound.play();
        SafetyPopup.style.top = "50%";
        SafetyPopup.style.left = "50%";
        SafetyPopup.style.transform = "translate(-50%, -50%)";
        SafetyPopup.style.zIndex = index;
        SafetyPopup.style.display = "block";

        index++;
    }
});


EnvironmentIcon.addEventListener("dblclick", () => {
    if (getComputedStyle(EnvironmentPopup).display === "none") {
        EnvironmentSound.play();
        EnvironmentPopup.style.top = "50%";
        EnvironmentPopup.style.left = "50%";
        EnvironmentPopup.style.transform = "translate(-50%, -50%)";
        EnvironmentPopup.style.zIndex = index;
        EnvironmentPopup.style.display = "block";

        index++;
    }
});


CostIcon.addEventListener("dblclick", () => {
    if (getComputedStyle(CostPopup).display === "none") {
        CostSound.play();
        CostPopup.style.top = "50%";
        CostPopup.style.left = "50%";
        CostPopup.style.transform = "translate(-50%, -50%)";
        CostPopup.style.zIndex = index;
        CostPopup.style.display = "block";

        index++;
    }
});


document.querySelectorAll('[aria-label="Close"]').forEach(button => {
    button.addEventListener("click", () => {
        const window = button.closest(".window");
        window.style.display = "none";
    });
});

document.querySelectorAll('[aria-label="Maximize"]').forEach(button => {
    button.addEventListener("click", () => {
        const win = button.closest(".window");

        if (win.classList.contains("maximized")) {
            win.classList.remove("maximized");
            win.style.width = "300px";
            win.style.height = "300px";
            win.style.top = "";
            win.style.left = "";
            win.style.transform = "";
        }

        else {
            win.classList.add("maximized");
            win.style.top = "0";
            win.style.left = "0";
            win.style.width = "100vw";
            win.style.height = "100vh";
        }
    });
});

document.querySelectorAll(".window").forEach(win => {
    const bar = win.querySelector(".title-bar");

    bar.addEventListener("mousedown", (e) => {
        activeWindow = win; offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;

        bar.style.cursor = "grabbing";
    });

    win.addEventListener("mousedown", (e) => {
        win.style.zIndex = index;
        index++;
    });
});

document.addEventListener("mousemove", (e) => {
    if (!activeWindow) return;

    activeWindow.style.left = (e.clientX - offsetX) + "px";
    activeWindow.style.top = (e.clientY - offsetY) + "px";
});

document.addEventListener("mouseup", () => {
    if (activeWindow) {
        const bar = activeWindow.querySelector(".title-bar");
        bar.style.cursor = "grab";
    }

    activeWindow = null;
});

document.querySelectorAll(".tabs").forEach(tabs => {
    const buttons = tabs.querySelectorAll('[role="tab"]');
    const panels = tabs.querySelectorAll('[role="tabpanel"]');

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            buttons.forEach(btn => btn.setAttribute("aria-selected", "false"));
            panels.forEach(panel => panel.hidden = true);

            button.setAttribute("aria-selected", "true");

            const panel = tabs.querySelector("#" + button.getAttribute("aria-controls"));
            panel.hidden = false;
        });
    });
});

startupScreen.addEventListener("dblclick", () => {
    startupScreen.style.display = "none";
    startupScreen.style.pointerEvents = "none";

});

setTimeout(() => {
    if (getComputedStyle(startupScreen).pointerEvents != "none") {
        startupSound.play(); startupScreen.style.opacity = "0%";
        startupScreen.style.pointerEvents = "none";
    }
}

    , 4000);