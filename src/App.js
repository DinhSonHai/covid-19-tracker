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
  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
}

export default App;
