// function mapview() {
//     var y = document.getElementById("map");
//     var x = document.getElementById("card");
//     var z= document.getElementById("map_view");
//     var o= document.getElementById("list_view");
//     if (y.style.display === "none") {
//       y.style.display = "block";
//       x.style.display="none";
//       z.style.background="#1183ca";
//       z.style.color="white";
//       o.style.background="white";
//     } else {
//       y.style.display = "none";
//     }
//   }
//   function listview() {
//     var x = document.getElementById("card");
//     var y = document.getElementById("map");
//     var z= document.getElementById("map_view");
//     var o= document.getElementById("list_view");
//     if (x.style.display === "none") {
//       x.style.display = "flex";
//       y.style.display = "none";
//       z.style.background="white";
//       o.style.background="#1183ca";
//       o.style.color="white";
//     } else {
//       x.style.display = "none";
//     }
//   }
let urlList=window.location.href;
let newCity=urlList.split("?")[1].split("=")[1];
// removing null values in the API response
function noNullValues(nullValues) {
  return (nullValues.rating !== undefined && nullValues.address !== undefined);
}
let listObjArr = new Array();
let finalListObjArr = new Array();
const data = null;
const xhr = new XMLHttpRequest();
xhr.onreadystatechange= function() {
  if (this.readyState === this.DONE) {
    let arr = JSON.parse(this.responseText).data;
    for (var i = 0; i < arr.length; i++) {
      listObjArr.push(arr[i].result_object);
    }
    finalListObjArr = listObjArr.filter(noNullValues);
   
    showHotels(finalListObjArr);
  
  }
};
xhr.open(
  "GET",
  `https://travel-advisor.p.rapidapi.com/locations/search?query=${newCity}`
);
xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key","77d33c3366mshf9d2acc899b5b32p16e586jsn60fb84be843f");

xhr.send(data);

let displayListView = document.getElementById("card");
let displayContent;
let selectedHotel;
let Id;

let showHotels =  (displayHotels)=> {
 
  const displayStringOfHotels = displayHotels.map((obj) => {
      return `<a href="detail.html?id=${obj.location_id}"><div class="hotel_card"><img src="${obj.photo.images.large.url}" class="hotel_image" alt="${obj.name} height="300px" width="300px"/>
      <div class="hotel_info">
      <h3 class="hotelName">${obj.name}</h3>
      <p>${obj.rating}<span class="fa fa-star checked"></span></p>
      <p>${obj.address}</p>
    </div>
    </div></a>`;
    })
    .join("");
  displayListView.innerHTML = displayStringOfHotels;
  displayContent = document.getElementsByClassName("hotel_card");
  disableLoader();
 
};

