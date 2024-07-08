import React, { useEffect } from 'react';
import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;
const urlBook = `${baseURL}/Book`;

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Base URL:', baseURL);
        console.log(urlBook);
        const response = await axios.get(urlBook);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to the BookBuddy webapp</h1>
    </div>
  );
}

export default App;
