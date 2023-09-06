import IUserData from '../../types/UserData';

type Props = {
  user: IUserData;
};

const UserCard = ({ user }: Props) => {
  return (
    <div>
      <img src={user.picture.medium} />
      <p>{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
      <p>{`${user.location.city}, ${user.location.state}, ${user.location.country}`}</p>
      <p>{user.email}</p>
      <p>{user.phone}</p>
    </div>
  );
};

export default UserCard;
