import React from "react";
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { filterProducts, handleColor } from "../redux/actions";
const Filters = () => {
  const data = useSelector((state) => state.products.products);
  const colors = useSelector((state) => state.products.colors);
  console.log(colors);
  console.log("updated" , data);
  const dispatch = useDispatch();
  // console.log(data);
  // const [color, setColor] = useState([
  //   {id: 1, checked: false, label: 'red'},
  //   {id: 2, checked: false, label: 'blue'},
  //   {id: 3, checked: false, label: 'green'},
  // ])
  // const handleChecked = (id) => {
  //   const changeChecked = colors.map((item) => item.id === id ? {...item, checked: !item.checked} : item);
  //   setColor(changeChecked);
  // }

  // const applyFilters = () => {
  //   let updatedData = data;
  //   const colorChecked = color.filter((item) => item.checked).map((item) => item.label.toLowerCase())
  //   if(colorChecked.length){
  //     updatedData = updatedData.filter((item) => colorChecked.includes(item.color.toLowerCase()));
  //   }
  // }


  useEffect(() => {
      dispatch(filterProducts())
  },[colors, filterProducts])
  return (
    <div className="filters">
      <ul className="filters-list">
        <h3>Colour</h3>
          <li>
              {colors.map((el) => {
              return <div key={el.id}>
                <input type="checkbox" checked={el.checked} value={el.label} id={el.label} onChange={() => dispatch(handleColor(el.id))} />
                <label htmlFor={el.label}>{el.label.toLocaleUpperCase()}</label>
              </div>
            })}
          </li>
        </ul>
    </div>
  );
};

export default Filters;
