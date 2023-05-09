import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  // specifies GraphQL server location
  uri: 'http://localhost:4000',
  // caches results to reduce network requests
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    {/* Apollo Provider */}
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
