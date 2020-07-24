import React, {useState, useContext} from 'react'
import {SubcategoryContext} from '../contexts/SubcategoryContext'

export default function AddReviewForm({loading, error, onSubmit}) {
  const [content, setContent] = useState('')
  const subCategoryContext = useContext(SubcategoryContext)
  function handleSubmit(e) {
    e.preventDefault()
    onSubmit({content, subcategoryId: subCategoryContext.state.selectedCategory})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="content">Content:</label>
      <input
        id="content"
        value={content}
        required
        onChange={e => setContent(e.currentTarget.value)}
      />
      <button disabled={loading} type="submit">
        Add review
      </button>
      {error && <p>Oh no! There was an error when adding this review.</p>}
    </form>
  )
}