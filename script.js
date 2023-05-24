

function logar(){

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

if(email == "adm"){
    alert("ADM entrou!");
    location.href = "adm.html"
//abri a pagina do adm que tema atela de cadastro
}else{
    alert("cliente entrou");
}

}

function addFav2 (){
    var linha2 = document.getElementById("linha2");
    linha2.classList.toggle('linha2-on');
}

function addFav3 (){
    var linha3 = document.getElementById("linha3");
    linha3.classList.toggle('linha3-on');
}