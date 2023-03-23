import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client'

// const apolloClient = new ApolloClient({
//   uri: "https://suited-fawn-90.hasura.app/v1/graphql",
//   headers:
//   {
    
//   },
//   cache: new InMemoryCache()
// })

const uri = "https://suited-fawn-90.hasura.app/v1/graphql"
const apiKey = "Y0ivgy2qclFLGuqENS360R2KMGkq51h13TJ7wnxHgg1h198NnFKYmrCASwCxLZSg"
const httpLink = new HttpLink({ uri: uri})

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      "x-hasura-admin-secret": apiKey
    }
  })
  return forward(operation)
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
)
