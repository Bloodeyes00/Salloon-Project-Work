import ProductsFilters from "./ProductsFilters/index";
import categoriesList from './getcategoriesLIst/index';
import SaloonList from './saloons/saloonsList';
import ProductList from './Products/index'
import CustomerDetail from './customerdetail'
import Location from './location'


import Cart from './cart/cart'

import { combineReducers } from 'redux'


const RouteReducers = combineReducers({
  ProductsFilters, 
  categoriesList,
  SaloonList,
  CustomerDetail,
  ProductList,
  Location,
  Cart
});

export default RouteReducers;