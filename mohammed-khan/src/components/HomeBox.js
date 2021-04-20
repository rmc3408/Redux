import React from 'react'

const HomeBox = (props) => {

    return (
        <section>
            <div className="wrapper">
                <img alt='phone' src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/mobile-phone_1f4f1.png' />
                <p>Samsung phone</p>
                <span> Price: 1000</span>
                <button onClick={() => props.handleToAdd(23)}>Add</button>
                <button onClick={() => props.handleToRemove()}>Remove</button>
            </div>
        </section>
    )
}

export default HomeBox
