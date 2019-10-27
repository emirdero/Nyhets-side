import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import ArtikkelHenter from "../ArtikkelHenter";
import $ from "jquery";

export default class Home extends Component {
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
        console.log(this.state);
        console.log(JSON.stringify(this.state));
        $.ajax({
            type: 'delete',
            url: '/artikkler/' + this.state.artikkelId,
            data: this.state,
            success: function (data) {
                console.log('Success');
                console.log(data);
            },
            error: function () {
                console.log('We are sorry but our servers are having an issue right now');
            }
        })
        event.preventDefault();
    }
    render() {
        const { location } = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <header className="header">
                    <h1 id="header">Slett artikkel</h1>
                </header>
                <Navbar location={location} />
                <h2>Artikkel id:</h2><input onChange={this.handleChange} name="artikkelId" type="text" />
                <input type="submit" value="Submit" />
                <div className="contentContainer" id="artikkelForelder"></div>
            </form>
        );
    }
}
