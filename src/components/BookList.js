// src/components/BookForm.js

import React, { useState } from 'react';
import HttpClient from '../services/HttpClient';

const api = HttpClient(process.env.REACT_APP_API_URL || '');

const BookForm = ({ book, onSave }) => {
  const [formData, setFormData] = useState(
    book || {
      isbnNo: '',
      title: '',
      author: '',
      noOfPages: '',
      bookType: '',
      imageURL: '',
      status: '',
      genreId: '',
      locationId: '',
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.bookId) {
        await api.put(`/Book/${formData.bookId}`, formData);
      } else {
        await api.post('/Book', formData);
      }
      onSave();
    } catch (error) {
      console.error('Failed to save book', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>ISBN:</label>
        <input type="text" name="isbnNo" value={formData.isbnNo} onChange={handleChange} required />
      </div>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </div>
      <div>
        <label>Author:</label>
        <input type="text" name="author" value={formData.author} onChange={handleChange} required />
      </div>
      <div>
        <label>No of Pages:</label>
        <input type="number" name="noOfPages" value={formData.noOfPages} onChange={handleChange} required />
      </div>
      <div>
        <label>Book Type:</label>
        <input type="text" name="bookType" value={formData.bookType} onChange={handleChange} required />
      </div>
      <div>
        <label>Image URL:</label>
        <input type="text" name="imageURL" value={formData.imageURL} onChange={handleChange} required />
      </div>
      <div>
        <label>Status:</label>
        <input type="text" name="status" value={formData.status} onChange={handleChange} required />
      </div>
      <div>
        <label>Genre ID:</label>
        <input type="number" name="genreId" value={formData.genreId} onChange={handleChange} required />
      </div>
      <div>
        <label>Location ID:</label>
        <input type="number" name="locationId" value={formData.locationId} onChange={handleChange} required />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default BookForm;
