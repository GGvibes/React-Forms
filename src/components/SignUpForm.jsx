/* eslint-disable react/prop-types */
import { useState } from "react";

export default function SignUpForm( {setToken} ) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
const validationError = validateForm({ username, password })
if (validationError) {
  setError(validationError)
  return;
}
console.log("Form is valid. Submitting..")

    try {
        const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json", 
            },
            body: JSON.stringify({ username, password }),
          });
      const result = await response.json();
      console.log(result);
      setToken(result.token)
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      
      <h2>Sign Up</h2>
            {error && <p>{error}</p>}
            
      <form onSubmit={handleSubmit}>
                
        <label>
                    Username:           
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
          />
                  
        </label>
                
        <label>
                    Password:           
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
                             
        </label>
                <button>Submit</button>
              
      </form>
          
    </>
  );
}
function validateForm({ username, password }) {
  
  if (!username || username.length < 5 || username.length > 15) {
    return "Username must be between 5 and 15 characters.";
  }

  if (!password || password.length < 8 || password.length > 20) {
    return "Password must be between 8 and 20 characters.";
  }

  return null;
}