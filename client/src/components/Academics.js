import React from 'react';
import Admission from './Admission'
import Course_registration from './Course_registration';
import Courses from './Courses'
import Schedule from './Schedule'
import Thesis from './Thesis';
import StudentResults from './StudentResults'
import RulesAndRegulations from './RulesAndRegulations'
const Academics = () => {
 return (
 <div>
 <h1>ACADEMICS</h1>
 <Admission/>
 <Course_registration/>
 <Courses/>
 <Schedule/>
 <Thesis/>
 <StudentResults/>
 <RulesAndRegulations/>
 </div>
 );
};

export default Academics;