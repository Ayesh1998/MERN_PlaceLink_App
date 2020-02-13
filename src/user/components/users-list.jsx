import React from "react";
import "./users-list.styles.css";
import UserItem from "./user-item";

const UsersList = props => {
  const { items } = props;

  if (items.length === 0) {
    return (
      <div className="users-list-non">
        <h2 className="red-text">No users found</h2>
      </div>
    );
  } else {
    return (
      <div className="users-list">
        <div className="row">
          {items.map(({ id, name, image, places }) => {
            return (
              <UserItem
                key={id}
                name={name}
                image={image}
                places={places}
                id={id}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default UsersList;
