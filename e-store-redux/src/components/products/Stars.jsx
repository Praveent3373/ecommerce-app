import React from 'react'
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'

const Stars = ({stars, reviews}) => {
    const newStars = Array.from({length: 5}, (_, index) => {
            const number = index + 0.5;
            return(
                <span key={index}>
                    {stars >= index + 1 ? (<BsStarFill/>) : stars >= number ? (<BsStarHalf/>): (<BsStar/>)}
                </span>
            )
    })
    return (
        <div className='stars'>
            {newStars}
            <span className="stars__reviews">
                <span>{reviews} customer reviews</span>
            </span>
        </div>
    )
}

export default Stars


// manual approach

/* <span>
{stars >= 1 ? (<BsStarFill/>) : stars >= 0.5 ? (<BsStarHalf/>): (<BsStar/>)}
</span>
<span>
{stars >= 2 ? (<BsStarFill/>) : stars >= 1.5 ? (<BsStarHalf/>): (<BsStar/>)}
</span>
<span>
{stars >= 3 ? (<BsStarFill/>) : stars >= 2.5 ? (<BsStarHalf/>): (<BsStar/>)}
</span>
<span>
{stars >= 4 ? (<BsStarFill/>) : stars >= 3.5 ? (<BsStarHalf/>): (<BsStar/>)}
</span>
<span>
{stars === 5 ? (<BsStarFill/>) : stars >= 4.5 ? (<BsStarHalf/>): (<BsStar/>)}
</span>   */