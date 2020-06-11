import React from "react";

import "./auth.css";
import InputField from "../../Forms/Components/inputs";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL
} from "../../shared/util/validators";

const Auth = props => {
  return (
    <div className="auth-main container">
      <div className="col">
        <div className="row m6 s12">
          <form action="" className="loginPage">
            {/* <InputField
              id="email"
              type="email"
              element="input"
              icon="account_circle"
              lable="Email"
              lenths="m7 s12"
              errorText="Enter a name"
              validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
              // onInput={}
            /> */}
          </form>
        </div>
        <div className="row m6 s12"></div>
      </div>
    </div>
  );
};

export default Auth;
