import React from 'react';

const Courses = ({ courses }) => {
  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <strong>{course.title}</strong> - {course.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;