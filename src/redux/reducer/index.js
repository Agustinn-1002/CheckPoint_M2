// Importa las action types acá

import { CREATE_PRODUCT, DELETE_PRODUCT, GET_ALL_PRODUCTS, GET_PRODUCT_DETAIL } from "../actions";

const initialState = {
  products: [],
  productDetail: {},
};

const rootReducer = (state = initialState, {type, payload}) => {
  if(type === GET_ALL_PRODUCTS) {
    return {
      ...state,
      products: state.products.concat(payload)
    }
  }

  if(type === GET_PRODUCT_DETAIL) {
    return {
      ...state,
      productDetail: payload
    }
  }

  if(type === CREATE_PRODUCT) {
    return {
      ...state,
      products: [...state.products, payload]
    }
  }

  if(type === DELETE_PRODUCT) {
    return {
      ...state,
      products: state.products.filter( product => product.id !== payload)
    }
  }

  return state;
};

export default rootReducer;
