function openPage(id, ids) {
  for (let i = 0; i < ids.length; i++) {
    const element = ids[i];
    console.log(element);
    document.getElementById(element).classList.remove("hidden");
    document.getElementById(element).classList.add("hidden");
  }

  document.getElementById(id).classList.toggle("hidden");
}

function openList(id) {
  document.getElementById(id).classList.toggle("hidden");
}

function openNavBar(id) {
  document.getElementById(id).classList.toggle("hidden");
}

function openListMessages(idLista, idButton, idsButtons, ids) {
  for (let i = 0; i < ids.length; i++) {
    const element = ids[i];
    console.log(element);
    document.getElementById(element).classList.remove("hidden");
    document.getElementById(element).classList.add("hidden");
  }

  for (let i = 0; i < idsButtons.length; i++) {
    const element = idsButtons[i];
    console.log(element);
    document.getElementById(element).classList.add("button_evidencia");
    document.getElementById(element).classList.remove("button_evidencia");
  }

  document.getElementById(idLista).classList.toggle("hidden");
  document.getElementById(idButton).classList.toggle("button_evidencia");
}

function openPage(id, ids) {
  for (let i = 0; i < ids.length; i++) {
    const element = ids[i];
    console.log(element);
    document.getElementById(element).classList.remove("hidden");
    document.getElementById(element).classList.add("hidden");
  }

  document.getElementById(id).classList.toggle("hidden");
}

function openList(id) {
  document.getElementById(id).classList.toggle("hidden");
}

function openNavBar(id) {
  document.getElementById(id).classList.toggle("hidden");
}

function openListMessages(idLista, idButton, idsButtons, ids) {
  for (let i = 0; i < ids.length; i++) {
    const element = ids[i];
    console.log(element);
    document.getElementById(element).classList.remove("hidden");
    document.getElementById(element).classList.add("hidden");
  }

  for (let i = 0; i < idsButtons.length; i++) {
    const element = idsButtons[i];
    console.log(element);
    document.getElementById(element).classList.add("button_evidencia");
    document.getElementById(element).classList.remove("button_evidencia");
  }

  document.getElementById(idLista).classList.toggle("hidden");
  document.getElementById(idButton).classList.toggle("button_evidencia");
}


function openListCrm(idLista, idButton, idsButtons, ids) {
  for (let i = 0; i < ids.length; i++) {
    const element = ids[i];
    console.log(element);
    document.getElementById(element).classList.remove("hidden");
    document.getElementById(element).classList.add("hidden");
  }

  for (let i = 0; i < idsButtons.length; i++) {
    const element = idsButtons[i];
    console.log(element);
    document.getElementById(element).classList.add("button_evidencia");
    document.getElementById(element).classList.remove("button_evidencia");
    document.getElementById(element).classList.add("card_perfil-text-whitea");
    document.getElementById(element).classList.remove("card_perfil-text-white");
  }

  document.getElementById(idLista).classList.toggle("hidden");
  document.getElementById(idButton).classList.toggle("button_evidencia");
  document.getElementById(idButton).classList.toggle("card_perfil-text-white");
}


function uncheck(inputClass){
  
inputUsado = document.getElementsByClassName(inputClass)
  
  for (let i = 0; i < inputUsado.length; i++) {
    const element = inputUsado[i];
    Contador = 1
    element.addEventListener('click', function(){
      Contador++
      if(Contador % 2 === 0){
        
        this.checked = false
      }else{
        this.checked = true
      }
    })
  }
 
}

uncheck('config_colab-form-input')