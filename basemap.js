
let myMap = L.map("mapdiv");
let myLayers = {
    
    osm : L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    ),
    geolandbasemap : L.tileLayer(
        "https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png",{
            subdomains : ["maps","maps1","maps2","maps3","maps4"]
            attribution : "Datenquelle: basemap.at"
        }
    ),
    bmapoverlay : L.tileLayer(
        "https://maps.wien.gv.at/basemap/bmapoverlay/normal/google3857/{z}/{y}/{x}.png"
    ),
    bmapgrau : L.tileLayer(
        "https://maps.wien.gv.at/basemap/bmagrau/normal/google3857/{z}/{y}/{x}.jpeg"
    ),
    bmaphidi : L.tileLayer(
        "https://maps.wien.gv.at/basemap/bmaphidpi/normal/google3857/{z}/{y}/{x}.jpeg"
    ),
    bmaportho : L.tileLayer(
        "https://maps.wien.gv.at/basemap//bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg"
    ),

};




myMap.addLayer(myLayers.geolandbasemap);
myMap.setView([47.267,11.383],11);
