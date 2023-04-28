import React from "react";
import "../../Styles.css";

const ProjectInfo = ({ image, title, description, environmentItems }) => {
    return (
        <div className="spaceBetweenDiv">
            <div>
                <div className="projectBox" style={{ borderRadius: "10px" }}>
                    <img
                        src={image}
                        className="projectImage"
                        style={{ cursor: "default" }}
                    ></img>
                </div>

                <div>
                    <h2 className="infoTitle robotoLight">{title}</h2>
                </div>

                <div>
                    <p className="openSansMedium">{description}</p>
                </div>
            </div>

            <div className="environmentContainer">
                <div className="environment">
                    {environmentItems.map((environmentItem, index) => (
                        <div className="pills iter" key={index}>
                            {environmentItem.techName}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectInfo;
