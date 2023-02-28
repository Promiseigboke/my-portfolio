/* When the user clicks on the button , toggle between hiding and showing the dropdown content */
function showcontent1() {
    document.getElementById("romanDropdown").classList.toggle("show");
}
 function showcontent2() {
    document.getElementById("palindromeDropdown").classList.toggle("show");
} 
// Close the dropdown if the user clicks outside of it 
/* window.onclick = function(event) {
    if(!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
    }
} 
*/