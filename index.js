/* const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
}); */

let menuList = document.getElementById("menuList");
        menuList.style.maxHeight = "0px";

        function toggleMenu() {
          if (menuList.style.maxHeight == "0px") {
            menuList.style.maxHeight = "300px";
          } else {
            menuList.style.maxHeight = "0px";
          }
        }