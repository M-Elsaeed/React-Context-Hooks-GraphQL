import React, {Component} from 'react';
import {GraphQLClient, ClientContext} from 'graphql-hooks'
import CategoryContextProvider from './contexts/CategoryContext';
import SubcategoryContextProvider from './contexts/SubcategoryContext';
import CategoryList from './components/CategoryList';
import AddReview from './components/AddReview';


const client = new GraphQLClient({
  url: 'https://melsaeed-reviews.herokuapp.com/graphql'
})

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="header">My Reviews App</h1>
        <div id="main" className="main-div">
          <ClientContext.Provider value={client}>
            <CategoryContextProvider>
              <SubcategoryContextProvider>
                <CategoryList />
                <AddReview />
              </SubcategoryContextProvider>
            </CategoryContextProvider>
          </ClientContext.Provider>
        </div>
      </React.Fragment>

    );
  }
}

export default App;
