export const categoryReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_CATEGORY':
      return {
        ...state,
        selectedCategory: action.category.id
      }
    default:
      return state;
  }
} 