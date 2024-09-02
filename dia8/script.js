document.getElementById("idpersonaje").addEventListener("change",(e)=>{
    let valor=document.getElementById("idpersonaje").value;
    console.log(valor)

    var api = "https://swapi.py4e.com/api/people/"

    fetch(api+valor)
    .then(res=>res.json())
    .then(persona=>{

        fetch(persona.homeworld)
        .then(mundo=>mundo.json())
        .then(mundos=>{
            let guardarmundo=document.getElementById("mundos");
            guardarmundo.innerHTML=`
           <table>
                <tbody>
                    <tr>
                    <td>Name:</td>
                    <td>${mundos.name}</td>
                    </tr>
                    <tr>
                    <td>Rotation period:</td>
                    <td>${mundos.rotation_period}</td>
                    </tr>
                    <tr>
                    <td>Orbital period:</td>
                    <td>${mundos.orbital_period}</td>
                    </tr>
                    <tr>
                    <td>Diameter:</td>
                    <td>${mundos.diameter}</td>
                    </tr>
                    <tr>
                    <td>Climate:</td>
                    <td>${mundos.climate}</td>
                    </tr>
                    <tr>
                    <td>Gravity:</td>
                    <td>${mundos.gravity}</td>
                    </tr>
                    <tr>
                    <td>Terrain:</td>
                    <td>${mundos.terrain}</td>
                    </tr>
                    <tr>
                    <td>Surface water:</td>
                    <td>${mundos.surface_water}</td>
                    </tr>
                    <tr>
                    <td>Population: </td>
                    <td>${mundos.population}</td>
                    </tr>
                    <tr>
                    <td>Created:</td>
                    <td>${mundos.created}</td>
                    </tr>
                    <tr>
                    <td>Edited:</td>
                    <td>${mundos.edited}</td>
                    </tr>
                    <tr>
                    <td>Url:</td>
                    <td>${mundos.url}</td>
                    </tr>
                </tbody>
            </table>
            `
        })

        let pelicula = persona.films
        pelicula.forEach(cantidad => {
            fetch(cantidad)
            .then(cant=>cant.json())
            .then(guardapelis=>{
                let peli = document.getElementById("pelicula");
                peli.innerHTML+=`
                 <tr>
                    <td>Name:</td>
                    <td>${guardapelis.title}</td>
                    </tr>
                    <tr>
                    <td>Episode id:</td>
                    <td>${guardapelis.episode_id}</td>
                    </tr>
                    <tr>
                    <td>Opening crawl:</td>
                    <td>${guardapelis.opening_crawl}</td>
                    </tr>
                    <tr>
                    <td>Director:</td>
                    <td>${guardapelis.director}</td>
                    </tr>
                    <tr>
                    <td>Producer:</td>
                    <td>${guardapelis.producer}</td>
                    </tr>
                    <tr>
                    <td>Release date:</td>
                    <td>${guardapelis.release_date}</td>
                    </tr>
                    <tr>
                    <td>Created:</td>
                    <td>${guardapelis.created}</td>
                    </tr>
                    <tr>
                    <td>Edited:</td>
                    <td>${guardapelis.edited}</td>
                    </tr>
                    <tr>
                    <td>Url: </td>
                    <td>${guardapelis.url}</td>
                    </tr>
                    
                `
            })
            
            
        });


        let tabla= document.getElementById("table");
        tabla.innerHTML=`
        <tr>
            <tr>
                <td>Name:</td>
                <td>${persona.name}</td>
              </tr>
              <tr>
                <td>Height:</td>
                <td>${persona.height}</td>
              </tr>
              <tr>
                <td>Mass:</td> 
                <td>${persona.mass}</td>    
              </tr>
              <tr>
                <td>Hair color:</td> 
                <td>${persona.hair_color}</td>    
              </tr>
              <tr>
                <td>Eye color:</td> 
                <td>${persona.skin_color}</td>    
              </tr>
              <tr>
                <td>Skin color:</td> 
                <td>${persona.eye_color}</td>    
              </tr>
              <tr>
                <td>Birth</td> 
                <td>${persona.birth_year}</td>    
              </tr>
              <tr>
                <td>Gender</td> 
                <td>${persona.gender}</td>    
              </tr>
              <tr>
                <td>Homeworld:</td> 
                <td>
                    <div  style="max-width: 40rem;">
                    <div class="card-body" id="mundos">
                    </div>
                </td>    
              </tr>
              <tr>
                <td>Films:</td> 
                <td>
                  <div  style="max-width: 40rem;">
                    <div class="card-body" id="pelicula">
                    </div>
                </td>    
              </tr>
              <tr>
                <td>Species:</td> 
                <td>
                  <div  style="max-width: 40rem;">
                    <div class="card-body" id="especie">
                    </div>
                </td>    
              </tr>
              <tr>
                <td>Vehicles:</td> 
                <td>
                  <div  style="max-width: 40rem;">
                    <div class="card-body" id="Vehiculos">
                    </div>
                </td>    
              </tr>
              <tr>
                <td>Starships:</td> 
                <td>
                  <div  style="max-width: 40rem;">
                    <div class="card-body" id="naves">
                    </div>
                </td>    
              </tr>
              <tr>
                <td>Created:</td> 
                <td>${persona.created}</td>    
              </tr>
              <tr>
                <td>Edited:</td> 
                <td>${persona.edited}</td>    
              </tr>
              <tr>
                <td>Url:</td> 
                <td>${persona.url}</td>    
              </tr>
        </tr>
        `
        
    })
})