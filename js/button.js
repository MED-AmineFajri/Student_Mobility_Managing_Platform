let topButton = document.getElementById("topBtn");

  topButton.style.display = "none";
  
window.onscroll = function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}
