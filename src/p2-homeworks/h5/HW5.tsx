import React from 'react'
import Header from './Header'
import {RoutesOld} from './Routes'
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <div>
            <HashRouter>

                <Header/>

                <RoutesOld/>

            </HashRouter>
        </div>
    )
}

export default HW5
