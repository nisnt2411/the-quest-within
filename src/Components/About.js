import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './About.css';

const About = props => {
    return(
        <div className="about">
            <NavBar/>
            <div>
            <section id="team">
        <div className="container my-3 py-5 text-center">
            <div className="row mb-5">
                <div className="col">
                    <h1>Our Team</h1>
                    <p className="my-3">
                        Our team only consists of me but still to make site look better
                        i have added some random team mates with different roles.
                        To be honest i am looking for potential team mates who could help me in getting new pictures and ideas
                        in general. So if you think you want to be a part you are more than welcome to come onboard.
                        The site is still under developement, a lot of features and content are yet to be added for which i will need your support.
                        So if you have any photos (clicked personally and not downloaded from the internet) that you would like to see on the website please send it to me and i will make sure it is posted here.
                        At last it is a pesonal project made for fun and learing purpose, so if you find any bugs or want to suggest any features i will be more than happy to hear you.
                        Thanks for coming to the site!
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 pt-1">
                    <div className="card h-100">
                        <div className="card-body">
                            <img className="img-fouild rounded w-75 mb-3"
                                src="images/doge.jpg"
                                alt="Nishant"/>
                            <h3>Doge</h3>
                            <h5>Crypto God</h5>
                            <p>Some random text that you would hate to read.</p>
                            <div className="d-flex flex-row justify-content-center">
                                <div className="p-4">
                                    <a href="https://www.facebook.com/nisnt2411">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="https://www.facebook.com/nisnt2411">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="https://www.facebook.com/nisnt2411">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 pt-1">
                    <div className="card h-100">
                        <div className="card-body">
                            <img className="img-fouild rounded w-75 mb-3"
                                src="images/vader.jpg"
                                alt="lucy"/>
                            <h3>Darth Vader</h3>
                            <h5>He is the father</h5>
                            <p>Some random text that you would hate to read.</p>
                            <div className="d-flex flex-row justify-content-center">
                                <div className="p-4">
                                    <a href="https://www.facebook.com/nisnt2411">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="https://www.facebook.com/nisnt2411">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="https://www.facebook.com/nisnt2411">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 pt-1">
                    <div className="card h-100">
                        <div className="card-body">
                            <img className="img-fouild rounded w-75 mb-3"
                                src="images/rick.jpg"
                                alt="Brad"/>
                            <h3>Rick Sanchez</h3>
                            <h5>Scientist</h5>
                            <p>Some random text that you would hate to read.</p>
                            <div className="d-flex flex-row justify-content-center">
                                <div className="p-4">
                                    <a href="https://www.facebook.com/nisnt2411">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="https://www.facebook.com/nisnt2411">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="https://www.facebook.com/nisnt2411">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 pt-1">
                    <div className="card h-100">
                        <div className="card-body">
                            <img className="img-fouild rounded w-75 mb-3"
                                src="images/new.jpg"
                                alt="andres"/>
                            <h3>Nishant</h3>
                            <h5>Web Developer</h5>
                            <p>Some random text that you would hate to read.</p>
                            <div className="d-flex flex-row justify-content-center">
                                <div className="p-4">
                                    <a href="https://www.facebook.com/nisnt2411">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="https://www.facebook.com/nisnt2411">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="https://www.facebook.com/nisnt2411">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
            </div>
            <Footer/>
        </div>
    )
}

export default About;