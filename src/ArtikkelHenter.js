
import $ from "jquery";
export default class ArtikkelHenter {
    constructor() {
        this.previousData = [];
    }
    static hentArtikkler(kategori) {
        $.getJSON('/artikkler/kategori/' + kategori, function (data) {
            let hovedContainer = document.getElementById("artikkelForelder");
            let liveFeed = document.getElementById("liveFeed");
            //Tømmer tabell for å fylle med nye
            hovedContainer.innerHTML = "";
            for (var i = data.length - 1; i >= 0; i--) {
                var artikkel = document.createElement("div");
                artikkel.className = "content";

                var tittel = document.createElement("h1");
                tittel.innerHTML = data[i].overskrift;

                var innhold = document.createElement("p");
                innhold.innerHTML = data[i].innhold;
                innhold.id = "innhold" + i;

                var bilde = document.createElement("img");
                bilde.src = data[i].bilde;
                bilde.alt = data[i].bildeAlt;

                artikkel.appendChild(tittel);
                artikkel.appendChild(innhold);
                artikkel.appendChild(bilde);
                hovedContainer.appendChild(artikkel);

                var feedItem = document.createElement("div");
                //formaterer tid
                var tempTid = data[i].innleggelseTid;
                feedItem.innerHTML = tempTid.split("T")[1].substring(0, 5) + ": " + data[i].overskrift;
                feedItem.className = "ticker__item";

                liveFeed.appendChild(feedItem);
            }
        })
    }

    static hentTittler(kategori) {
        $.getJSON('/artikkler/kategori/' + kategori, function (data) {
            let hovedContainer = document.getElementById("artikkelForelder");
            //Tømmer tabell for å fylle med nye
            hovedContainer.innerHTML = "";
            for (var i = data.length - 1; i >= 0; i--) {
                var artikkel = document.createElement("div");
                artikkel.className = "content";

                var id = document.createElement("p");
                id.innerHTML = "Artikkel Id: " + data[i].artikkelId;

                var tittel = document.createElement("h1");
                tittel.innerHTML = data[i].overskrift;

                artikkel.appendChild(id);
                artikkel.appendChild(tittel);
                hovedContainer.appendChild(artikkel);
            }
        })
    }
}