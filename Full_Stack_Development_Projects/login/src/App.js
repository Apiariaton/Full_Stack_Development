import logo from './logo.svg';
import React, {useState,prevState} from 'react';
import './App.css';

import LoginDialog from './components/LoginDialog/LoginDialog';
import UserData from './components/UserData/UserData';

function App() {

const [identityNumber,setIdentityNumber] = useState(0);

const userdata = [
  {
    id:0,
    name: "Max",
    age: 34
  }
];

const [userData,setUserData] = useState(userdata);





function updateUserData(user_object)
{
  setIdentityNumber((prevState)=>(prevState + 1));
  let new_object = {id: identityNumber,
    name: user_object.name, 
    age: user_object.age};

  setUserData((prevState)=> {
    const newdata = [...prevState];
     newdata.unshift(new_object);
  return newdata}
  );}

function removeUserData(event,datapoint_id)
{
 //Pop the index of the object via setUserData   
setUserData((prevState)=>(prevState.filter(item => item.id !== datapoint_id)));
}

  return (
    <div>
      <div className="dividerOne">
        <LoginDialog adduser={updateUserData}/>
      </div>
      <div>
        <UserData current_users={userData} removeuser={removeUserData}/>
      </div>
    </div>
  );
}

export default App;
