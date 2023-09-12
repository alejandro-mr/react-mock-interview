import React, { useState, useEffect } from 'react';
import IUserData from '../../types/UserData';
import UserService from '../../services/UserService';
import UserCard from '../UserCard';

const UsersList = () => {
  const [users, setUsers] = useState<Array<IUserData>>([]);
  const [toggle, setToggle] = useState<number | null>(null);

  const UserSvc = new UserService();

  const toggleCard = (i: number) => {
    if ((toggle && toggle < 0) || toggle != i) {
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
    <ul className="grid gri-cols-1">
      {users.map((user, i) => (
        <div key={i}>
          <li
            onClick={() => toggleCard(i)}
            className="border-b border-dotted border-slate-400 p-2 grid grid-cols-10 gap-1 bg-slate-200"
          >
            <img src={user.picture.thumbnail} />
            <div className="col-span-9 grid">
              <span>{`${user.name.title} ${user.name.first} ${user.name.last}`}</span>
              <span>{`${user.location.city}, ${user.location.state}, ${user.location.country}`}</span>
            </div>
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
