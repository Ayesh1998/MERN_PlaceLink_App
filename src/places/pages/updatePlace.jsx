import React from "react";
import { useParams } from "react-router-dom";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from "../../shared/util/validators";
import InputField from "../../Forms/Components/inputs";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: "u2"
  }
];

const UpdatePlace = props => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  if (!identifiedPlace) {
    return <h2 className="red-text">Could not find place</h2>;
  }
  return (
    <div className="updatePlace container">
      <form action="" className="update-place">
        <InputField
          id="name"
          type="text"
          element="input"
          icon="account_circle"
          lable="Title"
          lenths="m7 s12"
          errorText="Enter a title"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={() => {}}
          value={identifiedPlace.title}
          valid={true}
        />

        <InputField
          id="description"
          lenths="m7 s12"
          type="textArea"
          element="textArea"
          icon="description"
          lable="Description"
          errorText="Enter a valid description(at least 5 characters)"
          validators={[VALIDATOR_MINLENGTH(5)]}
          onInput={() => {}}
          value={identifiedPlace.description}
          valid={true}
        />

        <InputField
          id="address"
          lenths="m7 s12"
          type="text"
          element="input"
          icon="address"
          lable="Address"
          errorText="Enter a valid address"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={() => {}}
          value={identifiedPlace.address}
          valid={true}
        />

        <button
          className={`form-submit-btn-new-place btn waves-effect waves-light col m3 `}
        >
          Update Place
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

export default UpdatePlace;
