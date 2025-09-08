import React, { useState } from 'react';
import axios from 'axios';

function LoanRequest() {
  const [accountId, setAccountId] = useState('');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);

  const handleLoan = async () => {
    const res = await axios.post('https://simple-bank-back.onrender.com/loan', {
      accountId: Number(accountId),
      amount: Number(amount),
    });
    setResult(res.data);
  };

  return (
    <div style={{ margin: '24px 0' }}>
      <h2>Request Loan</h2>
      <input
        placeholder="Account ID"
        value={accountId}
        onChange={e => setAccountId(e.target.value)}
        style={{ marginRight: '8px' }}
      />
      <input
        placeholder="Loan Amount"
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        style={{ marginRight: '8px' }}
      />
      <button onClick={handleLoan}>Request Loan</button>
      {result && (
        <div style={{ marginTop: '16px', color: result.success ? 'green' : 'red' }}>
          {result.success
            ? `Loan granted! Amount: ${result.loan.amount}`
            : result.message}
        </div>
      )}
    </div>
  );
}

export default LoanRequest;