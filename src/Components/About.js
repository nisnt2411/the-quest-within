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
                <p>Some random text about us</p>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <h2 className="team-heading">Our Team</h2>
            <div className="row">
                <div className="card about-card mb-4">
                        <img className="card-img-top" src="/images//anime3.jpg" alt="#"/>
                        <div className="card-body">
                            <h3 className="card-title">Elon Musk</h3>
                            <p className="card-text"> CEO & Founder of Tesla</p>
                            <p className="card-text">some random text about me</p>
                            <p className="card-text">myemail@gmail.com</p>
                            <button className="button">Contact</button>
                        </div>
                </div>
                <div className="card about-card mb-4">
                        <img className="card-img-top" src="/images//anime3.jpg" alt="#"/>
                        <div className="card-body">
                            <h3 className="card-title">Elon Musk</h3>
                            <p className="card-text"> CEO & Founder of Tesla</p>
                            <p className="card-text">some random text about me</p>
                            <p className="card-text">myemail@gmail.com</p>
                            <button className="button">Contact</button>
                        </div>
                </div>
                <div className="card about-card mb-4">
                        <img className="card-img-top" src="/images//anime3.jpg" alt="#"/>
                        <div className="card-body">
                            <h3 className="card-title">Elon Musk</h3>
                            <p className="card-text"> CEO & Founder of Tesla</p>
                            <p className="card-text">some random text about me</p>
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