import axios from 'axios';
import { useEffect, useState } from 'react';

import Counter from './Counter/Counter';
import Header from './Header/Header';
import Search from './Search/Search';
import List from './List/List';

import data from '../../data/repos';

function Github() {
  const [repos, setRepo] = useState(data.items);
  const [search, setSearch] = useState('');
  // const [repos, setRepo] = useState([]);

  function submitValue(value) {
    axios.get(`https://api.github.com/search/repositories?q=${value}`)
      .then((res) => {
        setRepo(res.items);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="Github">
      <Header />
      <Search search={search} setSearch={setSearch} />
      <Counter />
      <List repos={repos} />
    </div>
  );
}

export default Github;
