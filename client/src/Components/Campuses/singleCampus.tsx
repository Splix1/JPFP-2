import React, { useState, useEffect } from 'react';

const singleCampus = () => {
  const [campus, setCampus] = useState({
    name: '',
    imageUrl: '',
    address: '',
    description: '',
  });

  return (
    <div id="singleCampus">
      <div>{campus.name}</div>
      <img src={campus.imageUrl} />
      <div>{campus.address}</div>
      <div>{campus.description}</div>
    </div>
  );
};

export default singleCampus;
