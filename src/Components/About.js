import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './About.css';

const About = props => {
    return(
        <div className="about">
            <NavBar/>
            <div className="about-section">
                <h1>About Us</h1>
                <p>We are anonymous! Kidding.</p>
                <p className="italic">
                This is a place where i share photos and stories that i like. This website is a personal project which i did for fun and learing purpose. This site is still under development, so while surfing the site if you find any bug or want to suggest anything in general please reach out to me as my various handles are given below.
                </p>
            </div>
            <h2 className="team-heading">Our Team</h2>
            <div className="row about-background">
                <div className="card about-card mb-4">
                        <img className="card-img-top-about" src="/images/elon_musk.jpeg" alt="Elon Musk"/>
                        <div className="card-body">
                            <h3 className="card-title">Elon Musk</h3>
                            <p className="card-text"> CEO & Founder of Tesla</p>
                            <p className="card-text">some random text about him.</p>
                            <p className="card-text">idontknow@gmail.com</p>
                            <button className="button">Contact</button>
                        </div>
                </div>
                <div className="card about-card mb-4">
                        <img className="card-img-top-about" src="/images/doge.jpeg" alt="Mr Doge"/>
                        <div className="card-body">
                            <h3 className="card-title">Mr. Doge</h3>
                            <p className="card-text">Works at Cryptolabs</p>
                            <p className="card-text">some random text about him too.</p>
                            <p className="card-text">dogetothemoon@gmail.com</p>
                            <button className="button">Contact</button>
                        </div>
                </div>
                <div className="card about-card mb-4">
                        <img className="card-img-top-about" src="/images/me.jpg" alt="Me"/>
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