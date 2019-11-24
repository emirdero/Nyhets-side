import React from "react";
import ReactDOM from "react-dom";
import addArticle from "../pages/addArticle";
import index from "../pages/index";
import EditArticle from "../pages/editArticle";
import removeArticle from "../pages/removeArticle";
import sport from "../pages/sport";
import nyheter from "../pages/nyheter";
import kultur from "../pages/kultur";

it("EditArticle renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(EditArticle, div);
  ReactDOM.unmountComponentAtNode(div);
});
