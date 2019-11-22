import { Component } from "react";
import { ArticleView } from "../artikkelFormaterer.js";
import React from "react";

export default class Sport extends Component {
    render() {
        return (
            <ArticleView title="Sport" kategori="1" location={this.props.location}> </ArticleView>
        );
    }
}
