import React from 'react'
import './Intro.css';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { motion } from "framer-motion";
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Intro = () => {
    // Transition
    const transition = { duration: 2, type: "spring" };
    // context
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="Intro">
            <div className="i-left">
                <div className="i-name">
                    <span style={{ color: darkMode ? "white" : "" }}>Hello! I Am </span>
                    <span>Mohd Akram Khan </span>
                    <span>
                        Frontend Developer with high level of experience in web designing
                        and development, producting the Quality work
                    </span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icons">
                    <a href="https://github.com/mohdakram24" target={'_blank'}><img src={Github} alt="" /></a>
                    <a href="https://www.linkedin.com/in/mohd-akram-khan-94354320a" target={'_blank'}><img src={LinkedIn} alt="" /></a>
                    <a href="https://instagram.com/mohdakramkhan24" target={"_blank"}><img src={Instagram} alt="" /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <motion.img
                    initial={{ left: "-36%" }}
                    whileInView={{ left: "-24%" }}
                    transition={transition}
                    src={glassesimoji} alt="" />
                <motion.div
                    initial={{ top: "-4%", left: "74%" }}
                    whileInView={{ left: "65%" }}
                    transition={transition}
                    className="floating-div"
                    style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv image={crown} text1='Web' text2='Developer' />
                </motion.div>
                <motion.div
                    initial={{ left: "9rem", top: "18rem" }}
                    whileInView={{ left: "4rem" }}
                    transition={transition}
                    className="floating-div"
                    style={{ top: '18rem', left: '0rem' }}>
                    <FloatingDiv image={thumbup} text1='Best Design' text2='Award' />
                </motion.div>

                {/* Blur Divs */}
                <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
                <div
                    className="blur"
                    style={{
                        background: "#C1F5FF",
                        top: "17rem",
                        width: "21rem",
                        height: "11rem",
                        left: "-9rem",
                    }}
                ></div>
            </div>
        </div>
    )
}

export default Intro