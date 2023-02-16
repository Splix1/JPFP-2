import React, { useState, useEffect } from 'react';

const singleStudent = () => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    imageUrl: '',
    gpa: 0,
  });

  return (
    <div id="singleStudent">
      <div>{`${student.firstName} ${student.lastName}`}</div>
      <div>{student.email}</div>
      <img src={student.imageUrl} />
      <div>{student.gpa}</div>
    </div>
  );
};

export default singleStudent;
