import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddComic.css";

const AddComic = () => {
  const navigate = useNavigate();
  const [comic, setComic] = useState({
    title: "",
    imageUrl: "",
    price: "",
    description: "",
    category: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComic((prevComic) => ({
      ...prevComic,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://localhost:8080/api/comics", comic)
      .then(() => navigate("/admin"))
      .catch((error) => console.error("Hiba történt a képregény hozzáadásakor: ", error));
  };

  return (
    <div className="comic-form">
      <h1>Új képregény hozzáadása</h1>
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
        <button type="submit">Hozzáadás</button>
      </form>
    </div>
  );
};

export default AddComic;
