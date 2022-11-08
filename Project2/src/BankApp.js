import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Provider } from 'react-redux';

import cartStore from './BankStore';



function BankApp() 
{    
    const [total, setTotal] = useState(0);    
    let currentBalance = useSelector((state) => state.count); 
    const dispatch = useDispatch();
 

  function add_click()
  {    
      dispatch({type:"ADD", total:total} );

        setTotal(total+1);   // clear textbox
  }

  function remove_click()
  {
     dispatch({type:"REMOVE", total:total} );
     setTotal(total-1);   // clear textbox
  }
 
    
        return (
        
        <div>
            <button onClick={add_click}>Add to Cart</button> &nbsp;
            <button onClick={remove_click}>Remove</button>
            <p>{total}</p>      
        </div>
        
        );
}
 
export default BankApp;
    

 