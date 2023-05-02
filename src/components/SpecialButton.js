import React from "react";
import "./Styles.css";
import GetAppIcon from "@material-ui/icons/GetApp";
import CloseIcon from "@material-ui/icons/Close";

const SpecialButton = ({
    iconChoice,
    word,
    padding,
    color,
    backgroundColor,
    margin,
}) => {
    return (
        <button
            className="constrictingAndEnlargingEffect specialButton"
            style={{
                marginTop: margin,
                marginBottom: margin,
                backgroundColor: backgroundColor,
            }}
        >
            {iconChoice ? (
                <a
                    className="specialButtonInterior robotoLight"
                    href="https://docs.google.com/document/d/1zotPm2yW01U6S6hhOMzEJHbltoSw3TOsH3QHc73AfBQ/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        padding: padding,
                        color: color,
                    }}
                >
                    {word}
                    <GetAppIcon />
                </a>
            ) : (
                <a
                    className="specialButtonInterior"
                    style={{
                        padding: padding,
                        color: color,
                    }}
                >
                    <CloseIcon style={{ fontSize: "1.2rem" }} />
                </a>
            )}
        </button>
    );
};

export default SpecialButton;
