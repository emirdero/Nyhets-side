
// @flow
const axios = require('axios');
var testingUrl = process.env.CI ? "/localhost:80" : "";

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

    static async fjernArtikkel(artikkelId: Number) {
        return axios.delete(testingUrl + '/Artikler/' + artikkelId);
    }

    static async redigerArtikkel(state: Object) {
        return axios.post(testingUrl + '/Artikler/' + state.artikkelId, state);
    }

    static async addArticle(state: Object) {
        return axios.post(testingUrl + '/Artikler', state);
    }

    static getAllComments() {
        return axios.get(testingUrl + '/Kommentarer/');
    }

    static async sendLikeComment(kommentarId: number) {
        return axios.put(testingUrl + '/Kommentarer/' + kommentarId);
    }

    static async sendLikeArticle(artikkelId: number) {
        return axios.put(testingUrl + '/Artikler/Like/' + artikkelId);
    }

    static async sendComment(data: Object) {
        return axios.post(testingUrl + '/Kommentarer', data);
    }
}