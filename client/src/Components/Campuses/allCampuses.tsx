import React, { useContext } from 'react';
import { Context } from '../../Context/ContextProvider';
import { Campus } from '../../Context/@types.campuses';

function AllCampuses() {
  const { campuses } = useContext(Context);

  return (
    <div id="campuses">
      {campuses?.map((campus: Campus) => {
        return (
          <div className="campus" key={campus.id}>
            <img
              className="campus-img"
              src={campus.imageUrl}
              alt="Image of Campus"
            />
            <div>{campus.name}</div>
            <div>{campus.address}</div>
            <div>{campus.description}</div>
          </div>
        );
      })}
    </div>
  );
}

export default AllCampuses;
