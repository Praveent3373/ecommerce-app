import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateSort } from '../../redux/actions';

const Sort = () => {
    const products = useSelector((state) => state.filters.filtered);
    const sort = useSelector((state) => state.filters.sort);
    const dispatch = useDispatch()
    console.log(sort);
    const updateValues = (e) => {
        // const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value);
        dispatch(updateSort(value));
    }

    return (
        <div className='sort'>
            <div className="sort__length">
                <p>{products.length} products found</p>
            </div>
            <div className="sort__select">
                <form>
                    <label htmlFor="sort">Sort by </label>
                    <select name="sort" id="sort" value={sort} onChange = { updateValues }>
                        <option value="price-lowest">price (lowest)</option>
                        <option value="price-highest">price (highest)</option>
                        <option value="name-a">name (a-z)</option>
                        <option value="name-z">name (z-a)</option>
                    </select>
                </form>
            </div>
        </div>
    )
}

export default Sort