
let myMap = L.map("mapdiv"); /*http://leafletjs.com/reference-1.3.0.html#map-example*/
let markerGroup = L.featureGroup();
let myLayers = {
   
   
    osm : L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", /*http://leafletjs.com/reference-1.3.0.html#tilelayer*/ 
           
    ),
    geolandbasemap : L.tileLayer(
        "https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", {
            subdomains : ["maps","maps1","maps2","maps3","maps4"],                              /*http://leafletjs.com/reference-1.3.0.html#control-scale*/
            attribution : "Datenquelle: <a href= 'https://www.basemap.at'>basemap.at</a>"       /*http://leafletjs.com/reference-1.3.0.html#control-attribution*/
        }
    ),
    bmapoverlay : L.tileLayer(
        "https://{s}.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png", {
            subdomains : ["maps","maps1","maps2","maps3","maps4"],
            attribution : "Datenquelle: <a href= 'https://www.basemap.at'>basemap.at</a>"
        }
    ),
    bmapgrau : L.tileLayer(
        "https://{s}.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png", {
            subdomains : ["maps","maps1","maps2","maps3","maps4"],
            attribution : "Datenquelle: <a href='https://www.basemap.at'>basemap.at</a>"
        }
    ),
    bmaphidi : L.tileLayer(
        "https://{s}.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.jpeg", {
            subdomains : ["maps","maps1","maps2","maps3","maps4"],
            attribution : "Datenquelle: <a href= 'https://www.basemap.at'>basemap.at</a>"
        }
    ),
    bmaportho : L.tileLayer(
        "https://{s}.wien.gv.at/basemap//bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg", {
            subdomains : ["maps","maps1","maps2","maps3","maps4"],
            attribution : "Datenquelle: <a href= 'https://www.basemap.at'>basemap.at</a>"
        }
    )

};
   




myMap.addLayer(myLayers.geolandbasemap);    /*http://leafletjs.com/reference-1.3.0.html#map-methods-for-layers-and-controls*/
myMap.addLayer

let myMapControl = L.control.layers({       /*http://leafletjs.com/reference-1.3.0.html#control-layers*/
    "Openstreetmap" : myLayers.osm,
    "Geolandbasemap" : myLayers.geolandbasemap,
    "Basemapgrau" : myLayers.bmapgrau,
    "Orthophoto" : myLayers.bmaportho,
    
   


},
{
    "basemap.at Overlay" : myLayers.bmapoverlay,
    "Marker" : markerGroup,
});
    myMap.addControl(myMapControl);            /*http://leafletjs.com/reference-1.3.0.html#map-other-methods*/
    L.control.scale(maxWidth = 200, metric = true).addTo(myMap);             /*Massstab hinzufügen via: http://leafletjs.com/reference-1.3.0.html#control-layers*/
    
                                                                   /*Masstabsoptionen*/

    


const uni = [47.264, 11.385];
const usi = [47.257, 11.356];
const technik = [47.263, 11.343];

myMap.addLayer(markerGroup);
const markeroptions = {
    title: "Uni Innsbruck",
    opacity: 0.8,
    draggable : true,
}; 


L.marker(uni, markeroptions).addTo(markerGroup);
L.marker(usi, markeroptions).addTo(markerGroup);
L.marker(technik, markeroptions).addTo(markerGroup);
myMap.fitBounds (markerGroup.getBounds());



