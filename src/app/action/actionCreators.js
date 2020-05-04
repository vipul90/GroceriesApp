import constants from '../Helpers/commonConstants'

const AddItemInGrocery = (payload) =>{
    return {
        type:constants.ADD_GROCERY_ITEM,
        payload : payload
    }
}

const RemoveItemInGrocery = (payload) =>{
    return {
        type:constants.REMOVE_GROCERY_ITEM,
        payload : payload
    }
}

const UpdateItemInGrocery = (payload) =>{
    return {
        type:constants.UPDATE_GROCERY_ITEM,
        payload : payload
    }
}

export {AddItemInGrocery,RemoveItemInGrocery,UpdateItemInGrocery}