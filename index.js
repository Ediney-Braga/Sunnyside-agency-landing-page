const starMenuMobile = document.querySelector("starMenuMobile");
const menuMobile = document.querySelector("#menuMobile");

startMenuMobile.addEventListener("click", openMenuMobile);

function openMenuMobile (){
    if(menuMobile.classList.contains("open") == false){
        menuMobile.style.display = "flex";
        menuMobile.classList.add("open");
    } else {
        menuMobile.style.display = "none";
        menuMobile.classList.remove("open");
    }

}

