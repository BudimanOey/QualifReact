import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Favourites from './pages/Favourites';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import AnimeListProvider from './lib/AnimeListProvider';
import Detail from './pages/Detail';

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql.anilist.co/',
    cache: new InMemoryCache(),
  });
  return (
    <ApolloProvider client={client}>
      <AnimeListProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/desc/:id' element={<Detail/>}/>
            <Route path='/favourites' element={<Favourites/>}/>
          </Routes>
        </BrowserRouter>
      </AnimeListProvider>
    </ApolloProvider>
  );
}

export default App;
