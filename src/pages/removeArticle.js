import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import ArtikkelHenter from "../ArtikkelHenter";

export default class RemoveArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        ArtikkelHenter.hentTittler(0);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        ArtikkelHenter.fjernArtikkel(this.state.artikkelId)
        event.preventDefault();
    }
    render() {
        const { location } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <header className="p-3">
                    <h1>Slett artikkel</h1>
                </header>
                <Navbar location={location} />
                <h2 id="feedback" style={{ visibility: "hidden", color: "red" }}>Noe gikk galt, vennligst sjekk input</h2>
                <h2>Artikkel id:</h2><input onChange={this.handleChange} name="artikkelId" type="text" />
                <input type="submit" value="Submit" />
                <div className="contentContainer" id="artikkelForelder"></div>
            </form>
        );
    }
}
