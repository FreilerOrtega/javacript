document.getElementById("button1").addEventListener("click",obtenerJSON);

    function obtenerJSON(){
        fetch('datos.json')
        .then(res=>res.json())
        .then(data=>{
            let cont = 1
            for(i in data[0].products){
                
                document.getElementById('output').innerHTML+= 
                `
                <p>Numero ${cont} Id: 
                ${data[0].products[i]["id"]}</p>
                <p>Name: ${data[0].products[i]["name"]}</p>
                <p1>Category: ${data[0].products[i]["category"]}</p>
                <p>price: ${data[0].products[i]["price"]}</p>
                <p>cantidad: ${data[0].products[i]["quantityInStock"]}</p>
                <p>proveedor: ${data[0].products[i]["supplierId"]}</p>
                `
                cont = cont + 1
            }
        
        })
        }
        function agregaJSON(){
            
        }

fetch("datos.json")
.then(res=>res.json())
.then(data=>{

    var Productos= data[0].products

    document.getElementById("button2").addEventListener("click",(e)=>{
        let CajaAdd = document.getElementById("output");

        CajaAdd.innerHTML=`
        <form id=Add>
            <input type=text id=input1 placeholder=ID>
            <input type=text id=input2 placeholder=Name>
            <input type=text id=input3 placeholder=Category>
            <input type=text id=input4 placeholder=Price>
            <input type=text id=input5 placeholder=Quantity>
            <input type=text id=input6 placeholder=SupplierId>
            <button type=submit>Add
        </form>
        `
        
        document.getElementById("Add").addEventListener("submit",function(event){
            event.preventDefault()

            let id=document.getElementById("input1").value;
            let Name = document.getElementById("input2").value;
            let Category = document.getElementById("input3").value;
            let Price = document.getElementById("input4").value;
            let Quantity = document.getElementById("input5").value;
            let SupplierId = document.getElementById("input6").value;
            

            Productos.push({
                "id": id,
                "name": Name,
                "category": Category,
                "price": Price,
                "quantityInStock": Quantity,
                "supplierId": SupplierId
            })
            console.log(Productos)
        })
        
    })
})