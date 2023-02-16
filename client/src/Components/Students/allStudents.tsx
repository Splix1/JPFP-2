import React, { useContext } from 'react';
import { Context } from '../../Context/ContextProvider';
import { Student } from '../../Context/@types.students';

const AllStudents = () => {
  const { students } = useContext(Context);

  return (
    <div>
      {students?.map((student: Student) => {
        return (
          <div className="student" key={student.id}>
            <div style={{ backgroundColor: 'white' }}>{student.firstName}</div>
          </div>
        );
      })}
    </div>
  );
};

export default AllStudents;
