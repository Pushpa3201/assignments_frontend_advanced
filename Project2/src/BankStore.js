import { legacy_createStore as createStore } from 'redux';

// Reducer Function
const cartReducer = (state, action) => 
{
    // Convert action type to upper case
    action.type = action.type.toUpperCase();    

    // alert(action.type);

    switch (action.type) 
    {
        case "CREATE":
            return {count: 0};    

        case "ADD":
            return {count: state.count+action.total};
            
        case "REMOVE":
            if(state.count < action.total)  
            {
                // alert("Insufficent items in cart");
                return {count: state.count};
            }
            else
            {
               return {count: state.count - action.total};
            }
        default:
            return state;
    }
};

// Create Store
const cartStore = createStore(cartReducer);
export default cartStore;