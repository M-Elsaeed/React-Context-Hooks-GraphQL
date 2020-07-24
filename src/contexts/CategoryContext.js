
import React, {createContext, useReducer} from 'react';
import {categoryReducer} from '../reducers/categoryReducer';

export const CategoryContext = createContext();

const CategoryContextProvider = (props) => {
  const [state, dispatch] = useReducer(
    categoryReducer,
    {selectedCategory: null});

  return (
    <CategoryContext.Provider value={{state, dispatch}}>
      {props.children}
    </CategoryContext.Provider>
  );
}

export default CategoryContextProvider;