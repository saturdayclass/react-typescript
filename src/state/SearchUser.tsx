import { useState } from 'react';

const userList = [
  { name: 'Sarah', age: 27 },
  { name: 'Jhon', age: 20 },
  { name: 'Raihan', age: 23 },
];

const SearchUser: React.FC = () => {
  const [name, setName] = useState('');

  const onClick = () => {};

  return (
    <div>
      <h2>Search Users</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
    </div>
  );
};

export default SearchUser;
