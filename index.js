const card = document.getElementById("name-card");
const bar = document.getElementById("bar-text");

const hoverTurnOne = document.getElementById("hover-turn-1");
hoverTurnOne.style.boxShadow = "8px 8px 0 0 black"
hoverTurnOne.style.rotate = "367.75deg";

const hoverTurnTwo = document.getElementById("hover-turn-2");
hoverTurnTwo.style.boxShadow = "-8px 8px 0 0 black"
hoverTurnTwo.style.rotate = "355deg";

const hoverTurnThree = document.getElementById("hover-turn-3");
hoverTurnThree.style.boxShadow = "4px 8px 0 0 black"
hoverTurnThree.style.rotate = "361deg";

const orangeTab = document.getElementById("orange");
const greenTab = document.getElementById("greenSP");
const blueTab = document.getElementById("blue");
const peachTab = document.getElementById("peach");

const folder = document.getElementsByClassName("project-folder")[0];
const description = document.getElementById("description");
const title = document.getElementById("title");
const image = document.getElementById("image");
const link = document.getElementById("link");
const body = document.getElementById("body");

const rainbow = document.getElementsByClassName("rainbow")[0];

const strength = 60;
let rainbowValue = 1;

const rect = card.getBoundingClientRect();

let ogCardX = rect.left + rect.width / 2 + 5;
let ogCardY = rect.top + rect.height / 2 + 5;

let barLeft = -385

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function updateRainbow() {

    if (rainbowValue >= 255){
        rainbowValue = 1;
    }

    rainbow.style.color = `hsl(${rainbowValue}, 100%, 40%)`;

    rainbowValue++;

    if (barLeft >= 0) {
        barLeft = -385;
    }

    bar.style.left = `${barLeft}px`;

    barLeft++;

}

function updateOrigin() {
    const rect = card.getBoundingClientRect();
    ogCardX = rect.left + rect.width / 2 + 5;
    ogCardY = rect.top + rect.height / 2 + 5;
}

window.addEventListener("scroll", updateOrigin);
window.addEventListener("resize", updateOrigin);


setInterval(updateRainbow, 20);

document.addEventListener("mousemove", (e) => {

    /* Name Card */

    var rect = card.getBoundingClientRect();

    var insideX = e.clientX >= rect.left && e.clientX <= rect.right;
    var insideY = e.clientY >= rect.top && e.clientY <= rect.bottom;

    const cardX = rect.left + rect.width / 2;
    const cardY = rect.top + rect.height / 2;

    if ( insideX && insideY ) {
        
        const deltaX = (e.clientX - cardX) / (100-strength);
        const deltaY = (e.clientY - cardY) / (100-strength);

        card.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    }

    const xShadow = (ogCardX - cardX) * (strength / 20);
    const yShadow = (ogCardY - cardY) * (strength / 20);

    card.style.boxShadow = `
        0 0 0 2px black, 
        0 0 0 8px white, 
        0 0 0 10px black,
        ${xShadow}px ${yShadow}px 0px 10px black`;

});

hoverTurnOne.addEventListener("mouseenter", (e) => {

    if (hoverTurnOne.style.rotate == "367.75deg") {

        hoverTurnOne.style.rotate = "361deg";
        hoverTurnOne.style.boxShadow = "-2px 8px 0 0 black"

    } else {

        hoverTurnOne.style.rotate = "367.75deg";
        hoverTurnOne.style.boxShadow = "8px 8px 0 0 black"

    }

});

hoverTurnTwo.addEventListener("mouseenter", (e) => {

    if (hoverTurnTwo.style.rotate == "355deg") {

        hoverTurnTwo.style.rotate = "368deg";
        hoverTurnTwo.style.boxShadow = "8px 8px 0 0 black"

    } else {

        hoverTurnTwo.style.rotate = "355deg";
        hoverTurnTwo.style.boxShadow = "-8px 8px 0 0 black"

    }

});

hoverTurnThree.addEventListener("mouseenter", (e) => {

    if (hoverTurnThree.style.rotate == "369deg") {

        hoverTurnThree.style.rotate = "361deg";
        hoverTurnThree.style.boxShadow = "4px 8px 0 0 black"

    } else {

        hoverTurnThree.style.rotate = "369deg";
        hoverTurnThree.style.boxShadow = "8px 8px 0 0 black"

    }

});



