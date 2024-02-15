/* eslint-disable prettier/prettier */
import {createStore} from 'redux';
import {Reducers} from '../reducer/Reducers';
import {Reducers2} from '../reducer/Reducers2';
import {AddressReducers} from '../reducer/AddressReducers';
import {combineReducers} from 'redux';
import {OrderReducers} from '../reducer/OrderReducers';
  const routeReducer = combineReducers({
  Reducers,
  Reducers2,
  AddressReducers,
  OrderReducers,
});
export const store = createStore(routeReducer);
