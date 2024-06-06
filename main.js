const nav = document.querySelector(".nav");
const navtoggle = document.querySelector(".mobile-nav-toggle");
const imgElement = document.getElementById('myImage');

navtoggle.addEventListener("click",()=>{

    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        imgElement.src = "close.svg";
    } else {
        nav.setAttribute("data-visible", false);
        imgElement.src = "hamburger.svg";
    }

    

    
})
