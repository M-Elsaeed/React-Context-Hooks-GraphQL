import React, {useContext} from 'react';
import {useQuery} from 'graphql-hooks'
import {CategoryContext} from '../contexts/CategoryContext';
import {SubcategoryContext} from '../contexts/SubcategoryContext';
import SubcategoryList from './SubcategoryList';

function CategoryList() {
    const {state, dispatch} = useContext(CategoryContext);
    const subcategoryContext = useContext(SubcategoryContext);
    const CATEGORIES_QUERY = ` {
        categories {
          id
          name
        }
      }`
    const {loading, error, data} = useQuery(CATEGORIES_QUERY)

    if (loading) return (<h5>Loading...</h5>)
    if (error) return (<h5>Error Loading Categories...</h5>)

    return (
        <React.Fragment>
            <h4>Select Category</h4>
            <ul>
                {data.categories.map((category) => (
                    <li key={category.id}
                        onClick={() => {
                            subcategoryContext.dispatch({
                                type: 'SELECT_SUBCATEGORY',
                                subcategory: {id: null}
                            })
                            dispatch({type: 'SELECT_CATEGORY', category})
                        }}>
                        {category.name}
                    </li>
                ))
                }
            </ul>
            {

                state.selectedCategory != null ?

                    <div>
                        <h4>Select Subcategory
                        </h4>
                        <SubcategoryList />
                    </div>
                    : undefined

            }
        </React.Fragment>
    )

}

export default CategoryList;