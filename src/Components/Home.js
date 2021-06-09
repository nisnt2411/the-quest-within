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
                <div className="home-section">
                    <h1>Hi. I'm Nishant Charas</h1>
                    <p className="font-italic">
                        This is a place where i share photos and stories that i like. This website is a personal project which i did for fun and learing purpose. This site is still under development, so while surfing the site if you find any bug or want to suggest anything in general please reach out to us.
                    </p>
                </div>
                <div className="home-body">
                <div className="container home-body">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card home-card">
                                <div class="card-body">
                                “I close my eyes, and this image floats beside me.A sweaty toothed mad man with a stare that pounds my brain.His hands reach out and choke me, and all the time he's mumbling.“Truth, truth.”Like a blanket that always leaves your feet cold.You push it, stretch it, but it'll never be enough.You kick at it, beat it, it'll never cover any of us.From the moment we enter crying,to the moment we leave dying,it'll just cover your face,as you wail and cry and scream.”
                                </div>
                                <figure>
                                    <figcaption class="blockquote-footer">
                                        <cite title="Source Title">Tom Schulman, Dead Poets Society</cite>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card home-card">
                                <div class="card-body">
                                “make a radical change in your lifestyle and begin to boldly do things which you may previously never have thought of doing, or been too hesitant to attempt. So many people live within unhappy circumstances and yet will not take the initiative to change their situation because they are conditioned to a life of security, conformity, and conservation, all of which may appear to give one peace of mind, but in reality nothing is more damaging to the adventurous spirit within a man than a secure future."
                                </div>
                                <figure>
                                    <figcaption class="blockquote-footer">
                                        <cite title="Source Title">Jon Krakauer, Into the Wild</cite>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>


                        <div class="col-md-4">
                            <div class="card home-card">
                                <div class="card-body">
                                “You buy furniture. You tell yourself, this is the last sofa I will ever need in my life. Buy the sofa, then for a couple years you're satisfied that no matter what goes wrong, at least you've got your sofa issue handled. Then the right set of dishes. Then the perfect bed. The drapes. The rug. Then you're trapped in your lovely nest, and the things you used to own, now they own you.”
                                </div>
                                <figure>
                                    <figcaption class="blockquote-footer">
                                        <cite title="Source Title">Chuck Palahniuk, Fight Club</cite>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        )
    }
}

export default Home;