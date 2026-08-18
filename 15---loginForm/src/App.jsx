import { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [password, setpassword] = useState('');

  function handlechange(e) {
    const { name, value } = e.target;

    if (name === "firstName") {
      setFirstName(value);
    } else if (name === "lastName") {
      setlastName(value);
    } else if (name === "password") {
      setpassword(value);
    }    
  }

  function handlesubmit(e) {
    e.preventDefault(); // Fixed: changed from e.defaultPrevented()

    const formData = {
      lastName,
      firstName,
      password,
    };

    console.log(formData);

    setFirstName('');
    setlastName('');
    setpassword('');
  }

  return (
    <>
      <h3>{`My first Name  is  ${firstName}  and My Password is ${lastName} and  Password is   ${password} `}</h3>
      <div className="main">
        {/* Added onSubmit here */}
        <form className="form" onSubmit={handlesubmit}>
          <div className="form-content">
            <h1 className="form-heading">Sign Form</h1>
            <p>Plz Enter Data Here to Fill Form</p>
           
          </div>
          
          <div className="firstName">
            <label htmlFor="firstname">First Name</label>
            <input 
              type="text" 
              id="inputstyle" 
              name="firstName" 
              placeholder="Plz Enter Your First Name" 
              value={firstName}
              onChange={handlechange}
            />
          </div>

          <div className="firstName">
            <label htmlFor="lastname">Last Name</label>
            <input 
              type="text" 
              id="inputstyle" 
              name="lastName" 
              value={lastName}
              onChange={handlechange}
              placeholder="Plz Enter Your Last Name" 
            />
          </div>
          
          <div className="firstName">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="inputstyle" 
              value={password}
              name="password" 
              placeholder="Plz Enter Your Password" 
              onChange={handlechange}
            />
          </div>
          
          {/* Removed onClick since the form handles submission on submit buttons */}
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;