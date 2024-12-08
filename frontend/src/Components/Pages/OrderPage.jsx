import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const OrderPage = () => {
  const { userId } = useParams();  
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);


    axios.get(`https://localhost:8080/api/orders/${userId}`)
      .then((response) => {
        setOrders(response.data);  
      })
      .catch((error) => {
        setError('An error occurred while fetching the order data');
      })
      .finally(() => {
        setLoading(false);  
      });
  }, [userId]);

  return (
    <div className="order-page">
      <h1>My Order</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="orders-list">
          {orders.length === 0 ? (
            <p>You have no orders.</p>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="order-item">
                <p><strong>Order ID:</strong> {order.id}</p>
                <p><strong>User:</strong> {order.username}</p>
                <p><strong>Quantity:</strong> {order.quantity}</p>
                <p><strong>Price:</strong> ${order.price}</p>
                <p><strong>Status:</strong> {order.status}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
