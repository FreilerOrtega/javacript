

const json = [
    {
        "salon": "Sputnik",
        "estudiantes": [
            {
                "identificacion": 4024674357,
                "nombres": "Cristina",
                "apellidos": "Aguilera Moron",
                "direccion": "Calle 9 #10-210",
                "acudiente": "Ramon Aguilera Torrado",
                "nfijo": "601 5787492",
                "celular": "313 575 78 25",
                "estado": "Cursando",
                "trainer": "Pedro",
                "ruta": "Java",
                "inicio": "19-02-2024",
                "finalizacion": "14-04-2025",
                "EstadoPlataforma": "inactivo"
            }
        ]
    },
    {
        "salon": "Apolo",
        "estudiantes": [
            {
                "identificacion": 6536787532,
                "nombres": "Diego Leon",
                "apellidos": "Santana Conedo",
                "direccion": "Calle 11 #24-253",
                "acudiente": "Carlos Santana Guerrero",
                "nfijo": "601 5423546",
                "celular": "302 575 45 66",
                "estado": "Cursando",
                "trainer": "Stiven",
                "ruta": "NodeJS",
                "inicio": "19-02-2024",
                "finalizacion": "14-04-2024",
                "EstadoPlataforma": "inactivo"
            }
        ]
    },
    {
        "salon": "Artemis",
        "estudiantes": [
            {
                "identificacion": 56571854534,
                "nombres": "Moly Alejandra",
                "apellidos": "Castillo Arellano",
                "direccion": "Urbanizacion La Esmeralda",
                "acudiente": "Cristina Arellano Casas",
                "nfijo": "601 8255272",
                "celular": "313 527 35 52",
                "estado": "Cursando",
                "trainer": "Andres",
                "ruta": "NetCore",
                "inicio": "19-02-2024",
                "finalizacion": "14-04-2025",
                "EstadoPlataforma": "inactivo"
            }
        ]
    }
]


/*console.log(typeof json);


const jsonDATA= JSON.parse(json);
console.log( typeof jsonDATA);



const inscripcion = jsonDATA.filter(
    (inscripciones) => inscripciones.nombres
)


console.log(inscripcion);*/









console.log("====MENU======");
console.log(
    "1.camper\n"+
    "2.trainer\n"+
    "3.coordinador\n"
    );

var opc=prompt("elije una opción")

    if (opc==1){
        var usuario=prompt("ingresa tu nombre");
        var contraseña= prompt("ingresa su contraseña (ID)")

        for (const i of json){
            for(const x of i["estudiantes"]){
                if(x["identificacion"]==contraseña){
                    console.log("IDENTIFICACION :",x["identificacion"]);
                    console.log("NOMBRES :",x["nombres"]);
                    console.log("APELLIDOS :",x["apellidos"]);
                    console.log("DIRECCION :",x["direccion"]);
                    console.log("ACUDIENTE :",x["acudiente"]);
                    console.log("NFIJO :",x["nfijo"]);
                    console.log("CELULAR :",x["celular"]);
                    console.log("TRAINER :",x["trainer"]);
                    console.log("RUTA:",x["ruta"]);
                    console.log("INICIO :",x["inicio"]);
                    console.log("FINALIZACION :",x["finalizacion"]);
                    console.log("ESTADO :",x["EstadoPlataforma"]);
                }

                
            }
        }
        var fechasesion = new Date()
                    var now= fechasesion.toLocaleString();
                    console.log(now);
                    
                    const actividad = "Revision de sus datos personales"
                    const estadoplat = "Activo"
                    
                    var entrada={
                        "id": contraseña,
                        "fecha": now
                    }                    
                    entrada.actividad= actividad;
                    entrada.estadoplat= estadoplat;

                    var pregunta=prompt("\n¿Desea continuar viendo sus datos? Si no, se volverá al menú principal. (si/no)\n")
                    
                    if (pregunta = "no"){
                        const estadoplat= "finalizado"
                        entrada.estadoplat=estadoplat
                    }
           
    }

    if (opc==2){
        console.log("bienvenido trainer");
            var preguntatraier =prompt("\n ¿que deseas hacer hoy ? ")
        
    }

    if (opc==3){
        console.log("bienvenido coordinador");
        
    }



    
