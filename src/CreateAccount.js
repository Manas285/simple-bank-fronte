import React, { useState } from 'react';
import axios from 'axios';

function CreateAccount() {
  const [name, setName] = useState('');
  const [account, setAccount] = useState(null);

  const handleCreate = async () => {
    const res = await axios.post('http://localhost:3001/accounts', { name });
    setAccount(res.data.account);
  };

  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleCreate}>Create Account</button>
      {account && <div>Account Created: {account.name} (ID: {account.id})</div>}
    </div>
  );
}

export default CreateAccount;