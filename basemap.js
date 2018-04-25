
let myMap = L.map("mapdiv"); /*http://leafletjs.com/reference-1.3.0.html#map-example*/
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
    ),

};
   




myMap.addLayer(myLayers.geolandbasemap);    /*http://leafletjs.com/reference-1.3.0.html#map-methods-for-layers-and-controls*/
let myMapControl = L.control.layers({       /*http://leafletjs.com/reference-1.3.0.html#control-layers*/
    "Openstreetmap" : myLayers.osm,
    "Geolandbasemap" : myLayers.geolandbasemap,
    "Basemapgrau" : myLayers.bmapgrau,
    "Orthophoto" : myLayers.bmaportho,
    
   


},
{
    "Overlay" : myLayers.bmapoverlay,});
    myMap.addControl(myMapControl);            /*http://leafletjs.com/reference-1.3.0.html#map-other-methods*/
    L.control.scale(maxWidth = 200, metric = true).addTo(myMap);             /*Massstab hinzufügen via: http://leafletjs.com/reference-1.3.0.html#control-layers*/
    
                                                                   /*Masstabsoptionen*/

    






myMap.setView([47.267,11.383],11);          /*http://leafletjs.com/reference-1.3.0.html#control-scale*/
