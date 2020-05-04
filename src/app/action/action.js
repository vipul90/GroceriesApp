import constants from '../Helpers/commonConstants'
import GroceryDetailItem from '../Helpers/GroceryDetail'
import DateValue from '../Helpers/Utils'

const initialState = {
    loading: false,
    error: null,
    groceryItems: [
        new GroceryDetailItem(1,'Item 1',2,DateValue),
        new GroceryDetailItem(2,'Item 2',3,DateValue),
        new GroceryDetailItem(3,'Item 3',4,DateValue)
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
            case constants.REMOVE_GROCERY_ITEM :
                return { 
                    ...state,
                    groceryItems: state.groceryItems.filter(x=>x.ItemId != payload.ItemId)
                }
            case constants.UPDATE_GROCERY_ITEM :
                
                return { 
                    ...state,
                    groceryItems: state.groceryItems.map(item =>{
                        if(item.ItemId == payload.ItemId){
                            return payload;
                        } else{
                            return item;
                        }
                    })
                }
            default:
            return state;
        }
  }

  export default GroceryDetails;