var menu = document.querySelector(".icon-menu")
var boxMenu = document.querySelector(".menu-item-box")
var x = 0
menu.addEventListener("click" , function(){
  if (x == 0) {
    menu.style.transform = "rotate(720deg)"
    setTimeout(function(){
       menu.innerHTML = "close"
    } , 300)

    setTimeout(function(){
        menu.style.transform = "rotate(900deg)"
    } , 100)
    boxMenu.style.width = "30%"
    boxMenu.style.right = "120px"
    x = 1
  }else if (x == 1) {
    menu.style.transform = "rotate(180deg)"
    setTimeout(function(){
        menu.innerHTML = "menu"
    } , 300)
    boxMenu.style.width = "0%"
    boxMenu.style.right = "0px"
    x = 0
  }
    
})










