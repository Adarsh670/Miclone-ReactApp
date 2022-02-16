import React from 'react'
const Offers = ({ offers }) => {
    return (
        
            <div className="container offersSection">
                <div className="row">
                    {
                        offers.map((index, item) => {
                            return (
                                <div className="col-12 col-md-4 col-lg-4 p-0">
                                    <img src={index.image} alt="" />
                                </div>
                            )
                        })
                    }

                </div>
            </div>
           
        
    )
}

export default Offers