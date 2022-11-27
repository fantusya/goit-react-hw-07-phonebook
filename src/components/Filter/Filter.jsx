import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

import {
  FilterLabelContainer,
  FilterLabel,
  FilterInput,
} from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => dispatch(setFilter(e.currentTarget.value));

  return (
    <FilterLabelContainer>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput type="text" onChange={handleFilter} />
    </FilterLabelContainer>
  );
};

export default Filter;
