import React from 'react';
import './Footer.css';

const Footer = (props) => {
    return(
        <div>
            <footer className="bg text-center text-white">
                <div className="container p-4">
                    <section className="mb-4">
                        <a href="https://www.facebook.com/nisnt2411" className="btn btn-outline-light btn-floating m-1" role="button">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#!" className="btn btn-outline-light btn-floating m-1" role="button">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="https://www.instagram.com/nishant_charas/" className="btn btn-outline-light btn-floating m-1" role="button">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/nishant-charas-57b007147/" className="btn btn-outline-light btn-floating m-1" role="button">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/nisnt2411" className="btn btn-outline-light btn-floating m-1" role="button">
                            <i className="fab fa-github"></i>
                        </a>
                    </section>
                    <section>
                        <form action="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for more updates</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="email" className="form-control" placeholder="Email address"/>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
