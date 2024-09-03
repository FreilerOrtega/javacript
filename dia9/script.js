  document.getElementById("input1").addEventListener("change",()=>{
    let valor = document.getElementById("input1").value
    let current = null
    console.log(valor)

    
    var api="https://pokeapi.co/api/v2/pokemon/"

    fetch(api+valor)
    .then(res=>res.json())
    .then(pokemon=>{
      let img = document.getElementById("muneco");
      img.innerHTML=`
      <img src="${pokemon.sprites.other.showdown.front_default}">
      <audio autoplay src="${pokemon.cries.latest}"></audio>
     `
     let nombreid = document.getElementById("tabla");
     nombreid.innerHTML=`
     <tr>
        <td>${pokemon.id}-</td>
        <td>${pokemon.name}</td>
      </tr>
     `
    document.getElementById("boton1").addEventListener("click",siguiente)

    function siguiente (){
      if(current!==null){
        let nextid=current+1;
        var revisar="https://pokeapi.co/api/v2/pokemon/"+nextid;
        leer(revisar);
      }
    }
    document.getElementById("boton2").addEventListener("click",anterior)
    
    function anterior (){
      if(current!==null){
        let previd=current-1;
        var revisar="https://pokeapi.co/api/v2/pokemon/"-previd;
        leer(revisar);
      }
    }
     
      
        
    })
    


   
    
})