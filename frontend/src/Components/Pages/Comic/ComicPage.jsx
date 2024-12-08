import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ComicPage.css';
import cartlogo from '../../Assets/cart_logo.png';

export const ComicPage = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchComic = async () => {
      try {
        const response = await fetch(`https://localhost:8080/api/comics/${comicId}`);

        if (!response.ok) {
          throw new Error('Hiba történt a képregény adatainak betöltésekor');
        }

        const data = await response.json();
        setComic(data);
      } catch (error) {
        setError('Hiba történt a képregény adatainak betöltésekor');
      } finally {
        setLoading(false);
      }
    };

    fetchComic();
  }, [comicId]);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="comic-detail-page">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : comic ? (
        <div className="comic-detail">
          <div className="comic-image">
            <img src={comic.imageUrl} alt={comic.title} />
          </div>
          <div className="comic-info">
            <h2>{comic.title}</h2>
            <p>
              <strong>Price:</strong> ${comic.price}
            </p>
            <p>
              <strong>Description:</strong> {comic.description}
            </p>

            <div className="quantity-control">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>

            <button className="cart-button">
              <img src={cartlogo} alt="Add to Cart" />
            </button>
          </div>
        </div>
      ) : (
        <p>Comic not found!</p>
      )}
    </div>
  );
};
