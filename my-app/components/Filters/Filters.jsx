import React, { useState } from 'react';
import {InputGroup, FormControl, Button, Container} from 'react-bootstrap';

import css from './Filters.module.scss';

import Droplist from '../Droplist/Droplist';

const platformOptions = [
  {
      label: "PC (Windows)",
      value: "pc"
  },
  {
      label: "Web Browser",
      value: "browser"
  },
  {
      label: "All platforms",
      value: "all"
  }
]

const categoryOptions = [
  {
      label: "MMORPG",
      value: "mmorpg"
  },
  {
      label: "Shooter",
      value: "shooter"
  },
  {
      label: "PvP",
      value: "pvp"
  },
  {
      label: "MMOFPS",
      value: "mmofps"
  },
  {
      label: "Anime",
      value: "anime"
  }
]

const sortOptions = [
  {
      label: "Alphabet",
      value: "alphabetical"
  },
  {
      label: "Release date",
      value: "release-date"
  },
  {
      label: "Popularity",
      value: "popularity"
  },
  {
      label: "Relevance",
      value: "relevance"
  }
]

const Filters = ({ onChange }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    onChange({ type: 'search', value: searchValue.trim() })
  };

  return (
    <Container className={css.container}>
        <div className={css.dropdownsContainer}>
          <Droplist options={categoryOptions} category="Category" onChange={(option) => onChange({ type: 'category', value: option.value })} />
          <Droplist options={platformOptions} category="Platform" onChange={(option) => onChange({ type: 'platform', value: option.value })} />
          <Droplist options={sortOptions} category="Sort By" onChange={(option) => onChange({ type: 'sortBy', value: option.value })} />
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
