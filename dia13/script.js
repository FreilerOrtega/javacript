const api = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`


let jugador1 = document.getElementById("jugador_1")



fetch(api)
    .then(response => response.json())
    .then(data => {

        console.log(data);

        let baraja = data.deck_id

        fetch(`https://deckofcardsapi.com/api/deck/${baraja}/draw/?count=2`)
            .then(response => response.json()
            ).then(carta => {

                console.log(carta);

                let guardarmundo = document.getElementById("img");
                guardarmundo.innerHTML = `<div id="jugador1">
                <img id="imgcard" src="${carta.cards[0].image}" alt="">
                
            </div>`
              

            })
    })


