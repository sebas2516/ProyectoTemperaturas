// let mapOptions = {
//     center:[4.61664, -74.06782],
//     zoom: 10
// }

// let map = new L.map('map' , mapOptions);

// let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

// map.addLayer(layer);

// // let marker = new L.Marker([4.6535, -74.0833]);
// // marker.addTo(map);

// let marker = L.marker([4.61664, -74.06782]).addTo(map)



// // let marker2 = L.marker([4.61664, -74.06782]).addto(map)
var userName = "servWebElite";
var passWord = "$s3rvW3bEl1t3%";

function authenticateUser(user, password){
    var auth = user + ":" + password;    
    var hash = btoa(auth); 
    return "Basic " + hash;
};


// Todos los datos
function CallWebAPI() {    
    var request = new XMLHttpRequest();
    var autenticate = authenticateUser(userName, passWord);
    
        request.open("get", "https://gps.coltrack.com/gps/api.jsp", false);	
        request.setRequestHeader("Authorization", authenticateUser(userName, passWord));  	
        request.send();   
        console.log("Loaded data");    
        respuesta=JSON.parse(request.response);       

    salida = respuesta.message.data;
       
    $("#Tabla").append('<tr><th>PLACA</th><th>TEMPERATURA</th><th>HORA</th><th>LUGAR</th><th>UBICACION</th><th>CIUDAD</th><th>EVENTO</th><th>Activo</th><th> Desactivo</th></tr>');
    $("#Tabla1").append('<tr><th>PLACA</th><th>TEMPERATURA</th><th>HORA</th><th>LUGAR</th><th>UBICACION</th><th>CIUDAD</th><th>EVENTO</th><th>Activo | Desactivo</th></tr>');
    $("#Tabla2").append('<tr><th>PLACA</th><th>TEMPERATURA</th><th>HORA</th><th>LUGAR</th><th>UBICACION</th><th>CIUDAD</th><th>EVENTO</th><th>Activo | Desactivo</th></tr>');

    for (let index = 0; index < salida.length; index++) {
        $("#Tabla").append("<tr id = 'data - "+index+"'><td>"
            +salida[index].PLACA+"</td><td>"
            +salida[index].TEMPERATURA+"</td><td>"
            +salida[index].TIEMPO+"</td><td>"
            +salida[index].LUGAR+"</td><td>"
            +salida[index].UBICACION+"<a class= fcc-btn href=  https://maps.google.com/?q="
            +salida[index].LATITUD+","+salida[index].LONGITUD+"> <i class='bi bi-geo-alt-fill'></i>"+"</a></td><td>"
            +salida[index].CIUDAD+"</td><td>"
            +salida[index].EVENTO+"</td><td>"
            +"&nbsp; &nbsp; <input type ='radio' id ="+index+" onclick = 'cookie1()'name = "+salida[index].NOMBRE+" value ="+salida[index].NOMBRE+"> &nbsp; &nbsp;"+"</td><td>"
            +"&nbsp; &nbsp; <input type ='radio' id ='Desactivo' onclick ='cookie2()' name = "+salida[index].PLACA+" value ="+salida[index].NOMBRE+" &nbsp; &nbsp;"
        +"</td></tr>");   

        +$("#Tabla1").empty("<tr><td>"
            +salida[index].PLACA+"</td><td>"
            +salida[index].TEMPERATURA+"</td><td>"
            +salida[index].TIEMPO+"</td><td>"
            +salida[index].LUGAR+"</td><td>"
            +salida[index].UBICACION+"<a class= fcc-btn href=  https://maps.google.com/?q="                    
            +salida[index].LATITUD+","+salida[index].LONGITUD+"> <i class='bi bi-geo-alt-fill'></i>"+"</a></td><td>"
            +salida[index].CIUDAD+"</td><td>"
            +salida[index].EVENTO+"</td><td class= 'boton'>"
            +"&nbsp; &nbsp; <input type ='radio' id ='Activo' onclick = 'prueba()' name = "+salida[index].NOMBRE+" value ='Activar'> &nbsp; &nbsp;"+"</td><td>"
            +"&nbsp; &nbsp; &nbsp; <input type ='radio' id ='Desactivo' onclick = 'Desactivar()' name = "+salida[index].NOMBRE+" value ='Desactivar'> &nbsp; &nbsp;"
        +"</td></tr>");       

        +$("#Tabla2").empty("<tr><td>"
            +salida[index].PLACA+"</td><td>"
            +salida[index].TEMPERATURA+"</td><td>"
            +salida[index].TIEMPO+"</td><td>"
            +salida[index].LUGAR+"</td><td>"
            +salida[index].UBICACION+"<a class= fcc-btn href=  https://maps.google.com/?q="
            +salida[index].LATITUD+","+salida[index].LONGITUD+"> <i class='bi bi-geo-alt-fill'></i>"+"</a></td><td>"
            +salida[index].CIUDAD+"</td><td>"
            +salida[index].EVENTO+"</td><td>"
            +"&nbsp; &nbsp; <input type ='radio' id ='Activo' onclick = 'prueba()' name = "+salida[index].NOMBRE+" value ='Activar'> &nbsp; &nbsp;"+"</td><td>"
            +"&nbsp; &nbsp; &nbsp; <input type ='radio' id ='Desactivo' onclick = 'Desactivar()' name = "+salida[index].NOMBRE+" value ='Desactivar'> &nbsp; &nbsp;"
        +"</td></tr>");
    };
}; 


