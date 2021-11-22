window.addEventListener("resize", mainVideoHeight);
window.addEventListener('load', mainVideoHeight);


function mainVideoHeight() {

    document.querySelector(".mainBackgroundImage").style.top = `-${document.querySelector(".mainBackgroundImage").offsetHeight/2}px`;
    document.querySelector(".mainImage").style.marginTop = `${document.querySelector(".mainBackgroundImage").offsetHeight/4}px`
}


// about image
document.querySelector(".back").addEventListener("click", scrollImages);
document.querySelector(".next").addEventListener("click", scrollImages);


let value = 0;
function scrollImages(e) {

    if (window.matchMedia("(max-width: 500px)").matches) {
        if (e.srcElement.classList[0] === "back" && value!=0) {
            value+= 22;
            document.querySelector(".carouselBlock").style.transform = `translateX(${value}%)`;
        }
    
        else if (e.srcElement.classList[0] === "next" && value != -88) {
            value-= 22;
            document.querySelector(".carouselBlock").style.transform = `translateX(${value}%)`;
        }
    
        else if (value === -88) {
            value=0;
            document.querySelector(".carouselBlock").style.transform = `translateX(${value}%)`;
        }
    }

    else if (window.matchMedia("(max-width: 1150px)").matches) {
        if (e.srcElement.classList[0] === "back" && value!=0) {
            value+= 33.333;
            document.querySelector(".carouselBlock").style.transform = `translateX(${value}%)`;
        }
    
        else if (e.srcElement.classList[0] === "next" && value != -66.666) {
            value-= 33.333;
            document.querySelector(".carouselBlock").style.transform = `translateX(${value}%)`;
        }
    
        else if (value === -66.666) {
            value=0;
            document.querySelector(".carouselBlock").style.transform = `translateX(${value}%)`;
        }
    }



    else {
        if (e.srcElement.classList[0] === "back" && value!=0) {
            value+= 33.333;
            document.querySelector(".carouselBlock").style.transform = `translateX(${value}%)`;
        }
    
        else if (e.srcElement.classList[0] === "next" && value != -199.998) {
            value-= 33.333;
            document.querySelector(".carouselBlock").style.transform = `translateX(${value}%)`;
        }
    
        else if (value === -199.998) {
            value=0;
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

// CHAMPIONS


document.querySelector(".flame").addEventListener("click", selectChampion);
document.querySelector(".jake").addEventListener("click", selectChampion);
document.querySelector(".bubblegum").addEventListener("click", selectChampion);
document.querySelector(".marceline").addEventListener("click", selectChampion);
document.querySelector(".finn").addEventListener("click", selectChampion);

function selectChampion(e) {
    document.querySelector(".choosenChampion img").src = `ATGame/${e.srcElement.classList[0]}.png`;
    document.querySelector(".selectedChampion").classList.remove("selectedChampion");
    document.querySelector(`.${e.srcElement.classList[0]}`).classList.add("selectedChampion");

}

// SKINS
let skins = [
    "finnSkin.png",
    "marcelineSkin.png",
    "finnSkin2.png",
    "flameSkin.png",
    "flameSkin2.png",
    "jakeSkin2.png",
    "jakeSkin.png",

];


setInterval(()=> {
    document.querySelector(".bubleOfSkin img").src = `ATGame/${skins[Math.floor(Math.random() * 7)]}`
}, 2500)


