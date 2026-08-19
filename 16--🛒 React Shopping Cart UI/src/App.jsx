import { useState } from 'react';
import './App.css';

function App() {
  // 1. Products ki List Array (Har product ki ID UNIQUE honi chahiye)
  const products = [
    { id: 1, title: "Wireless Headphones", price: 150 },
    { id: 2, title: "Computer Accessories", price: 300 },
    { id: 3, title: "Mobible", price: 400 },
  ];

  // 2. Sirf EK Cart State pooray store ke liye
  const [cart, setCart] = useState([]);

  // ✅ Add to Cart Function
  const addToCart = (productToAdd) => {
    const exists = cart.find((item) => item.id === productToAdd.id);

    if (exists) {
      // Agar product pehle se cart mein hai toh sirf uski quantity +1 kar do
      setCart(
        cart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Agar pehli baar add ho raha hai toh quantity 1 ke sath add karo
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    }
  };

  // ✅ Increase Quantity
  const increase = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // ✅ Decrease Quantity
  const decrease = (id) => {
    const targetItem = cart.find((item) => item.id === id);
    if (targetItem.quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      // Quantity 0 hone par remove kar do
      setCart(cart.filter((item) => item.id !== id));
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '30px auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '8px' }}>Store Front</h2>
      
      {/* Products Display Section */}
      <div style={{ display: 'flex', gap: '15px' }}>  
        {products.map((product) => (
          <div key={product.id} style={{ 
            border: '1px solid #e0e0e0', 
            padding: '16px', 
            borderRadius: '8px', 
            width: '200px', 
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            backgroundColor: '#fff' 
          }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '18px' }}>{product.title}</h3>
            <p style={{ margin: '0 0 12px 0', color: '#555', fontWeight: 'bold' }}>Price: ${product.price}</p>
            
            <button onClick={() => addToCart(product)} style={{
              padding: '8px 14px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: '100%'
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>  

      <hr style={{ margin: '30px 0', border: '0', borderTop: '1px solid #eee' }} />

      <h2>Your Cart</h2>
      
      {/* Cart Items Container */}
      <div style={{ backgroundColor: '#f9f9f9', padding: '16px', borderRadius: '8px' }}>
        {cart.length === 0 ? (
          <p style={{ color: '#888', fontStyle: 'italic', margin: 0 }}>Cart is empty</p>
        ) : (
          cart.map((cartItem) => (
            <div key={cartItem.id} style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '12px', 
              backgroundColor: '#fff', 
              borderRadius: '6px', 
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              marginBottom: '10px'
            }}>
              <div>
                <h4 style={{ margin: '0 0 4px 0' }}>{cartItem.title}</h4>
                <span style={{ fontSize: '14px', color: '#666' }}>Price: ${cartItem.price}</span>
              </div>

              {/* Quantity Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button 
                  onClick={() => decrease(cartItem.id)} 
                  style={{ padding: '4px 10px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #ccc' }}
                >
                  -
                </button>
                <span style={{ fontWeight: 'bold', minWidth: '20px', textAlign: 'center' }}>
                  {cartItem.quantity}
                </span>
                <button 
                  onClick={() => increase(cartItem.id)} 
                  style={{ padding: '4px 10px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #ccc' }}
                >
                  +
                </button>
              </div>
              
              <p style={{ margin: 0, fontWeight: 'bold' }}>
                Subtotal: ${cartItem.price * cartItem.quantity}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;