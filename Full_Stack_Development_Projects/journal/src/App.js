import './App.css';
import Header from './components/Header';
import JournalForm from './components/JournalForm';
import Entries from "./components/Entries";
import React, {useState, useEffect} from 'react';



function App() {


const [diaryEntries, setDiaryEntries] = useState([]);

let diary_entries = [];

async function fetchDiaryEntries(){
    //Add Firebase Realtime Database URL with /entries.json
    const response = await fetch("",
    {method:'GET',
     body: JSON.stringify(),
     headers: {'Content-Type' : 'application/json'},
    }
    );
    
    
    const JSON_entry = await response.json();

    console.log(JSON_entry);

    const transformedEntries = [];

    for (const key in JSON_entry)
    {
      console.log(key);
      transformedEntries.push(
        {
            day: JSON_entry[key].date ,          
            information: JSON_entry[key].info
        }
      );
    }
    diary_entries = transformedEntries;

    console.log(transformedEntries);

    setDiaryEntries(transformedEntries);

}   

async function addDiaryEntry(date, info)
{
    console.log(date,info);

  
    const body_message = JSON.stringify({date,info});

    console.log("This is the body_message: ");
    console.log(body_message);
    //Add Firebase Realtime Database URL with /entries.json
    const response = await fetch("",
    {
      method:'POST',
      body: JSON.stringify({
        date,
        info
      }) 
    }
    );
    if (response.ok)
    {
      fetchDiaryEntries();
      return true;
    }
    else 
    {
      return false;
    }
}
 
useEffect(()=>{fetchDiaryEntries()},[]);
  
  return (
    <div className="App">
      <Header>
      </Header>
      <JournalForm addDiaryEntry={addDiaryEntry}></JournalForm>
      <Entries entries={diaryEntries}></Entries>
    </div>
  );
}

export default App;
