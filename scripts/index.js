

//In order to display and hide city cards
//and implement the View More city cards functionality

let viewMore = () => {
  let viewMoreButtonElement = document.getElementById("view-more-button");
  if (viewMoreButtonElement.innerText == "View More") {
      document.getElementById("collapsible").style.display = "block";
      viewMoreButtonElement.innerText = "View Less";
  }
  else {
      document.getElementById("collapsible").style.display = "none";
      viewMoreButtonElement.innerText = "View More";
  }
}
