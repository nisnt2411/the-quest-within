import React, { Component } from 'react';
import './Home.css';
import NavBar from './NavBar';
import Footer from './Footer';
class Home extends Component{
    render(){
        return(
            <div className="Home">
                <NavBar/>
                <div className="home-section">
                    <h1>Hi. I'm Nishant Charas</h1>
                    <p>
                        This is a place where i share photos and stories that i like. This website is a personal project which i did for fun and learing purpose. This site is still under development, so while surfing the site if you find any bug or want to suggest anything in general please reach out to me.
                    </p>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home;