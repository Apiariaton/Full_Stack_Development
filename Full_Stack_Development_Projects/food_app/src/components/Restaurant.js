import React, {useState} from 'react';
import BackgroundBanner from './UI/BackgroundBanner';
import OrderPanel from './UI/OrderPanel';
import Navigation from "./UI/Navigation";
import DialogueWindow from "./Item/DialogueWindow";

function Restaurant(props)
{

const [dialogueWindowVisible,showDialogueWindow] = useState(false);   

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


let dialogue_window = <DialogueWindow closeDialogueWindow={closeDialogueWindow}/>;
if (dialogueWindowVisible == false)
{
    dialogue_window = "";
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