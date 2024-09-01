document.getElementById("button1").addEventListener('click', () => {
  let input1 = document.getElementById("input1").value
  console.log(input1);

  let nombre = document.getElementById("name");
  let Contenedor = document.getElementById("Contenedor")


  let todos = ""

  todos = `https://superheroapi.com/api.php/76ae26d89a6b2fcb5a1b326b469b8441/` + String(input1);
  fetch(todos)
    .then(res => res.json())
    .then(data => {
      Contenedor.innerHTML = `
        <img src=${data.image.url} class="card-img-top">
        <div class="card-body">
          <h5 id="id">${data.id}</h5>  
          <h5 id="nombre" class="card-title">${data.name}</h5>
          <ul class="list-group list-group-flush">
          <li class="list-group-item"><h5 id="name" class="card-title">Powers</h5></li>
          <li class="list-group-item">intelligence:${data.powerstats.intelligence}</li>
          <li class="list-group-item">strength:${data.powerstats.strength}</li>
          <li class="list-group-item">speed:${data.powerstats.durability}</li>
        </ul>

        <div class="card-body">
          
          <h5 class="card-title"></h5>
          <ul class="list-group list-group-flush">
          <li class="list-group-item"><h5  class="card-title">biography</h5></li>
          <li class="list-group-item">full-name:${data.biography.full-name}</li>
          <li class="list-group-item">alter-egos:${data.biography["alter-egos"]}</li>
          <li class="list-group-item">aliases:${data.biography["aliases"].map(i=>i).join('<br>')}</li>
          <li class="list-group-item">place-of-birth:${data.biography["place-of-birth"]}</li>
          <li class="list-group-item">first-appearance:${data.biography["first-appearance"]}</li>
          <li class="list-group-item">publisher:${data.biography["publisher"]}</li>
          <li class="list-group-item">alignment:${data.biography.alignment}</li>
        </ul>

        <div class="card-body">
          
          <h5 class="card-title"></h5>
          <ul class="list-group list-group-flush">
          <li class="list-group-item"><h5  class="card-title"></h5>place-of-birth</li>
          
        </ul>
          
        </div>
        
        
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
        </div>
        `
    });
})