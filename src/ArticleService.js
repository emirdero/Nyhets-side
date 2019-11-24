
// @flow
const axios = require('axios');
var testingUrl = "http://localhost:8080" //process.env.CI ? "/localhost:80" : "";

export default class ArticleService {
    constructor() {
        this.previousData = [];
    }
    static getArticles(kategori: Number) {
        return axios.get(testingUrl + '/Artikler/kategori/' + kategori);
    }

    static getArticle(artikkelId: Number) {
        return axios.get(testingUrl + '/Artikler/' + artikkelId);
    }

    static fjernArtikkel(artikkelId: Number) {
        return axios.delete(testingUrl + '/Artikler/' + artikkelId);
    }

    static redigerArtikkel(state: Object) {
        return axios.post(testingUrl + '/Artikler/' + state.artikkelId, state);
    }

    static addArticle(state: Object) {
        return axios.post(testingUrl + '/Artikler', state);
    }

    static getAllComments() {
        return axios.get(testingUrl + '/Kommentarer/');
    }

    static sendLikeComment(kommentarId: number) {
        return axios.put(testingUrl + '/Kommentarer/' + kommentarId);
    }

    static sendLikeArticle(artikkelId: number) {
        return axios.put(testingUrl + '/Artikler/Like/' + artikkelId);
    }

    static sendComment(data: Object) {
        return axios.post(testingUrl + '/Kommentarer', data);
    }
}