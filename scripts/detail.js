//Functionality of Calculating total Cost.
var bookingTotal = ()=> {
  let checkIn = document.getElementById('In').valueAsNumber;
  let checkOut = document.getElementById('out').valueAsNumber;
  let NumberOfAdults = document.getElementById('adults').value;
  let CustomerName = document.getElementById('Name').value;
  let total = document.getElementById('totalAmount');
//Including the condition for checkout date value should be higher than checkin date value.
  if (NumberOfAdults >= 1 && CustomerName != "" && checkIn > 0 &&  checkOut > 0 && checkOut > checkIn) {
    //The calculation of checkIn date to checkout date 
    //calculating total cost     
    let calculateDays = (checkOut - checkIn) / (24*60*60*1000);
    let totalCost = 1000 * NumberOfAdults * calculateDays;
    //Displaying the output in the Total textbox.
    total.value = "Rs. "+ totalCost;
  }
};

forms.addEventListener("input", bookingTotal);


let hotel_title=document.getElementById("hotel-title");
let heading_ratings=document.getElementById("heading-rating");
let hotel_details=document.getElementById("heading-hotel-detail");
let hotelObj;


let url=window.location.href;
const data=null;
const Id=url.split("?")[1].split("=")[1];
const xhr=new XMLHttpRequest();

xhr.onreadystatechange=function(){
  
  if(this.readyState===this.DONE){
    
    hotelObj=JSON.parse(this.responseText);
    console.log(hotelObj.data[0].amenities)
    
    hotel_details.textContent=hotelObj.data[0].name
    hotel_details.textContent=hotelObj.data[0].description;
    heading_ratings.textContent=hotelObj.data[0].rating;
  
     
    
 


   }
  
};
xhr.open("GET",`https://travel-advisor.p.rapidapi.com/hotels/get-details?location_id=${Id}`);
xhr.setRequestHeader("x-rapidapi-host","travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key","77d33c3366mshf9d2acc899b5b32p16e586jsn60fb84be843f");
xhr.send(data);


const slider=(img)=>{
  return ` <div class="carousel-item active">
  <img class="carousel-image" class="d-block w-100" src="${img[2].images.large.url}" alt="" height="400px" width="500px"/>
</div>
<div class="carousel-item">
  <img class="carousel-image" class="d-block w-100" src="${img[3].images.large.url}" alt="" height="400px" width="500px"/>
</div>
<div class="carousel-item">
  <img class="carousel-image" class="d-block w-100" src="${img[4].images.large.url}" alt="" height="400px" width="500px"/>
</div>`
};
let insideCarouselSlider=document.getElementsByClassName("carousel-inner")[0];
const xhrImg= new XMLHttpRequest();
let dataImg=[];
let resultPhotoObj;
xhrImg.onreadystatechange=function(){
  if(this.readyState===this.DONE){
    
   
    resultObj=JSON.parse(this.responseText);
    dataImg=resultObj.data
    // console.log(resultObj)
    // console.log(dataImg)
   
let sliderContent=slider(dataImg);
insideCarouselSlider.innerHTML=sliderContent;
  }
};
xhrImg.open("GET",`https://travel-advisor.p.rapidapi.com/photos/list?location_id=${Id}`);
xhrImg.setRequestHeader('x-rapidapi-host','travel-advisor.p.rapidapi.com');
xhrImg.setRequestHeader('x-rapidapi-key', '77d33c3366mshf9d2acc899b5b32p16e586jsn60fb84be843f');
xhrImg.send(dataImg);

formDetail=document.getElementById("forms");
// Functionality for Book Now Button
formDetail.addEventListener("submit",function(event){
  event.preventDefault();
  window.location.href=`payment.html?hotel_id=${Id}&adults=${document.getElementById("adults").value}& NameOfCust=${document.getElementById("Name").value}&checkInDate=${document.getElementById("In").value}&checkOutDate=${document.getElementById("out").value}&totalcost=${totalAmount}`;

});
const handleSubmit=()=>{
  let name=document.getElementById("Name").value;
  let adults=document.getElementById("adults").value;
  let In=document.getElementById("In").value;
  let out=document.getElementById("out").value;
  let totalAmount=document.getElementById("totalAmount").value;
  let data={
    Name:name,
    Adults:adults,
    Checkin:In,
    Checkout:out,
    Total:totalAmount
  };
  sessionStorage.setItem("Booking",JSON.stringify(data))
}
