import React from 'react'
import { data } from './data'
import Product from './Product'
export default function Main({ getproduct }) {
    console.log(data)


    return (
        <main>
            {data.products.map((product, index) => {
                return <Product product={product} key={product.id}

                ></Product>
            })}
        </main>
    )
}
