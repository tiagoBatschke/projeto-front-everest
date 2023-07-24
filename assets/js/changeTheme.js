document.cookie = 'mode = "dark"';

document.getElementById("button_img").innerHTML =
  "<img src='./assets/imgs/Vector moon.png' class='img_icon_header'>";

function toggleClass() {
  const page = document.getElementById("page");

  var ContainDark = page.classList.contains("dark_mode");

  if (ContainDark == true) {
    DarkMode()
    document.getElementById("button_img").innerHTML =
      "<img src='./assets/imgs/Vector moon.png' class='img_icon_header'>";
    mode = 'light'
    console.log('tema claro')
  } else if (ContainDark == false) {
    DarkMode()
    
    document.getElementById("button_img").innerHTML =
      "<img src='./assets/imgs/sun_theme.svg' class='img_icon_header'>";

    console.log('tema escuro')
  }
}


function mantemDarkMode(){
  if(document.cookie == 'mode = "dark"'){
    document.documentElement.style.setProperty("--subtittle-color", `#2A8BF2`)
    document.documentElement.style.setProperty("--container-color", `#3A3A3A3A`)
    document.documentElement.style.setProperty("--container-lateral-bar", `#3a3a3a`)
    document.documentElement.style.setProperty("--span-color", `#2A8BF2`)
    document.documentElement.style.setProperty("--svg", `#fff`)
    document.documentElement.style.setProperty("--tittle-color", `#fff`)
    localStorage.setItem("mudouCorPrincipal", 'naomudou')
    console.log('teste')
 }else{
     changeColorPrincipal(localStorage.getItem("colorPrincipal"))
     changeColorSecundaria(localStorage.getItem("colorSecundaria"))
     
 }

}

function DarkMode() {
  document.getElementById("page").classList.toggle("dark_mode");

}



mantemDarkMode()