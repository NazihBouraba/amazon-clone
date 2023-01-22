import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'

function Checkout() {
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <img className='chekout__ad' src="https://m.media-amazon.com/images/G/08/GILFR/fr-gil_maple_vc_dt_12-2021_770x80._CB650895513_.jpg"
                    alt=" " />

                <div>
                    <h2 className='checkout__title'>Your shopping Basket</h2>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
