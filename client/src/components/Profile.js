import React from 'react';

const Profile = ({ student }) => {
  const { name, age, grade, subjects } = student;

  return (
    <div>
      <h2>Student Profile</h2>
      <p><strong>Name: John Doe</strong> {name}</p>
      <p><strong>Age: 24</strong> {age}</p>
      <p><strong>Grade: A</strong> {grade}</p>
      <p><strong>Programme: Web Development</strong></p>
      <ul>
      subjects={["Math", "Science", "History", "English"]}
        {subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;