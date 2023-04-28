import React, { useState } from "react";
import SliceComponent from "./SliceComponent";
import CenterComponent from "./CenterComponent";
import "../Styles.css";

let centerComponentSize = "5.3rem";
let rotateArrow = "rotate(90deg) translate(-20%, -74.8%) scale(2)";

const WeaponWheel = () => {
    const [clicked, setClicked] = useState(false);
    const [pointerEvents, setPointerEvents] = useState("none");

    const handleClick = () => {
        setClicked(!clicked);
        clicked
            ? ((centerComponentSize = "5.3rem"),
              (rotateArrow = "rotate(90deg) translate(-20%, -75%) scale(2)"),
              setPointerEvents("none"))
            : ((centerComponentSize = "9rem"),
              (rotateArrow = "rotate(-90deg) translate(-27%, 27%) scale(2)"),
              setPointerEvents("all"));
    };

    const handleMouseLeave = () => {
        clicked ? handleClick() : null;
    };

    return (
        <div
            className="weaponWheel"
            style={{
                pointerEvents: pointerEvents,
            }}
            onMouseLeave={handleMouseLeave}
        >
            {clicked ? (
                <SliceComponent
                    changePositionSVG="rotate(-109deg) translate(-21%, 73%)"
                    changePositionText="rotate(180deg) translate(-157%, -98%)"
                    buttonName={"Intro"}
                    sectionLink={"#top"}
                />
            ) : null}

            {clicked ? (
                <SliceComponent
                    changePositionSVG="rotate(-156.5deg) translate(-71%, 0%)"
                    changePositionText="rotate(180deg) translate(-178%, -98%)"
                    buttonName={"Experience"}
                    sectionLink={"#Experience"}
                />
            ) : null}

            <span
                style={{
                    width: centerComponentSize,
                    height: centerComponentSize,
                }}
                onClick={handleClick}
            >
                <CenterComponent
                    showText={!clicked}
                    rotateArrow={rotateArrow}
                />
            </span>

            {clicked ? (
                <SliceComponent
                    changePositionSVG="rotate(156.5deg) translate(71%, 0%)"
                    changePositionText="rotate(180deg) translate(-167%, -98%)"
                    buttonName={"Projects"}
                    sectionLink={"#Projects"}
                />
            ) : null}

            {clicked ? (
                <SliceComponent
                    changePositionSVG="rotate(109deg) translate(21.4%, 73%)"
                    changePositionText="rotate(180deg) translate(-163%, -98%)"
                    buttonName={"Socials"}
                    sectionLink={"#Socials"}
                />
            ) : null}
        </div>
    );
};

export default WeaponWheel;
