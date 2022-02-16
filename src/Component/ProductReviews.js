import React from 'react'

const ProductReviews = ({ productreview }) => {
  return (
    <div className='container-fluid productreviews'>
      <div className="row">
        <div className="col-md-6 col-sm-12">
            <img src={productreview[0].image} alt="" />
            <h6>{productreview[0].review}</h6>
            <div className="innerdiv">
              <p>{productreview[0].name}</p>
              <span>{productreview[0].price}</span>
            </div>
        </div>
        <div className="col-md-6 col-sm-12 ">
            <img src={productreview[1].image} alt="" />
            <h6>{productreview[0].review}</h6>
            <div className="innerdiv">
              <p>{productreview[0].name}</p>
              <span>{productreview[0].price}</span>
            </div>
        </div>
      </div>
    </div>

  )
}

export default ProductReviews