import React, { useCallback, useReducer } from "react";
import InputField from "../../Forms/Components/inputs";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../shared/util/validators";

import "./newPlace.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const NewPlace = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {},
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <div className="new-place container">
      <form action="" className="new-place" onSubmit={formSubmitHandler}>
        <div className="row">
          <InputField
            id="name"
            type="text"
            element="input"
            icon="account_circle"
            lable="Title"
            lenths="m7 s12"
            errorText="Enter a title"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
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
            onInput={inputHandler}
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
            onInput={inputHandler}
          />
        </div>
        <button
          className={`form-submit-btn-new-place btn waves-effect waves-light col m3 ${
            !formState.isValid && "disabled"
          }`}
        >
          Add Place
          <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  );
};

export default NewPlace;
