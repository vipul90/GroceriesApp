import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import UserGroceryList from '../../grocery/components/cart/UserGroceryList';
import initialState from '../../state/initialState'
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

const createStore = configureStore([]);
 
describe('My User Grocery List Component', () => {
  let storeInstance;
  let componentInstance;
 
  beforeEach(() => {
    storeInstance = createStore({
        GroceryDetails : initialState
    });

    componentInstance = shallow(
      <Provider store={storeInstance}>
        <UserGroceryList />
      </Provider>
    );
  });
 
  it('should render with given state and store', () => {
        expect(toJson(componentInstance)).toMatchSnapshot();
  });
});
