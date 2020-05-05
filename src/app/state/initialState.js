import GroceryDetailItem from '../Helpers/GroceryDetailItem'
import DateValue from '../Helpers/Utils'

const initialState = {
    loading: false,
    error: null,
    availableGroceryList:[
        new GroceryDetailItem(1,'Item 1',2,DateValue,100,'1 Kg'),
        new GroceryDetailItem(2,'Item 2',3,DateValue,200,'2 Kg'),
        new GroceryDetailItem(3,'Item 3',4,DateValue,300,'1 l'),
        new GroceryDetailItem(4,'Item 4',5,DateValue,400,'2 l'),
        new GroceryDetailItem(5,'Item 5',5,DateValue,400,'2 l'),
    ],
    userGroceryItems: [
        // new GroceryDetailItem(1,'Item 1',2,DateValue),
        // new GroceryDetailItem(2,'Item 2',3,DateValue),
        // new GroceryDetailItem(3,'Item 3',4,DateValue)
    ],
    CurrentItemId:0
  };

  export default initialState;