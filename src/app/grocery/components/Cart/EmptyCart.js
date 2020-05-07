import React from 'react'
import EmptyShoppingCart from '../../assests/empty-cart.jpg'

export default function EmptyCart(){
    return(
        <div className="emptyCart">
                <img src={EmptyShoppingCart} ></img>
        </div>
    )
}

