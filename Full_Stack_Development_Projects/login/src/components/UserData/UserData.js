import React,{ useState } from "react";
import "../../bootstrap.css";

function UserData(props) {
  {
    return (<div className="dividerTwo w-75 container">{props.current_users.map((userdatapoint) => {
      return (
        <div className="bg-primary p-5 mt-5 rounded d-flex justify-content-between" key={userdatapoint.id} onClick={(event)=>{props.removeuser(event,userdatapoint.id)}}>
          <div className="">Name: {userdatapoint.name}</div> <div className="">Age: {userdatapoint.age}</div>
        </div>
      );
        })
    }
    </div>);
}
}

export default UserData;
