import React from "react";
import ProfilePic from "../../../public/images/profile_pic.jpg";
import "../Styles.css";

const IntroComponent = () => {
    return (
        <section className="introSection">
            <div className="picAndNameDiv">
                <div>
                    <div className="robotoLight hello">Hello, I am</div>
                    <h1 className="linear-wipe poltawski">Thomas Tubbs</h1>
                </div>
                <div id="removeOnSmallScreen">
                    <img src={ProfilePic} className="profilePic" />
                </div>
            </div>
            <p className="openSansMedium about">
                I am from Memphis, Tennessee and graduated summa cum laude from
                the University of Memphis with a bachelor's degree in computer
                science. I have worked in various agile teams to complete
                projects using Spring, React, and Ruby on Rails. Recently, I
                completed the CookSystems FastTrack program that trains in
                full-stack web developement.
            </p>
        </section>
    );
};

export default IntroComponent;
