let myMap = L.map("mapdiv");
let myLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

myMap.addlayer(myLayer);
myMap.setView([47.267,11.383],11);
