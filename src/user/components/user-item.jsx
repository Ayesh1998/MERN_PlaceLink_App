import React from "react";
import "./user-item.css";
import { Link } from "react-router-dom";

const UserItem = props => {
  const { name, image, places } = props;

  return (
    <div className="user-item col m3 s6">
      <Link to={`/${props.id}/places`}>
        <div id="user-itemm" className="card small">
          <div class="card-image">
            <img src={`${image}`} />
          </div>
          <div class="card-content">
            <span class="card-title">{name}</span>
            <div className="name">
              {places}
              {places == 1 ? " place" : " places"}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserItem;
