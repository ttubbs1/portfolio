import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";

const MOUNT_NODE = document.getElementById("app");

const showModal = function (e) {
    const modal = document.querySelector("#projectInfo");
    const body = document.querySelector("body");
    modal.classList.toggle("hidden");

    if (!modal.classList.contains("hidden")) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "auto";
    }
};

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    MOUNT_NODE
);

export default showModal;
