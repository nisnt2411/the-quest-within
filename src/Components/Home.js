import React, { Component } from 'react';
import './Home.css';
import NavBar from './NavBar';
import Footer from './Footer';
class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <NavBar/>
                <div className="container-fluid home-div">
                    <h1>Hello. I'm Nishant</h1>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home;