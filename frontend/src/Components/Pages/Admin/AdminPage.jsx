import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminPage.css";

const AdminPage = () => {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [comics, setComics] = useState([]);
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      alert("Nincs jogosultságod az admin oldalhoz!");
      navigate("/login");
    } else {
      setIsAuthorized(true);
      fetchAdminData();
    }
  }, [navigate]);

  const fetchAdminData = async () => {
    try {
      const comicsResponse = await axios.get("https://localhost:8080/api/comics");
      const usersResponse = await axios.get("https://localhost:8080/api/users");
      const ordersResponse = await axios.get("https://localhost:8080/api/orders");

      setComics(comicsResponse.data);
      setUsers(usersResponse.data);
      setOrders(ordersResponse.data);
    } catch (error) {
      console.error("Hiba történt az adatok betöltésekor: ", error);
    }
  };

  const deleteComic = async (id) => {
    try {
      await axios.delete(`https://localhost:8080/api/comics/${id}`);
      setComics(comics.filter((comic) => comic.id !== id));
    } catch (error) {
      console.error("Hiba történt a képregény törlésekor: ", error);
    }
  };

  const deleteUser = async () => {
    try {
      await axios.delete(`https://localhost:8080/api/users/${selectedUser}`);
      setUsers(users.filter((user) => user.username !== selectedUser));
      setSelectedUser("");
    } catch (error) {
      console.error("Hiba történt a felhasználó törlésekor: ", error);
    }
  };

  const changeOrderStatus = async (orderId, status) => {
    try {
      await axios.put(`https://localhost:8080/api/orders/${orderId}`, { status });
      setOrders(orders.map((order) => 
        order.id === orderId ? { ...order, status } : order
      ));
    } catch (error) {
      console.error("Hiba történt a rendelés státuszának frissítésekor: ", error);
    }
  };

  if (!isAuthorized) {
    return null;
  }

  return (
    <div className="admin-page">
      <h1>Admin Felület</h1>
      
      {/* Képregények listázása */}
      <section>
        <h2>Képregények</h2>
        <table>
          <thead>
            <tr>
              <th>Cím</th>
              <th>Ár</th>
              <th>Kategória</th>
              <th>Leírás</th>
            </tr>
          </thead>
          <tbody>
            {comics.map((comic) => (
              <tr key={comic.id}>
                <td>{comic.title}</td>
                <td>{comic.price} Ft</td>
                <td>{comic.category}</td>
                <td>{comic.description}</td>
                <td>
                  <button onClick={() => navigate(`/edit-comic/${comic.id}`)}>Szerkesztés</button>
                  <button onClick={() => deleteComic(comic.id)}>Törlés</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => navigate("/add-comic")} className="add-comic-button">
          Add Comic
        </button>
      </section>

   
    </div>
  );
};

export default AdminPage;
