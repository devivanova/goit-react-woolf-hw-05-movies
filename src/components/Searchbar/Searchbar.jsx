import React, { useState, useRef } from 'react';

import { Form, FormField, SearchButton, SearchInput } from './Searchbar.styled';
import { BiSearchAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'components/SharedLayout/SharedLayout.styled';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');
  const prevQueryRef = useRef('');

  const handleSearchQuery = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (query.trim() === '') {
      return toast.error('Введіть назву фільму');
    }
    if (!query) {
      return toast.error(
        'Sorry, there are no films matching your search query. Please try again.'
      );
    }
    if (prevQueryRef.current !== query) {
      onSubmit(query);
    }
    prevQueryRef.current = query;
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <BiSearchAlt size="24" />
        </SearchButton>
        <FormField>
          <SearchInput
            autoComplete="off"
            name="query"
            type="text"
            autoFocus
            placeholder="Search movie"
            onChange={handleSearchQuery}
            value={query}
          />
        </FormField>
      </Form>
    </Container>
  );
};

export default Searchbar;