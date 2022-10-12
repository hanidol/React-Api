import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserList = ({
  id,
  email,
  name,
  username,
  address,
  phone,
  website,
  company,
  oneDelete,
  lists,
  onUpdateList,
}) => {
  return (
    <div className="card">
      {lists.map((list) => (
        <div className="container">
          <div className="row title">
            <div className="col-sm"> Name </div>
            <div className="col-sm"> Username </div>
            <div className="col-sm"> Email </div>
          </div>
          <div className="row ">
            <div className="col-sm"> {list.name} </div>
            <div className="col-sm"> {list.username} </div>
            <div className="col-sm"> {list.email} </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
