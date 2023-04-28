import React from "react";
import "../Styles.css";

const ExperienceComponent = ({ role, name, date }) => {
    return (
        <div className="width100">
            <div className="card">
                <div className="subHeadingWrapper">
                    <div>
                        <h3
                            className="subHeading robotoLight"
                            style={{ fontSize: "1rem" }}
                        >
                            {role}
                        </h3>
                        <h3 className="subHeading robotoLight">{name}</h3>
                    </div>
                    <p className="date openSansLight" style={{ margin: "0" }}>
                        {date}
                    </p>
                </div>
                <p className="location openSansLight" style={{ margin: "0" }}>
                    Memphis, TN
                </p>
                {name === "Twitter Clone Back-End" ? (
                    <ul className="openSansMedium">
                        <li>
                            <div>
                                Implemented a RESTful Web Service with team
                                members that focused on creating a Twitter-like
                                back-end that allowed for users, tweets, and
                                hashtags to be created while also allowing for
                                likes, follows, and mentions
                            </div>
                        </li>
                        <li>
                            <div>
                                Programmed the implementation of all CRUD
                                operations related to the user
                            </div>
                        </li>
                        <li>
                            <div>
                                Developed a database schema/ERD supported by
                                PostgreSQL in PGAdmin that allowed for the
                                implementation of a follower system that allows
                                users to follow other users
                            </div>
                        </li>
                        <li>
                            <div>
                                Utilized SpringBoot and JPA to ensure that the
                                user data is safely being converted between the
                                API and the database models
                            </div>
                        </li>
                        <li>
                            <div>
                                Tested the user and follower implementation
                                using Postman to ensure that each of them had
                                the full functionality required to satisfy the
                                project requirements
                            </div>
                        </li>
                    </ul>
                ) : null}

                {name === "Music Artist Guessing Game" ? (
                    <ul className="openSansMedium">
                        <li>
                            <div>
                                Created a React app guessing game with team
                                members where users can listen to songs and
                                guess which artist sang them
                            </div>
                        </li>
                        <li>
                            <div>
                                Improved the visuals of the app by using CSS and
                                Material UI
                            </div>
                        </li>
                        <li>
                            <div>
                                Implemented the code to fetch and play the songs
                                from the Spotify API
                            </div>
                        </li>
                        <li>
                            <div>
                                Coded the fetch for the correct artist from
                                which to get songs as well as the random
                                incorrect artists that can be chosen from
                            </div>
                        </li>
                    </ul>
                ) : null}

                {name === "Full-Stack Company Management App" ? (
                    <ul className="openSansMedium">
                        <li>
                            <div>
                                Produced a full-stack application that has a
                                RESTful Web Service on the back-end and a React
                                Application on the front-end that allowed for
                                user, announcement, team, and project data to be
                                created, updated, and displayed
                            </div>
                        </li>
                        <li>
                            <div>
                                Enabled the creation of users and projects,
                                while working on the back-end team, by making
                                endpoints that the front-end can connect to
                            </div>
                        </li>
                        <li>
                            <div>
                                Worked on the front-end team of the project
                                implementing the project page and various other
                                features
                            </div>
                        </li>
                        <li>
                            <div>
                                Tested the Web API utilizing Postman and then
                                the front-end application utilizing data from
                                the back-end
                            </div>
                        </li>
                    </ul>
                ) : null}

                {name === "Medtronic Sponsored Senior Project" ? (
                    <ul className="openSansMedium">
                        <li>
                            <div>
                                Facilitated the completion of the sponsor's
                                requirements by creating a plan that used the
                                requirements as a baseline for the functionality
                                and implementation of the shopping-like app in
                                Ruby on Rails
                            </div>
                        </li>
                        <li>
                            <div>
                                Created the implementation for a user profile,
                                as per the sponsor's requirement, that would act
                                as verification for a user trying to order
                                through Medtronic
                            </div>
                        </li>
                        <li>
                            <div>
                                Designed an admin that would act as proxy for a
                                Medtronic employee approving orders
                            </div>
                        </li>
                        <li>
                            <div>
                                Improved user convenience by allowing the cart
                                to be saved for later using cookies
                            </div>
                        </li>
                    </ul>
                ) : null}

                {name === "Cook Systems FastTrack Java Program" ? (
                    <ul className="openSansMedium">
                        <li className="listStyleNone">
                            <div>
                                Program that trains develpers in Spring, React,
                                and other technologies to become a full-stack
                                developer
                            </div>
                        </li>
                    </ul>
                ) : null}

                {name === "University of Memphis" ? (
                    <ul className="openSansMedium">
                        <li className="listStyleNone">
                            <div>Bachelor of Science: Computer Science</div>
                        </li>
                    </ul>
                ) : null}
            </div>
        </div>
    );
};

export default ExperienceComponent;
