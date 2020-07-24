import React, {useContext} from 'react';
import {useQuery} from 'graphql-hooks'
import {SubcategoryContext} from '../contexts/SubcategoryContext';


function ReviewsList() {
    const subcategoryContext = useContext(SubcategoryContext);
    const REVIEWS_QUERY = `{
        subcategory(id: "${subcategoryContext.state.selectedSubcategory}") {
          reviews {
            content
            id
          }
        }
      }
      `
    const {loading, error, data} = useQuery(REVIEWS_QUERY)

    if (loading) return (<h5>Loading...</h5>)
    if (error) return (<h5>Error Loading Reviews List...</h5>)

    return (
        <React.Fragment>
            <ul>
                {data.subcategory.reviews.map((review) => (
                    <li key={review.id}>
                        {review.content}
                    </li>
                ))
                }
            </ul>

        </React.Fragment>
    )

}

export default ReviewsList;