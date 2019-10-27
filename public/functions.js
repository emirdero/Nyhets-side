var previousData = [];
function startIntervall() {
    hentArtikkler();
    var refreshInterval = window.setInterval(hentArtikkler, 10000);
}

function hentArtikkler() {
    $.getJSON('/artikkler', function (data) {
        //Sjekker for endringer
        if (previousData.length == data.length) {
            return 1;
        }
        let hovedContainer = document.getElementById("artikkelForelder");
        //Tømmer tabell for å fylle med nye
        hovedContainer.innerHTML = "";
        for (var i = data.length - 1; i >= 0; i--) {
            var artikkel = document.createElement("div");
            artikkel.className = "content";

            var tittel = document.createElement("h1");
            tittel.innerHTML = data[i].overskrift;

            var innhold = document.createElement("p");
            innhold.innerHTML = data[i].innhold;

            var bilde = document.createElement("img");
            bilde.src = data[i].bilde;
            bilde.alt = data[i].bildeAlt;

            artikkel.appendChild(tittel);
            artikkel.appendChild(innhold);
            artikkel.appendChild(bilde);
            hovedContainer.appendChild(artikkel);
            previousData = data;
        }
    })
}