import React, { useEffect } from 'react';
import HttpClient from './services/HttpClient';
import BookList from './components/BookList';
import BookForm from './components/BookList';

const baseURL = process.env.REACT_APP_API_URL;
const urlBook = `${baseURL}/Book`;

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Base URL:', baseURL);
        console.log('Full URL for Book:', urlBook);
        const response = await HttpClient(baseURL).get('/Book');
        console.log('Fetched data:', response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to the BookBuddy webapp</h1>
      <BookList />
    </div>
  );
}

export default App;
