import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import ArtikkelHenter from "../ArtikkelHenter";

export default class Home extends Component {
    render() {
        let artikkler = ArtikkelHenter.hentArtikkler(0);
        const { location } = this.props;
        return (
            <div>
                <header className="p-3">
                    <h1>Øving 12</h1>
                </header>
                <Navbar location={location} />
                <div className="container">
                    <div className="row">{artikkler.map(temp => artikkelCard(temp))}</div>
                </div>
            </div>
        );
    }
}

function artikkelCard(artikkel) {
    let kategorier = ["Sport", "Nyheter", "Kultur"];
    let viktigheter = ["Svært viktig", "Middels viktig", "Lite viktig"];
    return (
        <div className="col-sm-4 my-3">
            <div className="card" style={{ height: "700px" }}>
                <img
                    className="card-img-top img-fluid"
                    src={artikkel.bilde}
                    alt={artikkel.bildeAlt}
                ></img>
                <div className="card-block">
                    <h4 className="card-title custom-title-movies">
                        <a>
                            {artikkel.overskrift}
                        </a>
                    </h4>
                    <p className="card-text custom-title-movies">{artikkel.innhold}</p>
                    <p className="card-text custom-title-movies">
                        <small className="text-muted">
                            Kategori: {kategorier[artikkel.kategoriId]}
                        </small>
                        <br />
                        <small className="text-muted">
                            Viktighet: {viktigheter[artikkel.viktighet]}
                        </small>
                        <br />
                        <small className="text-muted">
                            Lagt ut: {artikkel.innleggelseTid}
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
}
