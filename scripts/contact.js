'use strict';

const tl = new TimelineLite({ paused: false });

tl.to("#ellipse", 1, {
    width: '58px',
    height: '58px',
    left: '1350px',
    top: '25px',
    ease: Power2.easeOut
})
.to("#ellipse", 0, {
    pointerEvents: "auto"
})
.to("#cnt-title", 0, {
    opacity: 1
})
.to("#cnt-backdrop", 1, {
    left: "0%",
    ease: Power2.easeOut
})
.to("#cnt-statement", 1, {
    opacity: 1,
    ease: Power2.easeOut
}, "-=0.25")
.to("#email", 1, {
    opacity: 1,
    ease: Power2.easeOut
}, "-=0.5")
.to("#facebook", 1, {
    opacity: 1,
    ease: Power2.easeOut
}, "-=0.5")
.to("#instagram", 1, {
    opacity: 1,
    ease: Power2.easeOut
}, "-=0.75")
.to("#github", 1, {
    opacity: 1,
    ease: Power2.easeOut
}, "-=0.75")
.to("#linkedin", 1, {
    opacity: 1,
    ease: Power2.easeOut
}, "-=0.75");

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
    cursor: 'auto',
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
const ellipse = document.querySelector("#ellipse")

nav.addEventListener("click", (e) => {
    ellipse.classList.remove("pulse");
    if (!clicked) {
        toggleTween(ellipseAnim)
        navList.style.pointerEvents = "auto";
        clicked = true;
    }
});

x.addEventListener("click", (e) => {
    e.preventDefault();
    ellipse.classList.add("pulse");
    if (clicked) {
        toggleTween(ellipseAnim)
        navList.style.pointerEvents = "none";
        clicked = false;
    }
});

justinpak.addEventListener("mouseenter", (e) => {
    justinpak.style.textDecoration = "underline";
    justinpak.style.background = "#CE8888";
    justinpak.style.border = "2px solid #F1EFE0"
    justinpak.style.fontStyle = "italic";
});
justinpak.addEventListener("mouseleave", (e) => {
    justinpak.style.textDecoration = "none";
    justinpak.style.background = "#F1EFE0";
    justinpak.style.border = "2px solid #CE8888"
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