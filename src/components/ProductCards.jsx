import React from 'react'

//Styles
import '../css/ProductCards.scss';

//Components
import Ratings from '../components/Ratings';
import ProductPage from './ProductPage';

function ProductCards ({setPrice, setAddItem, setQuantity, quantity, ...object}) { 


   function addToCart(object) {
     setAddItem((prevAdditem) => [...prevAdditem, object]);
     setPrice((prevSetPrice) => [...prevSetPrice, object]);
     setQuantity(quantity + 1);  // update quantity
   }


  return (

    <div className="card">
      <img src={object.image} alt='Image' />
      <button className='details'>Details</button>
      <button onClick={() => addToCart(object)}>Add to cart</button>
      <h3>{object.name}</h3>
      <p>Directional freeride snowboard</p>
      {/* <span>reviews</span> */}
      <span>€{object.price}</span>
      <Ratings arr={object} />
      {/* <p>{object.id}</p> */}
      <p>{object.types}</p>
    </div>
  )
}

export default ProductCards