import * as axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroller';

import css from './Home.module.scss';

import Header from '../Header/Header';
import { getGamesList } from '../../services/Games.service';

const TestCard = ({ title }) => {
  return <p>{title}</p>;
};

const Home = () => {
  const step = 60;
  const [allItems, setAllItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const [err, data] = await getGamesList();

      if (err) return;

      setAllItems(data);
      setVisibleItems(data.slice(0, step));
    };

    fetchItems();
  }, []);

  const getMoreItems = () => {
    const visibleItemsCount = visibleItems.length;
    const items = [...visibleItems, ...allItems.slice(visibleItemsCount, visibleItemsCount + step)];

    setVisibleItems(items)
  };

  const renderItems = () => {
    return visibleItems.map((item) => <TestCard key={item.id} title={item.title} />);
  };

  return (
    <div className={css.container}>
      <Header />

      <InfiniteScroll
        pageStart={0}
        loadMore={getMoreItems}
        hasMore={visibleItems.length < allItems.length}
        loader={<p>Loading...</p>}
      >
        {renderItems()}
      </InfiniteScroll>
    </div>
  );
}
 
export default Home;
