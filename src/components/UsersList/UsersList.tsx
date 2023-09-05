import React, { useState, useEffect } from "react";
import IUserData from "../../types/UserData";
import UserService from "../../services/UserService";

const UsersList = () => {
  const [users, setUsers] = useState<Array<IUserData>>([]);
  const UserSvc = new UserService();

  useEffect(() => {
    UserSvc.fetchUsers().then(({ results }) => setUsers(results));
  }, []);

  return (
    <ul>
      {users.map(({ name, location, picture }, i) => (
        <li key={i}>
          <img src={picture.thumbnail} />
          <span>{`${name.title} ${name.first} ${name.last}`}</span>
          <span>{`${location.city}, ${location.state}, ${location.country}`}</span>
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
