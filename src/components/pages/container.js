import React from 'react'
import Home from './Home'
import Header from '../features/header'
import Favorites from './favorites'
import {
    HashRouter as Router,
    Routes,
    Route,
} from 'react-router-dom'
const style = {
    height: '96vh',
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    alignItems: 'center',
    flexDirection: 'column'
}
function Container() {
    return (
        <Router>
            <div style={style}>
                <div style={{height:"10%"}}>
                    <Header />
                </div>
                <div style={{height:"80%"}}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/favorite" element={<Favorites />} />
                        {/* <Route path='/favorite'><Favorites /></Route> */}
                    </Routes>
                </div>

            </div>
        </Router>
    )
}

export default Container
