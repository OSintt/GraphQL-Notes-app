import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({
	uri: 'http://localhost:3001'
});

ReactDOM.render(
  	<React.StrictMode>
  		<ApolloProvider client={client}>
    		<App />
  		</ApolloProvider>
  	</React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
