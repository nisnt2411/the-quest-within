import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
  constructor (props) {
    super(props);
  }


  render(){
        return(
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">The Quest</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li>
                            <Link className="nav-link active" aria-current="page" to='/post'>Posts</Link>
                        </li>
                        <li>
                            <Link className="nav-link active" aria-current="page" to='/gallary'>Gallary</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link active" aria-current="page" to='/about'>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
    }
}


export default NavBar;