const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const closeBtn = document.querySelector(".close");

cards.forEach(card => {

card.addEventListener("click", function(){

modal.style.display = "flex";
modalText.innerHTML = this.dataset.detail;

});

});

closeBtn.addEventListener("click", function(){
modal.style.display = "none";
});