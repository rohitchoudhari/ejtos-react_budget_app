import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const {budget,dispatch,expenses} = useContext(AppContext);
    const [oldBudget, setOldBudget] = useState(0);
    const totalExpenses = expenses.reduce((total, item) =>{
        return (total = total + item.cost);
    },0)

    const setBudget = (value) => {
        setOldBudget(budget);
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
        if(oldBudget>20000){
            alert("The value cannot exceed more than Rs. 20,000");
            return;
        }
        if(oldBudget<totalExpenses){
            alert("You cannot reduce budget value lower than the spending");
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: oldBudget,
        });
    };

    return(
        <div className='alert alert-secondary'>
            <span>Budget: Rs. 
                <input 
                    type="number" 
                    id="budget"
                    step="10"
                    value={budget}
                    onChange={(event) => setBudget(event.target.value)}>
                </input>/-
            </span>
        </div>
    );
}

export default Budget;