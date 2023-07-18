var root = document.querySelector(":root");

document.getElementById("button_img").innerHTML =
  "<img src='./assets/imgs/Vector moon.png' class='img_icon_header'>";

function toggleClass() {
  const page = document.getElementById("page");

  var ContainDark = page.classList.contains("dark_mode");

  if (ContainDark == true) {
    light_theme()
    DarkMode()
    document.getElementById("button_img").innerHTML =
      "<img src='./assets/imgs/Vector moon.png' class='img_icon_header'>";
    localStorage.setItem("mode", "light");
    console.log('tema claro')
  } else if (ContainDark == false) {
    DarkMode()
    light_theme()
    document.getElementById("button_img").innerHTML =
      "<img src='./assets/imgs/sun_theme.svg' class='img_icon_header'>";
    localStorage.setItem("mode", "dark");
  
    console.log('tema escuro')
  }
}

 function  mantemMode(){
    if (localStorage.getItem("mode") == "dark") {
      DarkMode()
   }else{
    light_theme()
  } 

}


  function DarkMode() {
  document.getElementById("page").classList.toggle("dark_mode");

}

function light_theme() {
  document.getElementById("page").classList.toggle("light_theme");

}

mantemMode()