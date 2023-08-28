function CardNoBs(props) {
   const classes = 'card bg-dark ' + props.className 
  return <div className={classes}>{props.children}</div>;
}

export default CardNoBs;
