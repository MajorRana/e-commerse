import React from 'react'

function SingleCategoryDetails(props) {
if(props.categoryDetails.count==0)
    return ;
  return (
    <>
     <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
          <a className="text-decoration-none" href="">
            <div className="cat-item d-flex align-items-center mb-4">
              <div
                className="overflow-hidden"
                style={{ width: 100, height: 100 }}
              >
                <img className="img-fluid" src={props.categoryDetails.categoryImage} alt="" />
              </div>
              <div className="flex-fill pl-3">
                <h6>{props.categoryDetails.name.toUpperCase()}</h6>
                <small className="text-body">{props.categoryDetails.count} Products</small>
              </div>
            </div>
          </a>
        </div>
        </>
  )
}

export default SingleCategoryDetails