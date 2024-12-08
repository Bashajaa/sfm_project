import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';  
import './CategoryPage.css';
import cartlogo from '../../Assets/cart_logo.png';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchComics = async () => {
      try {
        const url = `https://localhost:8080/api/comics${categoryName !== 'All-Comic' ? `?category=${categoryName}` : ''}`;
        const response = await axios.get(url); // Use axios to fetch data

        setComics(response.data);  // Set comics data
      } catch (error) {
        setError('Hiba történt a képregények betöltésekor');  // Handle error
      } finally {
        setLoading(false);
      }
    };

    fetchComics();

  }, [categoryName]);

  return (
    <div className="category-page">
      <h2>{categoryName === 'All-Comic' ? 'All Comics' : categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}</h2>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="comics-list">
          {comics.length === 0 ? (
            <p>No comics found.</p>
          ) : (
            comics.map((comic) => (
              <div key={comic.id} className="comic-item">
                <img src={comic.imageUrl} alt={comic.title} />
                <h3>{comic.title}</h3>
                <p>{comic.price}$</p>
                <div className="comic-actions">
                  <Link to={`/comic/${comic.id}`} className="details-button">View</Link>
                  <button className="cart-button">
                    <img src={cartlogo} alt="Add to Cart" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
