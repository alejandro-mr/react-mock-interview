import IUserData from '../../types/UserData';

type Props = {
  user: IUserData;
  deleteHandle: any;
};

const UserCard = ({ user, deleteHandle }: Props) => {
  return (
    <div className="grid p-2 bg-slate-900 text-slate-200">
      <div>
        <img src={user.picture.medium} className="mb-2" />
        <p>{`${user.name.title} ${user.name.first} ${user.name.last}`}</p>
        <p>{`${user.location.city}, ${user.location.state}, ${user.location.country}`}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
      </div>
      <button onClick={deleteHandle} className="bg-red-800">
        Delete
      </button>
    </div>
  );
};

export default UserCard;
