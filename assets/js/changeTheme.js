document.getElementById("button_img").innerHTML =
  "<img src='./assets/imgs/Vector moon.png' class='img_icon_header'>";
const page = document.getElementById("page");

function toggleClass() {


  var ContainDark = page.classList.contains("dark_mode");

  if (ContainDark === true) {
    DarkMode()
    document.getElementById("button_img").innerHTML =
      "<img src='./assets/imgs/Vector moon.png' class='img_icon_header'>";
      document.cookie = 'mode = "light"';
    
      

  }else{
    DarkMode()
    document.getElementById("button_img").innerHTML =
      "<img src='./assets/imgs/sun_theme.svg' class='img_icon_header'>";
      document.cookie = 'mode = "dark"';
     
  }
}


function mantemDark(){
  if( document.cookie  == 'mode="dark"'){
    page.classList.add("dark_mode");
    
  }
 
}

function DarkMode() {
page.classList.toggle("dark_mode");

}


mantemDark()