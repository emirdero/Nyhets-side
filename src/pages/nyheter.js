import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import ArtikkelHenter from "../ArtikkelHenter";

export default class News extends Component {
    componentDidMount() {
        ArtikkelHenter.hentArtikkler(2);
    }
    render() {
        const { location } = this.props;
        return (
            <div>
                <header className="p-3">
                    <h1>Nyheter</h1>
                </header>
                <Navbar location={location} />
                <div className="contentContainer" id="artikkelForelder"></div>
            </div>
        );
    }
}
