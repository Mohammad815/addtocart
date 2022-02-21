import React from 'react'

const Item = ({ id, description, title, img, price, quantity }) => {
  return (
    <div>
       <div className="items-info">
                    <div className="product-img">
                        <img src={img} alt="ing"/>
                    </div>
                    <div className="title">
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                    <div className="add-minus-quantity">
                    <i class="fas fa-minus minus"></i>
                    <input type="text" placeholder="2" />
                    <i className="fas fa-plus add"></i>
                    </div>

                    <div className="price">
                        <h3>{price}</h3>
                     </div>
                     <div className="remove-item">
                        <i className="fas fa-trash-alt remove"></i>
                    </div>
                </div>
                <hr/>
                
    </div>
  )
}

export default Item
