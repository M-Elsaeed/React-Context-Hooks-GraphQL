import React, {createContext, useReducer} from 'react';
import {subcategoryReducer} from '../reducers/subcategoryReducer';

export const SubcategoryContext = createContext();

const SubcategoryContextProvider = (props) => {
  const [state, dispatch] = useReducer(
    subcategoryReducer,
    {selectedSubcategory: null});

  return (
    <SubcategoryContext.Provider value={{state, dispatch}}>
      {props.children}
    </SubcategoryContext.Provider>
  );
}

export default SubcategoryContextProvider;