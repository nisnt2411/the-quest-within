import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import './About.css';

const About = props => {
    return(
        <div className="">
            <NavBar/>
            <div className="about-section">
                <h1>About Us</h1>
                <p>We are anonymous! Kidding.</p>
                <p className="italic">
                    we like to share what we see and capture in our cameras. This site is entirely designed for that purpose only.If you have anything that you would like to see on the site please connect with us and we will try to make it happen.
                    Thanks for visiting the site!
                </p>
            </div>
            <h2 className="team-heading">Our Team</h2>
            <div className="row about-background">
                <div className="card about-card mb-4">
                        <img className="card-img-top-about" src="/images/elon_musk.jpeg" alt="#"/>
                        <div className="card-body">
                            <h3 className="card-title">Elon Musk</h3>
                            <p className="card-text"> CEO & Founder of Tesla</p>
                            <p className="card-text">some random text about him.</p>
                            <p className="card-text">idontknow@gmail.com</p>
                            <button className="button">Contact</button>
                        </div>
                </div>
                <div className="card about-card mb-4">
                        <img className="card-img-top-about" src="/images/doge.jpeg" alt="#"/>
                        <div className="card-body">
                            <h3 className="card-title">Mr. Doge</h3>
                            <p className="card-text">Works at Cryptolabs</p>
                            <p className="card-text">some random text about him too.</p>
                            <p className="card-text">dogetothemoon@gmail.com</p>
                            <button className="button">Contact</button>
                        </div>
                </div>
                <div className="card about-card mb-4">
                        <img className="card-img-top-about" src="/images/me.jpg" alt="#"/>
                        <div className="card-body">
                            <h3 className="card-title">Nishant Charas</h3>
                            <p className="card-text">Works at himself.</p>
                            <p className="card-text">some random text about me too.</p>
                            <p className="card-text">myemail@gmail.com</p>
                            <button className="button">Contact</button>
                        </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;