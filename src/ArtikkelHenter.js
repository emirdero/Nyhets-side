
// @flow
import $ from "jquery";

export default class ArtikkelHenter {
    constructor() {
        this.previousData = [];
    }
    static hentArtikler(kategori) {
        var Artikler = [];
        $.ajax({
            url: "/Artikler/kategori/" + kategori,
            type: "GET",
            dataType: "json",
            success: function (data) {
                data.map(artikkel => {
                    Artikler.push(artikkel);
                });
            },
            async: false
        })
        return Artikler;
    }

    static hentArtikkel(artikkelId) {
        var artikkel;
        $.ajax({
            url: "/Artikler/" + artikkelId,
            type: "GET",
            dataType: "json",
            success: function (data) {
                artikkel = data;
            },
            async: false
        })
        return artikkel[0];
    }

    static async fjernArtikkel(artikkelId) {
        $.ajax({
            type: 'delete',
            url: '/Artikler/' + artikkelId,
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
            url: '/Artikler/' + state.artikkelId,
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
            url: '/Artikler',
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