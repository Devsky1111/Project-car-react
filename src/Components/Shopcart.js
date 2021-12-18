import React from 'react'
import './shopcart.css'
import { connect } from 'react-redux'
import { exitsEleinArr } from './functioninProject'

let datashopcart1 = [
    // {
    //     id: 1,
    //     productName: 'Convertible',
    //     cost: 500000000,
    //     des: "Đây là dòng xe phổ biến nhất thế giới ngày nay. Sedan là dòng xe có kết cấu 3 khoang tách biệt hoàn toàn, đó là khoang động cơ, khoang người ngồi và khoang hành lý. Loại này thường có gầm thấp, 4 cửa, 4 hoặc 5 chỗ ngồi",
    //     src: "https://static.danhgiaxe.com/data/201525/with-the-i8-bmw-has-successfully-blended-a-cacophony-of-materials-textures-and-angles-to-create-a-harmonious-composition_5807.jpg",
    //     qty: 1
    // },
]
function Shopcart({ savedata }) {



    let renderdata = savedata.length > 0 && savedata.map((ele, index) => {

        return (
            <div className='shopcart-item' key={ele.id}

            >
                <div className="shopcart-titleName">
                    <div>Tên sản phẩm: {ele.productName}</div>

                </div>
                <div className="shopcart-desc">
                    <div className="shopcart-qty">

                        <div>Số Lượng: {ele.qty}</div>

                    </div>
                    <div className="shopcart-cost">
                        <div>Giá Tiền:   {ele.cost}</div>

                    </div>
                </div>



            </div>
        )
    })

    let totalPrice = savedata.reduce((prevValue, currentValue, currentIndex) => {
        console.log(prevValue)
        return prevValue + currentValue.qty * currentValue.cost
    }, 0)
    console.log(totalPrice)
    return (<div className='shopcart'>
        <div className="title-cart">
            Shop Cart
        </div>
        {renderdata}
        <div className="shopcart-totalprice">
            <span>Total: {totalPrice.toLocaleString()} VND</span>
        </div>
    </div>

    )
}

let mapStateToProps = (state, action) => {
    return {
        savedata: state
    }
}

export default connect(mapStateToProps, null)(Shopcart)