import React, { useEffect } from 'react';
import axios from 'axios';


export function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<any>('http://localhost:7199/api/Book');
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Welcome to the BookBuddy webapp</h1>
      <p>Communicating with ASP.NET Core</p>
    </>
  );
}
