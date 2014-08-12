/**
*  cisternmap.js
*	 by Scott Kildall
*
*  Well it works.
*
*	 What we could do with cisterjson.js — this is embedded in the index.html
*		page right now
*
*  This could:
*  (1) serve a JSON object from a filename
*  (2) do this as a callaback somehow so that it is asyncrhonous
*  (3) provide other maps as part of the WaterWorks project:
*    - Sewer manholes, emergency drinking water hydrants, more
*
*/


//-- reads a file in a geoJSON format
//-- we are looking for the lat long properties and map
//-- rawJson is a variable from cisternjson.js, embedded in the webpage right now,
//-- this obviously needs to be fixed.
function readJSON(filename, cisternMap) {
	var homeIcon = L.icon({
        iconUrl: 'images/cistern_icon.png',
        iconSize: [40,40],
        iconAnchor: [12,41],
        });

	jsonDataFeatures = rawJson["features"];
	for(i in jsonDataFeatures){
		cisternBlob = jsonDataFeatures[i];
    //console.log(cisternBlob["properties"].description);
		//console.log(cisternBlob["properties"].lat);
		//console.log(cisternBlob["properties"].lng);
		var marker = L.marker([cisternBlob["properties"].lat, cisternBlob["properties"].lng],{icon: homeIcon}).addTo(cisternMap);
		marker.bindPopup("<b>" + cisternBlob["properties"].description + "</b><br>Volume: " +cisternBlob["properties"].vol +"</br>" ).openPopup();
	}
}

function initMap() {
	// is downtown San Francisco
	var map = L.map("map").setView([37.779579,-122.413727], 12);

	L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution:  'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
	}).addTo(map);

	return map
}

// code itself
var cisternMap = initMap();
readJSON("cisterns.json", cisternMap)
