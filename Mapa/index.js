const map = L.map('map').setView([18.4552679, -69.9423671], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const markerItalia = L.marker([40.836, 14.248]).addTo(map);
const markerLA = L.marker([33.7647, -118.1974]).addTo(map)
const markerBV = L.marker([18.4552679, -69.9423671]).addTo(map)
const marker2 = L.marker([18.4552679, -69.9423671]).getIcon(map)

if (L.Browser.ielt9) {
    alert('Upgrade your browser, dude!');
  }
