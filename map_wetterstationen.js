let myMap = L.map("mapdiv"); 
let markerGroup = L.featureGroup();
let myLayers = {
   
   
    osm : L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", 
           
    ),
    geolandbasemap : L.tileLayer(
        "https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", {
            subdomains : ["maps","maps1","maps2","maps3","maps4"],                              
            attribution : "Datenquelle: <a href= 'https://www.basemap.at'>basemap.at</a>"       
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
        "https://{s}.wien.gv.at/basemap/bmaporthofoto30cm/normal/google3857/{z}/{y}/{x}.jpeg", {
            subdomains : ["maps","maps1","maps2","maps3","maps4"],
            attribution : "Datenquelle: <a href= 'https://www.basemap.at'>basemap.at</a>"
        }
    ),
    bmawetterstationen: L.tileLayer(
        "https://{s}.wien.gv.at/basemap/geolandbasemap/normal/google3857/{z}/{y}/{x}.png", {
            subdomains : ["maps","maps1","maps2","maps3","maps4"],                              
            attribution : "Datenquelle: <a href= 'https://www.basemap.at'>basemap.at</a>"       
        }
    ),

};
   



myMap.addLayer(myLayers.bmawetterstationen);
myMap.addLayer(myLayers.geolandbasemap);    
myMap.addLayer

let myMapControl = L.control.layers({       
    "Openstreetmap" : myLayers.osm,
    "Geolandbasemap" : myLayers.geolandbasemap,
    "Basemapgrau" : myLayers.bmapgrau,
    "Orthophoto" : myLayers.bmaportho,
    "Wetterstationen" : myLayers.bmawetterstationen,
    
},

{
    "basemap.at Overlay" : myLayers.bmapoverlay,
    "Wetterstationen" : markerGroup,
});
    myMap.addControl(myMapControl);            
    L.control.scale(maxWidth = 200, metric = true).addTo(myMap);           
    
                                                       

    


const gehrenspitze = [47.387131, 11.133717];
const hafelekar = [47.312079, 11.383623];
const hoheMundeGipfel = [47.346295, 11.080385];
const hoheMundeWindstation = [47.346612, 11.083694];
const nassereithWannig = [47.336922, 10.862333];
const nassereitherAlm = [47.344376, 10.849554];
const rauthhütte = [47.345909, 11.104943];
const rosshütteWindstation = [47.342025, 11.227903];
const seegrube = [47.3063819943737, 11.3779335010812];
const dalfazklamm = [47.448514, 11.751511];
const erfurterhütte = [47.441861, 11.762127];
const agetwoad = [47.069889, 10.862306];
const breitergrieskogelSchneestation = [47.0839527777778, 11.0273833333333];
const breiterGrieskogelWindstation = [47.1010555555556, 11.0230388888889];
const falkaunsalpe = [47.071488, 10.76282];
const franzSennHütteHorntalerSpitzl = [47.099611, 11.15541667];
const franzSennHütteKleinesHorntal = [47.0960000187559, 11.1623888694066];
const lampsenspitzeSchneestation = [47.153491, 11.120722];
const lampsenspitzeWindstation = [47.156075, 11.095642];
const roterSchrofen = [47.04, 10.7181];
const schlickerAlm = [47.154432, 11.303207];
const seirLöcherKogel = [47.0339, 10.8528];
const lämmerbichlAlm = [47.181266, 11.751717];
const rastkogelWindstation = [47.192132, 11.76748];
const sonntagsköpfl = [47.2750109996958, 11.752086002829];
const sonntagsköpfWindstation = [47.271989, 11.755802];
const tuxerjochSchneestation = [47.093149, 11.648053];
const tuxerjochWindstation = [47.089717, 11.648987];
const wandspitzeSchneeStation = [47.121858, 11.661969];
const wandspitzeWindstation = [47.120752, 11.658062];





myMap.addLayer(markerGroup);
const markeroptions = {
    title: "Wetterstationen",
    opacity: 0.8,
    draggable : true,
}; 


