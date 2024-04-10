function setViewPoint(mapDivId, lat, long, zoomSize) {
  var myMap = L.map(mapDivId).setView([lat, long], zoomSize);
  return myMap;
}

function addTileLayer(Map) {
  L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    {
      maxZoom: 20,
    }
  ).addTo(Map);
}

function addMarker(lat, long, personInfo, map) {
  let point = L.marker([lat, long]).addTo(map);
  point.bindPopup(`<b>${personInfo}<b>`);
}

function setView_to_user_location() {
  var Map;
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      Map = setViewPoint(
        "map",
        position.coords.latitude,
        position.coords.longitude,
        12
      );
      addTileLayer(Map);
    });
  } else {
    Map = setViewPoint("map", 32.302898, -90.183487, 12);
    addTileLayer(Map);
  }
  return Map;
}

function showMenu() {
  let menu = document.getElementById("AccountInfo");
  if (menu.style.display == "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

let myMap = setView_to_user_location();
