let parent=document.body;

let btn=document.querySelector('#makePaymnet');
btn.addEventListener("click",payment);

function cardpayment(){

     let card = document.getElementById("card")
    card.style.color = "#fd7e14"

    let cod = document.getElementById("cod")
    cod.style.color = "black"

    btn.innerText = "MAKE PAYMENT"

}

function cashondelivery() {
    let card = document.getElementById("card")
    card.style.color = "black"

    let cod = document.getElementById("cod")
    cod.style.color = "#fd7e14"
    btn.innerText = "ORDER"
}
function payment(){
    let cardnum = form.cardnumber.value;
    let cvv = form.cvv.value;
    let date = form.expireDate.value;

    if(btn.innerText== "MAKE PAYMENT"){
        if(cardnum.length == 0 && cvv.length == 0 && date.length == 0){
            alert("Please fill the card details")
        }
        else if((date.length != 7) && (cvv.length != 0)){
            alert("Date Should be in 01/2030 format")
        }
        else if((cvv.length != 3) && (cardnum.length != 0)){
            alert("CVC should be only 3 digit")
        }
        else if(cardnum.length != 16){
            alert("Card no. should be only 16 digit")
        }
        else{
            let div1 = document.createElement('div');
            div1.setAttribute("class","thank")
            let div=document.createElement('div');
      parent.innerText=null;
      let btn = document.createElement('button');
      btn.textContent = "Go to HomePage"
      btn.addEventListener("click",home)
      div1.append(div,btn);
      parent.append(div1);
      div.setAttribute("id","thankyou");
      div.textContent="THANK YOU FOR CHOOSING US"
            
    }
    }else if(btn.innerText== "ORDER"){
        let div1 = document.createElement('div');
        div1.setAttribute("class","thank")
      let div=document.createElement('div');
      let btn = document.createElement('button');
      btn.textContent = "Go to HomePage"
      btn.addEventListener("click",home)
      parent.innerText=null;
      div1.append(div,btn);
      parent.append(div1);
      div.setAttribute("id","thankyou");
      div.textContent="THANK YOU FOR CHOOSING US";
    }else{
        alert("Chose the payment option")
    }
}
function home(){
    window.location.href = "index.html";
}


let cart_data = JSON.parse(localStorage.getItem("PulseCart"));
let parent_coupon = document.getElementById('couponcode');

let total_price = 0;
for(let i = 0; i < cart_data.length; i++){
    total_price+= +(cart_data[i].price);
}
console.log(total_price);

let div = document.createElement('h1');
div.innerText = "Total price = "+total_price;
let coupon = document.createElement('h1');
coupon.textContent = "Apply Promo Code";
let input = document.createElement('input');
let enter_button = document.createElement('button');
enter_button.innerText = "Apply";


enter_button.onclick = function(){
    show();
}
parent_coupon.append(div,coupon,input,enter_button);

function  got_to_address(){
    window.location.href = "address.html";
}

function show(){
    if(input.value==="masai30"){
        total_price = total_price*70/100;
        div.innerText = "Total Price = "+Math.floor(total_price);
    }
}

let addressData = JSON.parse(localStorage.getItem("Pulseusers"));
console.log(addressData);

