import React, { useState } from 'react'
import { Typography } from '@material-ui/core'
import './Basket.css'

const Basket = ({ list }) => {
  const [visibleFlag, setVisibleFlag] = useState(true)

  const changeVisibleOnTrue = () => {
    setVisibleFlag(!visibleFlag)
  }

  const Card = ({ name, sullpier, price, piece }) => (
    <div className="basket__list__card">
      <div className="basket__list__card__delete"></div>
      <div className="basket__list__card__img"></div>
      <div className="basket__list__card__name">
        <div className="basket__list__card__name__product_name">{name}</div>
        <div className="basket__list__card__name__supplier_name">{sullpier}</div>
      </div>
      <div className="basket__list__card__price">${price}</div>
      <div className="basket__list__card__quantity_counter">
       <div onMouseEnter={changeVisibleOnTrue} onMouseOut={changeVisibleOnTrue} className="basket__list__card__quantity_counter">
          <div className="basket__list__card__quantity_counter__less" style={{
            display: `${visibleFlag ? 'none' : 'block'}`
          }}>
          </div>
          <input className="basket__list__card__quantity_counter__quantity" defaultValue={`${piece}`}/>
          <div className="basket__list__card__quantity_counter__more" style={{
            display: `${visibleFlag ? 'none' : 'block'}`
          }}>
          </div>
        </div>
      </div>
      <div className="basket__list__card__total_price">$28.99</div>
    </div>
  )

  return (
        <div className="basket">
            <div className="basket__list">
            {list.map((item, index) =>
              <Card
              key={index}
              name = {item.name}
              supplier = {item.supplier}
              price={item.price}
              piece={item.piece}
              />)}
            </div>
            <div className="basket__total">
              <Typography variant="body1">
                Subtotal: $145.84
              </Typography>
              <Typography variant="body1">
                Shipping: $5.00
              </Typography>
              <Typography variant="body1">
              Total Amount: $254.84
              </Typography>
            </div>
        </div>
  )
}

export default Basket
