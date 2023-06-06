

function openPage( PagConteudo, idConteudo ){
    var indice = PagConteudo;
    var target = idConteudo;
    var url = indice

    var xml =  new XMLHttpRequest()

    xml.onreadystatechange = ()=>{
        if(xml.readyState == 4 && xml.status == 200){
            document.getElementById(target).innerHTML = xml.responseText
        }
    }

    xml.open('GET', url);

    xml.send();
}

