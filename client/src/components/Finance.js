import React from 'react';

const Finance = ({ studentId }) => {
  const tuitionFees = 5000;
  const payments = [2000, 1500, 1000];
  const totalPaid = payments.reduce((total, amount) => total + amount, 0);
  const balance = tuitionFees - totalPaid;

  return (
    <div>
      <h2>Financial Information for Student {studentId}</h2>
      <p>Tuition Fees: ${tuitionFees}</p>
      <p>Payments:</p>
      <ul>
        {payments.map((payment, index) => (
          <li key={index}>Payment {index + 1}: ${payment}</li>
        ))}
      </ul>
      <p>Total Paid: ${totalPaid}</p>
      <p>Outstanding Balance: ${balance}</p>
    </div>
  );
};

export default Finance;