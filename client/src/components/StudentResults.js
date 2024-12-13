import React from 'react';
import Results from './Results'; // Import the Results component

const StudentResults = () => {
  const studentName = "John Doe";
  const programOfStudy = "Web Development";
  const courses = [
    { id: 1, title: "C#", grade: "A" },
    { id: 2, title: "Computer Science Fundamentals", grade: "B+" },
    { id: 3, title: "Data Structures", grade: "A-" }
  ];

  return (
    <div>
      <h1>Student Results</h1>
      <Results studentName={studentName} programOfStudy={programOfStudy} courses={courses} />
    </div>
  );
};

export default StudentResults;