greenTab.addEventListener("click", (e) => {
    folder.style.backgroundColor = "rgb(0,0,0)";
    image.style.boxShadow = `none`;
    image.style.opacity = "0";
    
    setTimeout(() => { 
        title.textContent = "NULL Notes";
        description.textContent = "Obsidian But With Automatic Idea Linking."
        body.textContent = `
        This project is my first to use flask or to even have a web interface and kinda led me to my other projects such as Canto. The main
        thing that sets it apart is it's use of linkign via ideas and it's ability to embed html and javascript into notes with rich markdown
        support and custom plugins and themes.
        `;
        folder.style.backgroundColor = "var(--peach)";
        image.style.opacity = "1";
        image.src = "images/nullNotes.webp"
        image.style.width = "500px"
        link.href = "https://github.com/Finbear2/NULL-Notes"
        link.textContent = "Github"
        setTimeout(() => { 
            image.style.boxShadow = `
                0 0 0 2px black, 
                0 0 0 8px var(--green), 
                0 0 0 10px black`;
        }, 750);
    }, 500);
});

orangeTab.addEventListener("click", (e) => {
    folder.style.backgroundColor = "rgb(0,0,0)";
    image.style.boxShadow = `none`;
    image.style.opacity = "0";

    setTimeout(() => { 
        title.textContent = "Canto";
        description.textContent = "A Pocket Sized 24/7 Shazam"
        body.textContent = `
            This project is my first project to feature a full client side and backend connected via an api wirrten in python and quart as I needed
            the async functions as Shazamio uses async functions. The client side is also coded in python using the Waveshare e-ink drivers.<br/><br/>

            I tried other alternatives such as Acoust ID due to it being fully private with fingerprinting happening on device but it doesn't do partial
            identification which would be needed. The backend not only handles the database and song identification but the web UI allowing the user to
            see a log of the songs previously identified by the device.
        `;
        folder.style.backgroundColor = "var(--peach)";
        image.src = "images/NotionPic.jpg"
        image.style.opacity = "1";
        image.style.width = "600px"
        link.href = "https://github.com/Finbear2/Canto"
        link.textContent = "Github"
        setTimeout(() => { 
            image.style.boxShadow = `
                0 0 0 2px black, 
                0 0 0 8px var(--orange), 
                0 0 0 10px black`;
        }, 750);
    }, 500);
});

blueTab.addEventListener("click", (e) => {
    folder.style.backgroundColor = "rgb(0,0,0)";
    image.style.boxShadow = `none`;
    image.style.opacity = "0";

    setTimeout(() => { 
        title.textContent = "PD Steps";
        description.textContent = "A Step Counting Library For The Playdate."
        body.textContent = `
            This project was my first library that I ever made and was reviewed by a large playdate game reviewer. It took about a week of data collection but I didn't
            find it too hard and I'm very proud to say it's open source as there has been other closed source attempts but their accuracy has suffered and only
            they can use the library.<br/><br/>

            According to reviews and testing, this library is as accurate as commercial pedometers down to the step and battery life isn't impacted by much due
            to optimizations I did.
        `;
        folder.style.backgroundColor = "var(--peach)";
        image.style.opacity = "1";
        image.style.width = "500px"
        image.src = "images/pdSteps.gif"
        link.href = "https://github.com/Finbear2/PdSteps-A-Playdate-step-counting-libary"
        link.textContent = "Github"
        setTimeout(() => { 
            image.style.boxShadow = `
                0 0 0 2px black, 
                0 0 0 8px var(--blue), 
                0 0 0 10px black`;
        }, 750);
    }, 500);
});

peachTab.addEventListener("click", (e) => {
    folder.style.backgroundColor = "rgb(0,0,0)";
    image.style.boxShadow = `none`;
    image.style.opacity = "0";

    setTimeout(() => { 
        title.textContent = "Toaty AI";
        description.textContent = "A Small AI Training Python Utility."
        body.textContent = `
            This project was my first delve into AI except a few small ollama apps but this one involved a proper delve into the architecture
            of AI models and how they train which I found quite interesting though somewhat hard to implement. The outputs aren't the best but
            they're pretty good for the amount of parameters and training time.
        `;
        folder.style.backgroundColor = "var(--peach)";
        image.style.opacity = "1";
        image.src = "images/toatyAi.png"
        image.style.width = "600px"
        link.href = "https://github.com/Finbear2/ToatyToast"
        link.textContent = "Github"
        setTimeout(() => { 
            image.style.boxShadow = `
                0 0 0 2px black, 
                0 0 0 8px var(--peach), 
                0 0 0 10px black`;
        }, 750);
    }, 500);
});