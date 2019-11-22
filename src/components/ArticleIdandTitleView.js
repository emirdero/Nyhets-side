import React from "react";
import { Component } from "react";
const axios = require('axios');

export class ArticleIdandTitleView extends Component {
    state = {
        artikkler: []
    }
    componentDidMount() {
        this.getArtikkler(0);
    }
    async getArtikkler(kategori) {
        var testing = "http://localhost:8080";
        axios
            .get(testing + "/Artikler/kategori/" + kategori)
            .then(data => { this.setState({ artikkler: data.data }) })
            .catch(err => {
                console.log(err);
                return null;
            });
    };
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">{this.state.artikkler.map(temp => artikkelTitleCard(temp))}</div>
                </div>
            </div >
        );
    }
}

function artikkelTitleCard(artikkel) {
    return (
        <div className="col-sm-4 my-3">
            <div className="card">
                <h4>
                    Artikkel id: {artikkel.artikkelId}
                </h4>
                <h3>
                    {artikkel.overskrift}
                </h3>
            </div>
        </div>
    );
}