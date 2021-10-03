var loca = document.getElementById('location')
var loc = document.getElementById('loc')

loc.addEventListener('click', show)

function show(e) {
    e.preventDefault();
    loca.style.display = "flex"

}
var hide = document.getElementById('hide');

hide.addEventListener('click', hideBtn)

function hideBtn(e) {
    e.preventDefault();
    loca.style.display = "none"

}



let images = [
    "https://res.cloudinary.com/pulse-pharmacy/image/upload/promos/asian_paints_banner.jpg",
    "https://www.pulseplus.in/content/images/offers/25offer-banner.jpg",
    "https://www.pulseplus.in/content/images/offers/20flatoff-banner.jpg"
];

let container = document.getElementById("offerSlideshow");

function startSlideshow() {

    let counter = 0;

    let interval = setInterval(function() {

        container.innerHTML = null;

        if (counter === images.length) {
            counter = 0;
        }
        let img = document.createElement("img");
        img.src = images[counter];
        container.append(img);
        counter++;
    }, 3000);


}
startSlideshow();

startSlideshow();

let images2 = [
    "https://res.cloudinary.com/pulse-pharmacy/image/upload/product/novy-pain-oil-pc-41766",
    "https://res.cloudinary.com/pulse-pharmacy/image/upload/product/conarcs-diabetic-ointment-pc-41767",
    "https://res.cloudinary.com/pulse-pharmacy/image/upload/product/shigaa-anti-lice---dandruff-oil-pc-44072",
    "https://res.cloudinary.com/pulse-pharmacy/image/upload/product/pankajakasthuri-orthoherb-tablet-30-s-pc-26998",
]

let container2 = document.getElementById("didYouTryBox");
function startSlideshow1() {

    let counter = 0;

   let interval =  setInterval(function(){

        container2.innerHTML = null;

        if(counter=== images2.length){
            counter = 0;
        }
        let img = document.createElement("img");
        img.src = images2[counter];
        container2.append(img);
        counter++;
    },3000);


}
startSlideshow1();