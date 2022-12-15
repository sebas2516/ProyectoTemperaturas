let mapOptions = {
    center:[4.61664, -74.06782],
    zoom: 30
}

let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);


let marker = L.marker([4.61664, -74.06782]).addTo(map)


// let marker2 = L.marker([4.6169, -74.0678]).addTo(map)
