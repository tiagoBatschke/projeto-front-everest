var root = document.querySelector(':root')

document.getElementById('button_img').innerHTML = "<img src='./assets/imgs/Vector moon.png' class='img_icon_header'>"





function toggleClass(){

const page = document.getElementById('page')

var ContainDark = page.classList.contains('dark_mode')
  
if(ContainDark == true){
     DarkMode()
     page.classList.remove('dark_mode')
     document.getElementById('button_img').innerHTML = "<img src='./assets/imgs/Vector moon.png' class='img_icon_header'>"
     localStorage.setItem('mode', 'light')
  }else{
   DarkMode()
   document.getElementById('button_img').innerHTML = "<img src='./assets/imgs/sun_theme.svg' class='img_icon_header'>"
   page.classList.add('dark_mode')
   localStorage.setItem('mode', 'dark')
  }
}

  function mantemMode(){
    if(localStorage.getItem('mode')== 'dark'){
      toggleClass()
    }
    
  }


  function DarkMode() {
    document.getElementById('page').classList.toggle('dark_mode')

  }

  mantemMode()




