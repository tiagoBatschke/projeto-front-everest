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

