import React, { useState } from "react";
import '../UI/bootstrap.css';

function ExpensesSent() {
  const [SentStatus, setSentStatus] = useState(false);

  function clickHandler() {
    setSentStatus(true);
  }

  return (
    <div className="card bg-dark border d-flex justify-content-center">
      <button
        onClick={clickHandler}
        className={
          SentStatus
            ? "btn text-successful"
            : "btn text-white bg-danger"
        }
        disabled={SentStatus}
      >
        {SentStatus === false ? "Send Expenses" : "Expenses Sent"}
      </button>
    </div>
  );
}
export default ExpensesSent;
