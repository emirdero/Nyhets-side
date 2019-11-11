import { Component } from "react";
import { base } from "./artikkelFormaterer.js";

export default class Sport extends Component {
    render() {
        return (
            base("Sport", 1, this.props)
        );
    }
}
