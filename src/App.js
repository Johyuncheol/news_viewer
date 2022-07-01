import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { useCallback, useState } from 'react';
import NewsPage from './page/NewsPage';
import { Route } from 'react-router-dom';

const App = () => {
  const [category, setCategory]= useState('all');
  const onSelect= useCallback(category => setCategory(category),[]);

  return(
    <>
    {/* <Categories category={category} onSelect={onSelect}/>
    <NewsList category={category}/> */}

    <Route path ="/:category?" component={NewsPage} />
    </>
    
  );
};
export default App;
