function changeColorPrincipal(color1){
    document.documentElement.style.setProperty("--subtittle-color", `${color1}`)
    document.documentElement.style.setProperty("--container-color", `${color1}c9`)
    document.documentElement.style.setProperty("--container-lateral-bar", `${color1}`)
    document.documentElement.style.setProperty("--span-color", `${color1}`)
    document.documentElement.style.setProperty("--svg", `${color1}`)
    document.documentElement.style.setProperty("--button-color-hover", `${color1}`)
    document.documentElement.style.setProperty("--background-ligth", `${color1}2a`)
    localStorage.setItem("colorPrincipal", `${color1}`);
    localStorage.setItem("mudouCorPrincipal", 'mudou')
    
}


function changeColorSecundaria(color1){
    document.documentElement.style.setProperty("--tittle-color", `${color1}`)
    localStorage.setItem("colorSecundaria", `${color1}`);
    localStorage.setItem("mudouCorPrincipal", 'mudou')
}

function mantemDarkMode(){
    if(document.cookie  == 'mode="dark"'){
      document.documentElement.style.setProperty("--subtittle-color", `#2A8BF2`)
      document.documentElement.style.setProperty("--container-color", `#3A3A3A3A`)
      document.documentElement.style.setProperty("--container-lateral-bar", `#3a3a3a`)
      document.documentElement.style.setProperty("--span-color", `#2A8BF2`)
      document.documentElement.style.setProperty("--svg", `#fff`)
      document.documentElement.style.setProperty("--tittle-color", `#fff`)
      localStorage.setItem("mudouCorPrincipal", 'naomudou')

       
   }else{
       changeColorPrincipal(localStorage.getItem("colorPrincipal"))
       changeColorSecundaria(localStorage.getItem("colorSecundaria"))
      
   }
  
  }


function showButtons(idButton, idsButtons) {
    for (let i = 0; i < idsButtons.length; i++) {
      const element = idsButtons[i];
    
      document.getElementById(element).classList.add("button_evidencia");
      document.getElementById(element).classList.remove("button_evidencia");
      document.getElementById(element).classList.remove("text_color");
      document.getElementById(element).classList.add("text_color");
    }
  
    document.getElementById(idButton).classList.toggle("button_evidencia");
    document.getElementById(idButton).classList.toggle("text_color");
  }

function mantemVisual(){
    var colorPrincipal = localStorage.getItem("colorPrincipal")
    var colorSecundaria =  localStorage.getItem("colorSecundaria");
    var tamanhoAtual = localStorage.getItem("tamanhoFont");
    const barraCor = document.getElementById('barra_cor');
    const barraCorSubtom = document.getElementById('barra_cor-subtom');
    if(localStorage.getItem("mudouCorPrincipal") === 'mudou'){
        barraCor.value = colorPrincipal
        barraCorSubtom.value = colorSecundaria
    }
    if (localStorage.getItem("Font") === 'mudou') {
        if (tamanhoAtual == '1.188rem') {
            showButtons('font1', ['font1','font2', 'font3', 'font4', 'font5'])
        }
        if (tamanhoAtual == '1.438rem') {
            showButtons('font2', ['font1','font2', 'font3', 'font4', 'font5'])
        }
        if (tamanhoAtual == '1.563rem') {
            showButtons('font3', ['font1','font2', 'font3', 'font4', 'font5'])
        }
        if (tamanhoAtual == '1.813rem') {
            showButtons('font4', ['font1','font2', 'font3', 'font4', 'font5'])
        }
        if (tamanhoAtual == '2.125rem') {
            showButtons('font5', ['font1','font2', 'font3', 'font4', 'font5'])
        }
        
    }
}


function mantem(){
    var colorPrincipal = localStorage.getItem("colorPrincipal")
    var colorSecundaria =  localStorage.getItem("colorSecundaria");
    var tamanhoAtual = localStorage.getItem("tamanhoFont");
    var tamanhoAtualMobile = localStorage.getItem("tamanho-mobile");
   
   
    if(localStorage.getItem("mudouCorPrincipal") === 'mudou'){
       changeColorPrincipal(colorPrincipal)
       changeColorSecundaria(colorSecundaria)
    }
    if (localStorage.getItem("Font") === 'mudou') {
        document.documentElement.style.setProperty("--tamanho-font", `${tamanhoAtual}`)
        document.documentElement.style.setProperty("--tamanho-mobile",`${tamanhoAtualMobile}` )
    }
   
}



