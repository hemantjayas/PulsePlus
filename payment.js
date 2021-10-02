function cdpym() {
    let card = document.getElementById("card")
    card.style.color = "brown"

    let cod = document.getElementById("cod")
    cod.style.color = "black"

    let btn = document.querySelector("#butt")
    btn.innerText = "MAKE PAYMENT"
}
function cod() {
    let card = document.getElementById("card")
    card.style.color = "black"

    let cod = document.getElementById("cod")
    cod.style.color = "brown"

    let btn = document.querySelector("#butt")
    btn.innerText = "ORDER"
}
function makepayment() {
    let btn = document.querySelector("#butt")
    let cardnum = form.cardnumber.value;
    let cvc = form.cvc.value;
    let Date = form.date.value;
    
    if(btn.innerText== "MAKE PAYMENT"){
        if(cardnum.length == 0 && cvc.length == 0 && Date.length == 0){
            alert("Please fill the card detail")
        }
        else if((Date.length != 7) && (cvc.length != 0)){
            alert("Date Should be in 12/2021 formate")
        }
        else if((cvc.length != 3) && (cardnum.length != 0)){
            alert("CVC should be only 3 digit")
        }
        else if(cardnum.length != 14){
            alert("Card no. should be only 14 digit")
        }
        else{
            window.location.href="thankyou.html"
        }
    }else if(btn.innerText== "ORDER"){
       window.location.href="thankyou.html"
    }else{
        alert("Chose the payment option")
    }
}
 let total = 1000
 let sum = document.getElementById("sum")
 sum.textContent = "Total = "+total
 let count = 0
 let code = "badmosh"
function apply () {
    let input = document.getElementById("inp")
    if(count === 0 && input.value === code){
        total = total*70/100
        sum.textContent = "Total = "+total
        count++
    }else if((count != 0) && input.value == code){
        alert("Promo code is already used")
    }
    else if((input.value != 0)){
        alert("Wrong Promo Code !")
    }
    
}

let arr = JSON.parse(localStorage.getItem("pullandbearProductCart"))