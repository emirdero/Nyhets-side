import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import ArtikkelHenter from "../ArtikkelHenter";

export default class Home extends Component {
    componentDidMount() {
        ArtikkelHenter.hentArtikkler(0);
    }
    render() {
        const { location } = this.props;
        return (
            <body>
                <header className="header">
                    <h1 id="header">Øving 12</h1>
                </header>
                <Navbar location={location} />
                <ul style={{ width: "227px" }}>
                    <li>
                        <NavLink exact to="/sport">Sport</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/nyheter">Nyheter</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/kultur">Kultur</NavLink>
                    </li>
                </ul>

                <div className="contentContainer" id="artikkelForelder"></div>
            </body>
        );
    }
}
