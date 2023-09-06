import React, { useState, useEffect } from 'react';
import IUserData from '../../types/UserData';
import UserService from '../../services/UserService';
import UserCard from '../UserCard';

const UsersList = () => {
  const [users, setUsers] = useState<Array<IUserData>>([]);
  const [toggle, setToggle] = useState<number | null>(null);

  const UserSvc = new UserService();

  const toggleCard = (i: number) => {
    if (!toggle || toggle != i) {
      setToggle(i);
    } else {
      setToggle(null);
    }
  };

  const deleteUser = (id: number) => {
    setUsers([...users.slice(0, id), ...users.slice(id + 1)]);
  };

  useEffect(() => {
    UserSvc.fetchUsers().then(({ results }) => setUsers(results));
  }, []);

  return (
    <ul>
      {users.map((user, i) => (
        <div key={i}>
          <li onClick={() => toggleCard(i)}>
            <img src={user.picture.thumbnail} />
            <span>{`${user.name.title} ${user.name.first} ${user.name.last}`}</span>
            <span>{`${user.location.city}, ${user.location.state}, ${user.location.country}`}</span>
          </li>
          {toggle === i && (
            <UserCard user={user} deleteHandle={() => deleteUser(i)} />
          )}
        </div>
      ))}
    </ul>
  );
};

export default UsersList;
