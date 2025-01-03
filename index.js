let menu = document.getElementById("menu")
let close = document.getElementById("image-close")
let weblink = document.getElementById("weblinks-mobile")

menu.addEventListener("click", function(){
    weblink.style.display = "block"
    menu.style.display = "none"
})
close.addEventListener("click", function(){
    weblink.style.display = "none"
    menu.style.display = "block"
})