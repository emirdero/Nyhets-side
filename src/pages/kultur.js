import { Component } from "react";
import { ArticleView } from "../artikkelFormaterer.js";
import React from "react";

export default class Culture extends Component {
    render() {
        return (
            <ArticleView title="Kultur" kategori="3" location={this.props.location}> </ArticleView>
        );
    }
}
