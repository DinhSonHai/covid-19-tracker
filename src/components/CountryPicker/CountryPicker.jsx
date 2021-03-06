import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api/index';

const CountryPicker = ({ handleChange }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getCountries = async () => {
      setCountries(await fetchCountries());
    };

    getCountries();
  }, [setCountries]);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=''
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value='global'>Global</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
