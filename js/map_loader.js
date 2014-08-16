/**
 * map_loader.js
 *
 * For use with Leaflet and mapping, part of the WaterWorks project
 * by Scott Kildall
 *
 * Place in the body of HTML
 * <script src="map_loader.js"></script>
 *
 * Specific code to change for different implementations:
 * (1) markerIcon: the png file, iconSize and iconAchor
 * (2) initMap(): the initalZoom, lat long, maxZoom and minZoom
 * (3) name of the JSON file in the readGeoJSON() call
 * (4) the marker.bindPopup() call — this is optional and creates popups for specific properties in our GeoJSON
 *
 * We are using JQuery as well, so these two lines should go in the
 * head of the HTML:
 *
 * <script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
 * <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js" type="text/javascript"></script>
 *
 */

// Loads the geoJSON of all the sewer nodes as a local file
function readGeoJSON(filename, callback) {
	$.getJSON(filename, function(json) {
		// console.log(json);
		callback(json)
});
}

function loadMap(geoJSONObj) {
	var ourMap = initMap()

	// load our specific marker icon
	var markerIcon = L.icon({
			iconUrl: 'images/cistern_icon.png',
			iconSize: [42,38],
			iconAnchor: [21,19],
			});

	//console.log(geoJSONObj);

	// get to features portion of geoJSON
	jsonDataFeatures = geoJSONObj["features"];
	for(i in jsonDataFeatures){
		jsonBlob = jsonDataFeatures[i];

		var marker = L.marker([jsonBlob["properties"].lat, jsonBlob["properties"].lng],{icon: markerIcon}).addTo(ourMap);
		marker.bindPopup("<b>" + jsonBlob["properties"].description + "</b><br>" + "Volume: " + jsonBlob["properties"].vol ).openPopup();
	}
}

// map initialization
function initMap() {
	var initialZoom = 14;
	var map = L.map("map").setView([37.779579,-122.413727], initialZoom);

	L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
				maxZoom: 18,
				minZoom: 12,
				attribution:  'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
	}).addTo(map);

	return map
}

// single call: geoJSONObj can be used for other things
var geoJSONObj = readGeoJSON("json/cisterns.json", loadMap);
