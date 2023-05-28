import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (event) => {
        dispatch({type: 'CHG_CURRENCY', payload: event.target.value});
   }
    return (

        <div className = 'alert alert-success'>
            <label htmlFor="currencies" >Currency</label>
            <select className="custom-select" 
                    style={{ marginLeft: '0.5rem' , size: 10}}
                    onChange={changeCurrency} >
                
                <option value="$" defaultValue name="Dollar"> $ Dollar</option>
                <option value="£" name="Pound">£ Pound</option>
                <option value="€" name="Euro">€ Euro</option>
                <option value="₹" name="Ruppee">₹ Ruppee</option>
            </select>

        </div>
    );
};
export default Currency;