//cart calculation
let cartval = localStorage.getItem("finalamount");
document.getElementById("billamt").innerHTML = cartval;
var val = parseFloat(cartval);
val = val.toFixed(2);

let tax = localStorage.getItem("gstamount");
var taxval = parseFloat(tax);
taxval = taxval.toFixed(2);
document.getElementById("gstamt").innerHTML = taxval;

console.log(val);
console.log(taxval);

var amt = parseFloat(val) + parseFloat(taxval);
console.log(amt);

var pay = amt - 25;
pay=pay.toFixed(0);
document.getElementById("payamount").innerHTML = pay;
console.log(pay);

let Fname=document.querySelector("#firstName");
 let  Lname=document.getElementById("lastName");
 let    email=document.getElementById("email");
 let    address=document.getElementById("address");
 let    address2=document.getElementById("address2");
 let    zip=document.getElementById("zip");
 let    ccname=document.getElementById("cc-name");
 let    ccnumber=document.getElementById("cc-number");
 let    ccexpiration=document.getElementById("cc-expiration");
 let    cccvv=document.getElementById("cc-cvv");

function procced() {
 //cart calculation
let cartval = localStorage.getItem("finalamount");
document.getElementById("billamt").innerHTML = cartval;
var val = parseFloat(cartval);
val = val.toFixed(2);

let tax = localStorage.getItem("gstamount");
var taxval = parseFloat(tax);
taxval = taxval.toFixed(2);
document.getElementById("gstamt").innerHTML = taxval;

console.log(val);
console.log(taxval);

var amt = parseFloat(val) + parseFloat(taxval);
console.log(amt);

var pay = amt - 25;
pay=pay.toFixed(0);
document.getElementById("payamount").innerHTML = pay;
console.log(pay);
// window.location.reload("payment.html");
    let flag=true

if(Fname.value.length <4){
    flag=false;
}
if(Lname.value.length <4){
    flag=false;
}
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     if (email.value.match(validRegex)) { }
     else {
          flag = false;
     }
if(address.value.length <5){
    flag=false;
}
if(address2.value.length <5){
    flag=false;
}
if(zip.value.length <6){
    flag=false;
}
if(ccname.value.length <6){
    flag=false;
}
if(ccnumber.value.length <10){
    flag=false;
}
if(ccexpiration.value.length <6){
    flag=false;
}
if(cccvv.value.length <3){
    flag=false;
}
  alert("your payment amount is "+pay);
    if(flag==false){
  swal("Opps!!","Fill the form with correct data","error");
 }
 
    let x = Math.floor((Math.random() * 5000) + 100);
if(flag==true){
    swal({
        title: "Order Confirmed!",
        text: "Order Id - ODF" + x+ " Your order will be on the way",
        icon: "success",
        button: "Ok",
    });
  
    setTimeout(callBack_func, 3500);
    function callBack_func() {
    
     window.location.replace("index.html");
      console.log("ko");
    }
}
}
 

function populateCity() {
// window.location.reload("payment.html");
    var stateCities = {
         "Kolkata": ["Saltlake", "Newtown", "Siliguri"],
         "Chennai": ["Adyar", " Alandur", "Ambattur", "Anna Nagar", "Ashok Nagar"],
         "Banglore": ["Marathahalli", "BTM ", "Domlur", "Jayanagar", "Koramangala"],
         "Mumbai": ["Andheri", "Bandra", "Borivali", "Dahisar", "Goregaon"],
         "Delhi": ["Mehraul", "Siri", "Tughlakabad", " Firozabad", " Shergarh"],
         "Assam": ["Guwahati", "Silchar", " Dibrugarh", " Jorhat", " Nagaon"],
         "Kerala": ["Kozhikode", "Kochi", "Thiruvananthapuram", "Kollam"]
         // Add more states and cities as needed
    };
    var stateSelect = document.getElementById("state");
    var citySelect = document.getElementById("city");
    var selectedState = stateSelect.value;

    // Clear the existing city options
    citySelect.innerHTML = "";

    // Populate the city options based on the selected state
    var cities = stateCities[selectedState];
    for (var i = 0; i < cities.length; i++) {
         var option = document.createElement("option");
         option.text = cities[i];
         option.value = cities[i];
         citySelect.appendChild(option);
    }
}
