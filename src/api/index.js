import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);
    const modifiedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };
    console.log(modifiedData);
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    console.log(modifiedData);
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (err) {
    console.log(err);
  }
};
