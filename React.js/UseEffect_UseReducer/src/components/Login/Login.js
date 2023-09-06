import React, { prevState, useState, useEffect, useReducer } from "react";
import image from "../../assets/static/hourglass.jpg";
import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT")
    return { value: action.value, isValid: action.value.includes("@") };
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

function passwordReducer(state, action) {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.trim().length > 7 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 7 };
  }

  return { value: "", isValid: false };
}

function usernameReducer(state, action) {
  if (action.type == "USER_INPUT") {
    return { value: action.value, isValid: action.value.trim().length > 7 };
  }
  if (action.type == "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 7 };
  }
  return { value: "", isValid: false };
}

const Login = (props) => {
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const [usernameState, dispatchUsername] = useReducer(usernameReducer, {
    value: "",
    isValid: null,
  });

  const [formIsValid, setFormIsValid] = useState(false);

  /*
  const [timer, setTimerContent] = useState("Timer is on...");
  const [secondsLeft, setSecondsLeft] = useState(0);
*/
  /*useEffect(() => {
    console.log("EFFECT RUNNING...");
  }, [emailState]);
  */

  /*  
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("CHECKING FORM VALIDITY");
      /*setTimerContent(
        <React.Fragment>
          <img src={image}></img>
          <div>Timer is on</div>
        </React.Fragment>
      );
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);
\d

    return () => {
      setTimerContent(<div>Timer is off</div>);
      console.log("CLEAN UP");
      clearTimeout(identifier);
    };
  }, [emailState, passwordState]);
*/
  /*
  useEffect(() => {
    if (secondsLeft < 60)
    {
    setTimeout(() => {
      setSecondsLeft(
      (prevState) => (parseInt(prevState) + 1)  
      );
    }, 1000);
}}),[secondsLeft];
*/

  /*
  useEffect(() => {
    const timertowaitbcv = setTimeout(() => {
      console.log("Checking Username validity...");
      setUsernameIsValid(enteredUsername.trim().length > 3);
    }, 300);

    return () => {
      console.log("Clearing the timer which was set...");
      clearTimeout(timertowaitbcv);
    };
  }, [enteredUsername]);

  */

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;
  const { isValid: usernameIsValid } = usernameState;

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Checking form validity...");
      setFormIsValid(emailIsValid && passwordIsValid && usernameIsValid);
    }, 500);

    return () => {
      console.log("Clearing timeout");
      clearTimeout(timer);
    };
  }, [emailIsValid, passwordIsValid, usernameIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", value: event.target.value });
  };

  const usernameChangeHandler = (event) => {
    dispatchUsername({ type: "USER_INPUT", value: event.target.value });
  };

  const validateEmailHandler = (emailState) => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = (passwordState) => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const validateUsernameHandler = (usernameState) => {
    dispatchUsername({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value, usernameState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        {/*timer*/}
        <div>{/*secondsLeft*/}</div>
        <div
          className={`${classes.control} ${
            usernameState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="username">Username</label>
          <input
            type="username"
            id="username"
            value={usernameState.value}
            onChange={usernameChangeHandler}
            onBlur={validateUsernameHandler}
          />
        </div>

        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
