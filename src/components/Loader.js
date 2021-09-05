import React from 'react'
import loader from './loader.gif'

const Loader = ()=> {
        return (
            <div className="text-center">
                <img className="my-3" src={loader} alt="loading" />
            </div>
        )
}

export default Loader
