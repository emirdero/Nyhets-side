import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar.js";

export default class Home extends Component {
    render() {
        const { location } = this.props;
        return (
            <body>
                <header class="header">
                    <h1 id="header">Øving 12</h1>
                </header>
                <Navbar location={location} />
                <ul style={{ width: "230px" }}>
                    <li>
                        <NavLink exact to="/sport">Sport</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/nyheter">Nyheter</NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/kultur">Kultur</NavLink>
                    </li>
                </ul>

                <div class="contentContainer" id="artikkelForelder">
                    <div class="content" id="test">
                        <h1>What is Lorem Ipsum?</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only five
                            centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release
                            of Letraset sheets containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus PageMaker including versions
                            of Lorem Ipsum.
          </p>
                    </div>
                </div>
                <footer class="footer">
                    <h3>Hi, im a footer</h3>
                </footer>
                <script src="functions.js"></script>
            </body>
        );
    }
}
