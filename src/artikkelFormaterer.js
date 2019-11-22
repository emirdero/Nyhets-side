import React from "react";
import Navbar from "./components/Navbar.js";
import ArtikkelHenter from "./ArtikkelHenter";
import { Component } from "react";
const axios = require('axios');

function artikkelCard(artikkel) {
    let kategorier = ["Sport", "Nyheter", "Kultur"];
    let viktigheter = ["Svært viktig", "Middels viktig", "Lite viktig"];
    return (
        <div className="card m-3">
            <img
                className="card-img-top img-fluid"
                src={artikkel.bilde}
                alt={artikkel.bildeAlt}
            ></img>
            <div className="card-block">
                <h4 className="card-title text-center custom-title-movies">
                    <a>
                        {artikkel.overskrift}
                    </a>
                </h4>
                <p className="card-text text-center custom-title-movies">{artikkel.innhold}</p>
                <div className="col-sm-12 text-center">
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#artikkel" + artikkel.artikkelId}>Les mer</button>
                </div>
                <p className="card-text custom-title-movies text-center">
                    <small className="text-muted">
                        Kategori: {kategorier[artikkel.kategoriId]}
                    </small>
                    <br />
                    <small className="text-muted">
                        Viktighet: {viktigheter[artikkel.viktighet]}
                    </small>
                    <br />
                    <small className="text-muted">
                        Lagt ut: {artikkel.innleggelseTid.split("T")[0].split("-")[2] + "." + artikkel.innleggelseTid.split("T")[0].split("-")[1] + "." + artikkel.innleggelseTid.split("T")[0].split("-")[0] + " kl: " + artikkel.innleggelseTid.split("T")[1].substring(0, 5)}
                    </small>
                </p>
            </div>
        </div>
    );
}

export class artikkelModalContainer extends Component {
    state = {
        kommentarer: [],
        artikkeler: this.props.artikkeler
    }
    componentDidMount() {
        this.getArtikkler(this.props.artikkelId);
    }
    async getArtikkler(artikkelId) {
        var testing = "http://localhost:8080";
        axios
            .get(testing + "/Kommentarer")
            .then(data => { this.setState({ kommentarer: data.data }); console.log(data.data) })
            .catch(err => {
                console.log(err);
                return null;
            });
    };

    render() {
        return (this.state.artikkeler.map(artikkel => artikkelModal(artikkel, this.state.kommentarer)))
    }
}

function artikkelModal(artikkel, kommentarer) {
    return (
        < div className="modal fade" id={"artikkel" + artikkel.artikkelId} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">{artikkel.overskrift}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-header">
                        <h5>Likes: </h5><h5 id={"artikkelLikes" + this.state.artikkel.artikkelId}>{artikkel.likes}</h5>
                        <button type="button" className="btn" aria-label="Like">Like</button>
                    </div>
                    <div className="modal-body">
                        {artikkel.fultInnhold}
                    </div>
                    <div id="commentSection" className="modal-footer">
                        {this.state.kommentarer.length === 0 ?
                            (<div>Loading...</div>) :
                            (<div>
                                <CommentSection artikkelId={artikkel.artikkelId} kommentarer={kommentarer}></CommentSection>
                            </div>)

                        }
                    </div>
                    <div className="modal-footer">
                        <input className="form-control" placeholder="Din kommentar" id="myComment" />
                        <button type="button" className="btn btn-primary" onClick={"saveComment(" + artikkel.artikkelId + ")"}>Lagre</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Lukk</button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export class CommentSection extends Component {
    render() {
        return (this.props.kommentarer.map(kommentarer => kommentarFormaterer(this.props.artikkelId, kommentarer)))
    }
}

function kommentarFormaterer(artikkelId, kommentarer) {
    return (
        <p>eyy</p>
        /*<div>
            <div>
                <p>{kommentarer.innhold}</p><button id={"likeKnapp" + kommentar.kommentarId} type="button" onClick={"likeComment(" + kommentar.kommentarId + ")"} className="btn" aria-label="Like">Like</button>
            </div>
            <div>
                <p>Likes: </p><p id={"kommentarLikes" + kommentar.kommentarId}>{kommentar.likes}</p>
            </div>
        </div>*/
    );
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

function tickerItem(artikkel) {
    return (
        <div className="ticker__item">
            {artikkel.innleggelseTid.split("T")[1].substring(0, 5)} {artikkel.overskrift}
        </div>
    );
}

export class ArticleView extends Component {
    state = {
        artikkler: []
    }
    componentDidMount() {
        this.getArtikkler(this.props.kategori);
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
                <header className="p-3">
                    <h1>{this.props.title}</h1>
                </header>
                <Navbar location={this.props.location} />
                {this.state.artikkler.length === 0 ?
                    (<div>Loading...</div>) :
                    (<div><div className="card-columns">
                        {this.state.artikkler.map(temp => artikkelCard(temp))}
                    </div>
                        <div className="ticker-wrap">
                            <div className="ticker" id="liveFeed">
                                {this.state.artikkler.map(temp => tickerItem(temp))}
                            </div>
                        </div>
                        <div>
                            <artikkelModalContainer artikkeler={this.state.artikkler}></artikkelModalContainer>
                        </div>
                    </div>)

                }
            </div >
        );
    }
}

export class IdDisplay extends Component {
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