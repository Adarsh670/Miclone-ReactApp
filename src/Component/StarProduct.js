import React from 'react'

const StarProduct = ({ starproduct }) => {
  return (
    <div className='container starProducts'>
      <div className="row">
        <div className="col-sm-12 col-md-6 pe-md-0">
          <a href={starproduct[0].url}><img src={starproduct[0].image}  className="img-fluid" alt="1st product" /></a>
        </div>
        <div className="col-sm-12 ps-md-0 col-md-6">
          <div className="row">
            <div className="col-6 pe-0 starproductleft">
              <a href={starproduct[1].url}><img src={starproduct[1].image} className="img-fluid" alt="1st product" /></a>
            </div>
            <div className="col-6 ps-0 starproductright">
              <a href={starproduct[2].url}><img src={starproduct[2].image}  className="img-fluid" alt="1st product" /></a>
            </div>
            
          </div>
          <div className="row">
            <div className="col-12">
              <a href={starproduct[3].url}><img src={starproduct[3].image} className="img-fluid" alt="1st product" /></a>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default StarProduct