// Datos en estado Activo
function Activos(){
    for (let index = 0; index < salida.length; index++) {
        if (salida[index].EVENTO == "TDR Encendido" || salida[index].EVENTO == "Encendido" || salida[index].EVENTO == "TDR Encendido-No GSM" || salida[index].EVENTO == "GPS Adquirido" || salida[index].EVENTO == "Temperatura Alta > 8º"){   
            $("#Tabla1").append("<tr><td>"
                +salida[index].PLACA+"</td><td>"
                +salida[index].TEMPERATURA+"</td><td>"
                +salida[index].TIEMPO+"</td><td>"
                +salida[index].LUGAR+"</td><td>"
                +salida[index].UBICACION+"<a class= fcc-btn href=  https://maps.google.com/?q="
                +salida[index].LATITUD+","+salida[index].LONGITUD+"><i class='bi bi-geo-alt-fill'></i>"+"</a></td><td>"
                +salida[index].CIUDAD+"</td><td>"
                +salida[index].EVENTO+"</td><td >"
                +"&nbsp; &nbsp; <input type ='radio' id ='Activo' onclick = 'prueba()' name = "+salida[index].NOMBRE+" value ='Activar'> &nbsp; &nbsp;"+"</td><td>"
                +"&nbsp; &nbsp; &nbsp; <input type ='radio' id ='Desactivo' onclick = 'Desactivar()' name = "+salida[index].NOMBRE+" value ='Desactivar'> &nbsp; &nbsp;"
            +"</td></tr>");       
                
            +$("#Tabla").empty("<tr><td>"
                +salida[index].PLACA+"</td><td>"
                +salida[index].TEMPERATURA+"</td><td>"
                +salida[index].TIEMPO+"</td><td>"
                +salida[index].LUGAR+"</td><td>"
                +salida[index].UBICACION+"<a class= fcc-btn href=  https://maps.google.com/?q="
                +salida[index].LATITUD+","+salida[index].LONGITUD+"><i class='bi bi-geo-alt-fill'></i>"+"</a></td><td>"
                +salida[index].CIUDAD+"</td><td>"
                +salida[index].EVENTO+"</td><td>"
                +"&nbsp; &nbsp; <input type ='radio' id ='Activo' onclick = 'prueba()' name = "+salida[index].NOMBRE+" value ='Activar'> &nbsp; &nbsp;"+"</td><td>"
                +"&nbsp; &nbsp; &nbsp; <input type ='radio' id ='Desactivo' onclick = 'Desactivar()' name = "+salida[index].NOMBRE+" value ='Desactivar'> &nbsp; &nbsp;"
            +"</td></tr>");       

            +$("#Tabla2").empty("<tr><td>"
                +salida[index].PLACA+"</td><td>"
                +salida[index].TEMPERATURA+"</td><td>"
                +salida[index].TIEMPO+"</td><td>"
                +salida[index].LUGAR+"</td><td>"
                +salida[index].UBICACION+"<a class= fcc-btn href=  https://maps.google.com/?q="
                +salida[index].LATITUD+","+salida[index].LONGITUD+"> <i class='bi bi-geo-alt-fill'></i>"+"</a></td><td>"
                +salida[index].CIUDAD+"</td><td>"
                +salida[index].EVENTO+"</td><td>"
                +"&nbsp; &nbsp; <input type ='radio' id ='Activo' onclick = 'prueba()' name = "+salida[index].NOMBRE+" value ='Activar'> &nbsp; &nbsp;"+"</td><td>"
                +"&nbsp; &nbsp; &nbsp; <input type ='radio' id ='Desactivo' onclick = 'Desactivar()' name = "+salida[index].NOMBRE+" value ='Desactivar'> &nbsp; &nbsp;"
            +"</td></tr>");       
        };
    };
};


