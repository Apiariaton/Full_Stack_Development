import "./JournalForm.css";
import React, {useState, useRef, useEffect} from 'react';


function JournalForm(props){

const current_entry = localStorage.getItem("entry");    
const [currentPageInfo,updateCurrentPageInfo] = useState(current_entry);
const input_box = useRef();

useEffect(()=>{updateCurrentPageInfo(input_box.current.value);},[]);


return (
<div className="background_deco">
{console.log(currentPageInfo)}
<form className="journal_form" onSubmit={(event)=>{let current_time = new Date().toLocaleDateString('en-uk', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
; event.preventDefault(); props.addDiaryEntry(current_time, input_box.current.value,event); updateCurrentPageInfo("")}}>
    <p1 className="jlabel">What's on your mind?</p1>
        <textarea id="jb" className="journal_box" ref={input_box} type="text" value={currentPageInfo} onChange={(event)=>{updateCurrentPageInfo(event.target.value); if (window) localStorage.setItem("entry",event.target.value);}}></textarea>
        <button className="submitJournal"> Submit Journal</button>
        </form>
        </div>
);



};

export default JournalForm;