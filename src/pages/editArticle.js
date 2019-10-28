import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import ArtikkelHenter from "../ArtikkelHenter";

export default class EditArticle extends Component {
    constructor(props) {
        super(props);
        this.state = { kategori: '1', viktighet: '1' };

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
        // Input validering
        if (this.state.artikkelId == null) {

        }
        else {

        }
        ArtikkelHenter.redigerArtikkel(this.state);
        event.preventDefault();
    }
    render() {
        const { location } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <header className="p-3">
                    <h1>Rediger artikkel</h1>
                </header>
                <Navbar location={location} />
                <h2 id="feedback" style={{ visibility: "hidden", color: "red" }}>Noe gikk galt, vennligst sjekk input</h2>
                <h2>Artikkel id:</h2><input onChange={this.handleChange} name="artikkelId" type="text" />
                <h2>Ny overskrift:</h2><input onChange={this.handleChange} name="overskrift" type="text" />
                <h2>Ny innhold:</h2><input onChange={this.handleChange} name="innhold" type="text" />
                <h2>Ny bilde:</h2><input onChange={this.handleChange} name="bilde" type="text" />
                <h2>Ny bilde tekst:</h2><input onChange={this.handleChange} name="bildeAlt" type="text" />
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
                <div className="contentContainer" id="artikkelForelder"></div>
            </form>
        );
    }
}
