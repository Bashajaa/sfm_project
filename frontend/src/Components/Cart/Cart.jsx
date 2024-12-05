import React, { useState, useEffect } from "react";

export const Cart = () =>
{
    const [products, setProducts] = useState([]);

    useEffect(() =>
        {
            const productsList =
                [
                    { id: 1, name: "Termék 1", price: 1000 },
                    { id: 2, name: "Termék 2", price: 2000 },
                    { id: 3, name: "Termék 3", price: 3000 },
                ];
            setProducts(productsList);
        },
        []);


    return (
        <div className="cart-container">
            <h1 className="cart-title">Kosár</h1>
            <table className="cart-table">
                <thead>
                <tr>
                    <th className="cart-header" width={100}>Név</th>
                    <th className="cart-header" width={20}>Ár</th>
                    <th className="cart-header">Mennyiség</th>
                    <th className="cart-header">Összeg</th>
                    <th className="cart-header" width={10}>Törlés</th>
                </tr>
                </thead>
                <tbody>
                {products.map(product => {
                    return (
                        <tr key={product.id}>
                            <td className="cart-item">{product.name}</td>
                            <td className="cart-item">{product.price} Ft</td>
                            <td className="cart-item">
                                <button>
                                    -
                                </button>
                                <input
                                    type="number"
                                    className="input"
                                    readOnly
                                />
                                <button>
                                    +
                                </button>

                            </td>
                            <td className="cart-item">
                                Ft
                            </td>
                            <td className="cart-item">
                                <button>
                                    Törlés
                                </button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            <h2 className="total-amount">Összesen: Ft</h2>
        </div>
    );

};