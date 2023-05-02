import React from "react";
import BTD6 from "../../../../public/images/btd6.jpg";
import Company from "../../../../public/images/company_management_app.png";
import GuessGame from "../../../../public/images/guessing_game.png";
import PortfolioImg from "../../../../public/images/portfolio.jpg";
import "../../Styles.css";
import ProjectComponent from "./ProjectComponent";

const ProjectSection = () => {
    return (
        <section id="Projects" style={{ marginTop: "4rem" }}>
            <h2 className="heading iter" style={{ margin: "0" }}>
                Projects
            </h2>
            <div className="projectWrapper projectWrapperResponsive">
                <ProjectComponent
                    image={GuessGame}
                    title={"Music Artist Guessing Game"}
                    gitHubLink={
                        "https://github.com/ttubbs1/spotify-guessing-game"
                    }
                    description={
                        "An app that allows a user to play a game where they have to guess the artist based off of song previews from Spotify. The app allows the player to select a genre from Spotify, the number of artists to choose from, as the game is multiple choice, and it also allows the selection of the quantity of previews the player can listen to. The player can now start the game where they will listen to the previews and make their guess, and they will be told if they are correct or not."
                    }
                    environmentItems={[
                        { techName: "React" },
                        { techName: "JavaScript" },
                        { techName: "Material UI" },
                        { techName: "Git" },
                        { techName: "npm" },
                        { techName: "howler.js" },
                        { techName: "VS Code" },
                    ]}
                />
                <ProjectComponent
                    image={Company}
                    title={"Company Management App"}
                    gitHubLink={
                        "https://github.com/ttubbs1/company-management-app"
                    }
                    description={
                        "A contrived app that allows multiple companies to be managed under one site. Allows uers to sign in to their respective companies and allows admins to sign in and choose a company to manage. From here users are able to see the announcements page and they have access to the projects page. The admins have access to those pages but they can also edit them and in addition they can view and edit the teams page as well as the employee page. The employee page is where admins can create new users and remove users from a company."
                    }
                    environmentItems={[
                        { techName: "Java" },
                        { techName: "SpringBoot" },
                        { techName: "JPA" },
                        { techName: "PostgreSQL" },
                        { techName: "pgAdmin" },
                        { techName: "Postman" },
                        { techName: "IntelliJ" },
                        { techName: "Maven" },
                        { techName: "React" },
                        { techName: "JavaScript" },
                        { techName: "CSS" },
                        { techName: "Material UI" },
                        { techName: "VS Code" },
                        { techName: "npm" },
                        { techName: "Git" },
                    ]}
                />
                <ProjectComponent
                    image={PortfolioImg}
                    title={"Portfolio"}
                    gitHubLink={"https://github.com/ttubbs1/portfolio"}
                    description={
                        "The project you are looking at right now. Built in React with some scalability and responsiveness in mind; however, not all features (navbar and modals) work great on mobile."
                    }
                    environmentItems={[
                        { techName: "React" },
                        { techName: "JavaScript" },
                        { techName: "CSS" },
                        { techName: "Material UI" },
                        { techName: "VS Code" },
                        { techName: "npm" },
                    ]}
                />
                <ProjectComponent
                    image={BTD6}
                    title={"Bloons Tower Defense 6 AI"}
                    gitHubLink={"https://github.com/ttubbs1/BTD6_AI"}
                    description={
                        "A simple AI that can play the game Bloons Tower Defense 6 by itself. The AI learns using deep Q-learning and makes one choice per round. The AI is simple, and its placement is random, but it learns from the tower that it picks and the upgrades it gets. Cheat engine is used to find stable pointers for the round number so the AI can make its choice for the round. Code adjustment would be neccessary on a computer-to-computer basis, as the pointers would be different and pixel values of the screen would be different as well."
                    }
                    environmentItems={[
                        { techName: "Python" },
                        { techName: "Google Colab" },
                        { techName: "OpenAI Gym" },
                        { techName: "PyMeow" },
                        { techName: "Cheat Engine" },
                    ]}
                />
            </div>
        </section>
    );
};

export default ProjectSection;
