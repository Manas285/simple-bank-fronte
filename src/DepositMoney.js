import React, { useState } from 'react';
import axios from 'axios';

function DepositMoney() {
  const [accountId, setAccountId] = useState('');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);

  const handleDeposit = async () => {
    const res = await axios.post('http://localhost:3001/deposit', {
      accountId: Number(accountId),
      amount: Number(amount),
    });
    setResult(res.data);
  };

  return (
    <div style={{ margin: '24px 0' }}>
      <h2>Deposit Money</h2>
      <input
        placeholder="Account ID"
        value={accountId}
        onChange={e => setAccountId(e.target.value)}
        style={{ marginRight: '8px' }}
      />
      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        style={{ marginRight: '8px' }}
      />
      <button onClick={handleDeposit}>Deposit</button>
      {result && (
        <div style={{ marginTop: '16px', color: result.success ? 'green' : 'red' }}>
          {result.success
            ? `Deposit successful! New Balance: ${result.account.balance}`
            : result.message}
        </div>
      )}
    </div>
  );
}

export default DepositMoney;