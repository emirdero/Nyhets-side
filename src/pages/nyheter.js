import { Component } from "react";
import { base } from "./artikkelFormaterer.js";

export default class News extends Component {
    render() {
        return (
            base("Nyheter", 2, this.props)
        );
    }
}
