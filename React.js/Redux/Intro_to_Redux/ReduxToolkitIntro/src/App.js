import logo from './logo.svg';
import './App.css';
import {nameActions} from "./store/index";
import {useSelector,useDispatch} from 'react-redux';

function App() {
  const stateValue = useSelector(state=>state.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p2>This is the State value:</p2>
        <p3>{stateValue}</p3>
      </header>
      <button onClick={()=>{dispatch(nameActions.capitalise())}}>UPPERCASE</button>
      <button onClick={()=>{dispatch(nameActions.lowercase())}}>lowercase</button>
      <button onClick={()=>{dispatch(nameActions.neenaw())}}>NeeNaw</button>
      <button onClick={()=>{dispatch(nameActions.randomString("Jab"))}}>Random String</button>
    </div>
  );
}

export default App;
