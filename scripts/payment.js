


let url = window.location.href;
let urlObject = new URL(url);
let param = urlObject.searchParams;



let paymentResObj;
const dataPayment=null;
const xhr=new XMLHttpRequest();
xhr.withCredentials=false;



let PayNowButton = () => {
    let islogged = localStorage.getItem("islogged");
    let payButton = document.getElementById("Pay");
    if (islogged=== "false") {
      payButton.disabled = true;
    } else if (islogged === "true") {
      payButton.disabled = false;

    }
  };
PayNowButton();
let payBtn = document.getElementById("Pay");
payBtn.addEventListener("click",()=>{
  if(localStorage.getItem("islogged")==true){
    alert("Hi your booking successfull");
    
  }
  else if(localStorage.getItem("islogged")==false){
    alert("Please Login");
  }
});


let data=sessionStorage.getItem("Booking");
data=JSON.parse(data)
console.log(data)

let checkin=data.Checkin;

let checkout=data.Checkout

let AdultNum=data.Adults
let clientName=data.Name
var day1 = new Date(checkin); 
var day2 = new Date(checkout);
let nightCalculation = (Date.parse(checkout) - Date.parse(checkin))
var difference= Math.abs(day2-day1);
let days = difference/(1000 * 3600 * 24)

console.log(days)
let Total=data.Total;

let x=document.getElementById('name').innerHTML+=clientName;
console.log(x);
document.getElementById('adults').innerHTML+=AdultNum;
document.getElementById('checkin').innerHTML+=checkin;
document.getElementById('checkout').innerHTML+=checkout;
document.getElementById('breakdown').innerHTML+=`<p class="cust-info">Tariff Breakdown: Rs.1000 x ${AdultNum} x ${days} Nights</p>`;
document.getElementById('cost').innerHTML+=Total;








