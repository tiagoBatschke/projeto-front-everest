const idInput = document.getElementById('input_messages')
const idContainerChat = document.getElementById('chatContainer')
const idForm = document.getElementById('formMessages')
var horario = new Date();

const templateMessage = document.createDocumentFragment(`<div class="chat_message-container"><div class="chat_message_text">
<p class="chat_message text" ;>${idInput.value}</p>
<p class="chat_message-hour text">14:50 PM</p>
</div>
</div>`)



function addResposta() {
   if (idInput.value == '') {

   }else{
    idContainerChat.insertAdjacentHTML('beforeEnd',`<div class="chat_message-container"><div class="chat_message_text">
   <p class="chat_message text" ;>${idInput.value}</p>
   <p class="chat_message-hour text">${horario.getHours()}:${horario.getMinutes()}</p>
   </div>
   </div>`)
   }
}


function chamaAddResposta(form, input){
    form.addEventListener('submit', e => {
        e.preventDefault()
        addResposta()
        input.value = ''
    })
  
  
}


chamaAddResposta(idForm, idInput)