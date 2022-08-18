import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { clearFilters, handleFilter } from '../redux/actions';

const Filters = () => {
    const colors = useSelector((state) => state.filters.colors);
    const gender = useSelector((state) => state.filters.gender);
    const type = useSelector((state) => state.filters.type);
    const dispatch = useDispatch();
    return (
        <div className='filters'>
            <h3>Filter Products By</h3>
            <h5>Gender</h5>
            {gender.map((el) => {
                return <div className='filters__list' key={el.id}>
                    <input onChange={() => dispatch(handleFilter(el.id))} id={el.name} type="checkbox" checked={el.checked} />
                    <label htmlFor={el.name}>{el.name}</label>
                </div>
            })}
            <h5>Type</h5>
            {type.map((el) => {
                return <div className='filters__list' key={el.id}>
                    <input onChange={() => dispatch(handleFilter(el.id))} id={el.name} type="checkbox" checked={el.checked} />
                    <label htmlFor={el.name}>{el.name}</label>
                </div>
            })}
            <h5>Colors</h5>
            {colors.map((el) => {
                return <div className='filters__list' key={el.id}>
                    <input onChange={() => dispatch(handleFilter(el.id))} id={el.name} type="checkbox" checked={el.checked} />
                    <label htmlFor={el.name}>{el.name}</label>
                </div>
            })}
            <br />
            <div className='filters__list'>
                    <input onChange={() => dispatch(clearFilters())} id="clear" type="checkbox"  />
                    <label htmlFor="clear">Clear Filters</label>
            </div>
        </div>
    )
}

export default Filters



