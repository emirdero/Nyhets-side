import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div>
                        <ul>
                            <li>
                                <NavLink exact to="/">Hjem</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/addArticle">Legg til artikkel</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/editArticle"> Rediger artikkel</NavLink>
                            </li>
                            <li>
                                <NavLink exact to="/removeArticle">Fjern artikkel</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="ticker-wrap">
                    <div className="ticker" id="liveFeed">
                    </div>
                </div>
            </div>
        );
    }
}
