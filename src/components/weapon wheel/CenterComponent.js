import React, { useState } from "react";
import "../Styles.css";

const CenterComponent = ({ showText, rotateArrow }) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(true);
    };

    const onExit = () => {
        setHover(false);
    };

    return (
        <svg className="centerMainHover" viewBox="0 -35 100 100">
            <circle
                className="centerFillHover"
                cx="50"
                cy="3"
                r="35%"
                fill="#333"
                stroke="#111"
                strokeWidth="1px"
                onMouseEnter={onHover}
                onMouseLeave={onExit}
            />

            <path
                d="M10 8.64L15.27 12 10 15.36V8.64M8 5v14l11-7L8 5z"
                style={{
                    transform: rotateArrow,
                    fill: "white",
                }}
            />

            {hover && showText ? (
                <>
                    <rect
                        x="25"
                        y="45"
                        rx="10"
                        ry="10"
                        width="50"
                        height="20"
                        fill="white"
                    />
                    <text x="13" y="50" className="robotoLight menuText">
                        MENU
                    </text>
                </>
            ) : null}
        </svg>
    );
};

export default CenterComponent;
