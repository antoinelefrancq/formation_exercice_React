import axios from 'axios';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Counter from './Counter/Counter';
import Header from './Header/Header';
import Search from './Search/Search';
import List from './List/List';
import Loader from './Loader/Loader';
import Nav from './Nav/nav';
import Faq from './FAQ/FAQ';
import NotFound from './NotFound';
import MoreResults from './MoreResults/MoreResults';

function Github() {
  const [repos, setRepo] = useState(null);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [resultNumber, setResult] = useState(null);
  const [pageNumber,setPage] = useState(1);
  // const [repos, setRepo] = useState({items:[{}]});

  const loadData = () => {
    axios.get('https://api.github.com/search/repositories?q=REPOACHERCHER&sort=stars&order=desc&page=1&per_page=9')
      .then((res) => {
        setRepo(res.data.items);
        setResult(res.data.total_count);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  function submitValue() {
    setLoading(true);
    axios.get(`https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc&page=1&per_page=${9 * pageNumber}`)
      .then((res) => {
        setRepo(res.data.items);
        setResult(res.data.total_count);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div className="Github">
      <Header />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={(
            <div className="Searching">
              <Search
                search={search}
                setSearch={setSearch}
        // eslint-disable-next-line react/jsx-no-bind
                submitValue={submitValue}
              />
              {loading && <Loader />}
              {!loading && <Counter resultNumber={resultNumber} />}
              {!loading && <List repos={repos} />}
              {!loading && <MoreResults pageNumber={pageNumber} setPage={setPage} submitValue={submitValue} />}
            </div>
)}
        />
        <Route path="/faq" element={<Faq />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default Github;
