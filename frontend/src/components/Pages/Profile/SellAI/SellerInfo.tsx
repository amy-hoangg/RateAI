import React from "react"

const seller = {
    store_name: 'ai store',
    phone: ' 084443',
    address: 'tampere finland',
    owner_name: 'firstname lastname',
    owner_id: "32848472nje",
    seller_id: "njfbngk",
    ais: ['ejfeh24345', 'dfnjnjfd', 'fjnvjlnd']
}

const SellerInfo = () => {
    return (
        <div>
            <h2>Seller Info</h2>
            <ul>
                <li>{seller.store_name}</li>
                <li>{seller.phone}</li>
                <li>{seller.address}</li>
                <li>{seller.owner_name}</li>
            </ul>
        </div>
    )
}
export default SellerInfo