import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const loadUsers = async () => {
    const response = await fetch(" https://reqres.in/api/users?page=1");
    const jsonResponse = await response.json();
    setUsers(jsonResponse.data);
  };
  const [userData, setUsers] = useState([]);

  return (
    <div className="App">
      <div id="firstlayer">
        <h3> Task 2</h3>
        <button onClick={loadUsers}> User ID</button>
      </div>
      <div id="usergrid">
        {userData.map((data) => (
          <div id="secondlayer">
            <img src={data.avatar} alt="img" />
            <h2>
              {" "}
              {data.first_name} {data.last_name}{" "}
            </h2>
            <h4>{data.email}</h4>
          </div>
        ))}
        ;
      </div>
    </div>
  );
}
