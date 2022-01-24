import React from 'react'
import demo from '../../../../assets/icons/demoImg.png'
import founder from '../../../../assets/images/sampleFounderImg.png'
import investor from '../../../../assets/images/sampleinvestors.png'
import { Button } from '../../../../components'
import './product.css'

export const Product = () => {
  const countInvestor = [1, 2, 3, 4]
  return (
    <div>
      <section className="d-flex justify-content-end">
        {/* <h3 className="header" >Product </h3> */}
        <span className="headBtn">Edit product</span>
      </section>
      <div className="row">
        <section className="col-xl-12">
          <div className="product-wrap">
            <div className="wrap mb-5 py-5 px-5">
              <h3>Product Description</h3>
              <p className="mb-5 prod-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada aliquet turpis urna dui aliquam in nisl, pharetra
                pharetra. Id diam urna, facilisi augue. Tellus, senectus odio
                vel, laoreet condimentum consequat id sapien. Nunc consectetur
                senectus risus condimentum risus lectus eget sed. Sed luctus
                faucibus elementum risus egestas nullam. Tristique tempor et
                amet dui, cursus quam porta fames tellus. Fermentum ut et congue
                nec phasellus quis. Vehicula ut rutrum congue nisi, et sit.
                Morbi elementum sed pretium, elementum risus. Lacus vitae nisl,
                enim, tempor, lorem nullam ullamcorper scelerisque amet.
                Venenatis a arcu egestas tincidunt turpis sagittis fames.
              </p>
            </div>

            <h3>Product Demo</h3>

            <img
              src={demo}
              alt="demo video placeholder"
              className="product-demo"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
