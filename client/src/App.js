import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import BookList from "./components/BookList";
import NewBook from './components/NewBook';

// Apollo setup https://www.apollographql.com/docs/react/get-started/

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>Reading List</h1>
        <BookList />
        <NewBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
