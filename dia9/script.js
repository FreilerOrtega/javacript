document.getElementById("input1").addEventListener("change",()=>{
    let valor = document.getElementById("input1").value
    console.log(valor)

    
    var api="https://pokeapi.co/api/v2/pokemon/"

    fetch(api+valor)
    .then(res=>res.json())
    .then(pokemon=>{
      let img = document.getElementById("muneco");
      img.innerHTML=`
      <img src="${pokemon.sprites.other.showdown.front_default}">
     `
     let nombreid = document.getElementById("tabla");
     nombreid.innerHTML=`
     <tr>
        <td>${pokemon.id}-</td>
        <td>${pokemon.name}</td>
      </tr>
     `
     
      
        
    })
   
    
})