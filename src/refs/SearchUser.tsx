import { useState, useRef, useEffect } from 'react';

const SearchUser: React.FC = () => {
  const users = [
    { name: 'Sarah', age: 27 },
    { name: 'Jhon', age: 20 },
    { name: 'Raihan', age: 23 },
  ];

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((data) => {
      return data.name === name;
    });

    setUser(foundUser);
  };

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Search Users</h2>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default SearchUser;
