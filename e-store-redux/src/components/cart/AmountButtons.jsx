import React from 'react'
import {FaMinus, FaPlus} from 'react-icons/fa'

const AmountButtons = ({amount, increment, decrement}) => {
    return (
        <div className='amount-buttons'>
            <button onClick={decrement}><FaMinus/></button>
                <h3>{amount}</h3>
            <button onClick={increment}><FaPlus/></button>
        </div>
    )
}

export default AmountButtons