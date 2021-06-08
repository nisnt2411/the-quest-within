import React, { Component } from 'react';
import './Home.css';
import NavBar from './NavBar';
import Footer from './Footer';
import Demo from './demo';
class Home extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <NavBar/>
                <Demo/>
                <Footer/>
            </div>
        )
    }
}

export default Home;