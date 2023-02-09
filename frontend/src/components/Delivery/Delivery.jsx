import React, { useState } from 'react';
import './Delivery.css';

const OrderForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit({ name, address, time });
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={event => setName(event.target.value)} />
            <input type="text" placeholder="Address" value={address} onChange={event => setAddress(event.target.value)} />
            <input type="text" placeholder="Delivery Time" value={time} onChange={event => setTime(event.target.value)} />
            <button type="submit">Submit</button>
        </form>
        </div>
        
    );
};

const Order = ({ order }) => (
    <div>
        <p>Name: {order.name}</p>
        <p>Address: {order.address}</p>
        <p>Delivery Time: {order.time}</p>
    </div>
);

const OrderList = ({ orders }) => (
    <div>
        {orders.map(order => (
            <Order key={order.id} order={order} />
        ))}
    </div>
);

const App = () => {
    const [orders, setOrders] = useState([]);

    const addOrder = order => {
        setOrders([...orders, { ...order, id: orders.length + 1 }]);
    };

    return (
        <div>
            <OrderForm onSubmit={addOrder} />
            <OrderList orders={orders} />
        </div>
    );
};

export default App;
