import { Component } from "react";
import { base } from "./artikkelFormaterer.js";

export default class Culture extends Component {
    render() {
        return (
            base("Kultur", 3, this.props)
        );
    }
}
