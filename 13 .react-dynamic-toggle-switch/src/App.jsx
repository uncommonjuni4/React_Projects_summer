// import React, { useState } from 'react';

import { ToggleSwitch } from "./component/ToggleSwitch";

// // ==========================================
// // 1. CHILD COMPONENT A: ProductList (The Shop)
// // ==========================================
// function ProductList({ onAddItem }) {
//   // Static array for products available in our shop
//   const products = [
//     { id: 1, name: 'Laptop', price: 500 },
//     { id: 2, name: 'Mobile', price: 300 },
//     { id: 3, name: 'Headphones', price: 50 },
//   ];

//   return (
//     <div style={{ background: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
//       <h3>🛒 Available Products</h3>
//       <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
//         {products.map((product) => (
//           <button
//             key={product.id}
//             onClick={() => onAddItem(product)}
//             style={{
//               padding: '10px 15px',
//               backgroundColor: '#007bff',
//               color: 'white',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer',
//               fontWeight: 'bold'
//             }}
//           >
//             Add {product.name} (${product.price})
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

// // ==========================================
// // 2. CHILD COMPONENT B: CartSummary (The Bill)
// // ==========================================
// function CartSummary({ cartItems, onClearCart }) {
//   return (
//     <div style={{ background: '#ffffff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
//       <h3>📝 Your Shopping Cart</h3>
      
//       {cartItems.length === 0 ? (
//         <p style={{ color: '#777', marginTop: '10px' }}>Your cart is empty. Start shopping!🛍️</p>
//       ) : (
//         <>
//           <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
//             {cartItems.map((item, index) => (
//               <li key={index} style={{ margin: '8px 0', fontSize: '16px' }}>
//                 {item.name} - <b>${item.price}</b>
//               </li>
//             ))}
//           </ul>
          
//           <button
//             onClick={onClearCart}
//             style={{
//               marginTop: '15px',
//               padding: '8px 16px',
//               backgroundColor: '#dc3545',
//               color: 'white',
//               border: 'none',
//               borderRadius: '5px',
//               cursor: 'pointer'
//             }}
//           >
//             Clear Cart
//           </button>
//         </>
//       )}
//     </div>
//   );
// }

// // ==========================================
// // 3. PARENT COMPONENT: App (The Central Hub)
// // ==========================================
// export default function App() {
//   // Main state array to hold all added items
//   const [cartItems, setCartItems] = useState([]);

//   // Calculate total price using array reduce method
//   const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

//   // 1. Function to add item (With Lifting State Up & Budget Challenge)
//   const handleAddItem = (product) => {
//     // Check if adding this product exceeds the $1000 limit
//     if (totalPrice + product.price > 1000) {
//       alert('⚠️ Budget Exceeded! You cannot add items beyond $1000.');
//       return;
//     }

//     // Creating unique item instance using timestamp to avoid key matching issues
//     const newItem = { ...product, cartId: Date.now() };
//     setCartItems([...cartItems, newItem]);
//   };

//   // 2. Function to reset/clear the cart array
//   const handleClearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <div style={{
//       fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
//       backgroundColor: '#f8f9fa',
//       minHeight: '100vh',
//       padding: '40px',
//       color: '#333'
//     }}>
//       <div style={{ maxWidth: '600px', margin: '0 auto' }}>
//         <h2 style={{ textAlign: 'center', marginBottom: '5px' }}>Juni's Checkout Terminal</h2>
//         <p style={{ textAlign: 'center', color: '#666', marginBottom: '30px' }}>Advanced State Management Practice</p>

//         {/* Counters & Analytics Area */}
//         <div style={{ display: 'flex', justifyContent: 'space-between', background: '#343a40', color: 'white', padding: '15px 20px', borderRadius: '8px', marginBottom: '25px' }}>
//           <div>Total Items: <b style={{ fontSize: '18px', color: '#ffc107' }}>{cartItems.length}</b></div>
//           <div>Total Bill: <b style={{ fontSize: '18px', color: '#28a745' }}>${totalPrice}</b></div>
//         </div>

//         {/* Budget Warning Alert Area */}
//         {totalPrice >= 800 && (
//           <div style={{ padding: '12px', backgroundColor: '#fff3cd', color: '#856404', borderRadius: '5px', marginBottom: '20px', border: '1px solid #ffeeba', fontWeight: 'bold', textAlign: 'center' }}>
//             ⚠️ Notice: You are approaching your $1000 limit!
//           </div>
//         )}

//         {/* Injecting Child Components and Passing Handlers */}
//         <ProductList onAddItem={handleAddItem} />
//         <CartSummary cartItems={cartItems} onClearCart={handleClearCart} />
//       </div>
//     </div>
//   );
// }


export default function App() {
  return (
    <>
        
     <ToggleSwitch / >
    </>
  )
}
