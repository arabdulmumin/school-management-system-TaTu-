import React from 'react';

const Schedule = ({ schedule }) => {
  return (
    <div>
      <h2>Class Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((row, index) => (
            <tr key={index}>
              <td>{row.time}</td>
              <td>{row.monday}</td>
              <td>{row.tuesday}</td>
              <td>{row.wednesday}</td>
              <td>{row.thursday}</td>
              <td>{row.friday}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;