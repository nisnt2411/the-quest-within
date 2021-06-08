import React, { useState, useEffect } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import sanityClient from '../client.js';
import NavBar from './NavBar';
import './Gallary.css';

const Gallary = props => {
    const [GallaryData, setGallary] = useState(null);

    function HandleRoute (path) {
        props.history.push(path)
    }

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "gallary"]{
            title,
            slug,
            mainImage{
                asset->{
                    url,
                    _id
                },
                alt
            },
            credit
        }`)
        .then((data) => {
            console.log(data);
            setGallary(data);
        })
        .catch(console.error)
    },[]);

    return(
        <div className="background">
            <NavBar/>
            <div class="row">
                {GallaryData && GallaryData.map(image =>(
                    <div onClick={()=>HandleRoute("/gallary/"+image.slug.current)} key={image.mainImage.asset._id} className="card image-card">
                    <img className="card-img-top" src={image.mainImage.asset.url} alt={image.mainImage.alt}/>
                    <div className="card-body">
                        <h5 className="card-title">{image.title}</h5>
                    </div>
                    <figure>
                        <figcaption class="blockquote-footer">
                             <cite title="Source Title">{image.credit}</cite>
                        </figcaption>
                    </figure>
                    </div>
                ))
                }

            </div>
        </div>
    )
}


export default withRouter(Gallary);