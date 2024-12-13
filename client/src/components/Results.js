import React from 'react';

const Results = ({ studentName, programOfStudy, Courses }) => {
  return (
    <div>
      <h2>Academic Results for {'John Doe'}</h2>
      <p>Program of Study: {'Web Development'}</p>
      <h3>Courses</h3>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <strong>{course.title}</strong> - Grade: {course.grade}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;