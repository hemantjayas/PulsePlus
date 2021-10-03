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




let cart_data = JSON.parse(localStorage.getItem("PulseCart"));
let parent_coupon = document.getElementById('couponcode');

let total_price = 0;
for (let i = 0; i < cart_data.length; i++) {
    total_price += +(cart_data[i].price);
}
console.log(total_price);

let div = document.createElement('h1');
div.innerText = "Total price = " + total_price;
let coupon = document.createElement('h1');
coupon.textContent = "Apply Promo Code";
let input = document.createElement('input');
input.setAttribute("class", "in")
let enter_button = document.createElement('button');
enter_button.innerText = "Apply";

let next = document.createElement('button');
next.innerText = "Checkout";
next.onclick = function() {
    got_to_address();
}
enter_button.onclick = function() {
    show();
}
parent_coupon.append(div, coupon, input, enter_button, next);

function got_to_address() {
    window.location.href = "payment.html";
}

function show() {
    if (input.value === "masai30") {
        total_price = total_price * 70 / 100;
        div.innerText = "Total Price = " + Math.floor(total_price);
    }
}

function addressStore(e) {
    e.preventDefault();

    let userAddressForm = document.getElementById("addressForm");

    let name = userAddressForm.name.value;
    let address = userAddressForm.locality.value;
    let pin = userAddressForm.pincode.value;
    let city = userAddressForm.city.value;
    let state = userAddressForm.State.value;
    let number = userAddressForm.number.value;
    let home = userAddressForm.home.value;
    let work = userAddressForm.work.value;
    let other = userAddressForm.other.value;
    console.log(number);

    if (localStorage.getItem("Pulseusers") === null) {
        localStorage.setItem("Pulseusers", JSON.stringify([]));

    }

    let data = {
        name,
        address,
        pin,
        city,
        state,
        number,
        home,
        work,
        other
    }

    let arr = JSON.parse(localStorage.getItem("Pulseusers"));

    arr.push(data);

    localStorage.setItem("Pulseusers", JSON.stringify(arr));
    console.log(arr);
}