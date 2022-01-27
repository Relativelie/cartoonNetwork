import cartoonPageItems from './cartoonPageParameters.js';




// MENU
let menuOpen = false;
document.querySelector(".cartoons:nth-child(1)").addEventListener("click", menuDropdown);
document.addEventListener("keyup", menuDropdownEsc);
document.addEventListener("click", menuDropdownEsc);


function menuDropdown() {
    if (!(menuOpen)) {
        document.querySelector(".valueOfCartoons").style.display = "grid";
        document.querySelector(".menuDropdown img").src = "../../images/ATGame/sortDown.png";
        menuOpen = true;
    }

    else {
        document.querySelector(".valueOfCartoons").style.display = "none";
        document.querySelector(".menuDropdown img").src = "../../images/ATGame/sortUp.png";
        menuOpen = false;
    }

}

function menuDropdownEsc(e) {
    if ((e.key === "Escape" && menuOpen) || (menuOpen && e.type === "click" && e.srcElement.classList != "menuDropdown" && e.srcElement.parentElement.classList[0] != "menuDropdown")) {
        document.querySelector(".valueOfCartoons").style.display = "none";
        document.querySelector(".menuDropdown img").src = "../../images/ATGame/sortUp.png";
        menuOpen = false;
    }
}


// about image
document.querySelector(".back").addEventListener("click", scrollImages);
document.querySelector(".next").addEventListener("click", scrollImages);


let value = 0;
function scrollImages(e) {

    if (window.matchMedia("(max-width: 500px)").matches) {
        if (e.srcElement.classList[0] === "back" && value != 0) {
            value += 22;
            document.querySelector(".carouselBlock").style.transform = `translateX(${value}%)`;
        }

        else if (e.srcElement.classList[0] === "next" && value != -88) {
            value -= 22;
            document.querySelector(".carouselBlock").style.transform = `translateX(${value}%)`;
        }

        else if (value === -88) {
            value = 0;
            document.querySelector(".carouselBlock").style.transform = `translateX(${value}%)`;
        }
    }

    else if (window.matchMedia("(max-width: 1150px)").matches) {
        if (e.srcElement.classList[0] === "back" && value != 0) {
            value += 33.333;
            document.querySelector(".carouselBlock").style.transform = `translateX(${value}%)`;
        }

        else if (e.srcElement.classList[0] === "next" && value != -66.666) {
            value -= 33.333;
            document.querySelector(".carouselBlock").style.transform = `translateX(${value}%)`;
        }

        else if (value === -66.666) {
            value = 0;
            document.querySelector(".carouselBlock").style.transform = `translateX(${value}%)`;
        }
    }



    else {
        if (e.srcElement.classList[0] === "back" && value != 0) {
            value += 33.333;
            document.querySelector(".carouselBlock").style.transform = `translateX(${value}%)`;
        }

        else if (e.srcElement.classList[0] === "next" && value != -199.998) {
            value -= 33.333;
            document.querySelector(".carouselBlock").style.transform = `translateX(${value}%)`;
        }

        else if (value === -199.998) {
            value = 0;
            document.querySelector(".carouselBlock").style.transform = `translateX(${value}%)`;
        }
    }

}


document.querySelector(".carouselBlock").addEventListener("click", selectImage);
function selectImage(e) {
    if (e.srcElement.classList[0] != "carouselBlock") {
        document.querySelector(".largeImage").src = e.srcElement.attributes[1].nodeValue;
        document.querySelector(".selectedSmallImage").classList.remove("selectedSmallImage");
        document.querySelector(`.carouselBlock [src="${e.srcElement.attributes[1].nodeValue}"]`).classList.add("selectedSmallImage");
    }
}

// SELECTED PAGE

document.querySelector(".valueOfCartoons > :nth-child(1)").addEventListener("click", selectedPage);
document.querySelector(".valueOfCartoons > :nth-child(2)").addEventListener("click", selectedPage);
document.querySelector(".valueOfCartoons > :nth-child(3)").addEventListener("click", selectedPage);
document.querySelector(".valueOfCartoons > :nth-child(4)").addEventListener("click", selectedPage);
document.querySelector(".valueOfCartoons > :nth-child(5)").addEventListener("click", selectedPage);


