import React, {useState, useContext, useEffect} from 'react'
import {useMutation} from 'graphql-hooks'
import {SubcategoryContext} from '../contexts/SubcategoryContext'

const ADD_REVIEW_MUTATION = `mutation AddReview($subcategoryId: ID!, $content: String!) {
    addReview(subcategoryId: $subcategoryId, content: $content) {
      content
    }
  }`

let mutationResult

export default function AddReview() {
    const [addReview] = useMutation(ADD_REVIEW_MUTATION)
    const [reviewContent, setReviewContent] = useState('')
    const [formState, setFormState] = useState('init')
    const subcategoryContext = useContext(SubcategoryContext);
    useEffect(() => {
        if (mutationResult) {
            mutationResult.then((result) => {
                console.log("res", result)
                if (result.error) setFormState('error')
                if (result.data) setFormState('data')
            })
        }
    }, [mutationResult])


    let handleSubmit = (e) => {
        e.preventDefault();
        setFormState('loading')
        mutationResult = addReview({
            variables: {
                content: reviewContent,
                subcategoryId: subcategoryContext.state.selectedSubcategory
            }
        })
    }

    let displayForm = () => {

        switch (formState) {
            case 'init':
                return (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={reviewContent}
                            onChange={e => setReviewContent(e.target.value)}
                        />
                        <button
                            disabled={subcategoryContext.state.selectedSubcategory==null}
                            type="submit"
                        >Submit</button>
                    </form>
                )
            case 'loading':
                return (<div>Loading</div>)
            case 'error':
                return (<div>error</div>)
            case 'data':
                return (<div>OK</div>)
            default:
                break;
        }

    }
    return (
        <React.Fragment>
            <div>Add Review to Selected Subcategory</div>
            {displayForm()}
            <button
                type="reset"
                onClick={() => {
                    setReviewContent('');
                    setFormState('init')
                }}>
                Reset Form
            </button>
        </React.Fragment>
    )
}