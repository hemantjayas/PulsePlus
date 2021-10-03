let parent_cart = document.getElementById('cart_items')


let cart_data = JSON.parse(localStorage.getItem("PulseCart"));

function show_product() {
    cart_data.forEach(function(product) {

        // parent_cart.innerHTML=null;

        let div = document.createElement('div');
        let img = document.createElement('img');
        let name = document.createElement('p');
        let price = document.createElement('p');
        let btn = document.createElement('button');

        btn.addEventListener("click", function() {
            remove_to_cart(product);
        });
        btn.innerHTML = "delete";


        img.src = product.img;
        name.innerHTML = product.name;
        price.innerHTML = product.price;


        div.append(img, name, price, btn);
        parent_cart.append(div);
    })
}

show_product();

function remove_to_cart(product) {
    let arr = [];
    for (let i = 0; i < cart_data.length; i++) {
        if (cart_data[i].name != product.name) {
            arr.push(cart_data[i]);
            //console.log(arr);
        }
    }
    console.log(arr);
    //show_product(arr);
}

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
    window.location.href = "address.html";
}

function show() {
    if (input.value === "masai30") {
        total_price = total_price * 70 / 100;
        div.innerText = "Total Price = " + Math.floor(total_price);
    }
}