/*$(document).ready(function () 
{

  var mymap = L.map('mapid').setView([51.505, -0.09], 13);

  var marker = L.marker([51.5, -0.09]).addTo(mymap);
  
});*/
$(document).ready(function() {

    var greenIcon = L.icon({
        iconUrl: 'ubicacion.png',

        iconSize: [50, 50], // size of icon
        shadowSize: [50, 50], // size of the shadow
        iconAnchor: [22, 75], // point of the icon which will correspond to marker
        shadowAnchor: [4, 62], // the same for the shadow
        popupAnchor: [3, 76] // point from which the popup should open relative
    });




    //var map = L.map('map').setView([-2.1353837, -79.9622317], 13);
	var map = L.map('map').setView([-2.1632385, -79.9224842], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https:https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);


/* Esto funciona con la api si levanta en el github - localmente si logre levantar pero como no esta levantado ni la base de datos ni el servicio de la api a nivel de internet - toca quemar
    //var urlCrimen = "https://localhost:5001/api/Crimen";
    var urlCrimen = "https://localhost:5001/api/GuayaquilCrimenes";
    $.getJSON(urlCrimen, {}).done(function(data) {
        $.each(data, function(key, val) {
            //alert(val.latitude);
            L.marker([val.latitude, val.longitude]).addTo(map)
                .bindPopup(val.zona)
                .openPopup();
        });
    });*/
	

  //var items = [];
  //$.each( data, function( key, val ) {
    //items.push( "<li id='" + key + "'>" + val + "</li>" );
 // });
	

    /*var urlCrimen = "crime-con.json";
    $.getJSON(urlCrimen, {}).done(function(data) {*/
		//$.getJSON( "crime-con.json", function( data ) {
       // $.each(data, function(key, val) {
            //alert(val.latitude);
            //L.marker([val.latitude, val.longitude]).addTo(map)
			L.marker([-2.1353837, -79.9622317]).addTo(map)
			L.marker([-2.2449727, -79.8996789]).addTo(map)
			L.marker([-2.2504114, -79.8901239]).addTo(map)
			L.marker([-2.0474802, -79.945152]).addTo(map)
			L.marker([-2.1959751, -79.8868629]).addTo(map)
			L.marker([-2.2509126, -79.8859128]).addTo(map)
			L.marker([-2.1886061, -79.915704]).addTo(map)
			L.marker([-2.0980816, -79.9464399]).addTo(map)
			L.marker([-2.1910713, -79.9067925]).addTo(map)
			L.marker([-2.1364743, -79.9479389]).addTo(map)
			L.marker([-2.1632385, -79.9224842]).addTo(map)
			L.marker([-2.2817452, -79.8812996]).addTo(map)
			L.marker([-2.2121461, -79.9303921]).addTo(map)
			L.marker([-2.0980816, -79.9464399]).addTo(map)
			L.marker([-2.2094243, -79.9039528]).addTo(map)
			L.marker([-2.2402791, -79.9220686]).addTo(map)
			L.marker([-2.2758147, -79.887782]).addTo(map)
			L.marker([-2.087498, -79.9254026]).addTo(map)
			L.marker([-2.1503892, -79.923151]).addTo(map)
			L.marker([-2.1238159, -79.8858022]).addTo(map)
			L.marker([-2.2162051, -79.902128]).addTo(map)
			L.marker([-2.0791677, -79.9294575]).addTo(map)
			L.marker([-2.2497491, -79.9114039]).addTo(map)
			L.marker([-2.2758147, -79.887782]).addTo(map)
			
			
                .bindPopup(val.zona)
                .openPopup();
       // });
   // });
	
	
	
	
	
});