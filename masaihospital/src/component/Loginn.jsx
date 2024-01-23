import React, { useState } from "react";

const Loginn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };
    console.log(formData);
    try {
      const response = await fetch("https://joyous-rose-sheath-dress.cyclic.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json(); 
        const { token } = data; 
        console.log("Login successful!");
        console.log("Token:", token);
        localStorage.setItem("token", token)
      } else {
        console.error("Login failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{display: "grid", width:"20%", margin: "auto" , paddingTop: "60px"}}>
          <input
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
         
          <input type="submit" value="login" style={{color: "white", backgroundColor: "red"}} />
        </div>
      </form>
    </div>
  );
};
export default Loginn;