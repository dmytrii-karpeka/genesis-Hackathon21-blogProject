import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import {Container} from 'react-bootstrap'

import css from './Home.module.scss';

import Filters from '../Filters/Filters';
import CardItem from '../CardItem/CardItem';
import Header from '../Header/Header';
import { getGamesList } from '../../services/Games.service';

const Home = () => {
  const step = 60;
  const [allItems, setAllItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [slicedItems, setSlicedItems] = useState([]);

  const [filters, setFilters] = useState({
    platform: '',
    category: '',
    sortBy: '',
    search: '',
  });

  const { platform, category, sortBy, search} = filters;

  const filterParams = {
    ...(platform.length > 0 && { platform }),
    ...(category.length > 0 && { category }),
    ...(sortBy.length > 0 && { 'sort-by': sortBy })
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      const [err, data] = await getGamesList();

      if (err) return;

      setAllItems(data);
    };

    fetchInitialData();
  }, []);

  useEffect(() => {
    const filtersItems = () => {
      const filteredItemsBySearch = allItems.filter((item) => item.title.toLowerCase().includes(search));

      setFilteredItems(filteredItemsBySearch);
      setSlicedItems(filteredItemsBySearch.slice(0, step));
    };

    if (search.length > 0) {
      filtersItems();
    } else {
      setSlicedItems(allItems.slice(0, step));
      setFilteredItems(allItems);
    }
  }, [search]);

  useEffect(() => {
    const fetchItems = async () => {
      const [err, data] = await getGamesList(filterParams);

      if (err) return;


      setFilteredItems(data);
      setSlicedItems(data.slice(0, step));
    };

    fetchItems();
  }, [platform, category, sortBy]);

  const getMoreItems = () => {
    const slicedItemsCount = slicedItems.length;
    const items = [...slicedItems, ...filteredItems.slice(slicedItemsCount, slicedItemsCount + step)];

    setSlicedItems(items);
  };

  const handleFiltersChange = (filter) => {
    setFilters({
      ...filters,
      [filter.type]: filter.value,
    });
  };

  const renderItems = () => {
    return slicedItems.map((item) => <CardItem key={item.id} item={item} />);
  };

  return (
    <div className={css.container}>
      <Header />
      <Filters onChange={handleFiltersChange} />

      <Container className={css.cardsContainer}>
        <InfiniteScroll
          pageStart={0}
          loadMore={getMoreItems}
          hasMore={slicedItems.length < filteredItems.length}
        >
          {renderItems()}
        </InfiniteScroll>
      </Container>
    </div>
  );
}
 
export default Home;
