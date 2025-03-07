type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
};

const UsersServer = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await response.json();

  return (
    <ul className="space-y-4 p-4">
      {users.map((user) => (
        <li key={user.id} className="p-4 bg-white shadown-mg rounded-lg text-gray-700">
          <div className="font-bold">{user.name}</div>
          <div className="text-sm">
            <div>Username: {user.username}</div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UsersServer;
