import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { clearFilters, updateCheckboxes, updateFilters } from '../redux/actions';
import { formatPrice, getUniqueValues } from '../utils/helpers';
import {FaCheck} from 'react-icons/fa'

const Filters = () => {
  const filters = useSelector((state) => state.filters.filters);
  const products = useSelector((state) => state.filters.all_products);
  const checkboxes = useSelector((state) => state.filters.companys);
  const {text,company,category, min_price,max_price,price,shipping, color} = filters;
  
  const dispatch = useDispatch();
  const updateValues = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      if(name === 'category'){
        value = e.target.textContent;
      }
      if(name === 'color'){
        value = e.target.dataset.color;
      }
      if(name === 'price'){
        value = Number(value);
      }
      if(name === 'shipping'){
        value = e.target.checked
      }
      dispatch(updateFilters(name, value))
  }

  const companys = getUniqueValues(products, 'company');
  const categories = getUniqueValues(products, 'category');
  const colors = getUniqueValues(products, 'colors');
  
  return (
    <div className='filters'>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <div className="form-control">
          <input value={text} type="text" name='text' placeholder='Search Products' onChange={updateValues} />
        </div>
        <div className="form-control category">
          <h5>Category</h5>
          {categories.map((el, i) => {
              return <button name='category' key={i} onClick={updateValues} className={`${category === el.toLowerCase() ? 'active' : null}`}>{el}</button>
          })}
        </div>
        <div className="form-control company">
          <h5>Company</h5>
          <select name="company" value={company} onChange={updateValues}>
            {companys.map((el, i) => {
                return <option value={el} key={i}>{el}</option>
            })}
          </select>
        </div>
        <div className="form-control colors">
          <h5>Colors</h5>
            {colors.map((el, i) => {
                if(el === 'all'){
                  return <button key={i} name='color' onClick={updateValues} data-color="all" className={`${ color === 'all' ?  'all-btn active' : 'all-btn'}`}>all</button>
                }
                return <button style={{background: el, color: 'transparent'}} name='color' data-color={el} onClick={updateValues} key={i} className={`${color === el ? 'color-btn active' : 'color-btn'}`} >{color === el ? <FaCheck/> : null}</button>
            })}
        </div>
        <div className="form-control price">
          <h5>Price</h5>
          <p>{formatPrice(price)}</p>
            <input type="range" name='price' onChange={updateValues} min={min_price} max={max_price} value={price} />
        </div>
        <div className="form-control shipping">
          <h5>Shipping</h5>
          <label htmlFor="shipping">free shipping</label>
            <input type="checkbox" name='shipping' id='shipping' onChange={updateValues} checked={shipping}/>
        </div>
       </form>

      <div className="checkboxes">
            <h5>Companys</h5>
            {checkboxes.map((el) => {
              const {name, id, checked} = el;
              return <div key={id}>
                  <input type="checkbox" name={name} id={name} onChange={() => dispatch(updateCheckboxes(id))} checked={checked} />
                  <label htmlFor={name}>{name}</label>
              </div>
            })}
      </div>
      <button type='button' onClick={() => dispatch(clearFilters())}>clear filters</button>
    </div>
  )
}

export default Filters