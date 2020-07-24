export const subcategoryReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_SUBCATEGORY':
      return {
        ...state,
        selectedSubcategory: action.subcategory.id
      }
    default:
      return state;
  }
} 