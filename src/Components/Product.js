import React from 'react'
import './product.css'
import { connect } from 'react-redux'
function Product({ product, handleclick, dispatchdata }) {
    function handleclick(productName) {
        dispatchdata(product)
    }
    return (
        <div className="product-box">
            <div className="product-img">
                <img src={product.src} alt="" />
            </div>
            <div className="product-info">
                <p className="product-info__title">{product.des}</p>
                <button className='btn-desc'>Xem đánh giá</button>
                <div className="product-info-desc">
                    <table>
                        <thead>
                            <tr>
                                <th>Phiên bản</th>
                                <th>Xuất Xứ</th>
                                <th>Giá niêm yết</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td className="left">{product.productName.toUpperCase()}</td>
                                <td className="center">Nhập khẩu</td>
                                <td className="right">{product.cost} VND</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="btn-group">
                    <button className='btn-primary'>ĐK lái thử</button>
                    <button className='btn-primary'>Nhận ưu đãi</button>
                    <button className='btn-yellow btn-right'
                        onClick={() => handleclick(product)}
                    >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
let mapDispatchToProps = (dispatch, props) => {
    return {

        dispatchdata: (product) => {
            dispatch({
                type: 'UPDATE_CART',
                payload: product
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Product)