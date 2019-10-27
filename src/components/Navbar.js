import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
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
        );
    }
}
