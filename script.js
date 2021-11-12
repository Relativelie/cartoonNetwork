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
    console.log(e)
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


document.querySelector(".carouselBlock").addEventListener("click", selectImage);
function selectImage(e) {
    if (e.srcElement.classList[0] != "carouselBlock") {
        document.querySelector(".largeImage").src = e.srcElement.attributes[1].nodeValue;
        document.querySelector(".selectedSmallImage").classList.remove("selectedSmallImage");
        document.querySelector(`.carouselBlock [src="${e.srcElement.attributes[1].nodeValue}"]`).classList.add("selectedSmallImage");
    }
}

// CHAMPIONS

