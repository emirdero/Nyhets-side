import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import ArtikkelHenter from "../ArtikkelHenter.js";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { kategori: '1', viktighet: '1' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        ArtikkelHenter.leggTilArtikkel(this.state);
        event.preventDefault();
    }
    render() {
        const { location } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <header className="header">
                    <h1 id="header">Legg til artikkel</h1>
                </header>
                <Navbar location={location} />
                <h2 id="feedback" style={{ visibility: "hidden", color: "red" }}>Noe gikk galt, vennligst sjekk input</h2>
                <h2>Overskrift:</h2><input onChange={this.handleChange} name="overskrift" type="text" />
                <h2>Innhold:</h2><input onChange={this.handleChange} name="innhold" type="text" />
                <h2>Bilde:</h2><input onChange={this.handleChange} name="bilde" type="text" />
                <h2>Bilde tekst:</h2><input onChange={this.handleChange} name="bildeAlt" type="text" />
                <br />
                <br />
                <label>
                    <select name="kategori" value={this.state.kategori} onChange={this.handleChange}>
                        <option value="1"> Sport</option>
                        <option value="2"> Nyheter</option>
                        <option value="3"> Kultur</option>
                    </select>
                </label>
                <label>
                    <select name="viktighet" value={this.state.viktighet} onChange={this.handleChange}>
                        <option value="1"> Svært viktig</option>
                        <option value="2"> Middels viktig</option>
                        <option value="3"> Lite viktig</option>
                    </select>
                </label>
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
