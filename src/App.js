import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import addArticle from "./pages/addArticle";
import index from "./pages/index";
import editArticle from "./pages/editArticle";
import removeArticle from "./pages/removeArticle";

// Every route is added as a route in HashRouter and given a path + component(page)
class App extends Component {
    render() {
        return (
            <HashRouter>
                <Route exact path="/" component={index} />
                <Route exact path="/" component={index} />
                <Route exact path="/" component={index} />
                <Route exact path="/addArticle" component={addArticle} />
                <Route exact path="/editArticle" component={editArticle} />
                <Route exact path="/removeArticle" component={removeArticle} />
            </HashRouter>
        );
    }
}

export default App;