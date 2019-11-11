import { Component } from "react";
import { base } from "./artikkelFormaterer.js";

export default class Home extends Component {
    render() {
        return (
            base("Mini prosjekt", 0, this.props)
        );
    }
}
