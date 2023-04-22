import React, { useEffect, useState } from 'react';

import './home.css';
import LoadCSV from '../../utils/loadCSV';

function Home() {
  const [citiesList, setCitiesList] = useState([]);

  useEffect(() => {
    if (citiesList.length === 0) {
      LoadCSV().then((cities) => {
        setCitiesList(cities);
      });
    }
  }, [citiesList.length]);

  return (
    <div>
    </div>
  )
}

export default Home;
