import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';  
import './ComicPage.css';
import cartlogo from '../../Assets/cart_logo.png';

export const ComicPage = () => {
  const { comicId } = useParams();
  const [comic, setComic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [rating, setRating] = useState(0);
  const [averageRating, setAverageRating] = useState(0);

  // Fetch comic and reviews
  useEffect(() => {
    const fetchComicDetails = async () => {
      try {
        const comicResponse = await axios.get(`https://localhost:8080/api/comics/${comicId}`);
        setComic(comicResponse.data);

        const reviewsResponse = await axios.get(`https://localhost:8080/api/comics/${comicId}/reviews`);
        setReviews(reviewsResponse.data);

        // Calculate average rating
        const avgRating =
          reviewsResponse.data.reduce((sum, review) => sum + review.rating, 0) / reviewsResponse.data.length || 0;
        setAverageRating(avgRating);
      } catch (error) {
        setError('Hiba történt az adatok betöltésekor');
      } finally {
        setLoading(false);
      }
    };

    fetchComicDetails();
  }, [comicId]);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const submitReview = async () => {
    if (newReview.trim() === '' || rating < 1 || rating > 5) {
      alert('Adjon meg érvényes értékelést és hozzászólást!');
      return;
    }

    try {
      const response = await axios.post(
        `https://localhost:8080/api/comics/${comicId}/reviews`,
        { text: newReview, rating },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (response.status === 200) {
        setReviews((prevReviews) => [...prevReviews, response.data]);
        setNewReview('');
        setRating(0);
      } else {
        alert('Hiba történt a hozzászólás elküldésekor');
      }
    } catch (error) {
      alert('Hiba történt a hozzászólás mentésekor');
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
            <p>
              <strong>Average Rating:</strong> {averageRating.toFixed(1)} / 5
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

      <div className="reviews-section">
        <h3>Reviews</h3>
        <ul>
          {reviews.map((review, index) => (
            <li key={index}>
              <p>
                <strong>Rating:</strong> {review.rating} / 5
              </p>
              <p>{review.text}</p>
            </li>
          ))}
        </ul>

        <div className="add-review">
          <h4>Add a Review</h4>
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your review here..."
          ></textarea>
          <div>
            <label>Rating:</label>
            <input
              type="number"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            />
          </div>
          <button onClick={submitReview}>Submit</button>
        </div>
      </div>
    </div>
  );
};
