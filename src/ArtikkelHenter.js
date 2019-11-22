
// @flow
import $ from "jquery";
const axios = require('axios');

var testing = "http://localhost:8080";

export default class ArtikkelHenter {
    constructor() {
        this.previousData = [];
    }
    static hentArtikler(kategori) {
        $.ajax({
            url: testing + "/Artikler/kategori/" + kategori,
            type: "GET",
            headers: {
                'Access-Control-Allow-Origin': 'localhost'
            },
            dataType: "json",
            success: function (data) {
                return data;
            },
            async: false
        })
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

    static hentKommentarer(artikkelId) {
        var kommentarer;
        $.ajax({
            url: "/Kommentarer/" + artikkelId,
            type: "GET",
            dataType: "json",
            success: function (data) {
                kommentarer = data;
            },
            async: false
        })
        return kommentarer;
        /*axios.get('/Kommentarer/' + artikkelId)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            return error;
        }
    )*/
    }



    static async sendKommentar(innhold, artikkelId) {
        axios.post('/Kommentarer', {
            artikkelId: artikkelId,
            innhold: innhold
        })
            .then(function (response) {
                console.log(response);
                return response;
            })
            .catch(function (error) {
                return error;
            })
    }

    static async likKommentar(kommentarId) {
        axios.put('/Kommentarer/' + kommentarId)
            .then(function (response) {
                console.log(response);
                return response;
            })
            .catch(function (error) {
                return error;
            })
    }
}