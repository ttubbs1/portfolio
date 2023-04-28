import React from "react";
import SpecialButton from "./SpecialButton.js";
import ExperienceComponent from "./sections/ExperienceComponent";
import IntroComponent from "./sections/IntroComponent";
import ProjectSection from "./sections/project section/ProjectSection";
import SocialsComponent from "./sections/SocialsComponent.js";
import "./Styles.css";

const Home = () => {
    return (
        <div className="homeDiv homeDivResponsive">
            <IntroComponent />
            <div>
                <SpecialButton
                    iconChoice={true}
                    word={"Resume"}
                    padding={"0.5rem 1rem"}
                    color={"#333"}
                    margin={"3rem"}
                    backgroundColor={"#fff"}
                />
            </div>

            <section id="Experience" className="experienceSection flexRow">
                <h2 className="heading iter" style={{ margin: "0" }}>
                    Experience
                </h2>
                <div className="width100">
                    <ExperienceComponent
                        role={"Back-End Developer"}
                        name={"Twitter Clone Back-End"}
                        date={"01/2023"}
                    />
                    <ExperienceComponent
                        role={"Front-end Developer"}
                        name={"Music Artist Guessing Game"}
                        date={"01/2023"}
                    />
                    <ExperienceComponent
                        role={"Full-Stack Developer"}
                        name={"Full-Stack Company Management App"}
                        date={"01/2023"}
                    />
                    <ExperienceComponent
                        role={"Full-Stack Developer"}
                        name={"Medtronic Sponsored Senior Project"}
                        date={"01/2022 - 05/2022"}
                    />
                </div>
            </section>

            <section className="experienceSection flexRow">
                <h2 className="heading iter" style={{ margin: "0" }}>
                    Education
                </h2>
                <div className="width100">
                    <ExperienceComponent
                        role={null}
                        name={"Cook Systems FastTrack Java Program"}
                        date={"12/2022 - 02/2023"}
                    />
                    <ExperienceComponent
                        role={null}
                        name={"University of Memphis"}
                        date={"08/2018 - 05/2022"}
                    />
                </div>
            </section>

            <ProjectSection />
            <SocialsComponent />
        </div>
    );
};

export default Home;
