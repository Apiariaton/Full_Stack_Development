import "./Entries.css";
import React, {useMemo} from 'react';

function Entries(props)
{
    const diary_pages = useMemo(()=> { return props.entries.map((entry)=>{
        console.log(entry);
        return (
                <tr key={entry.day} className="daily e">
            <td>{entry.day}</td>
            <td>{entry.information}</td>
            </tr>);
    })},[props.entries]);


   return <div>
    <div className="wrapper"> <div>
        <table className="daily_e">
        <thead>
            <tr>
        <td>Day</td> 
        <td>Entry</td> 
            </tr>   
            </thead>
            <tbody>{diary_pages}</tbody></table>  
    </div></div></div>


};

export default Entries;