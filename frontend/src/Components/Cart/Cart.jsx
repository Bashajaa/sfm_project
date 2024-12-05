import React, { useState, useEffect } from "react";

export const Cart = () =>
{
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [total, setTotal] = useState(0);

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

    const handleAddToCart = product =>
    {
        const existingItem = cartItems.find(item => item.product.id === product.id);

        if (existingItem)
        {
            setCartItems(cartItems.map(item =>
                item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        }
        else
        {
            setCartItems([...cartItems, { product, quantity: 1 }]);
        }
    };

    const handleRemoveFromCart = product =>
    {
        const existingItem = cartItems.find(item => item.product.id === product.id);

        if (!existingItem)
        {
            return;
        }

        if (existingItem.quantity <= 1)
        {
            setCartItems(cartItems.filter(item => item.product.id !== product.id));
        }
        else
        {
            setCartItems(cartItems.map(item =>
                item.product.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
            ));
        }
    };

    useEffect(() => {
        const calculateTotal = () => {
            const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
            setTotal(total);
        };
        calculateTotal();
    }, [cartItems]);

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
                    const cartItem = cartItems.find(item => item.product.id === product.id);
                    return (
                        <tr key={product.id}>
                            <td className="cart-item">{product.name}</td>
                            <td className="cart-item">{product.price} Ft</td>
                            <td className="cart-item">
                                <button
                                    className="remove-button"
                                    onClick={() => handleRemoveFromCart(product)}
                                >
                                    -
                                </button>
                                <input
                                    type="number"
                                    className="input"
                                    value={cartItem ? cartItem.quantity : 0}
                                    readOnly
                                />
                                <button
                                    className="add-button"
                                    onClick={() => handleAddToCart(product)}
                                >
                                    +
                                </button>

                            </td>
                            <td className="cart-item">
                                {cartItem ? cartItem.quantity * product.price : 0} Ft
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
            <h2 className="total-amount">Összesen: {total} Ft</h2>
        </div>
    );

};