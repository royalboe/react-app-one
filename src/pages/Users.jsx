import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((users) => setUsers(users));
  //   }, []);

  const fetchPosts = async () => {
    let users = await fetch("https://jsonplaceholder.typicode.com/users");
    users = await users.json();
    setUsers(users);
  };
  useEffect(() => {
    fetchPosts();
  }, [users]); // useEffect second parameter is used to track changes in state and rerun

  return (
    <div>
      <h1>These are my users</h1>
      <table>
        <thead>
          <tr>
            <td>User Id</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email Address</td>
            <td>Address</td>
            <td>Phone</td>
            <td>Website</td>
            <td>Company Name</td>
            <td>Company CatchPhrase</td>
            <td>Company BS</td>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{`${user.address.suite} ${user.address.street} ${user.address.city}`}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>{user.company.name}</td>
                  <td>{user.company.catchPhrase}</td>
                  <td>{user.company.bs}</td>
                </tr>
              );
            })}
          ;
        </tbody>
      </table>
    </div>
  );
};;

export default Users;
