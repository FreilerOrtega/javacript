document.getElementById("input1").addEventListener("input",()=>{
    let valor = document.getElementById("input1").value
    console.log(valor)

    var api="https://pokeapi.co/api/"

    fetch(api+valor)
    .then(res=>res.json())
    .then(pokemon=>{
        
    })
})