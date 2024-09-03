document.getElementById("button1").addEventListener("click", (e) => {
    let valor = document.getElementById("input1").value;


    var api = "https://rickandmortyapi.com/api/character/"

    fetch(api + valor)
    .then(res => res.json())
    .then(mundo => {
    document.getElementById("caja").innerHTML=""
     document.getElementById("caja").innerHTML+=`
     <img src="${mundo.image}"id="foto">
     `


    })


})


