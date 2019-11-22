import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import { ArticleIdandTitleView } from "../components/ArticleIdandTitleView.js";
import ArtikkelHenter from "../ArtikkelHenter.js";

export default class EditArticle extends Component {
    constructor(props) {
        super(props);
        this.state = { kategori: '1', viktighet: '1' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loadPreviousData = this.loadPreviousData.bind(this);
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

    loadPreviousData(event) {
        //TODO: input validering
        let artikkel = ArtikkelHenter.hentArtikkel(document.getElementById("formControlInput0").value);
        console.log(artikkel);
        document.getElementById("formControlInput1").value = artikkel.overskrift;
        document.getElementById("formControlInput2").value = artikkel.innhold;
        document.getElementById("formControlInput3").value = artikkel.bilde;
        document.getElementById("formControlInput4").value = artikkel.bildeAlt;
        document.getElementById("formControlSelect1").value = artikkel.kategoriId;
        document.getElementById("formControlSelect2").value = artikkel.viktighet;
        this.setState({
            overskrift: artikkel.overskrift,
            innhold: artikkel.innhold,
            bilde: artikkel.bilde,
            bildeAlt: artikkel.bildeAlt,
            kategoriId: artikkel.kategoriId,
            viktighet: artikkel.viktighet
        });
    }

    render() {
        const { location } = this.props;
        return (
            <div>
                <header className="p-3">
                    <h1>Rediger artikkel</h1>
                </header>
                <Navbar location={location} />
                <form className="w-75 mx-auto" onSubmit={this.handleSubmit}>
                    <div class="form-group">
                        <h2 id="feedback" style={{ visibility: "hidden", color: "red" }}>Noe gikk galt, vennligst sjekk input</h2>
                    </div>
                    <div class="form-group">
                        <label for="formControlInput0">Artikkel id</label>
                        <div className="form-inline">
                            <input onChange={this.handleChange} name="artikkelId" type="number" className="form-control" id="formControlInput0" placeholder="eks: 23" />
                            <button className="btn btn-primary" type="button" onClick={this.loadPreviousData}>Hent data</button>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="formControlInput1">Ny overskrift</label>
                        <input onChange={this.handleChange} name="overskrift" type="text" className="form-control" id="formControlInput1" placeholder="min artikkel" />
                    </div>
                    <div class="form-group">
                        <label for="formControlInput2">Nytt innhold</label>
                        <input onChange={this.handleChange} name="innhold" type="text" className="form-control" id="formControlInput2" placeholder="min artikkel handler om..." />
                    </div>
                    <div class="form-group">
                        <label for="formControlInput3">Ny bilde url</label>
                        <input onChange={this.handleChange} name="bilde" type="text" className="form-control" id="formControlInput3" placeholder="http://eksempel.com/mittBilde.jpg" />
                    </div>
                    <div class="form-group">
                        <label for="formControlInput4">Ny bilde tekst</label>
                        <input onChange={this.handleChange} name="bildeAlt" type="text" className="form-control" id="formControlInput4" placeholder="beskriv bildet" />
                    </div>
                    <div class="form-group">
                        <label for="formControlSelect1">Ny kategori</label>
                        <select className="form-control" name="kategori" id="formControlSelect1" value={this.state.kategori} onChange={this.handleChange}>
                            <option value="1"> Sport</option>
                            <option value="2"> Nyheter</option>
                            <option value="3"> Kultur</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="formControlSelect2">Ny viktighet</label>
                        <select className="form-control" name="viktighet" id="formControlSelect2" value={this.state.viktighet} onChange={this.handleChange}>
                            <option value="1"> Svært viktig</option>
                            <option value="2"> Middels viktig</option>
                            <option value="3"> Lite viktig</option>
                        </select>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">Oppdater</button>
                    </div>
                </form>
                <h2 className="text-center">Artikler:</h2>
                <ArticleIdandTitleView></ArticleIdandTitleView>
            </div>
        );
    }
}
