import constants from '../Helpers/commonConstants'
import GroceryDetailItem from '../Helpers/GroceryDetail'

const currentDate = new Date();

const date = currentDate.getDate();
const month = currentDate.getMonth(); //Be careful! January is 0 not 1
const year = currentDate.getFullYear();

const dateString = date + "-" +(month + 1) + "-" + year;
const initialState = {
    loading: false,
    error: null,
    groceryItems: [
        new GroceryDetailItem('Item 1',2,dateString),
        new GroceryDetailItem('Item 2',3,dateString),
        new GroceryDetailItem('Item 3',4,dateString)
    ]
  };

  function GroceryDetails(state =initialState , action ){
    const {type, payload} = action;

    return state;
  }

  export default GroceryDetails;