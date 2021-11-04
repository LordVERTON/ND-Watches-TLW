
fetch("header.html")
     .then(contenu=>contenu.text())
     .then(text=>{
         document.getElementById("header").innerHTML = text;
        })

fetch("liens.html")
    .then(contenu=>contenu.text())
    .then(text=>{
        document.getElementById("liens").innerHTML = text;
    })