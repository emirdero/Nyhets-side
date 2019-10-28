import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import ArtikkelHenter from "../ArtikkelHenter";

export default class Culture extends Component {
    componentDidMount() {
        ArtikkelHenter.hentArtikkler(3);
    }
    render() {
        const { location } = this.props;
        return (
            <div>
                <header className="p-3">
                    <h1>Kultur</h1>
                </header>
                <Navbar location={location} />

                <div className="contentContainer" id="artikkelForelder"></div>
            </div>
        );
    }
}
