(() => {
console.log("yooon");

let seeMore = document.querySelector(".see");
let readBtn = document.querySelector(".more-btn");
let lookMore = document.querySelector(".look");
let lookBtn = document.querySelector(".look-btn");


function moreRead() {

if (seeMore.classList.contains("see")){

    seeMore.classList.remove("see");
    seeMore.classList.toggle("slideToggle");
    readBtn.innerHTML = "Read Less"
    } else {
    seeMore.classList.add("see");
    readBtn.innerHTML = "Read More"
    }
}


function lookRead() {

if (lookMore.classList.contains("look")){

    lookMore.classList.remove("look");
    lookMore.classList.toggle("slideToggle");
    lookBtn.innerHTML = "Read Less"
    } else {
    lookMore.classList.add("look");
    lookBtn.innerHTML = "Read More"
    }
}



    readBtn.addEventListener('click', moreRead);
    lookBtn.addEventListener('click', lookRead);

})();