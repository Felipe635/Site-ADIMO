

function logar(){

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

if(email == "adm"){
    alert("ADM entrou!");
    location.href = "index.html"
//abri a pagina do adm que tema atela de cadastro
}else{
    alert("cliente entrou");
}
}