// Datos en estado Inactivo
function Inactivos(){
    for (let index = 0; index < salida.length; index++) {
        if (salida[index].EVENTO == "TDR Apagado" || salida[index].EVENTO == "Apagado" || salida[index].EVENTO == "Log Out" || salida[index].EVENTO == "Time Out Identificación" || salida[index].EVENTO == "Hibernación"){
            $("#Tabla2").append("<tr><td>"
                +salida[index].PLACA+"</td><td>"
                +salida[index].TEMPERATURA+"</td><td>"
                +salida[index].TIEMPO+"</td><td>"
                +salida[index].LUGAR+"</td><td>"
                +salida[index].UBICACION+"<a class= fcc-btn href=  https://maps.google.com/?q="
                +salida[index].LATITUD+","+salida[index].LONGITUD+"><i class='bi bi-geo-alt-fill'></i>"+"</a></td><td>"
                +salida[index].CIUDAD+"</td><td>"
                +salida[index].EVENTO+"</td><td>"
                +"&nbsp; &nbsp; <input type ='radio' id ='Activo' onclick = 'prueba()' name = "+salida[index].NOMBRE+" value ='Activar'> &nbsp; &nbsp;"+"</td><td>"
                +"<input type ='radio' onclick ='Desactivar()' name = "+salida[index].NOMBRE+" value ='desactivo' onclick='desactivo'>"
            +"</td></tr>");    

            +$("#Tabla1").empty("<tr><td>"
                +salida[index].PLACA+"</td><td>"
                +salida[index].TEMPERATURA+"</td><td>"
                +salida[index].TIEMPO+"</td><td>"
                +salida[index].LUGAR+"</td><td>"
                +salida[index].UBICACION+"<a class= fcc-btn href=  https://maps.google.com/?q="
                +salida[index].LATITUD+","+salida[index].LONGITUD+"><i class='bi bi-geo-alt-fill'></i>"+"</a></td><td>"
                +salida[index].CIUDAD+"</td><td>"
                +salida[index].EVENTO+"</td><td>"
                +"&nbsp; &nbsp; <input type ='radio' id ='Activo' onclick = 'prueba()' name = "+salida[index].NOMBRE+" value ='Activar'> &nbsp; &nbsp;"+"</td><td>"
                +"<input type ='radio' onclick ='Desactivar()' name = "+salida[index].NOMBRE+" value ='desactivo' onclick='desactivo'>"
            +"</td></tr>");     

            +$("#Tabla").empty("<tr><td id = "+salida[index].NOMBRE+">"
                +salida[index].PLACA+"</td><td>"
                +salida[index].TEMPERATURA+"</td><td>"
                +salida[index].TIEMPO+"</td><td>"
                +salida[index].LUGAR+"</td><td>"
                +salida[index].UBICACION+"<a class= fcc-btn href=  https://maps.google.com/?q="
                +salida[index].LATITUD+","+salida[index].LONGITUD+"><i class='bi bi-geo-alt-fill'></i>"+"</a></td><td>"
                +salida[index].CIUDAD+"</td><td>"
                +salida[index].EVENTO+"</td><td>"
                +"&nbsp; &nbsp; <input type ='radio' id ='Activo' onclick = 'prueba()' name = "+salida[index].NOMBRE+" value ='Activar'> &nbsp; &nbsp;"+"</td><td>"
                +"<input type ='radio' onclick ='Desactivar()' name = "+salida[index].NOMBRE+" value ='desactivo' onclick='desactivo'>"
            +"</td></tr>");
        }; 
    };
};        

