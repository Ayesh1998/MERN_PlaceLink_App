import React from "react";
import { Link } from "react-router-dom";

import "./place-list.css";
import PlaceItem from "./place-item";

const PlaceList = props => {
  if (props.items.length === 0) {
    return (
      <div className="red-text empty-place">
        <h3>Ther's no any place to show.</h3>
        <br />
        <Link to="/places" className="waves-effect waves-light btn ">
          Share a place
        </Link>
      </div>
    );
  } else {
    return (
      <div className="userPlacesMain">
        {props.items.map(item => (
          <PlaceItem
            key="{item.id}"
            id={item.id}
            image={item.imageUrl}
            title={item.title}
            address={item.address}
            descriptions={item.description}
            creator={item.creatorId}
            cordinates={item.cordinates}
          />
        ))}
      </div>
    );
  }
};

export default PlaceList;
