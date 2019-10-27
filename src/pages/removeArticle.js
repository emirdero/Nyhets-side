import React, { Component } from "react";
import Navbar from "../components/Navbar.js";

export default class Home extends Component {
    render() {
        const { location } = this.props;
        return (
            <body>
                <header class="header">
                    <h1 id="header">Fjern artikkel</h1>
                </header>
                <Navbar location={location} />
                <h2>Overskrift:</h2><input></input>
                <h2>Innhold:</h2><input></input>
                <h2>Bilde:</h2><input></input>
                <h2>Kateogori:</h2><input></input>
            </body>
        );
    }
}
