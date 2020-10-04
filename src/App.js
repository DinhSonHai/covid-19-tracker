import React, { useState, useEffect } from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import styles from './App.module.css';
import { fetchData } from './api/index';

function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();
      setData(data);
    };
    getData();
  }, []);
  const handleChange = async (country) => {
    let fetchedData = {};
    if (country === 'global') {
      fetchedData = await fetchData();
    } else {
      fetchedData = await fetchData(country);
    }
    setData(fetchedData);
  };
  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker handleChange={handleChange} />
      <Chart />
    </div>
  );
}

export default App;
