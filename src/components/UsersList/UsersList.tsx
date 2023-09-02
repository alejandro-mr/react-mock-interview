import React, { useState, useEffect } from "react";

const SERVICE_URL = "https://randomuser.me/api?results=40";

type UserData = {
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
  picture: {
    thumbnail: string;
  };
};

const UsersList = () => {
  const [users, setUsers] = useState<Array<UserData>>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(SERVICE_URL);
      return response.json();
    };

    fetchUsers().then(({ results }) => setUsers(results));
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
