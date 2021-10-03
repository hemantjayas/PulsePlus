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