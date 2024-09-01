var datos = [
    {
        "products": [
            {
                "id": 1,
                "name": "Laptop",
                "category": "Electronics",
                "price": 999.99,
                "quantityInStock": 50,
                "supplierId": 101
            }
        ],
        "suppliers": [
            {
                "id": 101,
                "name": "Tech Supplies Inc.",
                "contactInfo": {
                    "phone": "123-456-7890",
                    "email": "sales@techsupplies.com",
                    "address": "123 Tech Lane, Silicon Valley, CA"
                }
            }
        ],
        "orders": [
            {
                "orderId": 1001,
                "productId": 1,
                "quantity": 5,
                "orderDate": "2024-08-23",
                "status": "Delivered"
            }
        ]
    }
    
]

function addProduct(producto){
    datos[0]["products"].push(producto)
}

function viewproduct(){
    console.log("--------Ver Productos------------------------");
    for( var i of datos[0].products){
        console.log("id: ",i.id);
        console.log("nombre: ",i.name);
        console.log("Categoria: ",i.category);
        console.log("Precio: ",i.price);
        console.log("Cantidad en stock: ",i.quantityInStock);
        console.log("SupplierId: ",i.supplierId);
        console.log("------------------------------------------");
    }
}

function deleteProduct(){

}

function updateProduct(id, newDetails) {
   
   
    datos[0].products.name=newDetails
        if (id==i["id"]){ 
           
            
            i["id"]=newDetails
            

            
            i["name"]=newDetails
        
            
            i["category"]=newDetails

        

            i["price"]=newDetails

        

        
            i["quantityInStock"]=newDetails
        

        
            i["supplierId"]=newDetails

           

           



        }

    

    

}

function addSuppliers(supplier){
    datos[0]["suppliers"].push(supplier)
}


function viewsuppliers(){
    console.log("--------Ver Proveedores------------------------");
    for( var i of datos[0].suppliers){
        console.log("id: ",i.id);
        console.log("nombre: ",i.name);
        console.log("Contacinfo: ");
        console.log("Celular",i.contactInfo.phone);
        console.log("email",i.contactInfo.email);
        console.log("address",i.contactInfo.address);
        console.log("------------------------------------------");
    }
}

function deletesuppliers(){

}

function updatesuppliers() {
    
}



function addorders(order){
    datos[0]["orders"].push(order)
}


function vieworders(){
    console.log("--------Ver ordenes------------------------");
    for( var i of datos[0].orders){
        console.log("id orden: ",i.orderIdid);
        console.log("id de producto: ",i.productId);
        console.log("Cantidad",i.contactInfo.quantity);
        console.log("datos de orden",i.contactInfo.orderDate);
        console.log("estado",i.contactInfo.status);
        console.log("------------------------------------------");
    }
}

function deletesuppliers(){

}

function updatesuppliers() {
    
}

console.log("================Bienvenido===========");

console.log("1.products \n" +
    "2.suppliers\n" +
    "3.orders\n"+
    "4.salir"
);

var opcion = prompt("por favor elige una opcion")

if (opcion == 1) {
    console.log("1.añadir productos al inventario\n" +
        "2.ver los productos\n" +
        "3.actualizar los produectos\n" +
        "4.eliminar producto\n"
    );

    var opcproducts = prompt("elige una opcion ")

    if (opcproducts == 1) {
        var id2 = prompt("ingresa el id")
        var name2 = prompt("ingresa el nombre de el producto")
        var categoria2 = prompt("ingresa la categoria ")
        var precio = prompt("ingresa el precio")
        var cantidad2 = prompt("ingrese la cantidad")
        var idproveedor2 = prompt("ingresa el id de el prveedor")       

        addProduct(
            producto = {
                "id": id2,
                "name": name2,
                "category": categoria2,
                "price": precio,
                "quantityInStock":cantidad2,
                "supplierId": idproveedor2

            }
           
        )
        
        console.log(datos[0]["products"], null,2);

        



    }

    if (opcproducts==2) {

       viewproduct()
        
     

        
        
    }

    if (opcproducts==3){
        viewproduct()
        var id = prompt("ingresa el id del producto a actualizar")
        console.log("1.cambiar id del producto\n2.nombre\n3.categoria\n4.precio\n5.cantidad\n6.proveedor");
        var actu = prompt("que opcion desea actualizar")

        for (let i of datos[0].products){
            if (actu==1){
                newDetails=prompt("ingresa el nuevo id")
                i["id"]=newDetails
            }

            if (actu==2){
                newDetails=prompt("ingresa el nuevo nombre")
                i["name"]=newDetails
            }

            if (actu==3){
                newDetails=prompt("ingresa la nueva categoria")
                i["category"]=newDetails

            }

            if (actu==4){
                newDetails=prompt("ingresa el nuevo precio")
                i["price"]=newDetails

            }

            if (actu==5){
                newDetails=prompt("ingresa la nueva cantidad")
                i["quantityInStock"]=newDetails
            }

            if(actu==6){
                newDetails=prompt("ingresa el nuevo id de proveedor")
                i["supplierId"]=newDetails

            }
        }

        updateProduct(id, newDetails)

        console.log(datos);
        

    }
    
    if (opcproducts==4){

    }


    if(opcion==2){
    
        console.log("1.añadir proveedor\n" +
            "2.ver proveedores\n" +
            "3.actualizar proveedores\n" +
            "4.eliminar proveedor\n"
        );
        var opc=prompt("elije una opcion")
        if(opc==1){

        }
    }
    

}


else if(opcion==3){

}

else if (opcion==4){

}