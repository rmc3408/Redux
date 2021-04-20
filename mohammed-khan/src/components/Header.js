import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h2> HeaderComponents</h2>
            <div><h3>Cart items: {props.cart.length}</h3></div>
        </div>
    )
}

export default Header
