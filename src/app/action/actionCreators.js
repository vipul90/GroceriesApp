import constants from '../Helpers/commonConstants'

const AddItemInGrocery = (payload) =>{
    return {
        type:constants.ADD_GROCERY_ITEM,
        payload : payload
    }
}

export {AddItemInGrocery}