import React, { useState } from 'react';

const Course_registration = () => {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleCourseSelection = (course) => {
    if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter(selectedCourse => selectedCourse !== course));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const availableCourses = ['c#', 'php', 'c++', 'java'];

  return (
    <div>
      <h2>Course Registration</h2>
      <p>Select the courses you want to register for:</p>
      <ul>
        {availableCourses.map(course => (
          <li key={course}>
            <label>
              <input
                type="checkbox"
                checked={selectedCourses.includes(course)}
                onChange={() => handleCourseSelection(course)}
              />
              {course}
            </label>
          </li>
        ))}
      </ul>
      <p>Selected Courses: {selectedCourses.join(', ')}</p>
    </div>
  );
};

export default Course_registration;