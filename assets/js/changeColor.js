function changeColorPrincipal(color1){
    document.documentElement.style.setProperty("--subtittle-color", `${color1}`)
    document.documentElement.style.setProperty("--container-color", `${color1}c9`)
    document.documentElement.style.setProperty("--container-lateral-bar", `${color1}`)
    document.documentElement.style.setProperty("--span-color", `${color1}`)
    document.documentElement.style.setProperty("--svg", `${color1}`)
    document.documentElement.style.setProperty("--button-color-hover", `${color1}`)
    
    localStorage.setItem("colorPrincipal", `${color1}`);
    localStorage.setItem("mudouCorPrincipal", 'mudou')
}


function changeColorSecundaria(color1){
    document.documentElement.style.setProperty("--tittle-color", `${color1}`)
    
    localStorage.setItem("colorSecundaria", `${color1}`);
    localStorage.setItem("mudouCorPrincipal", 'mudou')
}


function mantemDarkMode(){
    const buttonDarkMode = document.getElementById('sun-set')

    contador = 1
    buttonDarkMode.addEventListener('click', function(){
    contador++
    if(contador % 2 == 0){
        document.documentElement.style.setProperty("--subtittle-color", `#2A8BF2`)
        document.documentElement.style.setProperty("--container-color", `#3A3A3A3A`)
        document.documentElement.style.setProperty("--container-lateral-bar", `#3a3a3a`)
        document.documentElement.style.setProperty("--span-color", `#2A8BF2`)
        document.documentElement.style.setProperty("--svg", `#fff`)
        document.documentElement.style.setProperty("--tittle-color", `#fff`)
        
       
    }else{
       changeColorPrincipal(localStorage.getItem("colorPrincipal"))
       changeColorSecundaria(localStorage.getItem("colorSecundaria"))
    }
})
}

function mantemColor() {
    var colorPrincipal = localStorage.getItem("colorPrincipal")
    var colorSecundaria =  localStorage.getItem("colorSecundaria");
    if(localStorage.getItem("mudouCorPrincipal") === 'mudou'){
       changeColorPrincipal(colorPrincipal)
       changeColorSecundaria(colorSecundaria)
       
    }else{
        resetColor()
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
    hex1.addEventListener('keyup', function(e) {
        const template1 = new RegExp(/^[^a-z].{3,6}/g).test(`${hex1.value}`)
        var key = e.which|| e.keyCode        
        if(key == 13){
            if( template1 == true){
                changeColorPrincipal(hex1.value)
            }else{
               resetColor()
            }
        }
    })
    hex2.addEventListener('keyup', function(e) {
        const template2 = new RegExp(/^[^a-z].{3,6}/g).test(`${hex2.value}`)
        var key = e.which|| e.keyCode        
        if(key == 13){
            if( template2 == true){
                changeColorSecundaria(hex2.value)
            }else{
               resetColor()
            }
        }
    })
}

mantemColor()
mantemDarkMode()
executaChange()