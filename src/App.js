// App.js
import React from 'react';
import { useState,useEffet } from 'react';
function App() {
  const [user, setUser] = useState({});

  const fetchData = () => {
    fetch("https://ramdomuser.me/api/?resultats=1") 
      .then((response) => response.json())
      .then((data) => setUser(data))
  };

  useEffet(() => {
    fetchData();
  }, []);
  return Object.keys(user).length > 0? (
      <div>
        <h1>Data returned </h1>
        <h2>First Name: {user.results[0].name.first}</h2>
        <h2>Last Name: {user.results[0].name.last}</h2>
      </div>
  ):(
    <h1>Data pending...</h1>
  );
}

export default App;
