import React from 'react';
import PropTypes from 'prop-types';
import { FilterSection, FilterName, FilterInput } from './Filter.styled';

export default function Filter({ value, onChangeFilter }) {
  return (
    <FilterSection>
      <FilterName>Find contacts by name</FilterName>
      <FilterInput
        type="text"
        value={value}
        onChange={evt => onChangeFilter(evt.target.value)}
      />
    </FilterSection>
  );
}

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};