document.querySelector(".footerItem p:nth-child(1)").addEventListener("click", selectedPage);
document.querySelector(".footerItem p:nth-child(2)").addEventListener("click", selectedPage);
document.querySelector(".footerItem p:nth-child(3)").addEventListener("click", selectedPage);
document.querySelector(".footerItem p:nth-child(4)").addEventListener("click", selectedPage);
document.querySelector(".footerItem p:nth-child(5)").addEventListener("click", selectedPage);



function selectedPage(e) {

    document.querySelector(".mainImageBlock img").src = cartoonPageItems[e.srcElement.innerText].video;
    document.querySelector(".mainBackgroundImage").src = cartoonPageItems[e.srcElement.innerText].video;
    document.querySelector(".nameOfCartoon img").src = cartoonPageItems[e.srcElement.innerText].logo;
    document.querySelector(".menuLogo").src = cartoonPageItems[e.srcElement.innerText].logo;
    let backgroundSeries = document.querySelectorAll(".backgroundSeries");
    let seriesHeader = document.querySelectorAll(".seriesHeader h3");
    let seriesPar = document.querySelectorAll(".seriesText p");
    let backNumber;

    for (let i = 0; i < backgroundSeries.length; i++) {
        if (i === 0) backNumber = "seriesOne";
        else if (i === 1) backNumber = "seriesTwo";
        else backNumber = "seriesThree";
        backgroundSeries[i].style.backgroundImage = `url("${cartoonPageItems[e.srcElement.innerText][backNumber][0]}")`;
        seriesHeader[i].textContent = cartoonPageItems[e.srcElement.innerText][backNumber][1];
        seriesPar[i].textContent = cartoonPageItems[e.srcElement.innerText][backNumber][2];
    }

    document.querySelector(".aboutCartoonBlock h3").textContent = e.srcElement.innerText;
    document.querySelector(".aboutCartoonText p").textContent = cartoonPageItems[e.srcElement.innerText].about[0];

    let aboutImages = document.querySelectorAll(".imageCarousel img:not(.imageScrollButtonsBlock img):not(.largeImage)")
    for (let image = 0; image < aboutImages.length; image++) {
        aboutImages[image].src = cartoonPageItems[e.srcElement.innerText].about[image + 1];
    }

    document.querySelector(".largeImage").src = cartoonPageItems[e.srcElement.innerText].about[1]

    let bookHeader = document.querySelectorAll(".page h2");
    let bookRearPart = document.querySelectorAll(".page-5");
    let bookBack = document.querySelectorAll(".pageCover");
    let bookText = document.querySelectorAll(".page p");
    let bookBuyLink = document.querySelectorAll(".buyBtn a");
    for (let book = 0; book < bookHeader.length; book++) {
        bookBack[book].style.backgroundImage = `url("${cartoonPageItems[e.srcElement.innerText].books[book][0]}")`;
        bookRearPart[book].style.backgroundImage = `url("${cartoonPageItems[e.srcElement.innerText].books[book][0]}")`;
        bookHeader[book].textContent = cartoonPageItems[e.srcElement.innerText].books[book][1];
        bookText[book].textContent = cartoonPageItems[e.srcElement.innerText].books[book][2];
        bookBuyLink[book].href = cartoonPageItems[e.srcElement.innerText].books[book][3];

    }
}


window.addEventListener("resize", mainVideoHeight);
window.addEventListener('load', mainVideoHeight);


function mainVideoHeight() {

    document.querySelector(".mainBackgroundImage").style.top = `-${document.querySelector(".mainBackgroundImage").offsetHeight / 2}px`;
    document.querySelector(".mainImage").style.marginTop = `${document.querySelector(".mainBackgroundImage").offsetHeight / 4}px`
}
