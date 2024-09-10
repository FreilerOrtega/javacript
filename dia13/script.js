const api=`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`


    
    fetch(api)
        .then(response => response.json())
        .then(data => {
            
            console.log(data);
        })
            