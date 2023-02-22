import './App.css';
import { useState } from "react";
import Axios from 'axios';

function App() {
  const [phone, setPhone] = useState()
  const [amount, setAmount] = useState()

  const payHandler = (event) =>{
    event.preventDefault();
    Axios.post("http://localhost:5000/token", {
      amount,
      phone,
    }).then((res) => {
      console.log(res);
    }).catch((error) =>{
      console.log(error)
    });
  };

  return (
    <div className="App">
      <h1 className='text'>
        Pay with <span>Mpesa</span>
        <form className="container">
          <input

           placeholder="phone" 
           onChange={(e) => setPhone(e.target.value)}
          className="box"/><br />

          <input  
          placeholder="Amount"
          onChange={(e) => setAmount(e.target.value)}
          className="box"/>
          <br />
          <button
           className="pay"
           onClick={payHandler}
           >Pay Now</button>
        </form>
      </h1>
    </div>
  )
}

export default App
