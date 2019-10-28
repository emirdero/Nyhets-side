// @flow

import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import ArtikkelHenter from "../ArtikkelHenter";

class Artikkel {
    overskrift: string;
    innhold: string;
    bilde: string;
    kategori: number;
    viktighet: number;
    tid: string;

    constructor(
        overskrift: string,
        innhold: string,
        bilde: string,
        kategori: number,
        viktiget: number,
        tid: string
    ) {
        this.overskrift = overskrift;
        this.innhold = innhold;
        this.bilde = bilde;
        this.kategori = kategori;
        this.viktiget = viktiget;
        this.tid = tid;
    }
}

export default class Home extends Component {
    componentDidMount() {
        ArtikkelHenter.hentArtikkler(0).then(function (artikkler) {

        });
    }
    render() {
        const { location } = this.props;
        return (
            <div>
                <header className="p-3">
                    <h1>Øving 12</h1>
                </header>
                <Navbar location={location} />

                <div className="contentContainer" id="artikkelForelder"></div>
            </div>
        );
    }
}