L.marker(hafelekar, markeroptions).addTo(markerGroup);
L.marker(hoheMundeGipfel, markeroptions).addTo(markerGroup);
L.marker(hoheMundeWindstation, markeroptions).addTo(markerGroup);
L.marker(nassereithWannig, markeroptions).addTo(markerGroup);
L.marker(nassereitherAlm, markeroptions).addTo(markerGroup);
L.marker(rauthhütte, markeroptions).addTo(markerGroup);
L.marker(rosshütteWindstation, markeroptions).addTo(markerGroup);
L.marker(seegrube, markeroptions).addTo(markerGroup);
L.marker(dalfazklamm, markeroptions).addTo(markerGroup);
L.marker(erfurterhütte, markeroptions).addTo(markerGroup);
L.marker(agetwoad, markeroptions).addTo(markerGroup);
L.marker(breitergrieskogelSchneestation, markeroptions).addTo(markerGroup);
L.marker(breiterGrieskogelWindstation, markeroptions).addTo(markerGroup);
L.marker(falkaunsalpe, markeroptions).addTo(markerGroup);
L.marker(franzSennHütteHorntalerSpitzl, markeroptions).addTo(markerGroup);
L.marker(franzSennHütteKleinesHorntal, markeroptions).addTo(markerGroup);
L.marker(lampsenspitzeSchneestation, markeroptions).addTo(markerGroup);
L.marker(lampsenspitzeWindstation).addTo(markerGroup);
L.marker(roterSchrofen, markeroptions).addTo(markerGroup);
L.marker(schlickerAlm, markeroptions).addTo(markerGroup);
L.marker(seirLöcherKogel, markeroptions).addTo(markerGroup);
L.marker(lämmerbichlAlm, markeroptions).addTo(markerGroup);
L.marker(rastkogelWindstation, markeroptions).addTo(markerGroup);
L.marker(sonntagsköpfl, markeroptions).addTo(markerGroup);
L.marker(sonntagsköpfWindstation, markeroptions).addTo(markerGroup);
L.marker(tuxerjochSchneestation, markeroptions).addTo(markerGroup);
L.marker(tuxerjochSchneestation, markeroptions).addTo(markerGroup);
L.marker(tuxerjochSchneestation, markeroptions).addTo(markerGroup);
L.marker(tuxerjochWindstation, markeroptions).addTo(markerGroup);
L.marker(wandspitzeSchneeStation, markeroptions).addTo(markerGroup);
L.marker(wandspitzeWindStation, markeroptions).addTo(markerGroup);



L.marker(hafelekar, markerOptions).bindPopup("<h4>Station Hafelekar</h4> <p>Temperatur = 1,6°C, Messdatum: 2018-04-26 08:10:00").openPopup().addTo(markerGroup);
L.marker(gehrenspitze, markerOptions).bindPopup("<h4>Station Gehrenspitze</h4> <p>Temperatur = 0,6°C, Messdatum: 2018-04-26 08:10:00").openPopup().addTo(markerGroup);
L.marker(hoheMundeGipfel, markerOptions).bindPopup("<h4>Station Hohemundegipfel</h4> <p>Temperatur = nnC, Messdatum: 2018-04-26 08:10:00").openPopup().addTo(markerGroup);
L.marker(hoheMundeWindstation, markerOptions).bindPopup("<h4>Station Hohemunde Windstation</h4> <p>Temperatur = -4,1°C, Messdatum: 2018-04-26 08:10:00").openPopup().addTo(markerGroup);
L.marker(nassereithWannig, markerOptions).bindPopup("<h4>Station HNassereith Wannig</h4> <p>Temperatur = -1,2°C, Messdatum: 2018-04-26 08:10:00").openPopup().addTo(markerGroup);
L.marker(nassereitherAlm, markerOptions).bindPopup("<h4>Station Nassereither Alm</h4> <p>Temperatur = 4°C, Messdatum: 2018-04-26 08:10:00").openPopup().addTo(markerGroup);
L.marker(rauthhütte, markerOptions).bindPopup("<h4>Station HRauthütte</h4> <p>Temperatur = 11,7°C, Messdatum: 2018-04-26 08:10:00").openPopup().addTo(markerGroup);
L.marker(rosshütteWindstation, markerOptions).bindPopup("<h4>Station Rosshütte Windstation</h4> <p>Temperatur = 4,1°C, Messdatum: 2018-04-26 08:10:00").openPopup().addTo(markerGroup);
L.marker(seegrube, markerOptions).bindPopup("<h4>Station Seegrube</h4> <p>Temperatur = 3,1°C, Messdatum: 2018-04-26 08:10:00").openPopup().addTo(markerGroup);
L.marker(dalfazklamm, markerOptions).bindPopup("<h4>Station Dalfazklamm</h4> <p>Temperatur = 0,4°C, Messdatum: 2018-04-26 08:10:00").openPopup().addTo(markerGroup);




/*let hafelekarmarker = L.marker(patscherkofel, markeroptions).addTo(markerGroup);
let hafelekarmarker.bindPopup("<p>Hafelekar</p><img style = 'width:300px' alt = 'Hafelekar, Temperatur:1.6, Datum:26.04.2018' />");


let iglsmarker = L.marker(igls, markeroptions).addTo(markerGroup);
iglsmarker.bindPopup("<p>Igls</p><img style = 'width:300px' src = 'https://d181fhzpeyu8q9.cloudfront.net/fotos/0/3/1024/576/80/FFFFFF/http%3A%2F%2Ffoto-origin.images-tiscover.com%2Fat%2Fimages%2FRGN%2F494%2FRGN494at%2Figls-tirol-2cxlq.jpg/SPsX0LavDsd5dXUt8euprA%3D%3D/z/7/igls-tirol-2cxlq.jpg' alt = 'Igls' />");


L.polyline([patscherkofel, igls], {color : "black", width : "4px"}).addTo(myMap);

L.polygon([uni, usi, technik], {color : "green"}).addTo(myMap);*/


myMap.fitBounds (markerGroup.getBounds());
myMap.setView([47.267,11.383],11);  
