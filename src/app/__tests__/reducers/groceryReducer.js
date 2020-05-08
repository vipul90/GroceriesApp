
import constants from '../../Helpers/commonConstants';
import initialState from '../../state/initialState';
import UserGroceryItem from '../../Helpers/UserGroceryItem';
import DateValue from '../../Helpers/Utils';
import GroceryDetails from '../../action/action';

describe('All user Grocery Reducer', () => {
    it('Should return default state', () => {
        const newState = GroceryDetails(undefined,{});
        expect(newState).toBe(initialState);
      });
});