// ----------  Save cookies Active / Inactive  ----------
// Save cookie from Active elements
function cookie1(){

    let activos = $('input[name="JUK232"]:checked').val() || $('input[name="SRN020"]:checked').val() || $('input[name="JUY725"]:checked').val() || $('input[name="JUZ234"]:checked').val()
        || $('input[name="SMI928"]:checked').val()      || $('input[name="JUY806"]:checked').val()      || $('input[name="SMI929"]:checked').val() || $('input[name="USD632"]:checked').val()
        || $('input[name="SJQ225"]:checked').val()      || $('input[name="A7U713797"]:checked').val()   || $('input[name="SWK469"]:checked').val() || $('input[name="SIQ509"]:checked').val()
        || $('input[name="JTY281"]:checked').val()      || $('input[name="SYR983"]:checked').val()      || $('input[name="GUU153"]:checked').val() || $('input[name="SON350"]:checked').val()
        || $('input[name="AZNB12855"]:checked').val()   || $('input[name="SPO203"]:checked').val()      || $('input[name="JUZ236"]:checked').val() || $('input[name="SZP478"]:checked').val()
        || $('input[name="JUY658"]:checked').val()      || $('input[name="SMI927"]:checked').val()      || $('input[name="JUY830"]:checked').val() || $('input[name="UPP524"]:checked').val()
        || $('input[name="SMI930"]:checked').val()      || $('input[name="WFH450"]:checked').val()      || $('input[name="SOC020"]:checked').val() || $('input[name="TLZ068"]:checked').val()

    document.cookie =""+(activos)+" = ACTIVO;  expires = 30 DEC 2023 11:59:59 UTC; Samesite = None; Secure";
    // alert("El vehiculo de placa: "+activoFijo+ ", se encuentra en ruta")
};

// Save cookie from Inactive elements
function cookie2(){

    let inactivos = $('input[name="JUK232"]:checked').val() || $('input[name="SRN020"]:checked').val() || $('input[name="AJUY725"]:checked').val() || $('input[name="JUZ234"]:checked').val()
        || $('input[name="SMI928"]:checked').val()      || $('input[name="JUY806"]:checked').val()      || $('input[name="SMI929"]:checked').val() || $('input[name="USD632"]:checked').val()
        || $('input[name="SJQ225"]:checked').val()      || $('input[name="A7U713797"]:checked').val()   || $('input[name="SWK469"]:checked').val() || $('input[name="SIQ509"]:checked').val()
        || $('input[name="JTY281"]:checked').val()      || $('input[name="SYR983"]:checked').val()      || $('input[name="GUU153"]:checked').val() || $('input[name="SON350"]:checked').val()
        || $('input[name="AZNB12855"]:checked').val()   || $('input[name="SPO203"]:checked').val()      || $('input[name="JUZ236"]:checked').val() || $('input[name="SZP478"]:checked').val()
        || $('input[name="JUY658"]:checked').val()      || $('input[name="SMI927"]:checked').val()      || $('input[name="JUY830"]:checked').val() || $('input[name="UPP524"]:checked').val()
        || $('input[name="SMI930"]:checked').val()      || $('input[name="WFH450"]:checked').val()      || $('input[name="SOC020"]:checked').val() || $('input[name="TLZ068"]:checked').val()

    document.cookie =""+(inactivos)+" = DESACTIVO;  expires = 30 DEC 2023 11:59:59 UTC; Samesite = None; Secure";
    // alert("El vehiculo de placa: "+activoFijo+ ", se encuentra en ruta")
};

// ----------  LOCALSTORAGE  ----------
// Save state of Inputs

function guardarLS(){
    localStorage.Activo = document.getElementById("Activo").value;
    localStorage.Inactivo = document.getElementById("Desactivo").value;
}

// Retrieve Input status

function recuperarLS() {
    if ((localStorage.Activo != undefined) && (localStorage.Inactivo != undefined)) {
        document.getElementById("dato1").innerHTML = "Activo: " + localStorage.Activo + " Inactivo: " + localStorage.Inactivo;
    } else {
        // document.getElementById("datos").innerHTML = "No has introducido tu nombre y tu password";
    };
};