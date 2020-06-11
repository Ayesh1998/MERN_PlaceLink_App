import React, { useReducer, useEffect } from "react";
import { validate } from "../../shared/util/validators";

import "./inputs.css";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };

    case "TOUCH":
      return {
        ...state,
        isTouch: true,
      };

    default:
      return state;
  }
};

const InputField = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    isTouch: false,
  });

  useEffect(() => {
    props.onInput(props.id, inputState.value, inputState.isValid);
  }, [props.id, props.value, inputState.isValid, props.onInput]);

  const changeHandler = (e) => {
    console.log(e.target.value);
    dispatch({
      type: "CHANGE",
      val: e.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const inputField =
    props.element === "input" ? (
      <input
        class="validate"
        type={props.type}
        id={props.id}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        className="materialize-textarea"
        id={props.id}
        onBlur={touchHandler}
        rows={props.rows || 3}
        onChange={changeHandler}
      />
    );

  return (
    <div
      className={`inputss input-field col ${props.lenths} ${
        !inputState.isValid && inputState.isTouch && "form-invalid"
      }`}
    >
      <i class="material-icons prefix"> {props.icon} </i>
      <label htmlFor={props.id}> {props.lable} </label>
      {inputField}
      {!inputState.isValid && inputState.isTouch && (
        <p className="red-text errormg">{props.errorText}</p>
      )}
    </div>
  );
};

export default InputField;
