'use client';
import { useState, useEffect } from 'react';
type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
};

const UsersClient = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Failed to fetch users');
        }
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
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

export default UsersClient;
