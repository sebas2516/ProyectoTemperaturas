var userName = "servWebElite";
var passWord = "$s3rvW3bEl1t3%";
				
function authenticateUser(user, password){
	var auth = user + ":" + password;    
	var hash = btoa(auth); 
	return "Basic " + hash;
};
		
// Todos los datos
function CallWebAPI(){    		
	var request = new XMLHttpRequest();
	var autenticate = authenticateUser(userName, passWord);
					
	request.open("get", "https://gps.coltrack.com/gps/api.jsp", false);	
	request.setRequestHeader("Authorization", authenticateUser(userName, passWord));  	
	request.send();   
	console.log("Loaded data");    
	respuesta=JSON.parse(request.response);       
		
	salida = respuesta.message.data;

	// Creacion Tabla
	$("#Tabla").append('<thead class="head"><tr><th><input class="input2" type ="text" id ="searchInput" onkeyup="javascript:this.value=this.value.toUpperCase();" placeholder = "Filtrar" /></th><th> PLACA</th><th class="temp1">TEMPERATURA</th><th class="temp2">TEMPE</th><th>UBICACION</th><th>ESTADO</th></tr></thead>');
	for (let index = 0; index < salida.length; index++) {
		$("#Tabla").append("<tr onclick= showHideRow('hidden_row"+index+"')>"
			// +"<td class='tdicon' >"+"<i id='truck"+salida[index].IGNICION+"' class='material-icons'></i>"+"</td>"
			+"<td class='tdicon' >"+"<i id='truck"+salida[index].IGNICION+"'class = 'bi bi-truck'></i>"+"</td>"
			+"<td>"+salida[index].PLACA+"</td>"
			+"<td>"+salida[index].TEMPERATURA+" ℃ "+"</td>"
			+"<td>"+salida[index].UBICACION+"</td>"
			+"<td>"+"<label class='switch'><input type='checkbox' id='Activo "+salida[index].NOMBRE+"' onclick= 'if(this.checked) localStorage.setItem(this.id,this.value); else localStorage.removeItem (this.id); cookie1();' value="+salida[index].NOMBRE+"><div class='slider round'></div></label>"+"</td>"
		+"</tr>"
		
		+"<tr id='hidden_row"+index+"' class='hidden_row'>"
			+"<td class='td2' colspan='2'> &nbsp Hora: "+salida[index].TIEMPO+"</td>"
			+"<td class='td2'> Lugar: "+salida[index].LUGAR+"</td>"
			+"<td class='td2'> Ciudad: "+salida[index].CIUDAD+"</td>"
			+"<td class='td2'> Evento: "+salida[index].EVENTO+"</td>"
			+"<td class='td2'></td>"
		+"</tr>"
		);   	
	};

	//sample data values for populate map
	for (let index = 0; index < salida.length; index++) {
		var data = [
			{"loc":[salida[0].LATITUD,salida[0].LONGITUD], "title":salida[0].PLACA, "temp":salida[0].TEMPERATURA, "ubi":salida[0].UBICACION},
			{"loc":[salida[1].LATITUD,salida[1].LONGITUD], "title":salida[1].PLACA, "temp":salida[1].TEMPERATURA, "ubi":salida[1].UBICACION},
			{"loc":[salida[2].LATITUD,salida[2].LONGITUD], "title":salida[2].PLACA, "temp":salida[2].TEMPERATURA, "ubi":salida[2].UBICACION},
			{"loc":[salida[3].LATITUD,salida[3].LONGITUD], "title":salida[3].PLACA, "temp":salida[3].TEMPERATURA, "ubi":salida[3].UBICACION},
			{"loc":[salida[4].LATITUD,salida[4].LONGITUD], "title":salida[4].PLACA, "temp":salida[4].TEMPERATURA, "ubi":salida[4].UBICACION},
			{"loc":[salida[5].LATITUD,salida[5].LONGITUD], "title":salida[5].PLACA, "temp":salida[5].TEMPERATURA, "ubi":salida[5].UBICACION},
			{"loc":[salida[6].LATITUD,salida[6].LONGITUD], "title":salida[6].PLACA, "temp":salida[6].TEMPERATURA, "ubi":salida[6].UBICACION},
			{"loc":[salida[7].LATITUD,salida[7].LONGITUD], "title":salida[7].PLACA, "temp":salida[7].TEMPERATURA, "ubi":salida[7].UBICACION},
			{"loc":[salida[8].LATITUD,salida[8].LONGITUD], "title":salida[8].PLACA, "temp":salida[8].TEMPERATURA, "ubi":salida[8].UBICACION},
			{"loc":[salida[9].LATITUD,salida[9].LONGITUD], "title":salida[9].PLACA, "temp":salida[9].TEMPERATURA, "ubi":salida[9].UBICACION},
			{"loc":[salida[10].LATITUD,salida[10].LONGITUD], "title":salida[10].PLACA, "temp":salida[10].TEMPERATURA, "ubi":salida[10].UBICACION},
			{"loc":[salida[11].LATITUD,salida[11].LONGITUD], "title":salida[11].PLACA, "temp":salida[11].TEMPERATURA, "ubi":salida[11].UBICACION},
			{"loc":[salida[12].LATITUD,salida[12].LONGITUD], "title":salida[12].PLACA, "temp":salida[12].TEMPERATURA, "ubi":salida[12].UBICACION},
			{"loc":[salida[13].LATITUD,salida[13].LONGITUD], "title":salida[13].PLACA, "temp":salida[13].TEMPERATURA, "ubi":salida[13].UBICACION},
			{"loc":[salida[14].LATITUD,salida[14].LONGITUD], "title":salida[14].PLACA, "temp":salida[14].TEMPERATURA, "ubi":salida[14].UBICACION},
			{"loc":[salida[15].LATITUD,salida[15].LONGITUD], "title":salida[15].PLACA, "temp":salida[15].TEMPERATURA, "ubi":salida[15].UBICACION},
			{"loc":[salida[16].LATITUD,salida[16].LONGITUD], "title":salida[16].PLACA, "temp":salida[16].TEMPERATURA, "ubi":salida[16].UBICACION},
			{"loc":[salida[17].LATITUD,salida[17].LONGITUD], "title":salida[17].PLACA, "temp":salida[17].TEMPERATURA, "ubi":salida[17].UBICACION},
			{"loc":[salida[18].LATITUD,salida[18].LONGITUD], "title":salida[18].PLACA, "temp":salida[18].TEMPERATURA, "ubi":salida[18].UBICACION},
			{"loc":[salida[19].LATITUD,salida[19].LONGITUD], "title":salida[19].PLACA, "temp":salida[19].TEMPERATURA, "ubi":salida[19].UBICACION},
			{"loc":[salida[20].LATITUD,salida[20].LONGITUD], "title":salida[20].PLACA, "temp":salida[20].TEMPERATURA, "ubi":salida[20].UBICACION},
			{"loc":[salida[21].LATITUD,salida[21].LONGITUD], "title":salida[21].PLACA, "temp":salida[21].TEMPERATURA, "ubi":salida[21].UBICACION},
			{"loc":[salida[22].LATITUD,salida[22].LONGITUD], "title":salida[22].PLACA, "temp":salida[22].TEMPERATURA, "ubi":salida[22].UBICACION},
			{"loc":[salida[23].LATITUD,salida[23].LONGITUD], "title":salida[23].PLACA, "temp":salida[23].TEMPERATURA, "ubi":salida[23].UBICACION},
			{"loc":[salida[24].LATITUD,salida[24].LONGITUD], "title":salida[24].PLACA, "temp":salida[24].TEMPERATURA, "ubi":salida[24].UBICACION},
			{"loc":[salida[25].LATITUD,salida[25].LONGITUD], "title":salida[25].PLACA, "temp":salida[25].TEMPERATURA, "ubi":salida[25].UBICACION},
			{"loc":[salida[26].LATITUD,salida[26].LONGITUD], "title":salida[26].PLACA, "temp":salida[26].TEMPERATURA, "ubi":salida[26].UBICACION},
			{"loc":[salida[27].LATITUD,salida[27].LONGITUD], "title":salida[27].PLACA, "temp":salida[27].TEMPERATURA, "ubi":salida[27].UBICACION}				
		];
	};
	
	var map = new L.Map('map', {zoom: 9 });

	map.addLayer(new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'));

	var markersLayer = new L.featureGroup();
	
	map.addLayer(markersLayer);

	var controlSearch = new L.Control.Search({
		position:'topright',		
		layer: markersLayer,
		initial: false,
		zoom: 16,
		marker: false
	});

	map.addControl( controlSearch );

	//map markers from sample data
	for(i in data) {
		var title = data[i].title
		var temperatura = data[i].temp
		var ubicacion = data[i].ubi
		loc = data[i].loc,
		marker = new L.Marker(new L.latLng(loc), {title: title});
		marker.bindPopup('<p class=textMap><span class=text>Placa: </span>'+title+'</p><p class=textMap><span class=text> Temperatura: </span>'+temperatura+' ℃ </p><p class=textMap><span class=text> Ubicacion: </span>'+ubicacion+'</p>');
		markersLayer.addLayer(marker);
	}

	map.fitBounds(markersLayer.getBounds());
    
	// LLamado localStorage
    for (var i = 0; i < localStorage.length; i++){
        var key = localStorage.key(i);
        document.getElementById(key).checked = 1;
	};

	// Filtro por placa
	function filtro(){
		let valor = document.getElementById("searchInput").value.toUpperCase();
		let nombres = document.getElementById("datos")
		let filas = nombres.getElementsByTagName("tr")
	
		for(let i = 0; i < filas.length; i++){
			let columna = filas[i].getElementsByTagName("td")[1];
			let dato = columna.textContent;
						
			filas[i].style.display = dato.toUpperCase().indexOf(valor) > -1 ? "" : "none";
		};
	};
	
	document.getElementById("searchInput").addEventListener("keyup", filtro);

	filtro();
}

// Recarga de datos
function temporizador() {
	setInterval("location.reload()",240000);
}

temporizador();

// Linea de tabla desplegable
function showHideRow(row) {
    $("#" + row).toggle();
};

// Save cookies Active / Inactive 
// Save cookie from Active elements
let activos ="";
function cookie1(){

    activos = $('input[name="JUK232"]:checked').val() || $('input[name="SRN020"]:checked').val() || $('input[name="JUY725"]:checked').val() || $('input[name="JUZ234"]:checked').val()
    || $('input[name="SMI928"]:checked').val()    || $('input[name="JUY806"]:checked').val()   || $('input[name="SMI929"]:checked').val() || $('input[name="USD632"]:checked').val()
    || $('input[name="SJQ225"]:checked').val()    || $('input[name="A7U713797"]:checked').val()|| $('input[name="SWK469"]:checked').val() || $('input[name="SIQ509"]:checked').val()
    || $('input[name="JTY281"]:checked').val()    || $('input[name="SYR983"]:checked').val()   || $('input[name="GUU153"]:checked').val() || $('input[name="SON350"]:checked').val()
    || $('input[name="AZNB12855"]:checked').val() || $('input[name="SPO203"]:checked').val()   || $('input[name="JUZ236"]:checked').val() || $('input[name="SZP478"]:checked').val()
    || $('input[name="JUY658"]:checked').val()    || $('input[name="SMI927"]:checked').val()   || $('input[name="JUY830"]:checked').val() || $('input[name="UPP524"]:checked').val()
    || $('input[name="SMI930"]:checked').val()    || $('input[name="WFH450"]:checked').val()   || $('input[name="SOC020"]:checked').val() || $('input[name="TLZ068"]:checked').val()

	document.cookie =""+(activos)+" = ACTIVO;  expires = 30 DEC 2023 11:59:59 UTC; Samesite = None; Secure";
};