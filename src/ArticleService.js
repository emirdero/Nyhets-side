
// @flow
const axios = require('axios');

export default class ArticleService {
    constructor() {
        this.previousData = [];
    }
    static getArticles(kategori: Number) {
        return axios.get('/Artikler/kategori/' + kategori);
    }

    static hentArtikkel(artikkelId: Number) {
        return axios.get('/Artikler/' + artikkelId);
    }

    static async fjernArtikkel(artikkelId: Number) {
        return axios.delete('/Artikler/' + artikkelId);
    }

    static async redigerArtikkel(state: Object) {
        return axios.post('/Artikler/' + state.artikkelId, state);
    }

    static async leggTilArtikkel(state: Object) {
        return axios.post('/Artikler', state);
    }

    static getAllComments() {
        return axios.get('/Kommentarer/');
    }

    static async sendLikeComment(kommentarId: number) {
        return axios.put('/Kommentarer/' + kommentarId);
    }

    static async sendLikeArticle(artikkelId: number) {
        return axios.put('/Artikler/Like/' + artikkelId);
    }

    static async sendComment(data: Object) {
        return axios.post('/Kommentarer', data);
    }
}