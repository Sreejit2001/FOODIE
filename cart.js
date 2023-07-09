//redirect function
function redirect(){
     window.location.replace("index.html");
}


let items = document.querySelector('.product-container');
let cart = document.querySelector('.cart');
let cartopen = document.querySelector('#nav-cart');
let cartclose = document.querySelector('#cart-close');
console.log(cartclose);
console.log(cartopen);
console.log(items);

//cart open
cartopen.onclick = () => {
    cart.classList.add('active');
    items.classList.add('act');
}

//cart close
cartclose.onclick = () => {
    cart.classList.remove('active')
    items.classList.remove('act');
};

//cart working js

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
}
else {
    ready();
}

function ready() {
    addEvent();

}
function update() {
    addEvent();
    updateTotal();

}
function addEvent() {

    let cartDeleteBtn = document.querySelectorAll(".bxs-trash-alt");
    cartDeleteBtn.forEach((btn) => {
        btn.addEventListener('click', removeitem);
    });
    let quantitybtn = document.querySelectorAll(".cart-quantity");
    quantitybtn.forEach((qbtn) => {
        qbtn.addEventListener('change', quantitychange);
    })

    let cartbtn = document.querySelectorAll('.bx-cart-add');
    cartbtn.forEach((cartbtns) => {
        cartbtns.addEventListener('click', addtocart);
    })

}
function removeitem() {

    this.parentElement.remove();
    update();
}
function quantitychange() {
    let val = document.querySelector('.cart-quantity').value;
    if (isNaN(this.value) || this.value < 1) {
        this.value = 1;
    }
    update();
}
function addtocart() {
    let product = this.parentElement;
    let title = product.querySelector('.tittleproduct').innerHTML;
    let prc = product.querySelector('.price').innerHTML;
    let image = product.querySelector('.product-image').src;

    console.log(title, prc, image);
    let cartboxelement = addboxcart(title, prc, image);
    let readycart = document.createElement("div");
    readycart.innerHTML = cartboxelement;
    const cartcontent = document.querySelector('.cart-content');
    cartcontent.appendChild(readycart);
    update();

    //console.log();
}

function addboxcart(title, prc, image) {
    return `<div class="cart-box">
    <img src=${image} alt="cart-img" class="cart-box-image">
    <div class="details-box">
      <div class="cart-item-tittle"> ${title}</div>
      <div class="cart-item-price">${prc}</div>
      <input class="cart-quantity" type="number" value="1" min="1" max="15"></input>
    </div>
    <i class='bx bxs-trash-alt' id="cart-item-delete" style='color:#db120b'></i>
  </div>`;
}

function updateTotal() {
    let cartBoxs = document.querySelectorAll('.cart-box');
    console.log(cartBoxs);
    let total = 0;
    let gst=0;
    let toltalpriceElement = document.querySelector('.total-price');
    cartBoxs.forEach((box) => {
        let priceElement = box.querySelector('.cart-item-price');
        var price = parseInt(priceElement.innerHTML.replace("/-", ""));
        let quantity = box.querySelector('.cart-quantity').value;
        total += price * quantity;
        gst=total * 0.05;
        //console.log("hi");
    })
    console.log("hiii");
      localStorage.setItem("finalamount",total);
      localStorage.setItem("gstamount",gst);
    toltalpriceElement.innerHTML = total + "/-";
  

}


let buybtn = document.querySelector('.btn-buy');
buybtn.onclick = () => {
    cart.classList.remove('active')
    items.classList.remove('act');
    //let bill=document.getElementById("billamt");
   // console.log(bill);
    let toltalpriceElement = document.querySelector('.total-price');
    let final = parseInt(toltalpriceElement.innerHTML.replace("/-", ""));
     
    
    
     
     
    if (final <= 15) {
        swal("Opps! ","Please Select an Item","error");
    }
    else{
        document.location.href = "payment.html";
    }
     
     
}  
