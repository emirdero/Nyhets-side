
// @flow
const axios = require('axios');
var testingUrl = "http://localhost:8080" //process.env.CI ? "/localhost:80" : "";

export default class ArticleService {
    static async getArticles(kategori: Number) {
        return axios.get(testingUrl + '/Artikler/kategori/' + kategori.toString());
    }

    static async getArticle(artikkelId: Number) {
        return axios.get(testingUrl + '/Artikler/' + artikkelId.toString());
    }

    static async fjernArtikkel(artikkelId: Number) {
        return axios.delete(testingUrl + '/Artikler/' + artikkelId.toString());
    }

    static async redigerArtikkel(state: Object) {
        return axios.post(testingUrl + '/Artikler/' + state.artikkelId.toString(), state);
    }

    static async addArticle(state: Object) {
        return axios.post(testingUrl + '/Artikler', state);
    }

    static async getAllComments() {
        return axios.get(testingUrl + '/Kommentarer/');
    }

    static async sendLikeComment(kommentarId: number) {
        return axios.put(testingUrl + '/Kommentarer/' + kommentarId.toString());
    }

    static async sendLikeArticle(artikkelId: number) {
        return axios.put(testingUrl + '/Artikler/Like/' + artikkelId.toString());
    }

    static async sendComment(data: Object) {
        return axios.post(testingUrl + '/Kommentarer', data);
    }
}