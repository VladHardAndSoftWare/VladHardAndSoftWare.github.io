// Get the modal
var modal
var ImgElemGlobal = "null";

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function (ImgElement) {
function ImgClick(ImgElement){
    modal = document.getElementById('myModal' + ImgElement);
    var img = document.getElementById("myImg" + ImgElement);
    var modalImg = document.getElementById("img" + ImgElement);
    var captionText = document.getElementById("caption" + ImgElement);
    modal.style.display = "block";
    // modalImg.src = this.src;
    modalImg.alt = this.alt;
    ImgElemGlobal = ImgElement;
    // captionText.innerHTML = this.alt;
}



// When the user clicks on <span> (x), close the modal
// modal.onclick = function () {
function Modal(){
    ImgElemGlobal.className += " out";
    setTimeout(function () {
        modal.style.display = "none";
        ImgElemGlobal.className = "modal-content";
    }, 400);

}