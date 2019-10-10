'use strict';


const tl = new TimelineLite({ paused: false });

tl.to("#ellipse", 1, {
    width: '58px',
    height: '58px',
    left: '1350px',
    top: '25px',
    ease: Power2.easeOut
})
.to("#proj-border", 1, {
    width: "1174px",
    height: "650px",
    left: "133px",
    top: "75px",
    opacity: 1,
    ease: Power2.easeOut
})
.to("#proj-title", 1, {
    width: "264px",
    height: "106px",
    left: '175px',
    top: '20px',
    fontSize: "72px",
    ease: Power2.easeOut
}, "-=1")
.to("#proj-home h4", 1, {
    opacity: 1,
    ease: Power2.easeOut
}, "-=0.2")
.to("#pointer-down", 1, {
    opacity: 1,
    ease: Power2.easeOut
}, "-=1")
.to("#proj-selection", 1, {
    top: "780px",
    ease: Power2. easeOut
}, "-=0.75")
.to("#proj-home p", 1, {
    opacity: 1,
    ease: Power2.easeOut
}, "-=0.5")
.to("#next", 1, {
    width: "55px",
    height: "55px",
    left: "1275px",
    top: "350px",
    opacity: 1,
    ease: Power2.easeOut
}, "-=0.75")
.to("#right-arrow", 1, {
    opacity: 1,
    ease: Power2.easeOut
}, "-=0.25") 
.to("#ellipse", 0, {
    pointerEvents: "auto"
});



// NAV MENU OPEN

const ellipseAnim = new TimelineLite({ paused: true, reversed: true });

ellipseAnim.to("#hm-name", 0.5, {
    opacity: '1',
    zIndex: 1,
    pointerEvents: 'auto',
})
.to("#ellipse", 0.5, {
    width: '1754px',
    height: '1754px',
    left: '412px',
    top: '-397px',
    zIndex: 1,
    backgroundColor: "#CE8888",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
    ease: Power2.easeOut
})
.to("#hm-nav-selection", 0, {
    zIndex: 1
})
.to("#close-nav", 0.75, {
    opacity: '1',
    zIndex: 1,
    pointerEvents: 'auto',
    ease: Power2.easeOut
}, "-=0.3")
.to("#hm-about", 1.5, {
    opacity: '1',
    zIndex: 1,
    immediateRender: false,
    ease: Power2.easeOut
})
.to("#hm-experience", 1.5, {
    opacity: '1',
    zIndex: 1,
    immediateRender: false,
    ease: Power2.easeOut
}, '-=1.25')
.to("#hm-projects", 1.5, {
    opacity: '1',
    zIndex: 1,
    immediateRender: false,
    ease: Power2.easeOut
}, '-=1.25')
.to("#hm-contact", 1.5, {
    opacity: '1',
    zIndex: 1,
    immediateRender: false,
    ease: Power2.easeOut
}, '-=1.25');

const nav = document.querySelector(".hm-nav");
const navList = document.querySelector("#hm-nav-list");
const navSelection = document.querySelector("#hm-nav-selection")

let clicked = false;
const x = document.querySelector("#close-nav");
const justinpak = document.querySelector("#hm-name");

nav.addEventListener("click", (e) => {
    if (!clicked) {
        toggleTween(ellipseAnim)
        navList.style.pointerEvents = "auto";
        clicked = true;
    }
});

x.addEventListener("click", (e) => {
    e.preventDefault();

    if (clicked) {
        toggleTween(ellipseAnim)
        navList.style.pointerEvents = "none";
        clicked = false;
    }
});

justinpak.addEventListener("mouseenter", (e) => {
    justinpak.style.textDecoration = "underline";
    justinpak.style.fontStyle = "italic";
});
justinpak.addEventListener("mouseleave", (e) => {
    justinpak.style.textDecoration = "none";
    justinpak.style.fontStyle = "normal";
});

const navListItems = navList.getElementsByTagName("li");
for (var i = 0; i < navListItems.length; i++) {
    navListItems[i].addEventListener("mouseenter", changeSelector);
    navListItems[i].addEventListener("mouseleave", noSelector);
}

function toggleTween(tween) {
    tween.reversed() ? tween.play().timeScale(1) : tween.reverse().timeScale(3.5);
}

function changeSelector() {
    this.style.textDecoration = "underline";
    this.style.fontStyle = "italic";
    navSelection.style.opacity = 1;
    navSelection.textContent = this.textContent.substr(0,1);
}

function noSelector() {
    this.style.textDecoration = "none";
    this.style.fontStyle = "normal";
    navSelection.style.opacity = 0;
    navSelection.textContent = "";
}