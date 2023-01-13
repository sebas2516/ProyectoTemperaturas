let mapOptions = {
    center:[4.61664, -74.06782],
    zoom: 17
}

let map = new L.map('map' , mapOptions);

let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
map.addLayer(layer);


let marker = L.marker([4.61664, -74.06782]).addTo(map)



// let marker2 = L.marker([4.6169, -74.0678]).addTo(map)

// Scroll
// window.onwheel = e => {
//   if(e.deltaY >= 0){
//     document.getElementById('header').style.display = 'none'; 
    
//   } else {
//     document.getElementById('header').style.display = '';   
//   }
// }s

// // Touch screen
// let text1 = document.getElementsByClassName("textMap")
// var elementoTouch = document.getElementById("map");

// elementoTouch.addEventListener('touchstart', function(event){

//     document.getElementById("map").style.opacity ="0.5";
//     // document.getElementById("map").innerHTML = text1;
//     console.log(text1)
// }, false);

// var mapview = document.getElementById('map');
// let click = false;

// mapview.addEventListener('click', (e)=>{
//     if (!click){
//         document.getElementById('map').style.zIndex = '100'
//         console.log("view")
//         click = true
//     } else if(click){
//         document.getElementById('map').style.zIndex='-100'
//         console.log("no view")
//         click = false
//     }
// });

document.getElementById("map").addEventListener("touchstart", tapHandler);

        var tapedTwice = false;

        function tapHandler(e) {
            if(!tapedTwice) {

                tapedTwice = true;

                setTimeout( function(){
                    tapedTwice = false; 
                }, 300);

                return false;
            }

            e.preventDefault();
            // //action on double tap goes below
s            // console.log("sirve")
        }