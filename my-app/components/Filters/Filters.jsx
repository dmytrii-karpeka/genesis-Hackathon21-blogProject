import React, { useState } from 'react';
import {InputGroup, FormControl, Button, Container} from 'react-bootstrap';

import css from './Filters.module.scss';

import Droplist from '../Droplist/Droplist';

const Filters = ({ onChange }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    onChange({ type: 'search', value: searchValue.trim() })
  };

  return (
    <Container className={css.container}>
        <div className={css.dropdownsContainer}>
          <Droplist onChange={() => onChange({ type: 'category', value: 'MMORPG' })} />
          <Droplist onChange={() => onChange({ type: 'platform', value: 'pc' })} />
          <Droplist onChange={() => onChange({ type: 'sortBy', value: 'alphabetical' })} />
        </div>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Search by game title"
            aria-label="Search by game title"
            aria-describedby="basic-addon2"
            onChange={(e) => setSearchValue(e.currentTarget.value)}
          />
          <Button variant="outline-secondary" id="button-addon2" variant="primary" onClick={handleSearch}>
            Search
          </Button>
        </InputGroup>
    </Container>
  );
}
 
export default Filters;
