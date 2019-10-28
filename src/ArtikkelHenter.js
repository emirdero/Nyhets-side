
// @flow
import $ from "jquery";

export default class ArtikkelHenter {
    constructor() {
        this.previousData = [];
    }
    static hentArtikkler(kategori) {
        var artikkler = [];
        $.ajax({
            url: "/artikkler/kategori/" + kategori,
            type: "GET",
            dataType: "json",
            success: function (data) {
                data.map(artikkel => {
                    artikkler.push(artikkel);
                });
            },
            async: false
        })
        return artikkler;
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
        }
        )
    }

    static async fjernArtikkel(artikkelId) {
        $.ajax({
            type: 'delete',
            url: '/artikkler/' + artikkelId,
            data: this.state,
            success: function (data) {
                console.log('Success');
                window.location.href = "/";
            },
            error: function () {
                console.log("Noe gikk galt, vennligst sjekk input");
                document.getElementById("feedback").style.visibility = "visible";
            }
        })
    }

    static async redigerArtikkel(state) {
        $.ajax({
            type: 'put',
            url: '/artikkler/' + state.artikkelId,
            data: state,
            success: function (data) {
                console.log('Success');
                window.location.href = "/";
            },
            error: function () {
                console.log("Noe gikk galt, vennligst sjekk input");
                document.getElementById("feedback").style.visibility = "visible";
            }
        })
    }

    static async leggTilArtikkel(state) {
        $.ajax({
            type: 'post',
            url: '/artikkler',
            data: state,
            success: function (data) {
                console.log(data);
                console.log("Artikkel ble lagt til");
                window.location.href = "/";
            },
            error: function () {
                console.log("Noe gikk galt, vennligst sjekk input");
                document.getElementById("feedback").style.visibility = "visible";
            }
        })
    }
}