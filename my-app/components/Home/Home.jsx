import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {Container} from 'react-bootstrap'

import css from './Home.module.scss';

import CardItem from '../CardItem/CardItem';
import Header from '../Header/Header';
import { getGamesList } from '../../services/Games.service';

const Home = () => {
  const step = 60;
  const [allItems, setAllItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState([]);
  const [platform, setPlatform] = useState('');
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('');

  const filterParams = {
    ...(platform.length > 0 && { platform }),
    ...(category.length > 0 && { category }),
    ...(sortBy.length > 0 && { 'sort-by': sortBy })
  };

  useEffect(() => {
    const fetchItems = async () => {
      const [err, data] = await getGamesList(filterParams);

      if (err) return;

      setAllItems(data);
      setVisibleItems(data.slice(0, step));
    };

    fetchItems();
  }, [platform, category, sortBy]);

  const getMoreItems = () => {
    const visibleItemsCount = visibleItems.length;
    const items = [...visibleItems, ...allItems.slice(visibleItemsCount, visibleItemsCount + step)];

    setVisibleItems(items)
  };

  const renderItems = () => {
    return visibleItems.map((item) => <CardItem key={item.id} item={item} />);
  };

  return (
    <div className={css.container}>
      <Header />

      <Container className={css.cardsContainer}>
        <InfiniteScroll
          pageStart={0}
          loadMore={getMoreItems}
          hasMore={visibleItems.length < allItems.length}
          loader={<p>Loading...</p>}
        >
          {renderItems()}
        </InfiniteScroll>
      </Container>
    </div>
  );
}
 
export default Home;