function resetColor(){
   changeColorPrincipal('#2A8BF2')
   changeColorSecundaria('#000')
   localStorage.setItem("colorPrincipal", `#2A8BF2`);
   localStorage.setItem("colorSecundaria", `#000`);
   document.documentElement.style.setProperty("--button-color-hover", `#2E5F93`)
   document.documentElement.style.setProperty("--text-color", `#7A7A7A`)
}


function executaChange() {
    const hex1 = document.getElementById('hex1')
    const hex2 = document.getElementById('hex2')
    const barraCor = document.getElementById('barra_cor')
    const barraCorSubtom = document.getElementById('barra_cor-subtom')
    hex1.addEventListener('keyup', function(e) {
        const template1 = new RegExp(/^[^a-z].{3,6}/g).test(`${hex1.value}`)
        var key = e.which|| e.keyCode        
        if(key == 13){
            if( template1 == true && localStorage.getItem("mode") !== 'dark'){
                changeColorPrincipal(hex1.value)
            }else if (localStorage.getItem("mode") !== 'dark') {
                resetColor()
            }
        }
    })
    hex2.addEventListener('keyup', function(e) {
        const template2 = new RegExp(/^[^a-z].{3,6}/g).test(`${hex2.value}`)
        var key = e.which|| e.keyCode        
        if(key == 13){
            if( template2 == true && localStorage.getItem("mode") !== 'dark'){
                changeColorSecundaria(hex2.value)
            }else{
               resetColor()
            }
        }
    })
    barraCor.addEventListener('change', ()=>{
        if(  localStorage.getItem("mode") !== 'dark'){
            changeColorPrincipal(barraCor.value)
        }
        
    })
    barraCorSubtom.addEventListener('change', ()=>{
        if( localStorage.getItem("mode") !== 'dark'){
            changeColorSecundaria(barraCorSubtom.value)
        }
        
    })
}




function mudaFont(idButton) {
   if (idButton == 'font1') {
    document.documentElement.style.setProperty("--tamanho-font", '1.188rem')
    document.documentElement.style.setProperty("--tamanho-mobile", '0.7rem')
    localStorage.setItem("tamanho-mobile", '0.7rem')
    localStorage.setItem("tamanhoFont", '1.188rem')
    localStorage.setItem("Font", 'mudou')
   }
   if (idButton == 'font2') {
    document.documentElement.style.setProperty("--tamanho-font", '1.438rem')
    document.documentElement.style.setProperty("--tamanho-mobile", '0.75rem')
    localStorage.setItem("tamanho-mobile", '0.75rem')
    localStorage.setItem("tamanhoFont", '1.438rem')
    localStorage.setItem("Font", 'mudou')
   }
   if (idButton == 'font3') {
    document.documentElement.style.setProperty("--tamanho-font", '1.563rem')
    document.documentElement.style.setProperty("--tamanho-mobile", '0.8rem')
    localStorage.setItem("tamanho-mobile", '0.8rem')
    localStorage.setItem("tamanhoFont", '1.563rem')
    localStorage.setItem("Font", 'mudou')
   }
   if (idButton == 'font4') {
    document.documentElement.style.setProperty("--tamanho-font", '1.813rem')
    document.documentElement.style.setProperty("--tamanho-mobile", '0.9rem')
    localStorage.setItem("tamanho-mobile", '0.9rem')
    localStorage.setItem("tamanhoFont", '1.813rem')
    localStorage.setItem("Font", 'mudou')
   }
   if (idButton == 'font5') {
    document.documentElement.style.setProperty("--tamanho-font", '2.125rem')
    document.documentElement.style.setProperty("--tamanho-mobile", '1.0.5rem')
    localStorage.setItem("tamanho-mobile", '1.0.5rem')
    localStorage.setItem("tamanhoFont", '2.125rem')
    localStorage.setItem("Font", 'mudou')
    
   }
  
}

function inicializa(){
    if (localStorage.getItem("colorPrincipal") == null ) {
        localStorage.setItem("colorPrincipal", `#2A8BF2`);
        localStorage.setItem("colorSecundaria", `#000`);
        
    }
   
}

mantem()
inicializa()


