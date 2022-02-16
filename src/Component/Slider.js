import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = ({ start }) => {

    return (
        <div className='upperslider'>
            <Carousel>
                {
                    start.map((item, index) => {
                        return (
                            <Carousel.Item>
                                <img className="d-block w-100 carouselimg" src={item} alt="First slide" />
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>

    )
}

export default Slider