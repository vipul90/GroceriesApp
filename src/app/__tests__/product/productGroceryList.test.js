// import React from 'react';
// import { shallow } from 'enzyme';
// import { findByTestAtrr } from '../../services/testUtil';
// import ProductGroceryList from '../../grocery/components/product/ProductGroceryList';
// import initialState from '../../state/initialState'

// const componentSetUp = () => {
//   const props = {
//     values: { email: '', password: '' },
//     handleChange: jest.fn(),
//     handleSubmit: jest.fn(),
//     handleBlur: jest.fn(),
//     errors: { email: '', password: '' },
//     touched: { email: '', password: '' },
//     loggingIn: false
//   };
//   const component = shallow(<ProductGroceryList {...props} />);
//   return component;
// };

// describe('Product Grocery List Component', () => {
//   let componentInstance;
//   beforeEach(() => {
//     componentInstance = componentSetUp();
//   });

//   it('Should render without errors', () => {
//     const wrapper = findByTestAtrr(componentInstance, 'ProductGroceryListComponent');
//     expect(wrapper.length).toBe(1);
//   });
// });

import React from 'react';
import { Provider } from 'react-redux';
// import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import ProductGroceryList from '../../grocery/components/product/ProductGroceryList';//ProductGroceryList
import initialState from '../../state/initialState'
// import MyConnectedComponent from '.';
import toJson from 'enzyme-to-json'; //added this line
// import { createRender } from '@material-ui/core/test-utils';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

const mockStore = configureStore([]);
 
describe('My Connected React-Redux Component', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
        GroceryDetails : initialState
    });
    // const render = createRender();

    component = shallow(
      <Provider store={store}>
        <ProductGroceryList />
      </Provider>
    );
  });
 
  it('should render with given state from Redux store', () => {
        // expect(component.toJSON()).toMatchSnapshot();
        expect(toJson(component)).toMatchSnapshot();
  });
 
//   it('should dispatch an action on button click', () => {
 
//   });
});
