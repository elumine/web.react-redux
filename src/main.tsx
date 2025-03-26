import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { Router } from './app/router.tsx';
import { store } from './app/store/index.ts';
import './index.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://graphqlzero.almansi.me/api',
    cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById('root')!);
root.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <Router />
        </Provider>
    </ApolloProvider>
);
