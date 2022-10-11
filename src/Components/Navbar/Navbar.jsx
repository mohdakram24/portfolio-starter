import React from 'react'
import './Navbar.css';
import Toggle from "../Toggle/Toggle";
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className="n-wrapper" id='Navbar'>
            <div className="n-left">
                <div className="n-name font">Akram</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }} className='font'>
                        <li>
                            <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link to="services" spy={true} smooth={true}>
                                SERVICES
                            </Link>
                        </li>
                        <li>
                            <Link to="works" spy={true} smooth={true}>
                                EXPERIENCE
                            </Link>
                        </li>
                        <li>
                            <Link to="portfolio" spy={true} smooth={true}>
                                PORTFOLIO
                            </Link>
                        </li>
                        <li>
                            <Link to="testimonial" spy={true} smooth={true}>
                                TESTIMONIALS
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link to="contact" spy={true} smooth={true}>
                    <button className="button n-button font">
                        Contact
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar