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
        <div className="services font" id='services'>
            {/* Left side */}
            <div className="awesome">
                {/* Dark mode */}
                <span style={{ color: darkMode ? "white" : "" }}>My Awesome </span>
                <span>Services </span>
                <spane style={{ color: darkMode ? "var(--orange)" : "" }}>
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
                    <div style={{ color: darkMode ? "var(--orange)" : "" }}>
                        <Card
                            emoji={HeartEmoji}
                            heading={"Design"}
                            detail={"FIGMA, SKETCH, PHOTOSHOP, ADOBE ILLUSTRATOR, ADOBE XD"}
                        />
                    </div>
                </motion.div>
                {/* Second card */}
                <motion.div
                    initial={{ left: "-11rem", top: "12rem" }}
                    whileInView={{ left: "-3rem" }}
                    transition={transition}
                    style={{ top: '12rem', left: '-4rem' }}>
                    <div style={{ color: darkMode ? "var(--orange)" : "" }}>
                        <Card
                            emoji={Glasses}
                            heading={"Developer"}
                            detail={"HTML, CSS, JAVASCRIPT, REACT, NODE.JS, EXPRESS.JS"}
                        />
                    </div>
                </motion.div>
                {/* Third Card */}
                <motion.div
                    initial={{ left: "25rem" }}
                    whileInView={{ left: "14rem" }}
                    transition={transition}
                    style={{ top: '19rem', left: '12rem' }}>
                    <div style={{ color: darkMode ? "var(--orange)" : "" }}>
                        <Card
                            emoji={Humble}
                            heading={"Programming"}
                            detail={
                                "JAVA, C++, PYTHON"
                            }
                            color="rgba(252, 166, 31, 0.45)"
                        />
                    </div>
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