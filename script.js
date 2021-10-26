console.log("Bonjour")

function changement(){
    var forme = document.getElementById("cforme").value
    var prix=0
    if (forme=="carré"){
        prix+=10
    }
    else if (forme=="rond"){
        prix+=5
    }
    else if (forme=="autre forme"){
        prix+=15
    }

    document.getElementById("prix").innerText=prix
}