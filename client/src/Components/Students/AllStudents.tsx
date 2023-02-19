import React, { useContext } from 'react';
import { Context } from '../../Context/ContextProvider';
import { Student } from '../../Context/@types.students';
import { useLocation } from 'react-router-dom';
import NewStudent from './NewStudent';

const AllStudents = () => {
  const { students } = useContext(Context);
  const location = useLocation();

  return (
    <div id="students">
      <NewStudent />
      {students?.map((student: Student) => {
        return (
          <div className="student" key={student.id}>
            <img src={student.imageUrl} alt="student-img" />
            <div>{student.firstName}</div>
            <div>{student.lastName}</div>
            <div>{student.email}</div>
            <div>{student.gpa}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AllStudents;
