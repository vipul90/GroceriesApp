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
        new GroceryDetailItem(1,'Item 1',2,dateString),
        new GroceryDetailItem(2,'Item 2',3,dateString),
        new GroceryDetailItem(3,'Item 3',4,dateString)
    ],
    CurrentItemId:3
  };

  function GroceryDetails(state =initialState , action ){
    const {type, payload} = action;
        switch(type){
            case constants.ADD_GROCERY_ITEM :
                // console.log(state.CurrentItemId);
                payload.ItemId = state.CurrentItemId + 1;
                //  console.log('test');
                // var newList = Object.assign({},state.groceryItems,(payload));
                //  console.log(newList);
                // var newState = Object.assign({},state,{groceryItems : state.groceryItems.concat(payload)});
                // return newState;
                return { 
                    ...state,
                    groceryItems: [...state.groceryItems, payload],
                    CurrentItemId : state.CurrentItemId + 1
                }
        }
    return state;
  }

  export default GroceryDetails;