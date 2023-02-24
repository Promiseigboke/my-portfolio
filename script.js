/* When the user clicks on the button , toggle between hiding and showing the dropdown content */
function showcontent() {
    document.getElementById("palindromeDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if(!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
    }
}