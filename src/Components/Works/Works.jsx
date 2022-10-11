import React from 'react'
import './Works.css';
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { motion } from 'framer-motion';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Works = () => {
    const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode

    return (
        <div className="works font">
            {/* Left side */}
            <div className="awesome">
                {/* Dark mode */}
                <span style={{ color: darkMode ? "white" : "" }}>
                    Works for All these
                </span>
                <span>Brands & Clients</span>
                <spane style={{ color: darkMode ? "var(--orange)" : "" }}>
                “I am Mohd Akram Khan, and I create/offer BRAND OFFERING
                    <br />
                    for BRAND AUDIENCE who want to BRAND SOLUTION 
                    <br />
                    and BRAND USP or COMPETITIVE ADVANTAGE”
                    <br />
                    it’s almost like an elevator pitch!
                </spane>
                <button className="button s-button">Hire Me</button>
                <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
            </div>
            <div className="w-right">
                <motion.div
                    initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: "spring" }}
                    className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>{" "}
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                {/* background Circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works