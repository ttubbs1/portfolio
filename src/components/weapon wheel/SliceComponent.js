import React from "react";
import "../Styles.css";

const SliceComponent = ({
    changePositionSVG,
    changePositionText,
    buttonName,
    sectionLink,
}) => {
    let sliceParentHover;
    switch (buttonName) {
        case "Intro":
            sliceParentHover = "slice1";
            break;
        case "Experience":
            sliceParentHover = "slice2";
            break;
        case "Projects":
            sliceParentHover = "slice3";
            break;
        case "Socials":
            sliceParentHover = "slice4";
            break;
    }

    return (
        <svg
            id="sliceMain"
            className={sliceParentHover}
            viewBox="95 75 160 155"
            style={{
                transform: changePositionSVG,
            }}
        >
            <a href={sectionLink}>
                <path
                    className="slice"
                    fill="#333"
                    d="M 95 90 Q 175 60 255 90 L 195 230 Q 175 222.5 155 230 Z"
                />

                <text
                    x="50"
                    y="50"
                    className="openSansLight sliceText"
                    style={{
                        transform: changePositionText,
                    }}
                >
                    {buttonName}
                </text>
            </a>
        </svg>
    );
};

export default SliceComponent;
