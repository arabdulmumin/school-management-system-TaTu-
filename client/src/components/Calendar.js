import React from 'react';

const Calendar = ({ month, year }) => {
  
  const currentDate = new Date();
  const currentMonth = month || currentDate.getMonth() + 1;
  const currentYear = year || currentDate.getFullYear();

  
  const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();

  
  const daysArray = Array.from({ length: daysInMonth }, (_, index) => index + 1);

  return (
    <div>
      <h2>{currentMonth}/{currentYear} Calendar</h2>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {daysArray.map(day => (
            <tr key={day}>
              <td>{day}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;