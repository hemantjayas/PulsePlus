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



var data = [

    {
        name: 'Disprin Tablet',
        price: '8',
        img: 'https://res.cloudinary.com/pulse-pharmacy/image/upload/product/disprin-tablet-pc-8031',


    },
    {
        name: 'Monocef Injection 1 gm',
        price: '48',
        img: 'https://res.cloudinary.com/pulse-pharmacy/image/upload/product/monocef-injection-1-gm-pc-21243',
    },
    {
        name: 'Crocin Pain Relief Tablet',
        price: '48',
        img: 'https://res.cloudinary.com/pulse-pharmacy/image/upload/product/crocin-pain-relief-tablet-pc-8309',

    },
    {
        name: 'Dettol Liquid 110 ml',
        price: '58',
        img: 'https://res.cloudinary.com/pulse-pharmacy/image/upload/product/dettol-liquid-110-ml-pc-7924',


    },
    {
        name: 'Paracetamol Injection 30 ml',
        price: '15',
        img: 'https://www.pulseplus.in/content/images/form/form-surg-1.png',


    },
    {
        name: 'Bio-Av Curcumin 500mg Tablet',
        price: '742',
        img: 'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1613631165/vvt4n2jdm5thuoyiu7un.jpg',


    },
    {
        name: 'Farmity Grapes Seed Extract 500mg Capsule',
        price: '455',
        img: 'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600643159/cropped/ijgpdwlx69dnib8xa7u5.jpg',


    },
    {
        name: 'HealthVit Niacinamide 50mg Tablet',
        price: '291',
        img: 'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600172349/cropped/ywhnc8w17p1adhhztn6t.png',


    },
    {
        name: 'GNC Womens Ultra Mega Diabetic Support Multivitamin',
        price: '3299',
        img: 'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1605185649/zsb4poqyu7mhtk3rie8u.jpg',


    },
    {
        name: 'Ultra-D3 4K Tablet',
        price: '397',
        img: 'https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600714891/cropped/x1mlqc9j3m5a6hcsym5q.jpg',


    }



];
//console.log(data);

let parent = document.getElementById('product-list');

function show_product(data) {

    // parent.textContent = "";

    data.forEach(function(product) {
        //console.log(product);

        let div = document.createElement('div');
        let img = document.createElement('img');
        let name = document.createElement('h5');
        let price = document.createElement('p');
        let br = document.createElement('br');
        let br1 = document.createElement('br')

        img.src = product.img;
        name.textContent = product.name;
        price.textContent = 'Price   ' + "₹ " + product.price;

        let btn = document.createElement('button');
        btn.innerHTML = "Add to Cart";

        btn.onclick = function() {
            add_to_cart(product);
        }

        //console.log(img,name,price);
        div.append(img, name, br, price, br1, btn);
        parent.append(div);

    });
}
show_product(data);

if (localStorage.getItem("PulseCart") === null) {
    localStorage.setItem("PulseCart", JSON.stringify([]));

}

function add_to_cart(p) {
    let p_cart = JSON.parse(localStorage.getItem("PulseCart"));
    p_cart.push(p);
    localStorage.setItem("PulseCart", JSON.stringify(p_cart));
}