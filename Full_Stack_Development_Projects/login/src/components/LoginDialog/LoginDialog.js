import React, { useState, prevState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import "./LoginDialog.css";
import "../../bootstrap.css";

function LoginDialog(props) {
  const [inputError, setInputError] = useState(1);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
  });

  function submitHandler(event) {
    event.preventDefault();
    if (
      userInput.name == "" ||
      userInput.age == "" ||
      parseInt(userInput.age) <= 0
    ) {
      setInputError(0);
      handleOpen();
    } else {
      setInputError(1);
      props.adduser(userInput);
    }
  }

  function userInputHandler(attributeName, event) {
    setUserInput((prevState) => ({
      ...prevState,
      [attributeName]: event.target.value,
    }));
  }

  return (
    <div className="logindialog d-flex rounded-top d-flex">
      <div className="logindialog__banner rounded-top"></div>
      <div className="logindialog__form_holder">
        <form className="logindialog__form" onSubmit={submitHandler}>
          <div className="input-group input-group-sm mt-2">
            <div className="input-group-prepend">
              <span
                className="input-group-text bg-success text-white"
                id="basic-addon1"
              >
                Name
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              aria-label="Name"
              aria-describedby="basic-addon1"
              onChange={(event) => {
                userInputHandler("name", event);
              }}
            />
          </div>
          <div></div>

          <div className="input-group mb-3 mt-4">
            <div className="input-group-prepend">
              <span
                className="input-group-text bg-success text-white"
                id="basic-addon1"
              >
                Age
              </span>
            </div>
            <input
              type="number"
              className="form-control"
              placeholder="Age"
              aria-label="Age"
              aria-describedby="basic-addon1"
              onChange={(event) => {
                userInputHandler("age", event);
              }}
            />
          </div>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle className="bg-warning">Error</DialogTitle>
            <DialogContent className="p-5">
              <p>Please enter a valid name and age.</p>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
          <div className="d-flex justify-content-end bg-transparent">
            <button className="btn bg-warning" id="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginDialog;
