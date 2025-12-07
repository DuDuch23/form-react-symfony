import { useState } from 'react'
import API_BASE_URL from "./services/api.js";
import './App.css'

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('form');
    const form = new FormData();
    form.append('email', email);
    form.append('password', password);

    try{
      const response = await fetch(`${API_BASE_URL}/api/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password
        }),
      })

      if(response){
        console.log(response);
        console.log('connexion avec token')
      }else{
        console.log('pas de token')
        
      }
    }catch (error){
      console.error('Error during form submission:', error);
    }
  };

  return (
    <>
      <div className='form-connexion'>
        <form onSubmit={handleSubmit}>
          <div className="container-email">
            <label htmlFor="email">E-mail</label>
            <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="container-password">
            <label htmlFor="password">Mot de passe</label>
            <input type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type="submit" />
        </form>
      </div>  
    </>
  )
}

export default App
