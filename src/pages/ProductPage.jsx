import React from 'react'
import { Link } from 'react-router-dom';
import '../css/ProductPage.scss'

import Video from '../components/Video'
import MyVideo from '../images/video.mp4'

function ProductPage({product}) {

  return (

  <>
    <div className="product-page">

      <div className="prod-image">
        <img src={product.image} alt='' />
      </div>

      <div className="prod-details">
        <h1>{product.name}</h1>
        <p>€{product.price}</p>
        <p className='product-description'>{product.desc}</p>
        <button>Add to cart</button>
        <Link to='/checkout'><button>Checkout</button></Link>
      </div>

    </div>

      <div class="image-gallery">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
      </div>

      <Video src={MyVideo}/>

  </>
    
  )
}

export default ProductPage