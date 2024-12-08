import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./AddComic.css";

const EditComic = () => {
  const navigate = useNavigate();
  const { comicId } = useParams();
  const [comic, setComic] = useState({
    title: "",
    imageUrl: "",
    price: "",
    description: "",
    category: ""
  });

  useEffect(() => {
    axios.get(`https://localhost:8080/api/comics/${comicId}`)
      .then(response => {
        setComic(response.data);
      })
      .catch((error) => console.error("Hiba történt a képregény adatainak betöltésekor: ", error));
  }, [comicId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComic((prevComic) => ({
      ...prevComic,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://localhost:8080/api/comics/${comicId}`, comic)
      .then(() => navigate("/admin"))
      .catch((error) => console.error("Hiba történt a képregény frissítésekor: ", error));
  };

  return (
    <div className="comic-form">
      <h1>Képregény szerkesztése</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={comic.title}
          onChange={handleChange}
          placeholder="Cím"
          required
        />
        <input
          type="text"
          name="imageUrl"
          value={comic.imageUrl}
          onChange={handleChange}
          placeholder="Kép URL"
          required
        />
        <input
          type="number"
          name="price"
          value={comic.price}
          onChange={handleChange}
          placeholder="Ár"
          required
        />
        <textarea
          name="description"
          value={comic.description}
          onChange={handleChange}
          placeholder="Leírás"
          required
        ></textarea>
        <input
          type="text"
          name="category"
          value={comic.category}
          onChange={handleChange}
          placeholder="Kategória"
          required
        />
        <button type="submit">Frissítés</button>
      </form>
    </div>
  );
};

export default EditComic;
