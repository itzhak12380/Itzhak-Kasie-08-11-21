import React from 'react'

function ErrorComponent() {
    return (
        <div>
            <img style={{ width: "300px", height: '250px' }} src='http://cdn.shopify.com/s/files/1/1061/1924/products/Very_sad_emoji_icon_png_grande.png?v=1571606089' />
            <h1> Error page not found</h1>
            <h2>please refresh the page or try again later</h2>
        </div>
    )
}
export function LimitExceeded(){
    return (
    <div>
    <img style={{ width: "300px", height: '250px' }} src='http://cdn.shopify.com/s/files/1/1061/1924/products/Very_sad_emoji_icon_png_grande.png?v=1571606089' />
    <h1> Error page not found</h1>
    <h4>We'r sorry but the amount that can be used for the api key has exceeded its limit. Please get back to us later  thank you</h4>
</div>
    )
}
export default ErrorComponent
