

var div = document.getElementsByClassName("card-holder");
for (var item of div){ 
    const modalid=item.getAttribute("data-modal");
    item.onclick = function() {
    var modal = document.getElementById(modalid);
    modal.style.display = "block";
}}



// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");


// When the user clicks anywhere outside of the modal, close it
var modals = document.getElementsByClassName("modal");
window.onclick = function(event) {
for (var item of modals) {
      if (event.target == item) {
    item.style.display = "none";
  }
}
}

for (var span of spans){
span.onclick = function(event) {
for (var item of modals) {
  item.style.display = "none";
}
}
     }




//var modalWrapper = document.getElementById("modal-wrapper");
//var modalClose = document.getElementsByClassName("modal-content");
//var modalButton = document.getElementsByClassName("works-button-modal");
//
//for (var button of modalButton){
//  const modalId = button.getAttribute('data-modal-id');
//  button.addEventListener('click', () => {
//    modalWrapper.style.display = "block";
//    var modalItem = document.getElementById(modalId);
//    modalItem.style.display = "flex";
//    window.location.hash = modalId;
//  });
//};


//<a class="works-button-modal" data-modal-id="modal-ids">