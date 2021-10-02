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
