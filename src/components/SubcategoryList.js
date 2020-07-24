import React, {useContext} from 'react';
import {useQuery} from 'graphql-hooks'
import {CategoryContext} from '../contexts/CategoryContext';
import {SubcategoryContext} from '../contexts/SubcategoryContext';
import ReviewsList from '../components/ReviewsList'


function SubcategoryList() {
    const categoryContext = useContext(CategoryContext);
    const subcategoryContext = useContext(SubcategoryContext);
    const SUBCATEGORIES_QUERY = `{
        category(id: "${categoryContext.state.selectedCategory}") {
          subcategories {
            name
            id
          }
        }
      }
      `
    const {loading, error, data} = useQuery(SUBCATEGORIES_QUERY)

    if (loading) return (<h5>Loading...</h5>)
    if (error) return (<h5>Error Loading Subcategories...</h5>)

    return (
        <React.Fragment>
            <ul>
                {data.category.subcategories.map((subcategory) => (
                    <li key={subcategory.id}
                        onClick={() => {subcategoryContext.dispatch({type: "SELECT_SUBCATEGORY", subcategory})}}
                    >
                        {subcategory.name}
                    </li>
                ))
                }
            </ul>
            {

                subcategoryContext.state.selectedSubcategory != null ?

                    <div>
                        <h4>
                            Reviews
                     </h4>
                        <ReviewsList/>
                    </div>
                    : undefined

            }

        </React.Fragment>
    )

}

export default SubcategoryList;