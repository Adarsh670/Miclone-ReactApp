import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
const Inthepress = ({ endslider }) => {

    return (
        <Carousel>
            {
                endslider.map((item, index) => {
                    return (
                        <Carousel.Item>
                            <img className="d-block w-100 h-200 endslider"   src={item.image} alt="First slide" />
                            <Carousel.Caption>
                                <h5>{item.name}</h5>
                                <p className="interpresspara">{item.description}</p>
                                <Link to='/enda' className="inthepresslink">Read more</Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}

export default Inthepress