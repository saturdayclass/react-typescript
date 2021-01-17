import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  return (
    <div>
      <h3>Guest List</h3>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default GuestList;
