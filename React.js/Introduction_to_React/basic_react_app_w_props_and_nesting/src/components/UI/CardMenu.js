import CardNoBS from "../UI/CardNoBS";


function CardMenu(props){
    return (
        <div id="concepts">
        {(props.concepts).map((item) => 
        <CardNoBS concept={item}></CardNoBS>
        )}
        </div>
    );
}

export default CardMenu;