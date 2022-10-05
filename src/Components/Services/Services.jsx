import React from 'react'
import './Services.css';
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import { motion } from 'framer-motion';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import Resume from './akram.jpg'

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const transition = {
        duration: 1,
        type: "spring",
    };


    return (
        <div className="services" id='services'>
            {/* Left side */}
            <div className="awesome">
                {/* Dark mode */}
                <span style={{ color: darkMode ? "white" : "" }}>My Awesome </span>
                <span>services </span>
                <spane style={{ color: darkMode ? "white" : "" }}>
                    Lorem ispum is simpley dummy text of printing of printing Lorem
                    <br />
                    ispum is simpley dummy text of printing
                </spane>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            {/* Right side */}
            <div className="cards">
                {/* First card */}
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "16rem" }}
                    transition={transition}
                    style={{ left: '14rem' }}>
                    <Card
                        emoji={HeartEmoji}
                        heading={"Design"}
                        detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
                    />
                </motion.div>
                {/* Second card */}
                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-3rem" }}
                    transition={transition}
                    style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={Glasses}
                        heading={"Developer"}
                        detail={"Html, Css, JavaScript, React, Nodejs, Express.js"}
                    />
                </motion.div>
                {/* Third Card */}
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}
                    style={{ top: '19rem', left: '12rem' }}>
                    <Card
                        emoji={Humble}
                        heading={"UI/UX"}
                        detail={
                            "Lorem ispum dummy text are usually use in section where we need some random text"
                        }
                        color="rgba(252, 166, 31, 0.45)"
                    />
                </motion.div>
                <div
                    className="blur s-blur2"
                    style={{ background: "var(--purple)" }}
                ></div>
            </div>
        </div>
    )
}

export default Services