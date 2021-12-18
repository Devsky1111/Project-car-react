import React from 'react'
import Header from './Components/Header';
import Shopcart from './Components/Shopcart';
import Main from './Components/Main';


export default function App() {


    return (
        <div>
            <Header />
            <div className="row">
                <Main />
                <Shopcart />
            </div>
        </div>
    )
}
