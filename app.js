//redirect function
/*function redirect(){
     window.location.replace("food.html");
}*/

//sign function for form validation

function clear() {
     console.log("jii");;
     document.getElementById("signupfname").style.border = "1px solid rgb(213, 213, 222)";
     document.querySelector('#signuplname').style.border = "1px solid rgb(213, 213, 222)";
     document.querySelector('#signupemail').style.border = "1px solid rgb(213, 213, 222)";
     document.querySelector('#inputpassword').style.border = "1px solid rgb(213, 213, 222)";
     document.querySelector('#inputconfirmpassword').style.border = "1px solid rgb(213, 213, 222)";
     document.querySelector('#signupcontact').style.border = "1px solid rgb(213, 213, 222)";
     document.querySelector('#pincode').style.border = "1px solid rgb(213, 213, 222)";
     document.getElementById("addressline1").style.border = "1px solid rgb(213, 213, 222)";
     document.getElementById("addressline2").style.border = "1px solid rgb(213, 213, 222)";
}
function valid() {
     clear();
     var flag = true;

     let fname = document.querySelector('#signupfname');
     let x = fname.value;
     if (x.length < 4) {
          fname.style.border = "2px solid red";
          flag = false;
     }
     for (let i = 0; i < x.length; i++) {
          var ascii = x.charCodeAt(i);
          if (ascii > 48 && ascii < 57) {
               console.log("ko");
               fname.style.border = "2px solid red";
               flag = false;
          }
     }
     let lname = document.querySelector('#signuplname');
     let y = lname.value;
     if (y.length < 2) {
          lname.style.border = "2px solid red";
          flag = false;
     }
     for (let i = 0; i < y.length; i++) {
          var ascii = y.charCodeAt(i);
          if (ascii > 48 && ascii < 57) {
               lname.style.border = "2px solid red";
               flag = false;
          }
     }

     let mail = document.querySelector('#signupemail');
     var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     if (mail.value.match(validRegex)) { }
     else {
          mail.style.border = "2px solid red";
          flag = false;
     }

     let pass = document.querySelector('#inputpassword');
     if (pass.value.length < 8) {
          pass.style.border = "2px solid red";
          flag = false;
     }


     let confirmpass = document.querySelector('#inputconfirmpassword');
     if (pass.value != confirmpass.value) {
          confirmpass.style.border = "2px solid red";
          flag = false;
     }


     let mob = document.querySelector('#signupcontact');
     let no = mob.value
     if (mob.value.length < 10) {
          mob.style.border = "2px solid red";
          flag = false;
     }

     if (isNaN(no)) {
          mob.style.border = "2px solid red";
          flag = false;
     }

     let add1 = document.getElementById("addressline1");
     if (add1.value < 5) {
          add1.style.border = "2px solid red";
          flag = false;
     }

     let add2 = document.getElementById("addressline2");
     if (add2.value < 5) {
          add2.style.border = "2px solid red";
          flag = false;
     }
     let pin = document.getElementById("pincode");
     let pinno = pin.value;
     if (pin.value < 7) {
          pin.style.border = "2px solid red";
          flag = false;
     }
     if (isNaN(pinno)) {
          pin.style.border = "2px solid red";
          flag = false;
     }


     if (flag == true) {
          $('#signupstaticBackdrop').modal('hide') ;

          document.querySelector('#signupfname').innerText=" ";
          document.querySelector('#signuplname').innerText=" ";
          document.querySelector('#signupemail').innerText=" ";
          document.querySelector('#inputpassword').innerText=" ";
          document.querySelector('#inputconfirmpassword').innerText=" ";
          document.querySelector('#signupcontact').innerText=" ";
          document.getElementById("addressline1").innerText=" ";
          document.getElementById("addressline2").innerText=" ";
          document.getElementById("pincode").innerText=" ";
         /* fname.innerHTML="";
          lname.innerHTML = "";
          mail.innerHTML = "";
          pass.innerHTML = "";
          confirmpass.innerHTML = "";
          mob.innerHTML = "";
          add1.innerHTML = "";
          add2.innerHTML = "";
          pin.innerHTML = "";*/
          swal({
               title: "Thank you for Sign In with Us ",
               text: " ",
               icon: "info",
               timer: 2000
          });
          //  swal("Thank you for Sign In with Us ", "Click on login", "info");
          setTimeout(callBack_func, 2000);
          function callBack_func() {
               Swal.close();
               //window.location.reload("index.html");
          }
          setTimeout(callBack_func, 2000);
          function callBack_func() {
               $('#loginBackdrop').modal('show');
               //window.location.reload("index.html");
          }
     }

     //return flag;
}



// Function to populate the city dropdown based on the selected state

function populateCity() {
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


//login 
function greet() {

     let flag = true;
     let id = document.getElementById("inputloginid").value;
     let pw = document.getElementById("inputloginpassword").value;
     if (pw.length < 6) {
          flag = false;
     }
     if (id.length < 6) {
          flag = false;
     }
     if (flag == true) {
          // swal("Welcome to fOOdIe", "Tell me what you eat, and I will tell you what you are.", "success");
          $('#loginBackdrop').modal('hide');
          swal("Welcome to fOOdIe", "Tell me what you eat, and I will tell you what you are.", "success");
          setTimeout(callBack_func, 2500);
          function callBack_func() {

               window.location.href = "food.html";
               //window.location.reload("index.html");
          }
     }
     //return flag;
}



