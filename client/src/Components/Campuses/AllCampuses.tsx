import React, { useContext } from 'react';
import { Context } from '../../Context/ContextProvider';
import { Campus } from '../../Context/@types.campuses';
import NewCampus from './NewCampus';
import '../../App.css';

function AllCampuses() {
  const { campuses, context, setContext } = useContext(Context);

  function deleteCampus(id: number) {
    const deleteCampus = `/api/campuses/${id}`;
    import('axios')
      .then((axios) => axios.default.delete(deleteCampus))
      .then((response) =>
        setContext({
          ...context,
          campuses: campuses.filter((campus) => campus.id !== id),
        })
      );
  }

  return (
    <div id="campuses">
      <NewCampus />
      {campuses?.map((campus: Campus) => {
        return (
          <div key={campus.id}>
            <img
              className="campus-img"
              src={campus.imageUrl}
              alt="Image of Campus"
            />
            <div>{campus.name}</div>
            <div>{campus.address}</div>
            <div>{campus.description}</div>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default AllCampuses;
