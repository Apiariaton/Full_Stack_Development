import React, {useState} from 'react';
import BackgroundBanner from './UI/BackgroundBanner';
import OrderPanel from './UI/OrderPanel';
import Navigation from "./UI/Navigation";
import DialogueWindow from "./Item/DialogueWindow";
import PayDialogue from "./PayDialogueWindow/PayDialogue";

function Restaurant(props)
{

const [dialogueWindowVisible,showDialogueWindow] = useState(false);   
const [payWindowVisible,setPayWindowVisible] = useState(false);

function toggleDialogueWindow()
{
    if (dialogueWindowVisible === true)
    {showDialogueWindow(false);}
    else
    {showDialogueWindow(true);}
}

function closeDialogueWindow()
{
    showDialogueWindow(false);
}

function showPayDialogue()
{
    setPayWindowVisible(true);
    showDialogueWindow(false);
};


function closeAllDialogues()
{
    setPayWindowVisible(false);
    showDialogueWindow(false);
}

function backDialogue()
{
    setPayWindowVisible(false);
    showDialogueWindow(true);
}


let dialogue_window = <DialogueWindow showPayDialogue={showPayDialogue} closeDialogueWindow={closeDialogueWindow}/>;
if (dialogueWindowVisible == false && payWindowVisible == false)
{
    dialogue_window = "";
}
else if (dialogueWindowVisible == false && payWindowVisible == true)
{
    dialogue_window = <PayDialogue backDialogue={backDialogue} closeAllDialogues={closeAllDialogues}/>;
}



return (
    <React.Fragment> {/* Replace with AuthProvider */}
        {dialogue_window}
        <BackgroundBanner>
            <Navigation toggleDialogueWindow={toggleDialogueWindow}></Navigation>
        </BackgroundBanner>
        
        <OrderPanel>

        </OrderPanel>
        
    </React.Fragment>
    )
};


export default Restaurant;