import React, {Component} from 'react';
import {GraphQLClient, ClientContext} from 'graphql-hooks'
import CategoryContextProvider from './contexts/CategoryContext';
import SubcategoryContextProvider from './contexts/SubcategoryContext';
import CategoryList from './components/CategoryList';
import AddReview from './components/AddReview';


const client = new GraphQLClient({
  url: 'http://localhost:5000/graphql'
})

class App extends Component {
  render() {
    return (
      <div id="main">
        <ClientContext.Provider value={client}>
          <CategoryContextProvider>
            <SubcategoryContextProvider>
              <h1>My Reviews App</h1>
              <CategoryList />
              <AddReview />
            </SubcategoryContextProvider>
          </CategoryContextProvider>
        </ClientContext.Provider>
      </div>
    );
  }
}

export default App;
