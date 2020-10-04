import React, { useState, useEffect } from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import { fetchData } from './api/index';

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('');
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setData(data);
      setCountry('');
    };
    getData();
  }, []);
  const handleChange = async (selectedCountry) => {
    let fetchedData = {};
    if (selectedCountry === 'global') {
      fetchedData = await fetchData();
      setData(fetchedData);
      setCountry('');
    } else {
      fetchedData = await fetchData(selectedCountry);
      setData(fetchedData);
      setCountry(selectedCountry);
    }
  };
  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker handleChange={handleChange} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
